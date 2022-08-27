import { RawFile } from "@discloudapp/rest";
import { Blob } from "node:buffer";
import { readFileSync } from "node:fs";
import { Stream } from "node:stream";
import { request } from "undici";

export async function resolveFile(file: string): Promise<RawFile> {
  if (typeof file === "string") {
    if (/^https?:\/\//.test(file))
      return {
        name: file.split("/").pop()!,
        data: await request(file).then(res => res.body) as Buffer,
        key: "file"
      };

    return {
      name: file.split("/").pop()!,
      data: readFileSync(file),
      key: "file"
    };
  }

  return file;
}

export function streamToBlob(stream: Stream, mimeType?: string) {
  return new Promise<Blob>((resolve, reject) => {
    const chunks: any[] = [];

    stream.on("data", chunk => chunks.push(chunk))
      .once("end", () => resolve(new Blob(chunks, { type: mimeType })))
      .once("error", reject);
  });
}