import { ApiAppBackup, ApiAppBackupAll } from "@discloudapp/api-types/v2";
import { existsSync, PathLike, writeFileSync } from "node:fs";
import { cwd } from "node:process";
import { fetch } from "undici";
import DiscloudApp from "../discloudApp/DiscloudApp";
import Base from "./Base";

export default class AppBackup<All extends boolean = boolean> extends Base {
  id;
  url;
  status?: string;
  data?: Buffer;

  constructor(discloudApp: DiscloudApp, backup: All extends true ? ApiAppBackupAll : ApiAppBackup) {
    super(discloudApp);

    this.id = backup.id;
    this.url = backup.url;

    if ("status" in backup)
      this.status = backup.status;
  }

  async download(path: PathLike = cwd(), fileName: string = this.id) {
    this.data = Buffer.from(await fetch(this.url).then(res => res.arrayBuffer()));

    const file = `${path}/${fileName}.${this.url.split(".").at(-1)}`;

    writeFileSync(file, this.data);

    if (existsSync(file)) this.url = file;

    return this;
  }
}