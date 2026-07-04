import { type ApiSnapshotVersion } from "@discloudapp/api-types/v2";
import { type Instanciable } from "../@types";
import type DiscloudApp from "../discloudApp/DiscloudApp";
import type BaseSnapshot from "../structures/BaseSnapshot";
import CachedManager from "./CachedManager";

export type PartialApiSnapshot = Partial<ApiSnapshotVersion> & { appId: string, version: string };

export default abstract class BaseSnapshotsManager<T extends Instanciable<typeof BaseSnapshot>> extends CachedManager<string, T> {
  constructor(discloudApp: DiscloudApp, holds: T) {
    super(discloudApp, holds);
  }

  protected _key(appId: string, version: string): string {
    return `${appId}-${version}`;
  }

  protected _add(data: PartialApiSnapshot): InstanceType<T> {
    const key = this._key(data.appId, data.version);

    const existing = this._patch(key, data);
    if (existing) return existing;

    const entry = new this.holds(this.discloudApp, data.appId, data) as InstanceType<T>;

    this._cache.set(key, entry);
    return entry;
  }

  protected _addMany(data: PartialApiSnapshot[]): Map<string, InstanceType<T>> {
    const cache = new Map<string, InstanceType<T>>();

    for (const element of data) {
      const obj = this._add(element);
      cache.set(this._key(element.appId, obj.version), obj);
    }

    return cache;
  }

  protected _clear(data?: PartialApiSnapshot[]): void {
    if (!data?.length) return this._cache.clear();

    const mapped = new Set(data.map((v) => this._key(v.appId, v.version)));

    for (const key of this._cache.keys()) {
      if (!mapped.has(key)) this._delete(key);
    }
  }

  protected _delete(key: string): boolean {
    return this._cache.delete(key);
  }

  protected _deleteMany(keys: string[]) {
    for (const key of keys) this._delete(key);
  }

  protected _patch(key: string, data: Partial<ApiSnapshotVersion>): InstanceType<T> | undefined {
    // @ts-expect-error ts(2445)
    return this._cache.get(key)?._patch(data);
  }
}
