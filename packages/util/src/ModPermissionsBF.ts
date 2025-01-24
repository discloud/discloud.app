import BitField, { type BitFieldResolvable } from "./BitField";

export enum ModPermissionsFlags {
  backup_app = 1 << 0,
  commit_app = 1 << 1,
  edit_ram = 1 << 2,
  logs_app = 1 << 3,
  restart_app = 1 << 4,
  start_app = 1 << 5,
  status_app = 1 << 6,
  stop_app = 1 << 7,
}

export type ModPermissionsString = keyof typeof ModPermissionsFlags;

export type ModPermissionsResolvable = BitFieldResolvable<ModPermissionsString, number>

export class ModPermissionsBF extends BitField<ModPermissionsString, number> {
  static readonly DefaultBit = 0;
  static readonly Flags = ModPermissionsFlags;
  static readonly All = new ModPermissionsBF(Object.keys(ModPermissionsFlags) as ModPermissionsResolvable);
}

export default ModPermissionsBF;
