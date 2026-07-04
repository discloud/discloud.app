import { type ApiSnapshotVersion } from "@discloudapp/api-types/v2";
import { FlexibleBuffer } from "@discloudapp/util";
import { existsSync } from "fs";
import { mkdir, open } from "fs/promises";
import { extname, join } from "path";
import { cwd } from "process";
import type DiscloudApp from "../discloudApp/DiscloudApp";
import { HttpBadStatusError } from "../errors/http";
import { type DownloadProgressCallback } from "./AppBackup";
import BaseSnapshot from "./BaseSnapshot";
import Base from "./Base";

export default class Snapshot extends BaseSnapshot {
  constructor(
    discloudApp: DiscloudApp,
    appId: string,
    data: ApiSnapshotVersion,
  ) {
    super(discloudApp, appId, data);

    this._patch(data);
  }

  /**
   * Download this snapshot version
   *
   * @param path - Backup path
   * @param filename - Backup file name
   * @param onProgress - Callback to track download progress
   */
  async download(
    path: string = cwd(),
    filename: string = `${this.appId}-${this.version}`,
    onProgress?: DownloadProgressCallback,
  ) {
    const { url } = await this.discloudApp.snapshots.getDownloadUrl(
      this.appId,
      this.version,
    );

    if (!existsSync(path)) await mkdir(path, { recursive: true });

    const parsedUrl = new URL(url);

    const response = await fetch(parsedUrl);

    if (!response.ok) throw HttpBadStatusError.fromResponse(response);

    const contentLength = response.headers.get("content-length");
    const total = contentLength ? parseInt(contentLength) : 0;

    const filePath = join(path, `${filename}${extname(parsedUrl.pathname)}`);
    const file = await open(filePath, "w");

    const buffer =
      total > 0 ? FlexibleBuffer.fixed(total) : FlexibleBuffer.flexible();

    try {
      if (!response.body) return this;

      for await (const chunk of response.body.values()) {
        await file.write(chunk);

        buffer.push(chunk);

        if (onProgress) {
          await onProgress({ downloaded: buffer.length, total });
        }
      }
    } finally {
      await file.close();
    }

    return this;
  }
}
