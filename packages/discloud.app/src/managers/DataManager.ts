import type { Instanciable } from "../@types";
import type DiscloudApp from "../discloudApp/DiscloudApp";
import BaseManager from "./BaseManager";

/**
 * Manager for data
 */
export default abstract class DataManager<K, V extends Instanciable<V>> extends BaseManager {
  constructor(discloudApp: DiscloudApp, protected readonly holds: V) {
    super(discloudApp);
  }

  protected readonly _cache: Map<K, InstanceType<V>> = new Map();

  get cache(): Map<K, InstanceType<V>> {
    return this._cache;
  }

  /**
   * Resolves a data entry to a data Object.
   * @param keyOrInstance - The id or instance of something in this Manager
   */
  resolve(keyOrInstance: K | InstanceType<V>) {
    if (keyOrInstance instanceof this.holds) return keyOrInstance;
    if (typeof keyOrInstance === typeof this._cache.keys().next().value) {
      return this._cache.get(keyOrInstance as K) ?? null;
    }
    return null;
  }

  valueOf() {
    return this._cache;
  }
}
