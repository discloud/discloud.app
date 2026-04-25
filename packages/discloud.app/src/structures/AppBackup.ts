import type { ApiAppBackup, ApiAppBackupAll } from "@discloudapp/api-types/v2";
import { existsSync, type PathLike } from "fs";
import { mkdir, writeFile } from "fs/promises";
import { extname, join } from "path";
import { cwd } from "process";
import type DiscloudApp from "../discloudApp/DiscloudApp";
import Base from "./Base";
import { HttpBadStatusError } from "../errors/http";

class AppBackup extends Base {
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
   */
  async download(path: PathLike = cwd(), filename: string = this.appId) {
    if (!this.url) throw Error("Missing backup URL");

    path = path.toString();

    if (!existsSync(path)) await mkdir(path, { recursive: true });

    const url = new URL(this.url);

    const response = await fetch(url);

    if (!response.ok) throw HttpBadStatusError.fromResponse(response);

    this.data = await response.arrayBuffer().then(Buffer.from);

    const filepath = join(path, `${filename}${extname(url.pathname)}`);

    await writeFile(filepath, this.data);

    if (existsSync(filepath)) this.url = filepath;

    return this;
  }
}

export default AppBackup;