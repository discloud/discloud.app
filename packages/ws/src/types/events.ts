import type { RawData } from "ws";

export interface SocketEventsMap<Data extends Record<any, any> | any[] = Record<any, any> | any[]> {
  close: [code: number, reason: Buffer]
  connected: []
  connecting: []
  /** This event closes the socket */
  connectionFailed: []
  data: [data: Data]
  error: [error: Error]
  message: [data: RawData]
  /** This event closes the socket */
  unauthorized: []
}
