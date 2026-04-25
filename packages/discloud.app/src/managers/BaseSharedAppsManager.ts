import { type ApiTeamApp, type BaseApiApp } from "@discloudapp/api-types/v2";
import { type Instanciable } from "../@types";
import type DiscloudApp from "../discloudApp/DiscloudApp";
import type BaseSharedApp from "../structures/BaseSharedApp";
import CachedManager from "./CachedManager";

type PartialApiSharedApp = BaseApiApp & Partial<ApiTeamApp>

/**
 * Shared apps cache manager
 */
export default abstract class BaseSharedAppsManager<T extends Instanciable<typeof BaseSharedApp>>
  extends CachedManager<string, T> {
  constructor(discloudApp: DiscloudApp, holds: T) {
    super(discloudApp, holds);
  }

  protected _add(data: PartialApiSharedApp): InstanceType<T> {
    const existing = this._patch(data.id, data);
    if (existing) return existing;

    // @ts-expect-error ts(2511)
    const entry = this.holds ? new this.holds(this.discloudApp, data) : data;
    this._cache.set(entry.id, entry);
    return entry;
  }

  protected _addMany(data: PartialApiSharedApp[]): Map<string, InstanceType<T>> {
    const cache = new Map<string, InstanceType<T>>();

    for (const element of data) {
      const obj = this._add(element);
      cache.set(obj.id, obj);
    }

    return cache;
  }

  protected _clear(data?: (string | PartialApiSharedApp)[]): void {
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

  protected _patch(id: string, data: Partial<ApiTeamApp>): InstanceType<T> | undefined {
    // @ts-expect-error ts(2339)
    return this._cache.get(id)?._patch(data);
  }
}
