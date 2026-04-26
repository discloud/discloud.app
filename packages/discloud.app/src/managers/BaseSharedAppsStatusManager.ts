import { type BaseApiApp } from "@discloudapp/api-types/v2";
import { type Instanciable } from "../@types";
import type DiscloudApp from "../discloudApp/DiscloudApp";
import type BaseSharedAppStatus from "../structures/BaseSharedAppStatus";
import CachedManager from "./CachedManager";

/**
 * Apps cache manager
 */
export default abstract class BaseSharedAppsStatusManager<T extends Instanciable<typeof BaseSharedAppStatus>>
  extends CachedManager<string, T> {
  constructor(discloudApp: DiscloudApp, holds: T) {
    super(discloudApp, holds);
  }

  protected _add(data: BaseApiApp): InstanceType<T> {
    const existing = this._patch(data.id, data);
    if (existing) return existing;

    const entry = new this.holds(this.discloudApp, data) as InstanceType<T>;
    this._cache.set(entry.appId, entry);
    return entry;
  }

  protected _addMany(data: BaseApiApp[]): Map<string, InstanceType<T>> {
    const cache = new Map<string, InstanceType<T>>();

    for (const element of data) {
      const obj = this._add(element);
      cache.set(obj.appId, obj);
    }

    return cache;
  }

  protected _clear(data?: (string | BaseApiApp)[]): void {
    if (!data?.length) return this._cache.clear();

    const mapped = new Set(data.map(v => typeof v === "string" ? v : v.id));

    for (const id of this._cache.keys()) {
      if (!mapped.has(id)) {
        this._delete(id);
      }
    }
  }

  protected _delete(id: string): boolean {
    return this._cache.delete(id);
  }

  protected _deleteMany(ids: string[]) {
    for (const id of ids)
      this._delete(id);
  }

  protected _patch(id: string, data: BaseApiApp): InstanceType<T> | undefined {
    // @ts-expect-error ts(2445)
    return this._cache.get(id)?._patch(data);
  }
}
