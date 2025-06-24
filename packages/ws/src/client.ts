import EventEmitter from "events";
import WebSocket from "ws";
import { DEFAULT_CHUNK_SIZE, MAX_FILE_SIZE, NETWORK_UNREACHABLE_CODE } from "./constants";
import { BufferOverflowError } from "./errors";
import { type OnProgressCallback, type SocketEventsMap, type SocketOptions } from "./types";

export class SocketClient<Data extends Record<any, any> | any[] = Record<any, any> | any[]>
  extends EventEmitter<SocketEventsMap<Data>>
  implements Disposable {
  constructor(protected wsURL: URL, options?: SocketOptions) {
    super({ captureRejections: true });

    if (options) {
      if (options.connectingTimeout !== undefined)
        this._connectingTimeout = options.connectingTimeout;

      if (typeof options.disposeOnClose === "boolean")
        this._disposeOnClose = options.disposeOnClose;

      if (options.headers) Object.assign(this._headers, options.headers);
    }
  }

  protected readonly _connectingTimeout: number | null = 10_000;
  protected readonly _disposeOnClose: boolean = true;
  protected readonly _headers: Record<string, string> = {};
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
        const onConnect = () => {
          this.off("close", onClose);
          resolve();
        };
        const onClose = () => {
          this.off("connect", onConnect);
          reject();
        };
        return this.once("connect", onConnect).once("close", onClose);
      }
      if (this.connected) return resolve();
      reject();
    });
  }

  async sendJSON(value: Record<string, unknown>): Promise<void> {
    if (!this.connected) await this.connect();

    await new Promise<void>((resolve, reject) => {
      this._socket!.send(JSON.stringify(value), (err) => {
        if (err) return reject(err);
        resolve();
      });
    });
  }

  async sendBuffer(buffer: Buffer) {
    if (!this.connected) await this.connect();

    await new Promise<void>((resolve, reject) => {
      this._socket!.send(buffer, (err) => {
        if (err) return reject(err);
        resolve();
      });
    });
  }

  async sendFile(buffer: Buffer, onProgress?: OnProgressCallback) {
    if (buffer.length > MAX_FILE_SIZE) throw new BufferOverflowError();

    const total = Math.ceil(buffer.length / DEFAULT_CHUNK_SIZE);
    const chunkSize = Math.ceil(buffer.length / total);

    for (let i = 0; i < total;) {
      const start = chunkSize * i;
      const end = start + chunkSize;
      const chunk = buffer.subarray(start, end);
      const current = ++i;
      const pending = current < total;

      await this.sendJSON({ current, chunk, pending, total });

      await onProgress?.({ current, total });
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

      let _error!: any;

      this._socket = new WebSocket(this.wsURL, options)
        .once("close", (code, reason) => {
          if (this._disposeOnClose) queueMicrotask(() => this.dispose());

          if (_error) {
            switch (_error.code) {
              case NETWORK_UNREACHABLE_CODE: return;
            }
          }

          this.emit("close", code, reason);
        })
        .on("error", (error) => {
          this.emit("error", _error = error);
        })
        .on("message", (data) => {
          try { this.emit("data", JSON.parse(data.toString())); }
          catch { this.emit("message", data); }
        })
        .once("open", () => {
          this._ping = Date.now();
          this._socket!.ping();
          this.emit("connect");
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
