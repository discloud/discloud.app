import { existsSync } from "fs";
import { readFile } from "fs/promises";
import { globIterate } from "glob";
import { globifyGitIgnore } from "globify-gitignore";
import { dirname } from "path";
import { joinWithRoot } from "../path";
import { asyncGeneratorToArray } from "../utils/array";

export class Ignore {
  static async globify(content: string, directory?: string, absolute?: boolean) {
    const patterns = [];

    const entries = await globifyGitIgnore(content, directory, absolute);

    for (let i = 0; i < entries.length; i++) {
      const entry = entries[i];

      if (!entry.included) patterns.push(entry.glob);
    }

    return patterns;
  }

  static async #getGlobfiedIgnoreFile(directory: string) {
    const patterns = [];

    if (existsSync(directory)) {
      const content = await readFile(directory, "utf8");

      patterns.push(await Ignore.globify(content, dirname(directory)));
    }

    return patterns.flat();
  }

  static async #getGlobfiedIgnoreFiles(directories: string[]) {
    const promises = [];

    for (let i = 0; i < directories.length; i++) {
      promises.push(Ignore.#getGlobfiedIgnoreFile(directories[i]));
    }

    const result = await Promise.all(promises);

    return result.flat();
  }

  static resolveIgnoreFile(path: string) {
    return Ignore.#getGlobfiedIgnoreFile(path);
  }

  static resolveIgnoreFiles(paths: string[]) {
    return Ignore.#getGlobfiedIgnoreFiles(paths);
  }

  constructor(
    readonly filename: string,
  ) { }

  getIgnorePatterns(cwd?: string) {
    return asyncGeneratorToArray(this._getIgnoreIterate(cwd)).then((value) => value.flat());
  }

  protected async* _getIgnoreIterate(cwd?: string) {
    const rootIgnorePath = joinWithRoot(this.filename);
    const rootIgnore = await Ignore.resolveIgnoreFile(rootIgnorePath);

    for await (const path of this._findIgnoreFiles(rootIgnore, cwd)) {
      yield Ignore.#getGlobfiedIgnoreFile(path);
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
