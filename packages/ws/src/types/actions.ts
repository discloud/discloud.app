import type { OnProgressCallback, SocketEventCommitData, SocketEventUploadData } from ".";

/** *Note* Setting the `onError` property prevents promise rejection */
export interface SocketActionOptions<Data = any> {
  onClose?: (code: number, reason: Buffer) => unknown
  onConnected?: () => unknown
  onConnecting?: () => unknown
  onData?: (data: Data) => unknown
  /** *Note* Setting this property prevents promise rejection */
  onError?: (error: Error) => unknown
}

/** *Note* Setting the `onError` property prevents promise rejection */
export interface SocketCommitActionOptions extends SocketActionOptions<SocketEventCommitData> {
  onProgress?: OnProgressCallback
}

/** *Note* Setting the `onError` property prevents promise rejection */
export interface SocketUploadActionOptions extends SocketActionOptions<SocketEventUploadData> {
  onProgress?: OnProgressCallback
}
