import type { Constructable } from "../@types";
import type DiscloudApp from "../discloudApp/DiscloudApp";
import BaseManager from "./BaseManager";

/**
 * Manager for data
 */
export default abstract class DataManager<T extends Constructable<T>> extends BaseManager {
  declare protected readonly _cache: Map<string, InstanceType<T>>;
  declare protected readonly holds: T;

  constructor(discloudApp: DiscloudApp, holds: T) {
    super(discloudApp);

    Object.defineProperties(this, {
      _cache: {
        value: new Map(),
      },
      holds: {
        value: holds,
      },
    });
  }

  get cache(): Map<string, InstanceType<T>> {
    return this._cache;
  }

  /**
   * Resolves a data entry to a data Object.
   * @param idOrInstance - The id or instance of something in this Manager
   */
  resolve(idOrInstance: string | InstanceType<T>) {
    if (idOrInstance instanceof this.holds) return idOrInstance;
    if (typeof idOrInstance === "string") return this.cache.get(idOrInstance) ?? null;
    return null;
  }

  resolveId(idOrInstance: string | InstanceType<T>) {
    if (typeof idOrInstance === "string") return idOrInstance;
    // @ts-expect-error ts(2339)
    if (idOrInstance instanceof this.holds) return idOrInstance.id;
    return null;
  }

  valueOf() {
    return this.cache;
  }
}