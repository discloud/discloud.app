import { ApiAppBackup, ApiAppBackupAll } from "@discloudapp/api-types/v2";
import { existsSync, PathLike, writeFileSync } from "node:fs";
import { cwd } from "node:process";
import { fetch } from "undici";
import DiscloudApp from "../discloudApp/DiscloudApp";
import Base from "./Base";

class AppBackup extends Base {
  /**
   * Your app id
   */
  declare id: string;
  /**
   * The backup url.
   * - You can access it `only once`.
   */
  declare url: string;
  /**
   * The backup status
   */
  status?: string;
  /**
   * The backup {@link Buffer}
   */
  data?: Buffer;

  constructor(discloudApp: DiscloudApp, data: ApiAppBackupAll | ApiAppBackup) {
    super(discloudApp);

    this._patch(data);
  }

  protected _patch(data: ApiAppBackupAll | ApiAppBackup): this {
    this.id = data.id;
    this.url = data.url;

    if ("status" in data)
      this.status = data.status;

    return super._patch(data);
  }

  /**
   * Make backup of your application
   * 
   * @param path - Backup path
   * @param fileName - Backup file name
   */
  async download(path: PathLike = cwd(), fileName: string = this.id) {
    this.data = await fetch(this.url).then(res => res.arrayBuffer()).then(Buffer.from);

    const file = `${path}/${fileName}.${this.url.split(".").at(-1)}`;

    writeFileSync(file, this.data);

    if (existsSync(file)) this.url = file;

    return this;
  }
}

export default AppBackup;