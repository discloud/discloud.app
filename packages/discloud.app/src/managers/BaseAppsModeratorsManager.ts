import { type ApiAppTeam } from "@discloudapp/api-types/v2";
import type DiscloudApp from "../discloudApp/DiscloudApp";
import AppModerator from "../structures/AppModerator";
import BaseManager from "./BaseManager";

type PartialApiAppModerator = Partial<ApiAppTeam> & { modID: string };

/**
 * Apps cache manager
 */
export default abstract class BaseAppsModeratorsManager extends BaseManager {
  constructor(discloudApp: DiscloudApp) {
    super(discloudApp);
  }

  protected readonly _cache: Map<string, Map<string, AppModerator>> = new Map();

  protected _add(appId: string, data: PartialApiAppModerator): InstanceType<typeof AppModerator> {
    const cache = this._cache.getOrInsertComputed(appId, () => new Map());
    const existing = cache.get(data.modID);
    // @ts-expect-error ts(2445)
    if (existing) return existing._patch(data);

    // @ts-expect-error ts(2345)
    const entry = new AppModerator(this.discloudApp, appId, data);
    cache.set(entry.modID, entry);
    return entry;
  }

  protected _addMany(appId: string, data: PartialApiAppModerator[]): Map<string, InstanceType<typeof AppModerator>> {
    const cache = new Map<string, InstanceType<typeof AppModerator>>();

    for (const element of data) {
      const obj = this._add(appId, element);
      cache.set(obj.modID, obj);
    }

    return cache;
  }

  protected _clear(appId: string, data?: (string | PartialApiAppModerator)[]): void {
    if (!data?.length) {
      this._cache.get(appId)?.clear();
      this._cache.delete(appId);
      return;
    }

    const mapped = new Set(data.map(v => typeof v === "string" ? v : v.modID));

    for (const modId of this._cache.keys()) {
      if (!mapped.has(modId)) {
        this._delete(appId, modId);
      }
    }
  }

  protected _delete(appId: string, modId: string): boolean {
    const cache = this._cache.get(appId);
    if (cache) {
      const deleted = cache.delete(modId);
      if (!cache.size) this._cache.delete(appId);
      return deleted;
    }
    return false;
  }

  protected _deleteMany(appId: string, modIds: Iterable<string>) {
    const cache = this._cache.get(appId);
    if (!cache?.size) return;

    for (const modId of modIds)
      cache.delete(modId);
  }

  protected _patch(appId: string, modId: string, data: PartialApiAppModerator): InstanceType<typeof AppModerator> | undefined {
    // @ts-expect-error ts(2445)
    return this._cache.get(appId)?.get(modId)?._patch(data);
  }
}
