import { existsSync } from "fs";
import { readFile } from "fs/promises";
import { glob } from "glob";
import { globifyGitIgnore } from "globify-gitignore";
import { dirname } from "path";

export class Ignore {
  static async globify(content: string, directory?: string, absolute?: boolean) {
    const patterns = [];

    const result = await globifyGitIgnore(content, directory, absolute);

    for (let i = 0; i < result.length; i++) {
      patterns.push(result[i].glob);
    }

    return patterns;
  }

  static async #getGlobfiedIgnore(path: string) {
    const patterns = [];

    if (existsSync(path)) {
      const content = await readFile(path, "utf8");

      patterns.push(await Ignore.globify(content, dirname(path)));
    }

    return patterns.flat();
  }

  static async #getGlobfiedIgnores(paths: string[]) {
    const promises = [];

    for (let i = 0; i < paths.length; i++) {
      promises.push(Ignore.#getGlobfiedIgnore(paths[i]));
    }

    const result = await Promise.all(promises);

    return result.flat();
  }

  constructor(
    readonly filename: string,
  ) { }

  async findIgnoreFiles(ignore?: string | string[]) {
    const files = await glob(`**/${this.filename}`, {
      dot: true,
      ignore,
      nodir: true,
    });

    return files;
  }

  resolveIgnoreFile(path: string) {
    return Ignore.#getGlobfiedIgnore(path);
  }

  resolveIgnoreFiles(paths: string[]) {
    return Ignore.#getGlobfiedIgnores(paths);
  }
}
