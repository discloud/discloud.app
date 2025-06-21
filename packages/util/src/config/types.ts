import { type AppTypes, type AppVersion } from "@discloudapp/api-types/v2";

export interface ParsedDiscloudConfigData {
  APT?: string[]
  AVATAR?: string
  AUTORESTART?: boolean
  HOSTNAME?: string
  ID?: string
  MAIN?: string
  NAME?: string
  RAM?: number
  START?: string
  STORAGE?: string
  TYPE?: AppTypes
  VERSION?: AppVersion
  VLAN?: boolean
}
