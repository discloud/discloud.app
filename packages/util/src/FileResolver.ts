import type { BinaryLike } from "crypto";
import { createReadStream, existsSync, type PathLike } from "fs";
import { basename } from "path";
import { Stream, type Readable, type Writable } from "stream";
import { isArrayBufferView } from "util/types";

export const filenamePattern = /.*\/+([^?#]+)(?:[?#].*)?/;
/** @deprecated This variable has been renamed to follow the camelCase pattern. Use `filenamePattern` instead */
export const fileNamePattern = filenamePattern;

const externalUrlPattern = /^(?:https?):\/\//;

export interface RawFile {
  /**
   * The name of the file
   */
  name: string
  /**
   * The actual data for the file
   */
  data: Blob | BinaryLike | Buffer | File
  /**
   * Content-Type of the file
   */
  contentType?: string
}

/**
 * This parameter could be {@link BinaryLike}, {@link Blob}, {@link Buffer}, {@link File}, {@link PathLike}, {@link RawFile}, {@link Readable}, {@link String} or {@link URL}
 */
export type FileResolvable =
  | BinaryLike
  | Blob
  | File
  | PathLike
  | RawFile
  | Readable

/**
 * A function that converts {@link FileResolvable} to {@link File}
 * 
 * @param file - The file as {@link FileResolvable} to resolve
 * @param filename - The name of the file to upload
 */
export async function resolveFile(file: FileResolvable, filename?: string): Promise<File> {
  if (file instanceof File) return file;

  const fileType = await import("file-type");

  if (file instanceof URL || typeof file === "string") {
    if (file instanceof URL) file = file.toString();

    filename ??= file.match(filenamePattern)?.pop();

    if (externalUrlPattern.test(file)) {
      const response = await fetch(file);

      if (!response.ok) throw response;

      const blob = await response.blob();

      const fileTypeResult = await fileType.fileTypeFromBlob(blob);

      return new File([blob], filename ?? `file.${fileTypeResult?.ext}`, { type: fileTypeResult?.mime });
    }

    if (existsSync(file))
      return streamToFile(createReadStream(file), filename ?? basename(file));

    return new File([file], filename ?? "file");
  }

  if (file instanceof Blob) {
    const fileTypeResult = await fileType.fileTypeFromBlob(file);

    return new File([file], filename ?? `file.${fileTypeResult?.ext}`, { type: fileTypeResult?.mime });
  }

  if (Buffer.isBuffer(file)) {
    const fileTypeResult = await fileType.fileTypeFromBuffer(file);

    return new File([file], filename ?? `file.${fileTypeResult?.ext}`);
  }

  if (isArrayBufferView(file)) return new File([file], filename ?? "file");

  if (file instanceof Stream) {
    const fileTypeResult = await fileType.fileTypeFromStream(file);

    return streamToFile(file, filename ?? `file.${fileTypeResult?.ext}`, fileTypeResult?.mime);
  }

  if ("data" in file) {
    if (file.data instanceof File) return file.data;

    if (!file.contentType) return resolveFile(file.data, filename);

    return new File([file.data], file.name, { type: file.contentType });
  }

  throw new TypeError("Invalid file type was provided.");
}

export type FileResolvableSync = Exclude<FileResolvable, URL | Readable | Writable>

export function resolveFileSync(file: FileResolvableSync, filename: string): File {
  if (file instanceof File) return file;

  if (typeof file === "string") return new File([file], filename);

  if (file instanceof Blob) return new File([file], filename);

  if (Buffer.isBuffer(file)) return new File([file], filename);

  if ("data" in file) {
    if (file.data instanceof File) return file.data;

    return new File([file.data], file.name, { type: file.contentType });
  }

  throw new TypeError("Invalid file type was provided.");
}

/**
 * A function that converts a like {@link Stream} parameter to {@link File}
 * 
 * @param stream - A parameter like {@link Readable} or {@link Writable}
 * @param filename - A file name, if you wish
 * @param mimeType - A mimeType parameter
 */
export function streamToFile(stream: Stream, filename?: string | null, mimeType?: string) {
  return new Promise<File>((resolve, reject) => {
    const chunks: Buffer[] = [];
    stream.on("data", (chunk) => chunks.push(chunk))
      .once("end", function () {
        stream.removeAllListeners();
        resolve(new File(chunks, filename ?? "file", { type: mimeType }));
      })
      .once("error", function (error) {
        stream.removeAllListeners();
        reject(error);
      });
  });
}

/**
 * A function that converts a like {@link Stream} parameter to {@link Blob}
 * 
 * @param stream - A parameter like {@link Readable} or {@link Writable}
 * @param mimeType - A mimeType parameter
 */
export function streamToBlob(stream: Stream, mimeType?: string) {
  return new Promise<Blob>((resolve, reject) => {
    const chunks: Buffer[] = [];
    stream.on("data", (chunk) => chunks.push(chunk))
      .once("end", function () {
        stream.removeAllListeners();
        resolve(new Blob(chunks, { type: mimeType }));
      })
      .once("error", function (error) {
        stream.removeAllListeners();
        reject(error);
      });
  });
}

export default resolveFile;
