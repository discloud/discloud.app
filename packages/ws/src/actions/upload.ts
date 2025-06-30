import { type ApiUploadApp } from "@discloudapp/api-types/v2";
import { type SocketClient } from "../client";
import { SocketEvents } from "../enum";
import type { SocketEventUploadData, SocketUploadActionOptions } from "../types";

export function uploadAction(socket: SocketClient, buffer: Buffer, options: SocketUploadActionOptions): Promise<ApiUploadApp | void>
export function uploadAction(socket: SocketClient<any>, buffer: Buffer, options: SocketUploadActionOptions) {
  return new Promise((resolve, reject) => {
    if (typeof options.onConnecting === "function") socket.on(SocketEvents.connecting, options.onConnecting);
    if (typeof options.onError === "function") socket.on(SocketEvents.error, options.onError);

    let app: ApiUploadApp;

    socket
      .on(SocketEvents.close, (_code, _reason) => resolve(app))
      .on(SocketEvents.connected, function () {
        if (typeof options.onConnected === "function") options.onConnected();

        socket.sendBuffer(buffer, options.onUploading).catch(reject);
      })
      .on(SocketEvents.data, (data: SocketEventUploadData) => {
        switch (data.statusCode) {
          case 102:
            if (typeof options.onData === "function") options.onData(data);
            break;
        }

        if (data.app) app = data.app;
      })
      .connect()
      .catch(reject);
  });
}
