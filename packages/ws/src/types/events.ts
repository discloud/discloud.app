import type { RawData } from "ws";

export interface SocketEventsMap<Data extends Record<any, any> | any[] = Record<any, any> | any[]> {
  close: [code: number, reason: Buffer]
  connected: []
  connecting: []
  data: [data: Data]
  error: [error: Error]
  message: [data: RawData]
}
