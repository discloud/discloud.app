import { exists, read } from "fs-jetpack";
import { readdirSync } from "node:fs";
import { dirname, isAbsolute, join } from "node:path";

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
  optionalIgnoreList?: string[]
}

export class IgnoreFiles {
  fileName: string;
  filesIgnore: string[] = [];
  list: string[] = [];
  path: string;

  constructor(options: IgnoreFilesOptions) {
    this.path = this.#normalizePath(options.path);

    this.fileName = options.fileName;

    if (this.fileName && this.path)
      this.filesIgnore = this.#findIgnoreFiles(this.fileName, this.path);

    options.optionalIgnoreList ??= [];
    this.list = options.optionalIgnoreList
      .concat(this.#getIgnoreList())
      .concat(this.#resolveIgnorePatterns(allBlockedFiles, this.path));
  }

  #findIgnoreFiles(fileName: string, path: string) {
    return this.#recursivelyReadDirSync(path)
      .filter(file => file.endsWith(fileName) && exists(file) === "file");
  }

  #getIgnoreList() {
    return this.#resolveIgnoreFile(this.filesIgnore);
  }

  #normalizePath(path: string) {
    path = path.replace(/\\/g, "/").replace(/[*]/g, "") || ".";
    if (path.length > 1) path = path.replace(/\/$/, "");
    return path;
  }

  #resolveIgnorePatterns(ignore: string[], path: string) {
    path = this.#normalizePath(path);
    return ignore.flatMap(a => [
      a,
      `${isAbsolute(path) ? a : `**/${a}`}/**`,
      `${path}/**/${a}`,
      `${path}/**/${a}/**`,
    ]);
  }

  #resolveIgnoreFile(ignoreFile: string | string[]) {
    if (Array.isArray(ignoreFile)) {
      const ignored = <string[]>[];

      for (const file of ignoreFile)
        ignored.push(...this.#resolveIgnoreFile(file));

      return ignored;
    }

    if (typeof ignoreFile === "string" && exists(ignoreFile) === "file") {
      const readed = read(ignoreFile, "utf8")
        ?.replace(/\s*#.*/g, "")
        .split(/\r?\n/)
        .filter(a => a) ?? [];

      return this.#resolveIgnorePatterns(readed, dirname(ignoreFile));
    }

    return [];
  }

  #recursivelyReadDirSync(path: string): string[] {
    if (!exists(path)) return [];
    if (exists(path) === "file")
      return this.#recursivelyReadDirSync(dirname(path));

    const files = readdirSync(this.#normalizePath(path), { withFileTypes: true });

    const cache: string[] = [];

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
