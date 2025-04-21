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

  readonly #cache = new Map<number, Map<number, Comment>>();

  get size() {
    let size = 0;
    for (const cachedLine of this.#cache.values()) {
      size += cachedLine.size;
    }
    return size;
  }

  clear() {
    for (const cachedLine of this.#cache.values()) {
      cachedLine.clear();
    }

    this.#cache.clear();
  }

  delete(line: number, character?: number) {
    if (character) return this.#cache.get(line)?.delete(character) ?? false;

    return this.#cache.delete(line);
  }

  get(line: number): Map<number, Comment> | void
  get(line: number, character: number): Comment | void
  get(line: number, character?: number): unknown {
    if (typeof character === "number")
      return this.#cache.get(line)?.get(character);

    return this.#cache.get(line);
  }

  set(line: number, character: number, content: string) {
    let cachedLine = this.#cache.get(line);

    if (!cachedLine) {
      cachedLine = new Map();
      this.#cache.set(line, cachedLine);
    }

    cachedLine.set(character, new Comment(line, character, content));
  }

  *values() {
    for (const cachedLine of this.#cache.values()) {
      for (const cachedComment of cachedLine.values()) {
        yield cachedComment;
      }
    }
  }
}
