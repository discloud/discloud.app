import type { ApiAppBackup, ApiAppBackupAll } from "@discloudapp/api-types/v2";
import { existsSync, mkdirSync, writeFileSync, type PathLike } from "fs";
import { join } from "path";
import { cwd } from "process";
import { fetch } from "undici";
import type DiscloudApp from "../discloudApp/DiscloudApp";
import Base from "./Base";

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

    this._patch(data);
  }

  protected _patch(data: Partial<ApiAppBackupAll | ApiAppBackup>): this {
    this.url = data.url!;

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
  async download(path: PathLike = cwd(), fileName: string = this.appId) {
    if (!this.url) throw Error("Missing backup URL");

    path = path.toString();

    if (!existsSync(path)) mkdirSync(path, { recursive: true });

    this.data = await fetch(this.url).then(res => res.arrayBuffer()).then(Buffer.from);

    const file = join(path, `${fileName}.${this.url.split(".").at(-1)}`);

    writeFileSync(file, this.data);

    if (existsSync(file)) this.url = file;

    return this;
  }
}

export default AppBackup;