import { globSync } from "glob";
import { type } from "node:os";
import { join } from "node:path";
import { IgnoreFiles } from "./IgnoreFiles";

export class GS {
  readonly found: string[] = [];
  declare readonly ignore: IgnoreFiles;

  constructor(
    public pattern: string | string[],
    ignoreFileName?: string,
    optionalIgnoreList: string[] = [],
  ) {
    this.ignore = new IgnoreFiles({
      fileName: ignoreFileName!,
      path: pattern,
      optionalIgnoreList,
    });

    if (Array.isArray(this.pattern)) {
      this.pattern = this.pattern.flatMap(pattern => [
        this.#normalizePath(pattern),
        join(this.#normalizePath(pattern), "**"),
      ]);
    } else {
      this.pattern = [
        this.#normalizePath(this.pattern),
        join(this.#normalizePath(this.pattern), "**"),
      ];
    }

    this.found = globSync(this.pattern, {
      dot: true,
      ignore: this.ignore.list,
      windowsPathsNoEscape: type() === "Windows_NT",
    });

    if (this.found.includes(".")) {
      this.found.splice(this.found.indexOf("."), 1);
    }

    this.found = Array.from(new Set(this.found));
  }

  #normalizePath(path: string) {
    return join(...path.split(/[\\/]/));
  }
}
