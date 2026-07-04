import {
  type ApiSnapshotDownload,
  type RESTGetApiSnapshotListResult,
  type RESTGetApiSnapshotResult,
  type RESTGetApiSnapshotVersionResult,
  type RESTPostApiSnapshotResult,
  Routes,
} from "@discloudapp/api-types/v2";
import { DiscloudAPIError } from "@discloudapp/rest";
import { constants } from "http2";
import type DiscloudApp from "../discloudApp/DiscloudApp";
import Snapshot from "../structures/Snapshot";
import { validateNonEmptyString } from "../util/assertions";
import BaseSnapshotsManager from "./BaseSnapshotsManager";

export interface FetchSnapshotsOptions {
  page?: number;
  limit?: number;
  summary?: boolean;
}

/**
 * Manager for versioned snapshots on Discloud
 */
export default class SnapshotsManager extends BaseSnapshotsManager<
  typeof Snapshot
> {
  constructor(discloudApp: DiscloudApp) {
    super(discloudApp, Snapshot);
  }

  /**
   * Create a new versioned snapshot for an app
   *
   * @throws `400`
   * @throws `403`
   * @throws `404` not found
   * @throws `409` app busy
   *
   * @param appID - Your app id
   */
  async create(appID: string) {
    validateNonEmptyString(appID);

    const data = await this.discloudApp.rest.post<RESTPostApiSnapshotResult>(
      Routes.snapshot(appID),
    );

    return this._add({
      appId: appID,
      version: data.snapshot.version,
      size: data.snapshot.size,
    });
  }

  /**
   * Generate a temporary download url for a specific snapshot version
   *
   * @throws `400`
   * @throws `404` not found
   *
   * @param appID - Your app id
   * @param version - Snapshot version in `YYYYMMDD-HHMMSS` format
   */
  async getDownloadUrl(
    appID: string,
    version: string,
  ): Promise<ApiSnapshotDownload> {
    validateNonEmptyString(appID);
    validateNonEmptyString(version);

    const data =
      await this.discloudApp.rest.get<RESTGetApiSnapshotVersionResult>(
        Routes.snapshot(appID, version),
      );

    return data.download;
  }

  /**
   * Get all versioned snapshots for an app on Discloud
   *
   * @throws `400`
   * @throws `404` not found
   *
   * @param appID - Your app id
   */
  async fetch(appID: string): Promise<Map<string, Snapshot>>;
  /**
   * Get all versioned snapshots of the authenticated user
   *
   * @throws `400`
   */
  async fetch(
    appID?: "all",
    options?: FetchSnapshotsOptions,
  ): Promise<Map<string, Snapshot>>;
  async fetch(appID: string = "all", options: FetchSnapshotsOptions = {}) {
    if (appID === "all") return this.#fetchMany(options);

    validateNonEmptyString(appID);

    try {
      const data = await this.discloudApp.rest.get<RESTGetApiSnapshotResult>(
        Routes.snapshot(appID),
      );

      this._clear(
        data.versions.map((version) => ({ appId: appID, ...version })),
      );

      return this._addMany(
        data.versions.map((version) => ({ appId: appID, ...version })),
      );
    } catch (error) {
      if (error instanceof DiscloudAPIError) {
        switch (error.code) {
          case constants.HTTP_STATUS_NOT_FOUND:
            this._clear();
            break;

          default:
            throw error;
        }
      }

      throw error;
    }
  }

  async #fetchMany(options: FetchSnapshotsOptions) {
    const query: Record<string, string> = {};

    if (options.page !== undefined) query.page = String(options.page);
    if (options.limit !== undefined) query.limit = String(options.limit);
    if (options.summary !== undefined) query.summary = String(options.summary);

    try {
      const data =
        await this.discloudApp.rest.get<RESTGetApiSnapshotListResult>(
          Routes.snapshot(),
          { query },
        );

      return this._addMany(
        data.backups.map((backup) => ({ appId: backup.appID, ...backup })),
      );
    } catch (error) {
      if (error instanceof DiscloudAPIError) {
        switch (error.code) {
          case constants.HTTP_STATUS_NOT_FOUND:
            this._clear();
            break;

          default:
            throw error;
        }
      }

      throw error;
    }
  }
}