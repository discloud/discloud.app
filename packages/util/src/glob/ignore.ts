import { type FileHandle, open } from "fs/promises";
import { globIterate } from "glob";
import { globifyGitIgnore } from "globify-gitignore";
import { dirname } from "path";
import { joinWithRoot } from "../path";

export class Ignore {
  static async *globifyContent(
    content: string,
    directory?: string,
    absolute?: boolean,
  ) {
    const entries = await globifyGitIgnore(content, directory, absolute);

    for (const entry of entries) {
      if (!entry.included) {
        yield entry.glob;
      }
    }
  }

  static async *#getGlobfiedIgnoreFile(path: string) {
    let fileHandle!: FileHandle;
    try {
      fileHandle = await open(path, "r");

      const content = await fileHandle.readFile("utf8");

      yield* Ignore.globifyContent(content, dirname(path));
    } finally {
      await fileHandle?.close();
    }
  }

  static async *#getGlobfiedIgnoreFiles(paths: string[]) {
    for (let i = 0; i < paths.length; i++) {
      yield* Ignore.#getGlobfiedIgnoreFile(paths[i]);
    }
  }

  static resolveIgnoreFile(path: string) {
    return Array.fromAsync(Ignore.#getGlobfiedIgnoreFile(path));
  }

  static resolveIgnoreFiles(paths: string[]) {
    return Array.fromAsync(Ignore.#getGlobfiedIgnoreFiles(paths));
  }

  constructor(readonly filename: string) { }

  getIgnorePatterns(cwd?: string) {
    return Array.fromAsync(this._getIgnoreIterate(cwd));
  }

  protected async *_getIgnoreIterate(cwd?: string) {
    const rootIgnorePath = joinWithRoot(this.filename);
    const rootIgnore = await Ignore.resolveIgnoreFile(rootIgnorePath);

    for await (const path of this._findIgnoreFiles(rootIgnore, cwd)) {
      yield* Ignore.#getGlobfiedIgnoreFile(path);
    }
  }

  protected async *_findIgnoreFiles(ignore?: string | string[], cwd?: string) {
    yield* globIterate(`**/${this.filename}`, {
      cwd,
      dot: true,
      ignore,
      nodir: true,
    });
  }
}
