import { Constructor } from "../@types";
import DiscloudApp from "../discloudApp/DiscloudApp";
import DataManager from "./DataManager";

/**
 * Manager of cache
 */
export default abstract class CachedManager<T> extends DataManager<T> {
  #cache: Map<string, T> = new Map();

  constructor(discloudApp: DiscloudApp, holds: Constructor<T>) {
    super(discloudApp, holds);
  }

  get cache() {
    return this.#cache;
  }

  protected _add(data: any): T {
    const existing = this.cache.get(data.id);
    if (existing) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      existing._patch(data);
      return existing;
    }

    const entry = this.holds ? new this.holds(this.discloudApp, data) : data;
    this.cache.set(entry.id, entry);
    return entry;
  }

  protected _addMany(data: any[]): Map<string, T> {
    const cache = new Map<string, T>();

    for (const element of data) {
      const obj = this._add(element);
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      cache.set(obj.id, obj);
    }

    return cache;
  }

  protected _remove(id: string) {
    return this.cache.delete(id);
  }

  protected _removeMany(ids: string[]) {
    for (const id of ids)
      this._remove(id);

    return true;
  }
}