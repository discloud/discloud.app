import { type ApiDomain, type RESTDeleteApiCustomdomainResult, type RESTGetApiCustomdomainListResult, type RESTGetApiCustomdomainResult, type RESTGetApiCustomdomainVerifyResult, type RESTPostApiCustomdomainCreateResult, type RESTPutApiCustomdomainEditResult, Routes } from "@discloudapp/api-types/v2";
import { DiscloudAPIError } from "@discloudapp/rest";
import { constants } from "http2";
import type DiscloudApp from "../discloudApp/DiscloudApp";
import Customdomain from "../structures/Customdomain";
import { validateNonEmptyString } from "../util/assertions";
import BaseCustomdomainsManager from "./BaseCustomdomainsManager";

/**
 * Manager for customdomains on Discloud
 */
export default class CustomdomainsManager extends BaseCustomdomainsManager<typeof Customdomain> {
  constructor(discloudApp: DiscloudApp) {
    super(discloudApp, Customdomain);
  }

  /**
   * @throws `400`
   * @throws `403`
   * @throws `404` not found
   * @throws `409` duplicate
   * 
   * @param id - You subdomain id.
   */
  async create(appId: string, domain: string) {
    const data = await this.discloudApp.rest.post<RESTPostApiCustomdomainCreateResult>(Routes.customdomainCreate(), {
      body: {
        appID: appId,
        domainName: domain,
      },
    });

    return this._add(data.domain);
  }

  /**
   * @throws `400`
   * @throws `403`
   * @throws `404` not found
   * 
   * @param domain - You domain id.
   */
  async delete(domain: string) {
    await this.discloudApp.rest.post<RESTDeleteApiCustomdomainResult>(Routes.customdomainRemove(domain));
  }

  /**
   * @throws `400`
   * @throws `403`
   * @throws `404` not found
   * 
   * @param domain - You domain id.
   * @param appId - You app id.
   */
  async edit(domain: string, appId: string) {
    await this.discloudApp.rest.post<RESTPutApiCustomdomainEditResult>(Routes.customdomainEdit(domain), {
      body: {
        newAppID: appId,
      },
    });

    this._patch(domain, { app: { id: appId } } as Partial<ApiDomain>);
  }

  /**
   * @throws `400`
   * @throws `403`
   * @throws `404` not found
   * @throws `500` external error
   * 
   * @param domain - You domain id.
   */
  async verify(domain: string) {
    const data = await this.discloudApp.rest.post<RESTGetApiCustomdomainVerifyResult>(Routes.customdomainVerify(domain));

    return this._add(data.domain);
  }

  /**
   * Get information of your customdomain on Discloud.
   * 
   * @param id - You customdomain id.
   */
  async fetch(id: string): Promise<Customdomain>
  async fetch(id?: "all"): Promise<Map<string, Customdomain>>
  async fetch(id: string = "all") {
    if (id === "all") return this.#fetchMany();

    validateNonEmptyString(id);

    try {
      const data = await this.discloudApp.rest.get<RESTGetApiCustomdomainResult>(Routes.customdomain(id));

      return this._add(data.domain);
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
      const data = await this.discloudApp.rest.get<RESTGetApiCustomdomainListResult>(Routes.customdomain("all"));

      this._clear(data.domains);

      return this._addMany(data.domains);
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