import type DiscloudApp from "../discloudApp/DiscloudApp";

/**
 * Base for all managers
 */
export default abstract class BaseManager {
  constructor(readonly discloudApp: DiscloudApp) { }
}
