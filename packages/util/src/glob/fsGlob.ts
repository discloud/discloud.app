import { type Dirent } from "fs";
import { glob, stat } from "fs/promises";
import { join } from "path";
import { asyncGeneratorToArray } from "../utils/array";
import { DISCLOUD_IGNORE_FILENAME } from "./constants";
import { Ignore } from "./ignore";
import type { FSGlobOptions, FSGlobOptionsWithFileTypes, FSGlobOptionsWithoutFileTypes } from "./types";

export function fsGlob(pattern: string | string[], options?: FSGlobOptionsWithoutFileTypes): Promise<string[]>
export function fsGlob(pattern: string | string[], options?: FSGlobOptionsWithFileTypes): Promise<Dirent[]>
export function fsGlob(pattern: string | string[], options?: FSGlobOptions): Promise<Array<string | Dirent>>
export function fsGlob(pattern: string | string[], options?: any): Promise<unknown> {
  return asyncGeneratorToArray(fsGlobIterate(pattern, options));
}

export function fsGlobIterate(pattern: string | string[], options?: FSGlobOptionsWithoutFileTypes): AsyncGenerator<string>
export function fsGlobIterate(pattern: string | string[], options?: FSGlobOptionsWithFileTypes): AsyncGenerator<Dirent>
export function fsGlobIterate(pattern: string | string[], options?: FSGlobOptions): AsyncGenerator<string | Dirent>
export async function* fsGlobIterate(pattern: string | string[], options?: any) {
  options ??= {};
  options.cwd ??= process.cwd();

  const ignoreModule = new Ignore(DISCLOUD_IGNORE_FILENAME);

  options.exclude = await ignoreModule.getIgnorePatterns(options.cwd);

  if (options.withFileTypes) return yield* _fsGlobIterateWithFileTypes(pattern, options);

  yield* _fsGlobIterate(pattern, options);
}

async function* _fsGlobIterate(pattern: string | string[], options: FSGlobOptionsWithoutFileTypes) {
  if (!options.withDirectories) return yield* _fsGlobIterateOnlyFiles(pattern, options);

  yield* glob(pattern, options);
}

async function* _fsGlobIterateOnlyFiles(pattern: string | string[], options: FSGlobOptionsWithoutFileTypes) {
  for await (const relativeFilePath of glob(pattern, options)) {
    const filePath = join(options.cwd!, relativeFilePath);

    const fileStat = await stat(filePath);

    if (!fileStat.isFile()) continue;

    yield relativeFilePath;
  }
}

async function* _fsGlobIterateWithFileTypes(pattern: string | string[], options: FSGlobOptionsWithFileTypes) {
  if (!options.withDirectories) return yield* _fsGlobIterateWithFileTypesOnlyFiles(pattern, options);

  yield* glob(pattern, options);
}

async function* _fsGlobIterateWithFileTypesOnlyFiles(pattern: string | string[], options: FSGlobOptionsWithFileTypes) {
  for await (const dirent of glob(pattern, options)) {
    if (!dirent.isFile()) continue;
    yield dirent;
  }
}
