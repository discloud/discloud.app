import type { OnProgressCallback, SocketEventUploadData } from ".";

export interface SocketUploadActionOptions {
  onConnected?: () => unknown
  onConnecting?: () => unknown
  onData?: (data: SocketEventUploadData) => unknown
  onError?: (error: Error) => unknown
  onUploading?: OnProgressCallback
}
