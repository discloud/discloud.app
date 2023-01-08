import DiscloudApp from "../discloudApp/DiscloudApp";

export default abstract class BaseManager {
  constructor(public readonly discloudApp: DiscloudApp) { }
}