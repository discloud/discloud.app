import { DiscloudConfigScopes, discloudConfigRequiredScopes, type DiscloudConfigType } from "@discloudapp/api-types/v2";
import EventEmitter from "events";
import { FSWatcher, existsSync, readFileSync, statSync, watch, writeFileSync } from "fs";
import { basename, dirname, join } from "path";
export interface DiscloudConfigEventMap {
  change: [data: DiscloudConfigType]
  disposed: [data: DiscloudConfigType]
  error: [error: Error]
  missing: [data: DiscloudConfigType]
}

export class DiscloudConfig extends EventEmitter<DiscloudConfigEventMap> {
  static readonly fileName = "discloud.config";
  #watcher?: FSWatcher;
  #data: DiscloudConfigType = <any>{};
  #comments: string[] = [];

  constructor(public readonly path: string) {
    super({ captureRejections: true });

    try {
      this.path = join(...path.split(/[\\/]/g));

      while (!this.exists) this.path = dirname(this.path);

      if (this.exists && this.isFile && basename(this.path) !== DiscloudConfig.fileName) {
        this.path = dirname(this.path);
      }

      this.path = join(this.path, DiscloudConfig.fileName);

      if (this.isFile) {
        this.#watch();
        this.#onChange();
      }
    } catch { }
  }

  dispose() {
    this.emit("disposed", this.#data);
    this.removeAllListeners();
    this.#watcher?.removeAllListeners().close();
  }

  #watch() {
    try {
      this.#watcher = watch(this.path).on("change", this.#onChange).once("close", () => this.dispose());
    } catch (_) { }
  }

  #onChange() {
    try {
      const content = readFileSync(this.path, "utf8");
      this.#data = this.#configToObj(content);
      this.#comments = content.split(/\r?\n/).filter(a => /^\s*#/.test(a));
      this.emit("change", this.#data);
    } catch {
      this.emit("missing", this.#data);
      this.#data = <any>{};
      this.#comments = [];
    }
  }

  get comments() {
    return this.#comments;
  }

  get data(): DiscloudConfigType {
    return this.#data;
  }

  get exists() {
    return existsSync(this.path);
  }

  get isFile() {
    try {
      return statSync(this.path).isFile();
    } catch (_) {
      return false;
    }
  }

  get existsMain() {
    const mainPath = join(dirname(this.path), this.data.MAIN);

    if (existsSync(mainPath)) {
      const stats = statSync(mainPath);

      if (stats.isFile()) return "file";

      if (stats.isDirectory()) return "dir";
    }

    return false;
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

    return result.filter(Boolean).join("\n");
  }

  #configToObj(s: string) {
    if (typeof s !== "string") return {};

    return this.#processValues(Object.fromEntries(s
      .replace(/\s*#.*/g, "")
      .split(/[\r\n]/)
      .filter(Boolean)
      .map(line => line.split("="))));
  }

  readonly #nonProcessScopes = [
    DiscloudConfigScopes.APT,
    DiscloudConfigScopes.AVATAR,
    DiscloudConfigScopes.BUILD,
    DiscloudConfigScopes.ID,
    DiscloudConfigScopes.MAIN,
    DiscloudConfigScopes.NAME,
    DiscloudConfigScopes.START,
    DiscloudConfigScopes.TYPE,
    DiscloudConfigScopes.VERSION,
  ];

  #processValues(obj: any) {
    if (!obj) return obj;

    const keys = Object.keys(obj) as DiscloudConfigScopes[];

    for (const key of keys) {
      if (this.#nonProcessScopes.includes(key)) continue;

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
