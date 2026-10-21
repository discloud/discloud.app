import type { BinaryLike } from "crypto";
import { fileTypeFromBlob, fileTypeFromBuffer } from "file-type";
import { createReadStream, type PathLike } from "fs";
import { basename } from "path";
import { type Readable, Stream } from "stream";
import { isArrayBufferView } from "util/types";
import { HttpBadStatusError } from "./errors";
import Deprecation from "./utils/deprecation";

const _contentTypeDeprecation = new Deprecation("The contentType property is deprecated. Use mimeType instead.");

const _localUrlOrigin = "null";

export const filenamePattern = /.*\/+([^?#]+)(?:[?#].*)?/;
/** @deprecated This variable has been renamed to follow the camelCase pattern. Use `filenamePattern` instead */
export const fileNamePattern = filenamePattern;

export interface RawFile {
  /**
   * The name of the file
   */
  name: string
  /**
   * The actual data for the file
   */
  data: BinaryLike | Blob
  /**
   * `Content-Type` of the file
   * @deprecated use `mimeType` instead.
   */
  contentType?: string
  /**
   * `Content-Type` of the file
   */
  mimeType?: string
}

/**
 * This parameter could be {@link BinaryLike}, {@link Blob}, {@link Buffer}, {@link File}, {@link PathLike}, {@link RawFile}, {@link Readable}, {@link Request}, {@link String} or {@link URL}
 */
export type FileResolvable =
  | BinaryLike
  | Blob
  | File
  | PathLike
  | RawFile
  | Readable
  | Request

/**
 * A function that converts {@link FileResolvable} to {@link File}
 * 
 * @param file - The file as {@link FileResolvable} to resolve
 * @param filename - The name of the file
 */
export function resolveFile(file: FileResolvable, filename?: string | null): Promise<File>
export function resolveFile(file: Blob, filename?: string | null): Promise<File>
export function resolveFile(file: File): Promise<File>
export function resolveFile(file: RawFile): Promise<File>
export function resolveFile(file: Request): Promise<File>
export function resolveFile(file: URL): Promise<File>
export async function resolveFile(file: FileResolvable, filename?: string | null): Promise<File> {
  if (file instanceof File) return file;

  if (file instanceof Request) {
    const response = await fetch(file);

    if (!response.ok) throw HttpBadStatusError.fromResponse(response);

    const type = response.headers.get("content-type") || undefined;

    return new File([await response.blob()], filename ?? basename(file.url), { type });
  }

  if (file instanceof URL) {
    if (file.origin === _localUrlOrigin) return streamToFile(createReadStream(file), filename);

    return resolveFile(new Request(file), filename);
  }

  if (typeof file === "string") {
    if (URL.canParse(file)) return resolveFile(new URL(file), filename);

    return new File([file], filename ?? "file");
  }

  if (file instanceof Blob) {
    if (!filename) {
      const fileType = await fileTypeFromBlob(file);
      if (fileType) return new File([file], `file.${fileType.ext}`, { type: file.type });
    }

    return new File([file], filename ?? "file", { type: file.type });
  }

  if (Buffer.isBuffer(file)) {
    const fileType = await fileTypeFromBuffer(file);
    if (fileType) return new File([file], filename ?? `file.${fileType.ext}`, { type: fileType.mime });

    return new File([file], filename ?? "file");
  }

  if (isArrayBufferView(file)) return new File([file], filename ?? "file");

  if (file instanceof Stream) return streamToFile(file, filename);

  if ("data" in file) {
    if ("contentType" in file) _contentTypeDeprecation.emit();

    if (file.data instanceof File) return file.data;

    const type = file.mimeType || file.contentType;

    if (!type) return resolveFile(file.data, filename);

    return new File([file.data], file.name, { type });
  }

  throw new TypeError("Invalid file type was provided.");
}

export type FileResolvableSync = Exclude<FileResolvable, URL | Readable | Request>

export function resolveFileSync(file: FileResolvableSync, filename: string): File
export function resolveFileSync(file: File): File
export function resolveFileSync(file: FileResolvableSync, filename?: string): File {
  if (file instanceof File) return file;

  if (typeof file === "string") return new File([file], filename || "file");

  if (file instanceof Blob) return new File([file], filename || "file");

  if (Buffer.isBuffer(file)) return new File([file], filename || "file");

  if (isArrayBufferView(file)) return new File([file], filename || "file");

  if ("data" in file) {
    if (file.data instanceof File) return file.data;

    return new File([file.data], file.name, { type: file.mimeType || file.contentType });
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

    stream
      .on("data", (chunk) => chunks.push(chunk))
      .once("end", async function () {
        stream.removeAllListeners();

        if (!chunks.length || filename && mimeType)
          return resolve(new File(chunks, filename ?? "file", { type: mimeType }));

        const fileType = await fileTypeFromBuffer(chunks[0]);

        if (fileType)
          return resolve(new File(chunks, filename ?? `file.${fileType.ext}`, { type: mimeType ?? fileType.mime }));

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

    stream
      .on("data", (chunk) => chunks.push(chunk))
      .once("end", async function () {
        stream.removeAllListeners();

        if (mimeType || !chunks.length) return resolve(new Blob(chunks, { type: mimeType }));

        const fileTypeResult = await fileTypeFromBuffer(chunks[0]);
        resolve(new Blob(chunks, { type: fileTypeResult?.mime }));
      })
      .once("error", function (error) {
        stream.removeAllListeners();
        reject(error);
      });
  });
}

export default resolveFile;
