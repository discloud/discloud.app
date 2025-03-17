import { readFileSync } from "fs";
import { normalize } from "path";

const JSONs: Record<string, unknown> = {};
export function importJSON<T>(path: string): Promise<T> {
  path = normalize(path);
  return JSONs[path] ??= JSON.parse(readFileSync(path, "utf8"));
}
