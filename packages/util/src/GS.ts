import { exists } from "fs-jetpack";
import { globSync } from "glob";
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
      if (!isAbsolute(path))
        path = path.replace(/^(\.|~)$|^(\.|~)\/|^\/|\/$/g, "") || "**";

      path = exists(path) === "dir" ? path.replace(/\/$/, "") + "/**" : path;
    } catch {
      path = path.replace(/\/$/, "") + "/**";
    }
    return path;
  }
}
