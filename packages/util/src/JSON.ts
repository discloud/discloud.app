import { readFileSync } from "fs";
import { readFile } from "fs/promises";
import { normalize } from "path";
import { deprecate } from "util";

const JSONs: Record<string, unknown> = {};
function _importJSON<T>(path: string): T
function _importJSON<T>(path: string, async: true): Promise<T>
function _importJSON(path: string, async?: boolean) {
  path = normalize(path);
  if (async) return JSONs[path] ?? readFile(path, "utf8").then(content => JSONs[path] ??= JSON.parse(content));
  return JSONs[path] ??= JSON.parse(readFileSync(path, "utf8"));
}

/** @deprecated `importJSON` is deprecated and will be removed in the future. */
export const importJSON = deprecate(_importJSON, "importJSON is deprecated and will be removed in the future.");
