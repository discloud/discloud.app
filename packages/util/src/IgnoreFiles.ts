import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join } from "node:path";

export const blockedFiles = {
  common: [".git", ".vscode", ".cache"],
  go: [],
  js: ["node_modules", "package-lock.json", "yarn.lock", ".npm"],
  py: ["venv"],
  rb: ["Gemfile.lock"],
  rs: ["Cargo.lock", "target"],
  ts: ["node_modules", "package-lock.json", "yarn.lock", ".npm"],
};

export const allBlockedFiles = [...new Set(Object.values(blockedFiles).flat())];

export const allBlockedFilesRegex = RegExp(`(${allBlockedFiles.join("|")})$`.replace(/\./g, "\\."), "i");

export interface IgnoreFilesOptions {
  fileName: string
  path: string
  /**
   * @defaultValue true
   */
  globPattern?: boolean
  optionalIgnoreList?: string[]
}

export class IgnoreFiles {
  fileName: string;
  files: string[] = [];
  globPattern: boolean;
  list: string[] = [];
  path: string;

  constructor(options: IgnoreFilesOptions) {
    this.path = this.#normalizePath(options.path);
    this.fileName = options.fileName;
    this.globPattern = options.globPattern ?? true;
    if (this.fileName && this.path) this.files = this.#findIgnoreFiles(this.fileName, this.path);
    options.optionalIgnoreList ??= [];
    this.list = options.optionalIgnoreList.concat(this.#getIgnoreList());
    if (this.globPattern)
      this.list = this.list.flatMap(a => [a, `${a}/**`, `**/${a}`, `**/${a}/**`, `${this.path}/${a}`, `${this.path}/${a}/**`]);
  }

  #findIgnoreFiles(fileName: string, path: string) {
    return this.#recursivelyReadDirSync(path)
      .filter(file => file.endsWith(fileName) && statSync(file).isFile());
  }

  #getIgnoreList() {
    return this.#resolveIgnoreFile(this.files);
  }

  #normalizePath(path: string) {
    return path.replace(/\\/g, "/");
  }

  #resolveIgnoreFile(ignoreFile: string | string[]) {
    if (Array.isArray(ignoreFile)) {
      const ignored = <string[]>[];

      for (let i = 0; i < ignoreFile.length; i++)
        ignored.push(...this.#resolveIgnoreFile(ignoreFile[i]));

      return ignored;
    }

    if (ignoreFile)
      if (existsSync(ignoreFile))
        if (statSync(ignoreFile).isFile())
          return readFileSync(ignoreFile, "utf8")
            .replace(/#[^\r?\n]+/g, "")
            .split(/\r?\n/)
            .filter(a => a);

    return [];
  }

  #recursivelyReadDirSync(path: string): string[] {
    if (!existsSync(path)) return [];
    if (statSync(path).isFile()) path = dirname(path);

    const files = readdirSync(this.#normalizePath(path), { withFileTypes: true });

    const cache = [];

    for (const file of files) {
      const fileOrDir = join(path, file.name);

      if (file.isDirectory()) {
        if (allBlockedFilesRegex.test(fileOrDir)) continue;
        cache.push(...this.#recursivelyReadDirSync(fileOrDir));
      } else {
        cache.push(fileOrDir);
      }
    }

    return cache;
  }
}
