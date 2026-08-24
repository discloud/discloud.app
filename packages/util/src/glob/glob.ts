import * as globMudule from "glob";
import { type } from "os";
import { DISCLOUD_IGNORE_FILENAME } from "./constants";
import { Ignore } from "./ignore";

export function glob(pattern: string | string[], cwd?: string) {
  return Array.fromAsync(globIterate(pattern, cwd));
}

export async function* globIterate(pattern: string | string[], cwd?: string) {
  const ignoreModule = new Ignore(DISCLOUD_IGNORE_FILENAME);
  const ignore = await ignoreModule.getIgnorePatterns(cwd);

  yield* globMudule.globIterate(pattern, {
    cwd,
    dot: true,
    ignore,
    nodir: true,
    windowsPathsNoEscape: type() === "Windows_NT",
  });
}
