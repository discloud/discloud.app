import globMudule from "glob";
import { type } from "os";
import { joinWithRoot } from "../path";
import { DISCLOUD_IGNORE_FILENAME } from "./constants";
import { Ignore } from "./ignore";

export async function glob(pattern: string | string[]) {
  const ignoreModule = new Ignore(DISCLOUD_IGNORE_FILENAME);
  const rootIgnorePath = joinWithRoot(ignoreModule.filename);
  const rootIgnore = await ignoreModule.resolveIgnoreFile(rootIgnorePath);
  const ignoreFiles = await ignoreModule.findIgnoreFiles(rootIgnore);
  const ignore = await ignoreModule.resolveIgnoreFiles(ignoreFiles);

  return globMudule.glob(pattern, {
    nodir: true,
    dot: true,
    ignore,
    windowsPathsNoEscape: type() === "Windows_NT",
  });
}
