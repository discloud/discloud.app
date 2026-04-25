import type { BinaryLike } from "crypto";
import { fileTypeFromBlob, fileTypeFromBuffer } from "file-type";
import { createReadStream, existsSync, type PathLike } from "fs";
import { stat } from "fs/promises";
import { basename } from "path";
import { Readable, Stream, type Writable } from "stream";
import { isArrayBufferView } from "util/types";
import Deprecation from "./utils/deprecation";

const contentTypeDeprecation = new Deprecation("The contentType property is deprecated. Use mimeType instead.");

const LOCAL_URL_ORIGIN = "null";

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
   * Content-Type of the file
   * @deprecated use mimeType instead.
   */
  contentType?: string
  /**
   * Content-Type of the file
   */
  mimeType?: string
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
export function resolveFile(file: FileResolvable, filename?: string | null): Promise<File>
export function resolveFile(file: Blob, filename?: string): Promise<File>
export function resolveFile(file: File): Promise<File>
export function resolveFile(file: RawFile): Promise<File>
export function resolveFile(file: URL): Promise<File>
export async function resolveFile(file: FileResolvable, filename?: string | null): Promise<File> {
  if (file instanceof File) return file;

  if (file instanceof URL) {
    filename = basename(file.pathname);

    if (file.origin === LOCAL_URL_ORIGIN) return streamToFile(createReadStream(file), filename);

    const response = await fetch(file);

    if (!response.ok) throw response;

    const type = response.headers.get("content-type") || undefined;

    if (response.body) return streamToFile(Readable.from(response.body), filename, type);

    return new File([await response.blob()], filename, { type });
  }

  if (typeof file === "string") {
    if (URL.canParse(file)) return resolveFile(new URL(file));

    if (existsSync(file)) {
      const fstat = await stat(file);

      if (!fstat.isFile()) throw new TypeError("Invalid file path was provided.");

      return streamToFile(createReadStream(file), filename ?? basename(file));
    }

    return new File([file], filename ?? "file");
  }

  if (file instanceof Blob) {
    if (!filename) {
      const fileTypeResult = await fileTypeFromBlob(file);
      if (fileTypeResult) filename = `file.${fileTypeResult.ext}`;
    }

    return new File([file], filename ?? "file", { type: file.type });
  }

  if (Buffer.isBuffer(file)) {
    const fileTypeResult = await fileTypeFromBuffer(file);
    if (fileTypeResult) filename ??= `file.${fileTypeResult.ext}`;

    return new File([file], filename ?? "file", { type: fileTypeResult?.mime });
  }

  if (isArrayBufferView(file)) return new File([file], filename ?? "file");

  if (file instanceof Stream) return streamToFile(file, filename);

  if ("data" in file) {
    if ("contentType" in file) contentTypeDeprecation.emit();

    if (file.data instanceof File) return file.data;

    if (!(file.mimeType || file.contentType)) return resolveFile(file.data, filename);

    return new File([file.data], file.name, { type: file.mimeType || file.contentType });
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
export async function streamToFile(stream: Stream, filename?: string | null, mimeType?: string) {
  return new Promise<File>((resolve, reject) => {
    const chunks: Buffer[] = [];
    stream.on("data", (chunk) => chunks.push(chunk))
      .once("end", async function () {
        stream.removeAllListeners();

        if (!chunks.length || filename && mimeType) {
          return resolve(new File(chunks, filename ?? "file", { type: mimeType }));
        }

        const fileTypeResult = await fileTypeFromBuffer(chunks[0]);
        if (fileTypeResult) filename ??= `file.${fileTypeResult.ext}`;

        resolve(new File(chunks, filename ?? "file", { type: mimeType ?? fileTypeResult?.mime }));
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
