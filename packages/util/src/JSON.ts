import { readFileSync } from "fs";
import { readFile } from "fs/promises";
import { normalize } from "path";

const JSONs: Record<string, unknown> = {};
export function importJSON<T>(path: string): T
export function importJSON<T>(path: string, async: true): Promise<T>
export function importJSON(path: string, async?: boolean) {
  path = normalize(path);
  if (async) return JSONs[path] ?? readFile(path, "utf8").then(content => JSONs[path] ??= JSON.parse(content));
  return JSONs[path] ??= JSON.parse(readFileSync(path, "utf8"));
}
