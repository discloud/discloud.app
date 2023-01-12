import BitField, { BitFieldResolvable } from "./BitField";

export const ModPermissions = {
  backup_app: 1,
  commit_app: 2,
  edit_ram: 4,
  logs_app: 8,
  restart_app: 16,
  start_app: 32,
  status_app: 64,
  stop_app: 128,
};

export type ModPermissionsFlags = keyof typeof ModPermissions

export type ModPermissionsResolvable = BitFieldResolvable<ModPermissionsFlags, number>

export class ModPermissionsBF extends BitField<ModPermissionsFlags, number> {
  static Flags = ModPermissions;
  static All = new ModPermissionsBF(Object.values(ModPermissions));
}

export default ModPermissionsBF;