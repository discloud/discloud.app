import { DiscloudConfigType } from "@discloudapp/api-types/v2";
import { existsSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

export const discloudConfigRequiredScopes = {
  bot: ["MAIN", "NAME", "TYPE", "RAM", "VERSION"],
  site: ["ID", "MAIN", "TYPE", "RAM", "VERSION"],
};

export class DiscloudConfig {
  constructor(public path: string) {
    if (this.path.endsWith("discloud.config"))
      if (this.exists && statSync(this.path).isFile()) return;

    if (this.exists && statSync(this.path).isFile())
      this.path = dirname(this.path);

    this.path = join(path, "discloud.config");
  }

  get data(): DiscloudConfigType {
    if (this.exists) return this.#configToObj(readFileSync(this.path, "utf8"));
    return <DiscloudConfigType>{};
  }

  get exists() {
    return existsSync(this.path);
  }

  get existsMain() {
    if (this.data.MAIN) return existsSync(this.data.MAIN);
  }

  get fileExt() {
    return this.data.MAIN?.split(".").pop();
  }

  get missingProps() {
    return this.#requiredProps.filter(key => !this.data[<keyof DiscloudConfigType>key]);
  }

  get #requiredProps() {
    return discloudConfigRequiredScopes[this.data.TYPE] ?? Object.values(discloudConfigRequiredScopes).flat();
  }

  #objToString(obj: any): string {
    if (typeof obj === "undefined" || obj === null) return "";
    if (typeof obj === "function") return this.#configToObj(obj());
    if (!obj) return `${obj}`;

    const result = [];

    if (typeof obj === "object") {
      if (Array.isArray(obj)) {
        for (const value of obj)
          result.push(this.#objToString(value));
      } else {
        const keys = Object.keys(obj);

        for (const key of keys)
          result.push(`${key}=${this.#objToString(obj[key])}`);
      }
    } else {
      result.push(obj);
    }

    return result.join("\n");
  }

  #configToObj(s: string) {
    if (typeof s !== "string") return {};
    return Object.fromEntries(s.split(/\r?\n/).map(a => a.split("=")));
  }

  update(save: Partial<DiscloudConfigType>): Error | void {
    save = { ...this.data, ...save };

    try {
      writeFileSync(this.path, this.#objToString(save), "utf8");
    } catch (error) {
      return error as Error;
    }
  }
}
