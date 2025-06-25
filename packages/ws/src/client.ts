import EventEmitter from "events";
import WebSocket from "ws";
import { DEFAULT_CHUNK_SIZE, MAX_FILE_SIZE, NETWORK_UNREACHABLE_CODE, SOCKET_ABNORMAL_CLOSURE, SOCKET_UNAUTHORIZED_CODE } from "./constants";
import { BufferOverflowError, NetworkUnreachableError, UnauthorizedError } from "./errors";
import { type OnProgressCallback, type ProgressData, type SocketEventsMap, type SocketOptions } from "./types";

export class SocketClient<Data extends Record<any, any> | any[] = Record<any, any> | any[]>
  extends EventEmitter<SocketEventsMap<Data>>
  implements Disposable {
  constructor(protected wsURL: URL, options?: SocketOptions) {
    super({ captureRejections: true });

    if (options) {
      if (typeof options.chunkSize === "number")
        this._chunkSize = options.chunkSize;

      if (options.connectingTimeout !== undefined)
        this._connectingTimeout = options.connectingTimeout;

      if (typeof options.disposeOnClose === "boolean")
        this._disposeOnClose = options.disposeOnClose;

      if (options.headers) Object.assign(this._headers, options.headers);
    }
  }

  protected _chunkSize: number = DEFAULT_CHUNK_SIZE;
  declare protected _connected: boolean;
  protected readonly _connectingTimeout: number | null = 10_000;
  protected readonly _disposeOnClose: boolean = true;
  protected readonly _headers: Record<string, string> = {};
  declare protected _lastError?: any;
  declare protected _socket?: WebSocket;
  declare protected _ping: number;
  declare protected _pong: number;
  declare ping: number;

  get closed() { return !this._socket || this._socket.readyState === this._socket.CLOSED; }
  get closing() { return this._socket ? this._socket.readyState === this._socket.CLOSING : false; }
  get connected() { return this._socket ? this._socket.readyState === this._socket.OPEN : false; }
  get connecting() { return this._socket ? this._socket.readyState === this._socket.CONNECTING : false; }

  close() {
    if (this._socket) {
      this._socket.removeAllListeners().close();
      delete this._socket;
    }
  }

  dispose() {
    this[Symbol.dispose]();
  }

  async connect() {
    await new Promise<void>((resolve, reject) => {
      if (this.connected) return resolve();
      this.#createWebSocket().then(resolve).catch(reject);
    });
  }

  async #waitConnect() {
    await new Promise<void>((resolve, reject) => {
      if (this.connecting) {
        const onConnected = () => {
          this.off("close", onClose);
          resolve();
        };
        const onClose = () => {
          this.off("connected", onConnected);
          reject();
        };
        return this.once("connected", onConnected).once("close", onClose);
      }
      if (this.connected) return resolve();
      reject();
    });
  }

  async sendJSON(value: Record<any, any> | any[]): Promise<void> {
    if (!this.connected) await this.connect();

    await new Promise<void>((resolve, reject) => {
      this._socket!.send(JSON.stringify(value), (err) => {
        if (err) return reject(err);
        resolve();
      });
    });
  }

  async sendBuffer(buffer: Buffer, onProgress?: OnProgressCallback) {
    if (buffer.length > MAX_FILE_SIZE) throw new BufferOverflowError(MAX_FILE_SIZE);

    const total = Math.ceil(buffer.length / this._chunkSize);
    const chunkSize = Math.ceil(buffer.length / total);

    for (let i = 0; i < total;) {
      const offset = chunkSize * i;
      const end = offset + chunkSize;
      const chunk = buffer.subarray(offset, end);
      const current = ++i;
      const pending = current < total;

      const data: ProgressData = { chunk, current, offset, pending, total };

      await this.sendJSON(data);

      await onProgress?.(data);
    }
  }

  #createWebSocket() {
    return new Promise<void>((resolve, reject) => {
      if (this.connecting) return this.#waitConnect().then(resolve).catch(reject);

      if (this.connected) return resolve();

      this.emit("connecting");

      const options: ConstructorParameters<typeof WebSocket>[2] = {
        headers: this._headers,
        ...typeof this._connectingTimeout === "number"
          ? { signal: AbortSignal.timeout(this._connectingTimeout) }
          : {},
      };

      this._socket = new WebSocket(this.wsURL, options)
        .once("close", (code, reason) => {
          if (this._disposeOnClose) queueMicrotask(() => this.dispose());

          const isConnected = this._connected;
          this._connected = false;

          switch (code) {
            case SOCKET_ABNORMAL_CLOSURE:
              if (isConnected) break;
              this.emit("connectionFailed");
              return reject(new NetworkUnreachableError());

            case SOCKET_UNAUTHORIZED_CODE:
              this.emit("unauthorized");
              return reject(new UnauthorizedError());
          }

          if (this._lastError) {
            const error = this._lastError;
            delete this._lastError;

            switch (error.code) {
              case NETWORK_UNREACHABLE_CODE:
                this.emit("connectionFailed");
                return reject(new NetworkUnreachableError());
            }
          }

          this.emit("close", code, reason);
        })
        .on("error", (error) => {
          this.emit("error", this._lastError = error);
        })
        .on("message", (data) => {
          try { this.emit("data", JSON.parse(data.toString())); }
          catch { this.emit("message", data); }
        })
        .once("open", () => {
          this._connected = true;
          delete this._lastError;

          this._ping = Date.now();
          this._socket!.ping();

          this.emit("connected");

          resolve();
        })
        .on("ping", () => {
          this._ping = Date.now();
          this._socket!.ping();
        })
        .on("pong", () => {
          this._pong = Date.now();
          this.ping = this._pong - this._ping;
        });
    });
  }

  [Symbol.dispose]() {
    this.close();
    this.removeAllListeners();
  }
}
