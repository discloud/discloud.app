export class Comment {
  constructor(
    readonly line: number,
    readonly character: number,
    readonly content: string,
    readonly startSpaces: number = 0,
  ) { }

  toString() {
    return "".padEnd(this.startSpaces) + this.content;
  }
}

export default class Comments {
  static readonly char = "#";

  #cache = new Map<number, Comment>();

  get size() {
    return this.#cache.size;
  }

  add(line: number, character: number, content: string, startSpaces: number = 0) {
    this.#cache.set(line, new Comment(line, character, content, startSpaces));
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
}
