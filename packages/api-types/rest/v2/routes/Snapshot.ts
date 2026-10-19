import type { OmitNewableFunctionKeys } from "../../../util/types";

const _snapshot = "/snapshot" as const;

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
    return appId ? version ? `${_snapshot}/${appId}/versions/${version}` : `${_snapshot}/${appId}` : _snapshot;
  }
}

export const Snapshot: Snapshot = SnapshotRoutes;
