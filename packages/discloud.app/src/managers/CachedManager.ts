import type { Constructable } from "../@types";
import type DiscloudApp from "../discloudApp/DiscloudApp";
import DataManager from "./DataManager";

/**
 * Manager of cache
 */
export default abstract class CachedManager<T extends Constructable<T>> extends DataManager<T> {
  constructor(discloudApp: DiscloudApp, holds: T, iterable?: Iterable<InstanceType<T>>) {
    super(discloudApp, holds);

    if (iterable) {
      for (const item of iterable) {
        this._add(item);
      }
    }
  }

  protected _add(data: any): InstanceType<T> {
    const existing = this.cache.get(data.id);
    if (existing) {
      // @ts-expect-error ts(2339)
      existing._patch(data);
      return existing;
    }

    const entry = this.holds ? new this.holds(this.discloudApp, data) : data;
    this.discloudApp.user.appIDs.add(entry.id);
    this.cache.set(entry.id, entry);
    return entry;
  }

  protected _addMany(data: any[]): Map<string, InstanceType<T>> {
    const cache = new Map<string, InstanceType<T>>();

    for (const element of data) {
      const obj = this._add(element);
      // @ts-expect-error ts(2339)
      cache.set(obj.id, obj);
    }

    return cache;
  }

  protected _clear(data?: (string | { id: string })[]) {
    if (!data?.length)
      return this._cache.clear();

    const mapped = data.map(v => typeof v === "string" ? v : v.id);

    for (const id of this._cache.keys()) {
      if (!mapped.includes(id)) {
        this._delete(id);
      }
    }
  }

  protected _delete(id: string) {
    this.discloudApp.user.appIDs.delete(id);

    return this.cache.delete(id);
  }

  protected _deleteMany(ids: string[]) {
    for (const id of ids)
      this._delete(id);

    return true;
  }
}