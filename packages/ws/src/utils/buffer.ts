import { DEFAULT_CHUNK_SIZE, MAX_CHUNK_SIZE, MIN_CHUNK_SIZE } from "../constants";

/**
 * This is a Buffer chunk generator
 * 
 * ```js
 * for (const chunk of splitBuffer(buffer, chunkSize)) {
 *   // ...
 * }
 * ```
 * 
 * @param chunkSize
 * Limited between `8_192` (`8KB`) and `1_048_576` (`1MB`)  
 * Default `65_536` (`64KB`)
 */
export function* splitBuffer(buffer: Buffer, chunkSize: number = DEFAULT_CHUNK_SIZE) {
  chunkSize = Math.max(MIN_CHUNK_SIZE, Math.min(MAX_CHUNK_SIZE, chunkSize));

  for (let i = 0; i < buffer.length;) {
    yield buffer.subarray(i, i += chunkSize);
  }
}
