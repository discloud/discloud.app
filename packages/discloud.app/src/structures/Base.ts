import DiscloudApp from "../discloudApp/DiscloudApp";

export default abstract class Base {
  #discloudApp: DiscloudApp;

  constructor(discloudApp: DiscloudApp) {
    this.#discloudApp = discloudApp;
  }

  get discloudApp() {
    return this.#discloudApp;
  }
}