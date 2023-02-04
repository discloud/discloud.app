export const APT = {
  canvas: [
    "libcairo2-dev",
    "libpango1.0-dev",
    "libjpeg-dev",
    "libgif-dev",
    "librsvg2-dev",
    "libgbm-dev",
  ],
  ffmpeg: ["ffmpeg"],
  java: ["default-jre"],
  libgl: ["libsm6", "libxext6"],
  openssl: ["pkg-config", "libssl-dev"],
  puppeteer: [
    "libnss3",
    "libatk-bridge2.0-0",
    "libgtk-3-0",
    "libasound2",
    "libxshmfence-dev",
    "libdrm-dev",
    "libgbm-dev",
    "libglib2.0-dev",
    "libx11-xcb-dev",
  ],
  tools: ["git", "wget", "make", "curl"],
};

export const APTPackages = <(keyof typeof APT)[]>Object.keys(APT);

export type APTString = keyof typeof APT

export const discloudConfigScopes = [
  "APT",
  "AUTORESTART",
  "AVATAR",
  "ID",
  "MAIN",
  "NAME",
  "RAM",
  "TYPE",
  "VERSION",
] as const;

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

type BaseVersion = "latest"
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
