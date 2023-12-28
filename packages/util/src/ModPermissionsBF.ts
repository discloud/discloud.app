import BitField, { type BitFieldResolvable } from "./BitField";

export const ModPermissionsFlags = {
  backup_app: 1 << 0,
  commit_app: 1 << 1,
  edit_ram: 1 << 2,
  logs_app: 1 << 3,
  restart_app: 1 << 4,
  start_app: 1 << 5,
  status_app: 1 << 6,
  stop_app: 1 << 7,
} as const;

export type ModPermissionsFlags = typeof ModPermissionsFlags

export type ModPermissionsString = keyof ModPermissionsFlags

export type ModPermissionsResolvable = BitFieldResolvable<ModPermissionsString, number>

export class ModPermissionsBF extends BitField<ModPermissionsString, number> {
  static DefaultBit = 0;
  static Flags = ModPermissionsFlags;
  static All = new ModPermissionsBF(Object.values(ModPermissionsFlags));
}

export default ModPermissionsBF;