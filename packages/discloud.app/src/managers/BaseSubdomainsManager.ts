import { type ApiSubdomain } from "@discloudapp/api-types/v2";
import { type Instanciable } from "../@types";
import type DiscloudApp from "../discloudApp/DiscloudApp";
import type BaseSubdomain from "../structures/BaseSubdomain";
import CachedManager from "./CachedManager";

type PartialApiSubdomain = Partial<ApiSubdomain> & { id: string }

/**
 * Apps cache manager
 */
export default abstract class BaseSubdomainsManager<T extends Instanciable<typeof BaseSubdomain>>
  extends CachedManager<string, T> {
  constructor(discloudApp: DiscloudApp, holds: T) {
    super(discloudApp, holds);
  }

  protected _add(data: PartialApiSubdomain): InstanceType<T> {
    const existing = this._patch(data.id, data);
    if (existing) return existing;

    // @ts-expect-error ts(2511)
    const entry = this.holds ? new this.holds(this.discloudApp, data) : data;
    this._cache.set(entry.id, entry);
    this.discloudApp.user.subdomains.add(data.id);
    return entry;
  }

  protected _addMany(data: PartialApiSubdomain[]): Map<string, InstanceType<T>> {
    const cache = new Map<string, InstanceType<T>>();

    for (const element of data) {
      const obj = this._add(element);
      cache.set(obj.id, obj);
    }

    return cache;
  }

  protected _clear(data?: (string | PartialApiSubdomain)[]): void {
    if (!data?.length) {
      this.discloudApp.user.subdomains.clear();
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
    this.discloudApp.user.subdomains.delete(id);
    return this._cache.delete(id);
  }

  protected _deleteMany(ids: string[]) {
    for (const id of ids)
      this._delete(id);
  }

  protected _patch(id: string, data: Partial<ApiSubdomain>): InstanceType<T> | undefined {
    // @ts-expect-error ts(2339)
    return this._cache.get(id)?._patch(data);
  }
}
