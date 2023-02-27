import { DiscloudConfigType } from "@discloudapp/api-types/v2";
import { exists, read, write } from "fs-jetpack";
import { dirname, join } from "node:path";

export const discloudConfigRequiredScopes = {
  bot: ["MAIN", "NAME", "TYPE", "RAM", "VERSION"],
  site: ["ID", "MAIN", "TYPE", "RAM", "VERSION"],
  common: ["MAIN", "TYPE", "RAM", "VERSION"],
};

export class DiscloudConfig {
  constructor(public path: string) {
    try {
      if (this.exists === "file") {
        if (this.path.endsWith("discloud.config")) return;

        this.path = dirname(this.path);
      }

      this.path = join(this.path, "discloud.config");
    } catch { }
  }

  get comments() {
    try {
      return read(this.path, "utf8")
        ?.split(/\r?\n/)
        .filter(a => /^\s*#/.test(a)) ?? [];
    } catch {
      return [];
    }
  }

  get data(): DiscloudConfigType {
    try {
      return this.#configToObj(read(this.path, "utf8")!);
    } catch (error) {
      return <any>{};
    }
  }

  get exists() {
    try {
      return exists(this.path);
    } catch {
      return false;
    }
  }

  get existsMain() {
    if (this.data.MAIN) return exists(this.data.MAIN);
  }

  get fileExt() {
    return this.data.MAIN?.split(".").pop();
  }

  get missingProps() {
    return this.#requiredProps
      .filter(key => !this.data[<keyof DiscloudConfigType>key]);
  }

  get #requiredProps() {
    return discloudConfigRequiredScopes[this.data.TYPE] ??
      discloudConfigRequiredScopes.common;
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

    return result.filter(line => line).join("\n");
  }

  #configToObj(s: string) {
    if (typeof s !== "string") return {};

    return this.#processValues(Object.fromEntries(s
      .replace(/\s*#.*/g, "")
      .split(/[\r\n]/)
      .filter(line => line)
      .map(line => line.split("="))));
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

  get<K extends keyof DiscloudConfigType>(key: K): DiscloudConfigType[K] {
    return this.data[key];
  }

  set<K extends keyof DiscloudConfigType>(key: K, value: DiscloudConfigType[K]) {
    this.update({ [key]: value });
  }

  update(save: Partial<DiscloudConfigType>, comments: string[] = this.comments): Error | void {
    try {
      save = { ...this.data, ...save };

      write(this.path, this.#objToString(
        comments?.length ?
          [comments, save] :
          save,
      ));
    } catch (error) {
      return error as Error;
    }
  }
}
