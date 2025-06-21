import * as globMudule from "glob";
import { type } from "os";
import { joinWithRoot } from "../path";
import { DISCLOUD_IGNORE_FILENAME } from "./constants";
import { Ignore } from "./ignore";

export async function glob(pattern: string | string[], cwd?: string) {
  const ignoreModule = new Ignore(DISCLOUD_IGNORE_FILENAME);
  const rootIgnorePath = joinWithRoot(ignoreModule.filename);
  const rootIgnore = await ignoreModule.resolveIgnoreFile(rootIgnorePath);
  const ignoreFiles = await ignoreModule.findIgnoreFiles(rootIgnore, cwd);
  const ignore = await ignoreModule.resolveIgnoreFiles(ignoreFiles);

  return globMudule.glob(pattern, {
    cwd,
    dot: true,
    ignore,
    nodir: true,
    windowsPathsNoEscape: type() === "Windows_NT",
  });
}

export async function* globIterate(pattern: string | string[], cwd?: string) {
  const ignoreModule = new Ignore(DISCLOUD_IGNORE_FILENAME);
  const rootIgnorePath = joinWithRoot(ignoreModule.filename);
  const rootIgnore = await ignoreModule.resolveIgnoreFile(rootIgnorePath);
  const ignoreFiles = await ignoreModule.findIgnoreFiles(rootIgnore, cwd);
  const ignore = await ignoreModule.resolveIgnoreFiles(ignoreFiles);

  yield* globMudule.globIterate(pattern, {
    cwd,
    dot: true,
    ignore,
    nodir: true,
    windowsPathsNoEscape: type() === "Windows_NT",
  });
}
