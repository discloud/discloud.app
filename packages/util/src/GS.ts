import { globSync } from "glob";
import { existsSync, statSync } from "node:fs";
import { isAbsolute } from "node:path";
import { IgnoreFiles } from "./IgnoreFiles";

export class GS {
  found: string[] = [];
  ignore: IgnoreFiles;

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
      this.pattern = this.pattern.map(path => this.#normalizePath(path));
    } else {
      this.pattern = this.#normalizePath(this.pattern);
    }

    this.found = globSync(this.pattern, {
      dot: true,
      ignore: this.ignore.list,
    });
  }

  #normalizePath(path: string) {
    try {
      path = path.replace(/\\/g, "/");

      if (!isAbsolute(path))
        path = path.replace(/^(\.|~)$|^(\.|~)\/|^\/|\/$/g, "") || "**";

      path = (existsSync(path) && statSync(path).isDirectory()) ? path.replace(/\/$/, "") + "/**" : path;
    } catch {
      path = path.replace(/\/$/, "") + "/**";
    }
    return path;
  }
}
