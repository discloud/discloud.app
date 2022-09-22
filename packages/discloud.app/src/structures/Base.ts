import { Constructor } from "../@types";
import DiscloudApp from "../discloudApp/DiscloudApp";

interface Base {
  constructor: Constructor<this>
}

abstract class Base {
  #discloudApp: DiscloudApp;

  constructor(discloudApp: DiscloudApp) {
    this.#discloudApp = discloudApp;
  }

  get discloudApp() {
    return this.#discloudApp;
  }

  protected _clone(): this {
    return Object.assign(Object.create(this), this);
  }

  protected _patch(data: unknown): this {
    Object.assign(this, { ...this, ...new this.constructor(this.discloudApp, data) });
    return this;
  }

  protected _update(data: unknown): this {
    const clone = this._clone();
    this._patch(data);
    return clone;
  }
}

export default Base;