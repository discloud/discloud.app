import { type ApiDomain } from "@discloudapp/api-types/v2";
import { type Instanciable } from "../@types";
import type DiscloudApp from "../discloudApp/DiscloudApp";
import type BaseCustomdomain from "../structures/BaseCustomdomain";
import CachedManager from "./CachedManager";

type PartialApiCustomdomain = Partial<ApiDomain> & { id: string }

/**
 * Apps cache manager
 */
export default abstract class BaseCustomdomainsManager<T extends Instanciable<typeof BaseCustomdomain>>
  extends CachedManager<string, T> {
  constructor(discloudApp: DiscloudApp, holds: T) {
    super(discloudApp, holds);
  }

  protected _add(data: PartialApiCustomdomain): InstanceType<T> {
    const existing = this._patch(data.id, data);
    if (existing) return existing;

    // @ts-expect-error ts(2511)
    const entry = this.holds ? new this.holds(this.discloudApp, data) : data;
    this._cache.set(entry.id, entry);
    this.discloudApp.user.customdomains.add(data.id);
    return entry;
  }

  protected _addMany(data: PartialApiCustomdomain[]): Map<string, InstanceType<T>> {
    const cache = new Map<string, InstanceType<T>>();

    for (const element of data) {
      const obj = this._add(element);
      cache.set(obj.id, obj);
    }

    return cache;
  }

  protected _clear(data?: (string | PartialApiCustomdomain)[]): void {
    if (!data?.length) {
      this.discloudApp.user.customdomains.clear();
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
    this.discloudApp.user.customdomains.delete(id);
    return this._cache.delete(id);
  }

  protected _deleteMany(ids: string[]) {
    for (const id of ids)
      this._delete(id);
  }

  protected _patch(id: string, data: Partial<ApiDomain>): InstanceType<T> | undefined {
    // @ts-expect-error ts(2339)
    return this._cache.get(id)?._patch(data);
  }
}
