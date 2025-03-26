import { context } from "esbuild";
import { esbuildDefaultPlugins } from "../../esbuild.mjs";

async function main() {
  const production = process.argv.includes("--production");
  const watch = process.argv.includes("--watch");

  const ctx = await context({
    entryPoints: ["src/index.ts"],
    bundle: true,
    format: "cjs",
    minify: production,
    sourcemap: "inline",
    platform: "node",
    outdir: "dist",
    keepNames: true,
    logLevel: "warning",
    packages: "external",
    plugins: esbuildDefaultPlugins,
  });

  if (watch) {
    await ctx.watch();
  } else {
    await ctx.rebuild();
    await ctx.dispose();
  }
}

try {
  await main();
} catch (error) {
  console.error(error);
  process.exit(1);
}
