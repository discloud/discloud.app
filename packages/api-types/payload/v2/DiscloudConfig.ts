export type DiscloudConfig<T extends AppTypes = AppTypes, V extends AppLanguages = AppLanguages> =
  T extends "bot" ? DiscloudConfigBot<V> :
  T extends "site" ? DiscloudConfigSite<V> :
  BaseDiscloudConfig<V>

interface BaseDiscloudConfig<V extends AppLanguages> {
  APT: string
  AUTORESTART: boolean
  ID?: string
  MAIN: string
  RAM: number
  TYPE: AppTypes
  VERSION: AppVersion<V>
}

interface DiscloudConfigBot<V extends AppLanguages> extends BaseDiscloudConfig<V> {
  AVATAR?: string
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

export type AptType =
  | "canvas"
  | "ffmpeg"
  | "java"
  | "libgl"
  | "openssl"
  | "puppeteer"
  | "tools"