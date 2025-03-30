import { esbuildPluginVersionInjector } from "esbuild-plugin-version-injector";

/** @type {import("esbuild").Plugin[]} */
export const esbuildDefaultPlugins = [
  esbuildPluginVersionInjector(),
];
