import { Constructor } from "../@types";
import DiscloudApp from "../discloudApp/DiscloudApp";
import BaseManager from "./BaseManager";

/**
 * Manager for data
 */
export default abstract class DataManager<T> extends BaseManager {
  constructor(discloudApp: DiscloudApp, protected holds: Constructor<T>) {
    super(discloudApp);
  }

  abstract get cache(): Map<string, T>
}