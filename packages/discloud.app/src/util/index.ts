import { RawFile } from "@discloudapp/rest";
import { Blob } from "node:buffer";
import { readFileSync } from "node:fs";
import { Stream } from "node:stream";
import { request } from "undici";

export function arrayToMap<T extends Record<any, any>>(array: T[], index: string): Map<string, T>
export function arrayToMap<T extends Record<any, any>, H = unknown>(
  array: T[],
  index: string,
  holds: { new(...args: any[]): H }
): Map<string, H>
export function arrayToMap<T extends Record<any, any>, H = unknown>(
  array: T[],
  index: string,
  holds?: { new(...args: any[]): H },
) {
  const map = new Map<string, unknown>();

  for (let i = 0; i < array.length; i++) {
    const element = array[i];

    map.set(element[index], holds ? new holds(element) : element);
  }

  return map;
}

export async function resolveFile(file: string): Promise<RawFile> {
  if (typeof file === "string") {
    if (/^https?:\/\//.test(file))
      return {
        name: file.split("/").pop()!,
        data: await request(file, { throwOnError: true }).then(res => res.body) as Buffer,
        key: "file",
      };

    return {
      name: file.split("/").pop()!,
      data: readFileSync(file),
      key: "file",
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

export function calculatePercentage(value: string | number, major: string | number) {
  return Number(((Number(value) / Number(major)) * 100).toFixed(2));
}