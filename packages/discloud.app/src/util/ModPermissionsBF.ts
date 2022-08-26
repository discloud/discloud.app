import { ModPermissionsFlags } from "../@types";
import BitField, { BitFieldResolvable } from "./BitField";
import { ModPermissions } from "./constants";

export default class ModPermissionsBF extends BitField<ModPermissionsFlags, number> {
  static Flags = ModPermissions;
}

export type ModPermissionsResolvable = BitFieldResolvable<ModPermissionsFlags, number>