import { globSync } from "glob";
import { readFileSync } from "node:fs";
import { type } from "node:os";
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

export const allBlockedFiles = Array.from(new Set(Object.values(blockedFiles).flat()));

export const allBlockedFilesRegex = RegExp(`(${allBlockedFiles.join("|")})$`.replace(/\./g, "\\."), "i");

export interface IgnoreFilesOptions {
  fileName: string
  path: string | string[]
  optionalIgnoreList?: string[]
}

export class IgnoreFiles {
  declare fileName: string;
  filesIgnore: string[] = [];
  list: string[] = allBlockedFiles;
  paths: string[] = [];

  constructor(options: IgnoreFilesOptions) {
    this.fileName = options.fileName;

    if (options.optionalIgnoreList?.length) {
      this.list.push(...IgnoreFiles.normalizePaths(options.optionalIgnoreList));
    }

    for (let i = 0; i < this.list.length; i++) {
      this.list[i] = IgnoreFiles.normalizeIgnore(this.list[i]);
    }

    if (Array.isArray(options.path)) {
      this.paths = IgnoreFiles.normalizePaths(options.path);
    } else if (options.path) {
      this.paths.push(IgnoreFiles.normalizePath(options.path));
    }

    if (this.fileName)
      this.filesIgnore = IgnoreFiles.findIgnoreFiles(this.fileName, this.paths, this.list);

    if (this.filesIgnore.length)
      this.list.push(...this.processIgnoreFiles(this.filesIgnore));
  }

  static findIgnoreFiles(fileName: string, paths: string[], ignore: string[]) {
    const files = [];

    for (const path of paths) {
      files.push(globSync(join(path, "**", fileName), {
        dot: true,
        ignore,
        windowsPathsNoEscape: type() === "Windows_NT",
      }));
    }

    return files.flat();
  }

  static normalizeIgnore(ignore: string, path = "**") {
    return join(path, ignore, "**").replace(/\\/g, "/");
  }

  static normalizePath(path: string) {
    return join(...path.split(/[\\/]/));
  }

  static normalizePaths(paths: string[]) {
    for (let i = 0; i < paths.length; i++) {
      paths[i] = this.normalizePath(paths[i]);
    }

    return paths;
  }

  static processIgnoreFile(file: string) {
    const dir = dirname(file).replace(/^\.$/, "") || "**";

    const list = readFileSync(file, "utf8")
      .replace(/\s*#.*/g, "")
      .split(/[\r\n]+/)
      .filter(Boolean);

    const ignore = [];

    for (const iterator of list) {
      ignore.push(this.normalizeIgnore(iterator, dir));
    }

    return ignore;
  }

  processIgnoreFiles(files = this.filesIgnore) {
    const ignore = [];

    for (const file of files) {
      ignore.push(IgnoreFiles.processIgnoreFile(file));
    }

    return ignore.flat();
  }
}
