import { discloudConfigRequiredScopes } from "@discloudapp/api-types/v2";
import { existsSync, type FSWatcher, readFileSync, type Stats, statSync, watch } from "fs";
import { readFile, stat, writeFile } from "fs/promises";
import { basename, dirname, extname, join } from "path";
import { fromZodError } from "zod-validation-error";
import { DiscloudConfigPredicate } from "./assertions";
import CommentRepository from "./comments/repository";
import { MissingMainError } from "./errors";
import { type IParser } from "./interfaces/comments/parser";
import { type ICommentRepository } from "./interfaces/comments/repository";
import ConfigParser from "./parser";
import { type ParsedDiscloudConfigData } from "./types";

const enconding = "utf8";

export class DiscloudConfig {
  static readonly filename = "discloud.config";

  static async fromPath(path: string) {
    path = await this.#resolveConfigPath(path);
    const content = await readFile(path, enconding);
    return new DiscloudConfig(path, content);
  }

  static async #resolveConfigPath(path: string) {
    const fileStat = await stat(path).catch(() => null);

    return DiscloudConfig.#resolveConfigPathWithStat(path, fileStat!);
  }

  static #resolveConfigPathSync(path: string) {
    const fileStat = statSync(path, { throwIfNoEntry: false });

    return DiscloudConfig.#resolveConfigPathWithStat(path, fileStat!);
  }

  static #resolveConfigPathWithStat(path: string, fileStat: Stats) {
    if (fileStat?.isFile() && basename(path) !== DiscloudConfig.filename)
      path = dirname(path);

    if (basename(path) !== DiscloudConfig.filename)
      path = join(path, DiscloudConfig.filename);

    return path;
  }

  static validade(data: ParsedDiscloudConfigData) {
    const parsed = DiscloudConfigPredicate.safeParse(data);
    if (!parsed.success) throw fromZodError(parsed.error);
  }

  constructor(path: string)
  constructor(path: string, content: string)
  constructor(readonly path: string, content?: string) {
    if (!content) {
      this.path = DiscloudConfig.#resolveConfigPathSync(this.path);
      content = readFileSync(this.path, enconding);
    }

    this.#dir = dirname(this.path);
    this.#data = this.#parse(content);
  }

  readonly #commentRepository: ICommentRepository = new CommentRepository();
  readonly #parser: IParser = new ConfigParser(this.#commentRepository);
  #data: ParsedDiscloudConfigData = {};
  #dir: string;
  declare protected _watcher?: FSWatcher;

  /** @readonly */
  get data(): ParsedDiscloudConfigData {
    return this.#data;
  }

  get exists() {
    return existsSync(this.path);
  }

  get mainFileExt() {
    if (!this.data.MAIN) return;
    return extname(this.data.MAIN);
  }

  get missingProps() {
    return this.#requiredProps.filter(key => !this.data[key]);
  }

  get #requiredProps() {
    return discloudConfigRequiredScopes[this.data.TYPE || "common"] ??
      discloudConfigRequiredScopes.common;
  }

  dispose() {
    if (this._watcher) {
      this._watcher.removeAllListeners().close();
      delete this._watcher;
    }

    this.#commentRepository.clear();
  }

  async existsMain() {
    if (!this.data.MAIN) return false;
    try { return await stat(join(this.#dir, this.data.MAIN)).then(fileStat => fileStat.isFile()); }
    catch { return false; }
  }

  get<K extends keyof ParsedDiscloudConfigData>(key: K): ParsedDiscloudConfigData[K] {
    return this.data[key];
  }

  async set<K extends keyof ParsedDiscloudConfigData>(key: K, value: ParsedDiscloudConfigData[K]) {
    await this.update({ [key]: value });
  }

  async update(config: Partial<ParsedDiscloudConfigData>) {
    config = Object.assign(this.data, config);

    const content = this.#stringify(config);

    await writeFile(this.path, content, enconding);
  }

  validate(): Promise<void>
  validate(doNotThrowIfInvalid: true): Promise<boolean>
  async validate(doNotThrowIfInvalid?: boolean): Promise<boolean | void> {
    if (doNotThrowIfInvalid) {
      try {
        await this.validate();
        return true;
      } catch {
        return false;
      }
    }

    DiscloudConfig.validade(this.data);
    if (!await this.existsMain()) throw new MissingMainError();
  }

  watch() {
    if (existsSync(this.path))
      this._watcher ??= watch(this.path, { persistent: false })
        .on("change", () => this.#onChange())
        .on("close", () => this.dispose());

    return this;
  }

  async #onChange() {
    if (existsSync(this.path))
      this.#data = await this.#readFile();
  }

  #parse<T>(s: string): T {
    if (typeof s !== "string") return {} as T;

    return this.#parser.parse(s);
  }

  async #readFile<T>() {
    const content = await readFile(this.path, enconding);
    return this.#parse<T>(content);
  }

  #stringify(obj: unknown): string {
    return this.#parser.stringify(obj);
  }

  [Symbol.dispose]() {
    this.dispose();
  }
}
