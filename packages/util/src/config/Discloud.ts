import { discloudConfigRequiredScopes, DiscloudConfigScopes, type DiscloudConfigType } from "@discloudapp/api-types/v2";
import { existsSync, type FSWatcher, readFileSync, statSync, watch } from "fs";
import { readFile, writeFile } from "fs/promises";
import { basename, dirname, join } from "path";
import { parseEnv } from "util";
import { fromZodError } from "zod-validation-error";
import { DiscloudConfigPredicate } from "./assertions";
import { MissingMainError } from "./errors";

const STRING_BOOLEAN = new Set(["false", "true"]);

export default class DiscloudConfig {
  static readonly filename = "discloud.config";

  static validade(data: DiscloudConfigType) {
    const parsed = DiscloudConfigPredicate.safeParse(data);
    if (!parsed.success) throw fromZodError(parsed.error);
  }

  constructor(readonly path: string) {
    const stats = statSync(this.path, { throwIfNoEntry: false });

    if (stats?.isFile() && basename(this.path) !== DiscloudConfig.filename)
      this.path = dirname(this.path);

    if (basename(this.path) !== DiscloudConfig.filename)
      this.path = join(this.path, DiscloudConfig.filename);

    this.#dir = dirname(this.path);

    if (existsSync(this.path))
      this.#data = this.#readFileSync();
  }

  #data: DiscloudConfigType = {} as DiscloudConfigType;
  #dir: string;
  #watcher!: FSWatcher | null;

  get data(): DiscloudConfigType {
    return this.#data;
  }

  get exists() {
    return existsSync(this.path);
  }

  get existsMain() {
    const mainPath = join(this.#dir, this.data.MAIN);
    return existsSync(mainPath) && statSync(mainPath).isFile();
  }

  get mainFileExt() {
    return this.data.MAIN?.split(".").pop();
  }

  get missingProps() {
    return this.#requiredProps
      .filter(key => !this.data[<keyof DiscloudConfigType>key]);
  }

  dispose() {
    this.#watcher?.removeAllListeners().close();
    this.#watcher = null;
  }

  validate(): void
  validate(doNotThrowIfInvalid: true): boolean
  validate(doNotThrowIfInvalid?: boolean) {
    if (doNotThrowIfInvalid) {
      try {
        this.validate();
        return true;
      } catch {
        return false;
      }
    }

    DiscloudConfig.validade(this.data);
    if (!this.existsMain) throw new MissingMainError();
  }

  watch() {
    if (existsSync(this.path))
      this.#watcher ??= watch(this.path, { persistent: false })
        .on("change", () => this.#onChange())
        .on("close", () => this.dispose());

    return this;
  }

  get<K extends keyof DiscloudConfigType>(key: K): DiscloudConfigType[K] {
    return this.data[key];
  }

  async set<K extends keyof DiscloudConfigType>(key: K, value: DiscloudConfigType[K]) {
    await this.update({ [key]: value });
  }

  async update(config: Partial<DiscloudConfigType>) {
    config = Object.assign(this.data, config);

    const content = this.#stringifyConfigObject(config);

    await writeFile(this.path, content, "utf8");
  }

  get #requiredProps() {
    return discloudConfigRequiredScopes[this.data.TYPE] ??
      discloudConfigRequiredScopes.common;
  }

  async #onChange() {
    if (existsSync(this.path))
      this.#data = await this.#readFile();
  }

  async #readFile() {
    const content = await readFile(this.path, "utf8");
    return this.#parseConfigContent(content);
  }

  #readFileSync() {
    const content = readFileSync(this.path, "utf8");
    return this.#parseConfigContent(content);
  }

  #stringifyConfigObject(obj: any): string {
    if (obj === undefined || obj === null) return "";
    if (!obj) return `${obj}`;

    switch (typeof obj) {
      case "bigint":
      case "number":
        return `${obj}`;

      case "string":
        return obj;

      case "symbol":
        return String(obj);

      case "object": {
        const result = [];

        if (Array.isArray(obj)) {
          for (let i = 0; i < obj.length; i++)
            result.push(this.#stringifyConfigObject(obj[i]));
        } else {
          for (const key in obj)
            result.push(`${key}=${this.#stringifyConfigObject(obj[key])}`);
        }

        return result.filter(Boolean).join("\n");
      }

      default:
        return `${obj}`;
    }
  }

  #parseConfigContent(s: string) {
    if (typeof s !== "string") return {};

    return this.#parseValues(parseEnv(s));
  }

  #parseValues(obj: any) {
    if (typeof obj !== "object" || obj === null) return obj;

    let key = DiscloudConfigScopes.APT;
    if (key in obj) obj[key] = obj[key].split(/\s*,\s*/g).filter(Boolean);

    key = DiscloudConfigScopes.AUTORESTART;
    if (key in obj && STRING_BOOLEAN.has(obj[key])) obj[key] = obj[key] == true;

    key = DiscloudConfigScopes.RAM;
    if (key in obj && !isNaN(obj[key])) obj[key] = Number(obj[key]);

    return obj;
  }
}
