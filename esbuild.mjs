import { readFileSync } from "fs";
import Replace from "unplugin-replace/esbuild";

export function versionInjector() {
  /** @type {import("type-fest").PackageJson} */
  let pkg;

  return Replace({
    include: [/\.(js|ts)$/],
    values: [{
      find: "__PACKAGE_VERSION__",
      replacement() {
        pkg ??= JSON.parse(readFileSync("./package.json", "utf8"));
        return pkg.version;
      },
    }],
  });
}

/** @type {import("esbuild").Plugin[]} */
export const esbuildDefaultPlugins = [
  versionInjector(),
];
