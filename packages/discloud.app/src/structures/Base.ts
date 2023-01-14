import { Constructor } from "../@types";
import DiscloudApp from "../discloudApp/DiscloudApp";

interface Base {
  constructor: Constructor<this>
}

/**
 * Base for all structures
 */
abstract class Base {
  constructor(public readonly discloudApp: DiscloudApp) { }

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