import DiscloudApp from "../discloudApp/DiscloudApp";

/**
 * Base for all managers
 */
export default abstract class BaseManager {
  constructor(public readonly discloudApp: DiscloudApp) { }
}