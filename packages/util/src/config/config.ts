import { discloudConfigRequiredScopes, type DiscloudConfigType } from "@discloudapp/api-types/v2";
import { existsSync, type FSWatcher, readFileSync, statSync, watch } from "fs";
import { readFile, writeFile } from "fs/promises";
import { basename, dirname, join } from "path";
import { fromZodError } from "zod-validation-error";
import { DiscloudConfigPredicate } from "./assertions";
import CommentRepository from "./comments/repository";
import { MissingMainError } from "./errors";
import { type IParser } from "./interfaces/comments/parser";
import { type ICommentRepository } from "./interfaces/comments/repository";
import ConfigParser from "./parser";

export class DiscloudConfig {
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

  readonly #commentRepository: ICommentRepository = new CommentRepository();
  readonly #parser: IParser = new ConfigParser(this.#commentRepository);
  #data: DiscloudConfigType = {} as DiscloudConfigType;
  #dir: string;
  declare protected _watcher?: FSWatcher;

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
    if (this._watcher) {
      this._watcher.removeAllListeners().close();
      delete this._watcher;
    }

    this.#commentRepository.clear();
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
      this._watcher ??= watch(this.path, { persistent: false })
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

    const content = this.#stringify(config);

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

  async #readFile<T>() {
    const content = await readFile(this.path, "utf8");
    return this.#parse<T>(content);
  }

  #readFileSync<T>() {
    const content = readFileSync(this.path, "utf8");
    return this.#parse<T>(content);
  }

  #stringify(obj: unknown): string {
    return this.#parser.stringify(obj);
  }

  #parse<T>(s: string): T {
    if (typeof s !== "string") return {} as T;

    return this.#parser.parse(s);
  }

  [Symbol.dispose]() {
    this.dispose();
  }
}
