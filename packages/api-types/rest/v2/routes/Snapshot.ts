import { type OmitNewableFunctionKeys } from "../../../util/types";

export type Snapshot = OmitNewableFunctionKeys<typeof SnapshotRoutes>

abstract class SnapshotRoutes {
  /**
   * - GET - `/snapshot`
   * - GET - `/snapshot/{appId}`
   * - GET - `/snapshot/{appId}/versions/{version}`
   * - POST - `/snapshot/{appId}`
   */
  static snapshot(): "/snapshot";
  static snapshot<appId extends string>(appId: appId): `/snapshot/${appId}`;
  static snapshot<appId extends string, version extends string>(appId: appId, version: version): `/snapshot/${appId}/versions/${version}`;
  static snapshot<appId extends string, version extends string>(appId?: appId, version?: version) {
    return appId ? version ? `/snapshot/${appId}/versions/${version}` : `/snapshot/${appId}` : "/snapshot";
  }
}

export const Snapshot: Snapshot = SnapshotRoutes;
