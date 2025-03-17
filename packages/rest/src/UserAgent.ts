import { importJSON } from "@discloudapp/util";
import { arch, platform, release, type } from "os";

export interface IUserAgent {
  toString(): string
}

export default class UserAgent implements IUserAgent {
  constructor(
    readonly prefix?: string,
    readonly version?: string,
  ) {
    this.version ??= importJSON<{ version: string }>("package.json").version;
  }

  #getUserAgent() {
    const osRelease = release().split?.(".").slice(0, 2).join(".") ?? release();
    return `${this.prefix}/${this.version} (${type()} ${osRelease}; ${platform()}; ${arch()})`;
  }

  #userAgent!: string;

  toString() {
    return this.#userAgent ??= this.#getUserAgent();
  }
}
