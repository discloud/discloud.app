export const APT = {
  canvas: [
    "fonts-liberation",
    "libcairo2-dev",
    "libgbm-dev",
    "libgif-dev",
    "libjpeg-dev",
    "libpango1.0-dev",
    "librsvg2-dev",
  ],
  ffmpeg: [
    "ffmpeg",
  ],
  java: [
    "default-jre",
  ],
  libgl: [
    "cmake",
    "libsm6",
    "libxext6",
    "libtool",
    "make",
  ],
  mysql: [
    "default-mysql-client",
  ],
  openssl: [
    "pkg-config",
    "libssl-dev",
  ],
  puppeteer: [
    "libasound2",
    "libatk1.0-0",
    "libatk-bridge2.0-0",
    "libcairo2",
    "libcups2",
    "libdrm-dev",
    "libdrm2",
    "libgbm-dev",
    "libgbm1",
    "libglib2.0-0",
    "libgtk-3-0",
    "libnss3",
    "libpango-1.0-0",
    "libx11-xcb-dev",
    "libxcomposite1",
    "libxdamage1",
    "libxfixes3",
    "libxkbcommon0",
    "libxrandr2",
    "libxshmfence-dev",
  ],
  tesseract: [
    "tesseract-ocr",
  ],
  tools: [
    "curl",
    "git",
    "openssh-client",
    "wget",
  ],
};

export const APTPackages = <(keyof typeof APT)[]>Object.keys(APT);

export type APTString = keyof typeof APT;

export enum DiscloudConfigScopes {
  APT = "APT",
  AUTORESTART = "AUTORESTART",
  AVATAR = "AVATAR",
  BUILD = "BUILD",
  ID = "ID",
  MAIN = "MAIN",
  NAME = "NAME",
  RAM = "RAM",
  START = "START",
  TYPE = "TYPE",
  VERSION = "VERSION",
}

export const discloudConfigRequiredScopes = {
  bot: [
    DiscloudConfigScopes.MAIN,
    DiscloudConfigScopes.NAME,
    DiscloudConfigScopes.TYPE,
    DiscloudConfigScopes.RAM,
    DiscloudConfigScopes.VERSION,
  ],
  site: [
    DiscloudConfigScopes.ID,
    DiscloudConfigScopes.MAIN,
    DiscloudConfigScopes.TYPE,
    DiscloudConfigScopes.RAM,
    DiscloudConfigScopes.VERSION,
  ],
  common: [
    DiscloudConfigScopes.MAIN,
    DiscloudConfigScopes.TYPE,
    DiscloudConfigScopes.RAM,
    DiscloudConfigScopes.VERSION,
  ],
} as const;

export const discloudConfigScopes = Object.values(DiscloudConfigScopes);

export type DiscloudConfigType<T extends AppTypes = AppTypes, V extends AppLanguages = AppLanguages> =
  T extends "bot" ? DiscloudConfigBot<V> :
  T extends "site" ? DiscloudConfigSite<V> :
  BaseDiscloudConfig<V>

interface BaseDiscloudConfig<V extends AppLanguages> {
  /**
   * APT packages for your application on Discloud
   */
  APT: string

  /**
   * If your app has auto-restart enabled
   */
  AUTORESTART: boolean

  /**
   * Command to compile your app
   */
  BUILD?: string

  /**
   * Your application id
   */
  ID?: string

  /**
   * The main file of your application on Discloud
   */
  MAIN: string

  /**
   * The RAM quantity for your application
   */
  RAM: number

  /**
   * Command to start your app
   */
  START?: string

  /**
   * What is your application type. @see {@link AppTypes}
   */
  TYPE: AppTypes

  /**
   * What is your application version. @see {@link AppVersion}
   */
  VERSION: AppVersion<V>
}

interface DiscloudConfigBot<V extends AppLanguages> extends BaseDiscloudConfig<V> {
  /**
   * Your application avatar url
   */
  AVATAR?: string

  /**
   * Your application name
   */
  NAME: string
  TYPE: "bot"
}

interface DiscloudConfigSite<V extends AppLanguages> extends BaseDiscloudConfig<V> {
  ID: string
  TYPE: "site"
}

export type AppTypes =
  | "bot"
  | "site"

export type AppLanguages =
  | "go"
  | "java"
  | "js"
  | "php"
  | "py"
  | "rb"
  | "rs"

export type AppVersion<T extends AppLanguages = AppLanguages> =
  T extends "go" ? VersionGo :
  T extends "java" ? VersionJava :
  T extends "js" ? VersionJs :
  T extends "php" ? VersionPhp :
  T extends "py" ? VersionPy :
  T extends "rb" ? VersionRb :
  T extends "rs" ? VersionRs :
  BaseVersion

type BaseVersion =
  | "latest"
  | `${number}`
  | `${number}.${number | "x"}`
  | `${number}.${number | "x"}.${number | "x"}`

type VersionGo = BaseVersion

type VersionJava = BaseVersion

type VersionJs = BaseVersion
  | "current"
  | "suja"

type VersionPhp = BaseVersion

type VersionPy = BaseVersion
  | "suja"

type VersionRb = BaseVersion

type VersionRs = BaseVersion
  | "suja"
