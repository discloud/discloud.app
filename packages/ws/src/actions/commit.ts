import { type SocketClient } from "../client";
import { SocketEvents } from "../enum";
import type { SocketCommitActionOptions, SocketEventCommitData } from "../types";

/** *Note* Setting the `options.onError` property prevents promise rejection */
export function commitAction(
  socket: SocketClient<SocketEventCommitData>,
  buffer: Buffer,
  options: SocketCommitActionOptions = {},
) {
  return new Promise<boolean>((resolve, reject) => {
    let success = false;

    function onError(error: any) {
      if (typeof options.onError === "function") return options.onError(error);
      socket.dispose();
      reject(error);
    }

    socket
      .on(SocketEvents.close, (code, reason) => {
        if (typeof options.onClose === "function") options.onClose(code, reason);
        resolve(success);
      })
      .on(SocketEvents.error, onError)
      .on(SocketEvents.connecting, () => {
        if (typeof options.onConnecting === "function") options.onConnecting();
      })
      .on(SocketEvents.connected, async () => {
        if (typeof options.onConnected === "function") options.onConnected();

        try {
          await socket.sendBuffer(buffer, options.onProgress);
        } catch (error: any) {
          onError(error);
        }
      })
      .on(SocketEvents.data, (data) => {
        if (typeof options.onData === "function") options.onData(data);

        switch (data.statusCode) {
          case 200:
            success = true;
            break;
        }
      })
      .connect()
      .catch(onError);
  });
}
