import type { ApiAppBackup, ApiAppBackupAll } from "@discloudapp/api-types/v2";
import { existsSync, type PathLike } from "fs";
import { mkdir, open } from "fs/promises";
import { extname, join } from "path";
import { cwd } from "process";
import type DiscloudApp from "../discloudApp/DiscloudApp";
import { HttpBadStatusError } from "../errors/http";
import Base from "./Base";
import { FlexibleBuffer } from "@discloudapp/util";

/**
 * Callback de progresso do download
 */
export type DownloadProgressCallback = (progress: {
  /**
   * Bytes baixados
   */
  downloaded: number;
  /**
   * Total de bytes (pode ser 0 se o servidor não informar)
   */
  total: number;
}) => void | Promise<void>;

export default class AppBackup extends Base {
  /**
   * Your app id
   */
  readonly appId: string;
  /**
   * The backup url.
   * - You can access it `only once`.
   */
  declare url: string;
  /**
   * The backup status
   */
  declare status?: string;
  /**
   * The backup {@link Buffer}
   */
  declare data?: Buffer;

  constructor(discloudApp: DiscloudApp, data: ApiAppBackupAll | ApiAppBackup) {
    super(discloudApp);

    this.appId = data.id;

    this.url = data.url;

    this._patch(data);
  }

  protected _patch(data: Partial<ApiAppBackupAll | ApiAppBackup>): this {
    if ("status" in data)
      this.status = data.status;

    return super._patch(data);
  }

  /**
   * Make backup of your application
   * 
   * @param path - Backup path
   * @param filename - Backup file name
   * @param onProgress - Callback para acompanhar o progresso do download
   */
  async download(
    path: PathLike = cwd(),
    filename: string = this.appId,
    onProgress?: DownloadProgressCallback,
  ) {
    if (!this.url) throw Error("Missing backup URL");

    path = path.toString();

    if (!existsSync(path)) await mkdir(path, { recursive: true });

    const url = new URL(this.url);

    const response = await fetch(url);

    if (!response.ok) throw HttpBadStatusError.fromResponse(response);

    const contentLength = response.headers.get("content-length");
    const total = contentLength ? parseInt(contentLength) : 0;

    const filepath = join(path, `${filename}${extname(url.pathname)}`);
    const file = await open(filepath, "w");

    const buffer = total > 0 ? FlexibleBuffer.fixed(total) : FlexibleBuffer.flexible();

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
      this.data = buffer.toBuffer();
      if (existsSync(filepath)) this.url = filepath;
      await file.close();
    }

    return this;
  }
}
