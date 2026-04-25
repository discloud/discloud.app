import { type RESTDeleteApiSubdomainResult, type RESTGetApiSubdomainListResult, type RESTGetApiSubdomainResult, type RESTPostApiSubdomainResult, Routes } from "@discloudapp/api-types/v2";
import { DiscloudAPIError } from "@discloudapp/rest";
import { constants } from "http2";
import type DiscloudApp from "../discloudApp/DiscloudApp";
import Subdomain from "../structures/Subdomain";
import { validateSubdomainId } from "../util/assertions";
import BaseSubdomainsManager from "./BaseSubdomainsManager";

/**
 * Manager for subdomains on Discloud
 */
export default class SubdomainsManager extends BaseSubdomainsManager<typeof Subdomain> {
  constructor(discloudApp: DiscloudApp) {
    super(discloudApp, Subdomain);
  }

  /**
   * @throws `400`
   * @throws `403`
   * @throws `409` duplicate
   * 
   * @param id - You subdomain id.
   */
  async create(id: string) {
    validateSubdomainId(id);

    const data = await this.discloudApp.rest.post<RESTPostApiSubdomainResult>(Routes.subdmain(id));

    return this._add(data.subdomain);
  }

  /**
   * @throws `400`
   * @throws `403`
   * @throws `404` not found
   * @throws `409` duplicate
   * 
   * @param id - You subdomain id.
   */
  async delete(id: string) {
    validateSubdomainId(id);

    await this.discloudApp.rest.delete<RESTDeleteApiSubdomainResult>(Routes.subdmain(id));
  }

  /**
   * Get information of your subdomain on Discloud.
   * 
   * @throws `403`
   * 
   * @param id - You subdomain id.
   */
  async fetch(id: string): Promise<Subdomain>
  /**
   * @throws `403`
   * @throws `404` not found
   * 
   * @param id - You subdomain id.
   */
  async fetch(id?: "all"): Promise<Map<string, Subdomain>>
  async fetch(id: string = "all") {
    if (id === "all") return this.#fetchMany();

    validateSubdomainId(id);

    try {
      const data = await this.discloudApp.rest.get<RESTGetApiSubdomainResult>(Routes.subdmain(id));

      return this._add(data.subdomain);
    } catch (error) {
      if (error instanceof DiscloudAPIError) {
        switch (error.code) {
          case constants.HTTP_STATUS_NOT_FOUND:
            this._delete(id);
            break;

          default: throw error;
        }
      }

      throw error;
    }
  }

  async #fetchMany() {
    try {
      const data = await this.discloudApp.rest.get<RESTGetApiSubdomainListResult>(Routes.subdmain("all"));

      this._clear(data.subdomains);

      return this._addMany(data.subdomains);
    } catch (error) {
      if (error instanceof DiscloudAPIError) {
        switch (error.code) {
          case constants.HTTP_STATUS_NOT_FOUND:
            this._clear();
            break;

          default: throw error;
        }
      }

      throw error;
    }
  }
}