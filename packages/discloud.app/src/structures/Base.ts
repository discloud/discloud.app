import DiscloudApp from "../discloudApp/DiscloudApp";

export default abstract class Base {
  #discloudApp: DiscloudApp;

  constructor(discloudApp: DiscloudApp) {
    this.#discloudApp = discloudApp;
  }

  protected _clone(): this {
    return Object.assign(Object.create(this), this);
  }

  protected _patch(data: any): this {
    return data;
  }

  protected _update(data: any): this {
    const clone = this._clone();
    this._patch(data);
    return clone;
  }

  get discloudApp() {
    return this.#discloudApp;
  }
}