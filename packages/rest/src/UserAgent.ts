import { arch, platform, release, type } from "os";
import { version } from ".";

export interface IUserAgent {
  toString(): string
}

const _product = "DiscloudApp";

function _osProperties() { return `(${type()} ${_formatOsRelease(release())}; ${platform()}; ${arch()})`; }

function _formatOsRelease(r: string) { return r.split?.(".").slice(0, 2).join(".") || r; }

export class UserAgent implements IUserAgent {
  constructor(product?: string, productVersion?: string) {
    this.#product = product || _product;
    this.#version = productVersion || version;
  }

  #userAgent?: string;
  #product: string;
  #version: string;

  #getUserAgent() { return `${this.#product}/${this.#version} ${_osProperties()}`; }

  get product() { return this.#product; }

  get version() { return this.#version; }

  toString() { return this.#userAgent ??= this.#getUserAgent(); }
}
