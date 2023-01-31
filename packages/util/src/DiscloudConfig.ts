import { DiscloudConfig as DiscloudConfigType } from "@discloudapp/api-types/v2";
import { existsSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

export const discloudConfigRequiredScopes = {
  bot: ["MAIN", "NAME", "TYPE", "RAM", "VERSION"],
  site: ["ID", "MAIN", "TYPE", "RAM", "VERSION"],
};

export class DiscloudConfig {
  constructor(public path: string) {
    if (this.path.endsWith("discloud.config"))
      if (existsSync(this.path) && statSync(this.path).isFile()) return;

    if (existsSync(this.path) && statSync(this.path).isFile())
      this.path = dirname(this.path);

    this.path = join(path, "discloud.config");
  }

  get data(): DiscloudConfigType {
    if (this.exists)
      return this.#configToObj(readFileSync(this.path, "utf8"));

    return <DiscloudConfigType>{};
  }

  get exists() {
    return existsSync(this.path);
  }

  get fileExt() {
    return this.data.MAIN?.split(".").pop();
  }

  get missingProps() {
    return this.#requiredProps.filter(key => !this.data[<keyof DiscloudConfigType>key]);
  }

  get #requiredProps() {
    return discloudConfigRequiredScopes[this.data.TYPE] ?? Object.values(discloudConfigRequiredScopes);
  }

  #objToString(obj: any, sep = "="): string {
    if (!obj) return `${obj}`;

    const result = [];

    if (typeof obj === "object") {
      if (Array.isArray(obj)) {
        for (let i = 0; i < obj.length; i++)
          result.push(this.#objToString(obj[i]));
      } else {
        const keys = Object.keys(obj);

        for (let i = 0; i < keys.length; i++)
          result.push(`${keys[i]}${sep}${this.#objToString(obj[keys[i]])}`);
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
      writeFileSync(this.path, this.#objToString(save, "="), "utf8");
    } catch (error) {
      return error as Error;
    }
  }
}