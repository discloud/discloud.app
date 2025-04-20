export class Comment {
  constructor(
    readonly line: number,
    readonly character: number,
    readonly content: string,
  ) { }

  toString() {
    return this.content;
  }

  toJSON() {
    return {
      line: this.line,
      character: this.character,
      content: this.content,
    };
  }
}

export default class Comments {
  static readonly char = "#";
  /** `/(\s*#.*$)/` */
  static readonly pattern = /(\s*#.*$)/;

  readonly #cache = new Map<number, Comment>();

  get size() {
    return this.#cache.size;
  }

  add(line: number, character: number, content: string) {
    this.#cache.set(line, new Comment(line, character, content));
  }

  clear() {
    this.#cache.clear();
  }

  delete(line: number) {
    this.#cache.delete(line);
  }

  get(line: number) {
    return this.#cache.get(line);
  }

  values() {
    return this.#cache.values();
  }
}
