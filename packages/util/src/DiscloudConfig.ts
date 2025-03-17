import { discloudConfigRequiredScopes, DiscloudConfigScopes, type AppLanguages, type AppTypes, type DiscloudConfigType } from "@discloudapp/api-types/v2";
import EventEmitter from "events";
import { existsSync, readFileSync, statSync, watch, writeFileSync, type FSWatcher, type Stats } from "fs";
import { basename, dirname, join } from "path";
import { parseEnv } from "util";
export interface DiscloudConfigEventMap {
  change: [data: DiscloudConfigType]
  disposed: [data: DiscloudConfigType]
  error: [error: Error]
  missing: [data: DiscloudConfigType]
}

const VERSION_REGEXP = /^(current|latest|suja|(?:\d+(?:\.[\dx]+){0,2}))$/;
const STRING_BOOLEAN = new Set(["false", "true"]);

export class DiscloudConfig<T extends AppTypes = AppTypes, V extends AppLanguages = AppLanguages> extends EventEmitter<DiscloudConfigEventMap> {
  static readonly filename = "discloud.config";

  #comments: string[] = [];
  #data: DiscloudConfigType<T, V> = <any>{};
  #dir: string;
  #disposed = false;
  #watcher?: FSWatcher;
  #stats: Stats | null = null;

  constructor(readonly path: string) {
    super({ captureRejections: true });

    this.#dir = this.path;

    try {
      const stats = this.stats;

      if (stats && stats.isFile() && basename(this.path) !== DiscloudConfig.filename)
        this.path = dirname(this.path);

      if (basename(this.path) !== DiscloudConfig.filename)
        this.path = join(this.path, DiscloudConfig.filename);

      this.#dir = dirname(this.path);

      this.#stats = this.exists ? statSync(this.path) : null;

      if (this.isFile) {
        this.#watch();
        this.#onChange();
      }
    } catch { }
  }

  dispose() {
    this.#watcher?.removeAllListeners().close();
    this.emit("disposed", this.#data);
    this.removeAllListeners();
    this.#disposed = true;
  }

  #watch() {
    try {
      this.#watcher = watch(this.path)
        .on("change", () => this.#onChange())
        .once("close", () => this.dispose());
    } catch (_) { }
  }

  #onChange() {
    try {
      this.#stats = statSync(this.path);
      const content = readFileSync(this.path, "utf8");
      this.#data = this.#parseConfigContent(content);
      this.#comments = content.split(/[\r\n]+/).filter(a => /^\s*#/.test(a));
      this.emit("change", this.#data);
    } catch {
      this.#stats = null;
      this.emit("missing", this.#data);
      this.#data = <any>{};
      this.#comments = [];
    }
  }

  get disposed() {
    return this.#disposed;
  }

  get comments() {
    return this.#comments;
  }

  get data(): DiscloudConfigType<T, V> {
    return this.#data;
  }

  get exists() {
    return existsSync(this.path);
  }

  get stats() {
    if (this.exists) try { return this.#stats ??= statSync(this.path); } catch { }
    this.#stats = null;
    return null;
  }

  get isFile() {
    if (this.exists) try { return (this.#stats ??= statSync(this.path)).isFile(); } catch { }
    return false;
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

  get isValid() {
    return this.exists && !this.missingProps.length && this.#isValidTYPE;
  }

  get #isValidTYPE() {
    switch (this.data.TYPE) {
      case "bot":
        return this.data.MAIN && this.existsMain && this.#isValidRAM && this.#isValidVERSION && this.#isValidNAME;

      case "site":
        return this.data.MAIN && this.existsMain && this.#isValidRAM && this.#isValidVERSION && this.#isValidID;

      default:
        return false;
    }
  }

  get #isValidID() {
    switch (this.data.TYPE) {
      case "bot":
        return true;

      case "site":
        return this.data.ID.length > 0;

      default:
        return false;
    }
  }

  get #isValidNAME() {
    switch (this.data.TYPE) {
      case "bot":
        return this.data.NAME && this.data.NAME.length <= 30;

      case "site":
        return true;

      default:
        return false;
    }
  }

  get #isValidRAM() {
    switch (this.data.TYPE) {
      case "bot":
        return this.data.RAM >= 100;

      case "site":
        return this.data.RAM >= 512;

      default:
        return false;
    }
  }

  get #isValidVERSION() {
    return this.data.VERSION && VERSION_REGEXP.test(this.data.VERSION);
  }

  get #requiredProps() {
    return discloudConfigRequiredScopes[this.data.TYPE] ??
      discloudConfigRequiredScopes.common;
  }

  #stringifyConfigObject(obj: any): string {
    if (obj === null || obj === undefined) return "";
    if (!obj) return `${obj}`;
    if (typeof obj === "function") return this.#stringifyConfigObject(obj());

    const result = [];

    if (typeof obj === "object") {
      if (Array.isArray(obj)) {
        for (let i = 0; i < obj.length; i++) {
          result.push(this.#stringifyConfigObject(obj[i]));
        }
      } else {
        for (const key in obj) {
          result.push(`${key}=${this.#stringifyConfigObject(obj[key])}`);
        }
      }
    } else {
      result.push(obj);
    }

    return result.filter(Boolean).join("\n");
  }

  #parseConfigContent(s: string) {
    if (typeof s !== "string") return {};

    return this.#processValues(parseEnv(s));
  }

  #processValues(obj: any) {
    if (typeof obj !== "object" || obj === null) return obj;

    let key = DiscloudConfigScopes.APT;
    if (key in obj) obj[key] = obj[key].split(/\s*,\s*/g).filter(Boolean);

    key = DiscloudConfigScopes.AUTORESTART;
    if (key in obj && STRING_BOOLEAN.has(obj[key])) obj[key] = obj[key] == true;

    key = DiscloudConfigScopes.RAM;
    if (key in obj && !isNaN(obj[key])) obj[key] = Number(obj[key]);

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
      save = Object.assign(this.data, save);

      writeFileSync(this.path, this.#stringifyConfigObject(
        comments?.length ?
          [comments, save] :
          save,
      ), "utf8");
    } catch (error) {
      return error as Error;
    }
  }
}
