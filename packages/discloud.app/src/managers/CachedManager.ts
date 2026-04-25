import type { Instanciable } from "../@types";
import type DiscloudApp from "../discloudApp/DiscloudApp";
import DataManager from "./DataManager";

/**
 * Manager of cache
 */
export default abstract class CachedManager<K, T extends Instanciable<T>> extends DataManager<K, T> {
  constructor(discloudApp: DiscloudApp, holds: T, iterable?: Iterable<InstanceType<T>>) {
    super(discloudApp, holds);

    if (iterable) {
      for (const item of iterable) {
        this._add(item);
      }
    }
  }

  protected abstract _add(value: unknown): InstanceType<T>;

  protected abstract _addMany(values: Iterable<unknown>): Map<K, InstanceType<T>>;

  protected abstract _clear(values?: Iterable<unknown>): void;

  protected abstract _delete(key: unknown): boolean;

  protected abstract _deleteMany(keys: Iterable<unknown>): void;

  protected abstract _patch(key: unknown, value: unknown): InstanceType<T> | undefined;
}
