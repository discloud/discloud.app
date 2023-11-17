import { Constructor } from "../@types";
import DiscloudApp from "../discloudApp/DiscloudApp";

interface Base {
  constructor: Constructor<this>
}

/**
 * Base for all structures
 */
abstract class Base {
  declare public readonly discloudApp: DiscloudApp;

  constructor(discloudApp: DiscloudApp) {
    Object.defineProperty(this, "discloudApp", { value: discloudApp });
  }

  protected _clone(): this {
    return Object.assign(Object.create(this), this);
  }

  protected _patch(data: unknown): this {
    return this;
  }

  protected _update(data: unknown): this {
    const clone = this._clone();
    this._patch(data);
    return clone;
  }
}

export default Base;