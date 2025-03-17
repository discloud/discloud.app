import { importJSON } from "@discloudapp/util";
import { arch, platform, release, type } from "os";
import { PackageLocation } from "./utils";

export interface IUserAgent {
  toString(): string
}

export default class UserAgent implements IUserAgent {
  constructor(
    readonly prefix?: string,
    readonly version?: string,
  ) { }

  #getUserAgent() {
    const osRelease = release().split?.(".").slice(0, 2).join(".") ?? release();
    return `${this.prefix}/${this.#getVersion()} (${type()} ${osRelease}; ${platform()}; ${arch()})`;
  }

  #getVersion() {
    return this.version ?? (this.#version ??= importJSON<{ version: string }>(PackageLocation).version);
  }

  #userAgent!: string;
  #version!: string;

  toString() {
    return this.#userAgent ??= this.#getUserAgent();
  }
}
