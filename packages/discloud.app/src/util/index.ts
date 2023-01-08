import { RawFile } from "@discloudapp/rest";
import { Blob } from "node:buffer";
import { PathLike, readFileSync } from "node:fs";
import { Readable, Stream } from "node:stream";
import { File, request } from "undici";
import { fileNamePattern } from "./constants";

export * from "./constants";

export async function resolveFile(file: File | PathLike | RawFile | Readable): Promise<File> {
  if (file instanceof File) return file;

  if (file instanceof URL || typeof file === "string") {
    file = file.toString();

    if (/^https?:\/\//.test(file))
      return new File([await request(file, { throwOnError: true }).then(res => res.body.blob())],
        `${file.match(fileNamePattern)?.pop()}`);

    return new File([readFileSync(file)], `${file.match(fileNamePattern)?.pop()}`);
  }

  if (Buffer.isBuffer(file)) return new File([file], "file");

  if ("data" in file) {
    if (file.data instanceof File) return file.data;

    return new File([file.data], file.name);
  }

  if (Stream.isReadable(file)) return streamToFile(file);

  return <never>file;
}

export function streamToFile(stream: Stream, mimeType?: string) {
  return new Promise<File>((resolve, reject) => {
    const chunks: any[] = [];

    stream.on("data", chunk => chunks.push(chunk))
      .once("end", () => resolve(new File(chunks, "file", { type: mimeType })))
      .once("error", reject);
  });
}

export function streamToBlob(stream: Stream, mimeType?: string) {
  return new Promise<Blob>((resolve, reject) => {
    const chunks: any[] = [];

    stream.on("data", chunk => chunks.push(chunk))
      .once("end", () => resolve(new Blob(chunks, { type: mimeType })))
      .once("error", reject);
  });
}

export function calculatePercentage(value: string | number, major: string | number) {
  return Number(((Number(value) / Number(major)) * 100).toFixed(2));
}