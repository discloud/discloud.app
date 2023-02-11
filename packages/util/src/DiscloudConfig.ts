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

  get comments() {
    if (this.exists) return readFileSync(this.path, "utf8").split(/\r?\n/).filter(a => /^\s*#/.test(a));
    return [];
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

    return this.#processValues(Object.fromEntries(s
      .split(/\r?\n/)
      .filter(a => !/^\s*#/.test(a))
      .filter(a => a)
      .map(a => a.split("="))));
  }

  #processValues(obj: any) {
    if (!obj) return obj;

    const keys = Object.keys(obj);

    for (const key of keys) {
      if (["APT", "AVATAR", "ID", "MAIN", "NAME", "TYPE", "VERSION"].includes(key)) continue;

      const value = obj[key];

      if (!isNaN(Number(value))) {
        obj[key] = Number(value);
        continue;
      }

      if (["true", "false"].includes(obj[key])) {
        obj[key] = value == "true";
        continue;
      }
    }

    return obj;
  }

  get<T = any>(key: string): T | undefined {
    return (<any>this.data)[key];
  }

  set(key: string, value: any) {
    this.update({ [key]: value });
  }

  update(save: Partial<DiscloudConfigType>, comments: string[] = this.comments): Error | void {
    save = { ...this.data, ...save };

    try {
      writeFileSync(this.path, this.#objToString([comments, save]), "utf8");
    } catch (error) {
      return error as Error;
    }
  }
}
