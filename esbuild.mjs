import { esbuildPluginVersionInjector } from "esbuild-plugin-version-injector";

/** @type {import("esbuild").Plugin} */
export const esbuildProblemMatcherPlugin = {
  name: "esbuild-problem-matcher",

  setup(build) {
    build.onStart(() => console.log("[watch] build started"));

    build.onEnd(result => {
      for (let i = 0; i < result.errors.length; i++) {
        const error = result.errors[i];

        console.error("✘ [ERROR] %s", error.text);

        if (error.location)
          console.error("    %s:%s:%s:", error.location.file, error.location.line, error.location.column);
      }

      console.log("[watch] build finished");
    });
  },
};

/** @type {import("esbuild").Plugin[]} */
export const esbuildDefaultPlugins = [
  esbuildPluginVersionInjector(),
  esbuildProblemMatcherPlugin,
];
