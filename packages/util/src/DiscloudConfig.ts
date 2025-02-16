import { DiscloudConfigScopes, discloudConfigRequiredScopes, type AppLanguages, type AppTypes, type DiscloudConfigType } from "@discloudapp/api-types/v2";
import EventEmitter from "events";
import { existsSync, readFileSync, statSync, watch, writeFileSync, type FSWatcher, type Stats } from "fs";
import { basename, dirname, join } from "path";
export interface DiscloudConfigEventMap {
  change: [data: DiscloudConfigType]
  disposed: [data: DiscloudConfigType]
  error: [error: Error]
  missing: [data: DiscloudConfigType]
}

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

      if (stats) {
        if (stats.isFile() && basename(this.path) !== DiscloudConfig.filename)
          this.path = dirname(this.path);
      } else {
        this.path = dirname(this.path);
      }

      this.#dir = this.path;

      if (basename(this.path) !== DiscloudConfig.filename)
        this.path = join(this.path, DiscloudConfig.filename);

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
      this.#data = this.#configToObj(content);
      this.#comments = content.split(/\r?\n/).filter(a => /^\s*#/.test(a));
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

  get #requiredProps() {
    return discloudConfigRequiredScopes[this.data.TYPE] ??
      discloudConfigRequiredScopes.common;
  }

  #objToString(obj: any): string {
    if (obj === null || obj === undefined) return "";
    if (!obj) return `${obj}`;
    if (typeof obj === "function") return this.#configToObj(obj());

    const result = [];

    if (typeof obj === "object") {
      if (Array.isArray(obj)) {
        for (const value of obj) {
          result.push(this.#objToString(value));
        }
      } else {
        for (const key in obj) {
          result.push(`${key}=${this.#objToString(obj[key])}`);
        }
      }
    } else {
      result.push(obj);
    }

    return result.filter(Boolean).join("\n");
  }

  #configToObj(s: string) {
    if (typeof s !== "string") return {};

    return this.#processValues(Object.fromEntries(s
      .replace(/\s*#.*/g, "")
      .split(/[\r\n]+/)
      .filter(Boolean)
      .map(line => line.split("="))));
  }

  readonly #nonProcessScopes = new Set([
    DiscloudConfigScopes.APT,
    DiscloudConfigScopes.AVATAR,
    DiscloudConfigScopes.BUILD,
    DiscloudConfigScopes.ID,
    DiscloudConfigScopes.MAIN,
    DiscloudConfigScopes.NAME,
    DiscloudConfigScopes.START,
    DiscloudConfigScopes.TYPE,
    DiscloudConfigScopes.VERSION,
  ]);

  readonly #booleanStringValues = new Set(["true", "false"]);

  #processValues(obj: any) {
    if (typeof obj !== "object" || obj === null) return obj;

    for (const key in obj) {
      if (this.#nonProcessScopes.has(key as DiscloudConfigScopes)) continue;

      const value = obj[key];

      if (!isNaN(Number(value))) {
        obj[key] = Number(value);
        continue;
      }

      if (this.#booleanStringValues.has(obj[key])) {
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
      save = Object.assign(this.data, save);

      writeFileSync(this.path, this.#objToString(
        comments?.length ?
          [comments, save] :
          save,
      ), "utf8");
    } catch (error) {
      return error as Error;
    }
  }
}
