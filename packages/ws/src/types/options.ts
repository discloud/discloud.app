export interface SocketOptions {
  /**
   * Set the buffer chunk size per message
   * 
   * Note that very large chunks may cause unexpected closure
   * 
   * @default 262_144 (256KB)
   */
  chunkSize?: number
  /**
   * Connecting timeout in milliseconds
   * 
   * @default 10_000
   */
  connectingTimeout?: number | null
  headers?: Record<string, string>
}
