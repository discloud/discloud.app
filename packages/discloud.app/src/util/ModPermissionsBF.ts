import { ModPermissionsFlags } from "../@types";
import BitField, { BitFieldResolvable } from "./BitField";
import { ModPermissions } from "./constants";

export class ModPermissionsBF extends BitField<ModPermissionsFlags, number> {
  static Flags = ModPermissions;
  static All = new ModPermissionsBF(Object.values(ModPermissions)).toArray();
}

export default ModPermissionsBF;

export type ModPermissionsResolvable = BitFieldResolvable<ModPermissionsFlags, number>