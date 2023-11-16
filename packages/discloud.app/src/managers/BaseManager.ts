import DiscloudApp from "../discloudApp/DiscloudApp";

/**
 * Base for all managers
 */
export default abstract class BaseManager {
  declare public readonly discloudApp: DiscloudApp;

  constructor(discloudApp: DiscloudApp) {
    Object.defineProperty(this, "discloudApp", { value: discloudApp });
  }
}