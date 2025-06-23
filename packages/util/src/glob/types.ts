interface _FSGlobOptions {
  /**
   * Current working directory.
   * @default process.cwd()
   */
  cwd?: string
  /**
   * @default false
   */
  withDirectories?: boolean
  /**
   * `true` if the glob should return paths as `Dirent`s, `false` otherwise.
   * @default false
   */
  withFileTypes?: boolean | undefined
}

export type FSGlobOptions = _FSGlobOptions

export interface FSGlobOptionsWithFileTypes extends _FSGlobOptions {
  withFileTypes: true;
}

export interface FSGlobOptionsWithoutFileTypes extends _FSGlobOptions {
  withFileTypes?: false;
}
