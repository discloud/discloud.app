import { type ApiApp } from "@discloudapp/api-types/v2";
import { type SocketClient } from "../client";
import { SocketEvents } from "../enum";
import type { SocketEventUploadData, SocketUploadActionOptions } from "../types";

/** *Note* Setting the `options.onError` property prevents promise rejection */
export function uploadAction(socket: SocketClient<SocketEventUploadData>, buffer: Buffer, options?: SocketUploadActionOptions): Promise<ApiApp | void>
export function uploadAction(socket: SocketClient, buffer: Buffer, options?: SocketUploadActionOptions): Promise<ApiApp | void>
export function uploadAction(socket: SocketClient<SocketEventUploadData>, buffer: Buffer, options: SocketUploadActionOptions = {}) {
  return new Promise<ApiApp | void>((resolve, reject) => {
    let app: ApiApp;

    function onError(error: any) {
      if (typeof options.onError === "function") return options.onError(error);
      socket.dispose();
      reject(error);
    }

    socket
      .on(SocketEvents.close, (code, reason) => {
        if (typeof options.onClose === "function") options.onClose(code, reason);
        resolve(app);
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
        switch (data.statusCode) {
          case 102:
            if (typeof options.onData === "function") options.onData(data);
            break;
        }

        if (data.app) app = data.app;
      })
      .connect()
      .catch(onError);
  });
}
