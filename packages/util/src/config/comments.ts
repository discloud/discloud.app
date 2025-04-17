export class Comment {
  constructor(
    readonly line: number,
    readonly character: number,
    readonly content: string,
  ) { }

  toString() {
    return this.content;
  }
}

export default class Comments {
  static readonly char = "#";
  static readonly pattern = /(\s*#.*)/;

  static matchCommentInLine(line: string) {
    return line.match(Comments.pattern);
  }

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
