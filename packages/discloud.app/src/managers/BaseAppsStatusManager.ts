import { type BaseApiApp } from "@discloudapp/api-types/v2";
import { type Instanciable } from "../@types";
import type DiscloudApp from "../discloudApp/DiscloudApp";
import type BaseAppStatus from "../structures/BaseAppStatus";
import CachedManager from "./CachedManager";

/**
 * Apps cache manager
 */
export default abstract class BaseAppsStatusManager<T extends Instanciable<typeof BaseAppStatus>>
  extends CachedManager<string, T> {
  constructor(discloudApp: DiscloudApp, holds: T) {
    super(discloudApp, holds);
  }

  protected _add(data: BaseApiApp): InstanceType<T> {
    const existing = this._patch(data.id, data);
    if (existing) return existing;

    // @ts-expect-error ts(2511)
    const entry = this.holds ? new this.holds(this.discloudApp, data) : data;
    this.cache.set(entry.id, entry);
    this.discloudApp.user.appIDs.add(entry.id);
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
    if (!data?.length) {
      this.discloudApp.user.appIDs.clear();
      return this._cache.clear();
    }

    const mapped = new Set(data.map(v => typeof v === "string" ? v : v.id));

    for (const id of this._cache.keys()) {
      if (!mapped.has(id)) {
        this._delete(id);
      }
    }
  }

  protected _delete(id: string): boolean {
    this.discloudApp.user.appIDs.delete(id);
    return this.cache.delete(id);
  }

  protected _deleteMany(ids: string[]): boolean {
    for (const id of ids)
      this._delete(id);

    return true;
  }

  protected _patch(id: string, data: BaseApiApp): InstanceType<T> | undefined {
    // @ts-expect-error ts(2339)
    return this.cache.get(id)?._patch(data);
  }
}
