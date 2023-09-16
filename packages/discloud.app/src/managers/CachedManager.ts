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
    this.discloudApp.user.appIDs.add(entry.id);
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

  protected _clear(data?: (string | { id: string })[]) {
    if (!data?.length)
      return this.#cache.clear();

    const mapped: string[] = [];

    for (const iterator of data) {
      if (typeof iterator === "string") {
        mapped.push(iterator);
      } else {
        mapped.push(iterator.id);
      }
    }


    for (const id of this.#cache.keys()) {
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