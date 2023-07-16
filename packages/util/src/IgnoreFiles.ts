import { readdirSync, existsSync, statSync, readFileSync } from "node:fs";
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
  path: string | string[]
  optionalIgnoreList?: string[]
}

export class IgnoreFiles {
  fileName: string;
  filesIgnore: string[] = [];
  list: string[] = [];
  paths: string[] = [];

  constructor(options: IgnoreFilesOptions) {
    if (Array.isArray(options.path)) {
      for (const path of options.path) {
        this.paths.push(this.#normalizePath(path));
      }
    } else {
      this.paths.push(this.#normalizePath(options.path));
    }

    this.fileName = options.fileName;

    if (this.fileName && this.paths.length)
      this.filesIgnore = this.#findIgnoreFiles(this.fileName, this.paths);

    options.path = this.paths.flatMap(path => this.#makeBothCase(path));

    this.list = (options.optionalIgnoreList ?? [])
      .flatMap(path => this.#makeBothCase(path))
      .concat(this.#getIgnoreList())
      .concat(this.#resolveIgnorePatterns(allBlockedFiles, options.path));
  }

  #findIgnoreFiles(fileName: string, paths: string[]) {
    return paths.flatMap(path => this.#recursivelyReadDirSync(path)
      .filter(file => file.endsWith(fileName) && existsSync(file) && statSync(file).isFile()));
  }

  #makeBothCase(s: string) {
    if (isAbsolute(s))
      return [
        s.replace(/^./, a => a.toLowerCase()),
        s.replace(/^./, a => a.toUpperCase()),
      ];

    return [s];
  }

  #getIgnoreList() {
    return this.#resolveIgnoreFile(this.filesIgnore);
  }

  #normalizePath(path: string) {
    path = path.replace(/\\/g, "/").replace(/[*]/g, "") || ".";
    if (path.length > 1) path = path.replace(/\/$/, "");
    return path;
  }

  #resolveIgnorePatterns(ignore: string[], paths: string[]) {
    return paths.flatMap(path => {
      path = this.#normalizePath(path);

      return ignore.flatMap(a => [
        a,
        `${isAbsolute(path) ? a : `**/${a}`}/**`,
        `${path}/**/${a}`,
        `${path}/**/${a}/**`,
      ]);
    });
  }

  #resolveIgnoreFile(ignoreFile: string | string[]) {
    if (Array.isArray(ignoreFile)) {
      const ignored = <string[]>[];

      for (const file of ignoreFile)
        ignored.push(...this.#resolveIgnoreFile(file));

      return ignored;
    }

    if (typeof ignoreFile === "string" && existsSync(ignoreFile) && statSync(ignoreFile).isFile()) {
      const readed = readFileSync(ignoreFile, "utf8")
        ?.replace(/\s*#.*/g, "")
        .split(/\r?\n/)
        .filter(a => a) ?? [];

      return this.#resolveIgnorePatterns(readed, this.#makeBothCase(dirname(ignoreFile)));
    }

    return [];
  }

  #recursivelyReadDirSync(path: string): string[] {
    if (!existsSync(path)) return [];
    if (statSync(path).isFile())
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
