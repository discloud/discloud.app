import type { ICommentEntity } from "../interfaces/comments/entity";
import type { ICommentRepository } from "../interfaces/comments/repository";
import { CommentEntity } from "./entity";
import type { MatchedComment } from "./types";

/** `/(?<content>\s*#.*$)/` */
const _commentRegexp = /(?<content>\s*#.*$)/;

const _one = 1;
const _zero = 0;

export default class CommentRepository implements ICommentRepository {
  static match(line: string): MatchedComment | null {
    return _commentRegexp.exec(line) as MatchedComment;
  }

  readonly #cache = new Map<number, Readonly<ICommentEntity>>();

  get size() {
    return this.#cache.size;
  }

  clear() {
    this.#cache.clear();
  }

  delete(line: number) {
    return this.#cache.delete(line);
  }

  get(line: number) {
    return this.#cache.get(line);
  }

  parse(line: number, content: string) {
    const result = CommentRepository.match(content);

    if (!result) return content;

    this.set(line, result.index, result.groups.content);

    if (result.index < _one) return;

    return content.substring(_zero, result.index);
  }

  set(line: number, character: number, content: string) {
    const comment: ICommentEntity = new CommentEntity(line, character, content);

    this.#cache.set(character, comment);
  }

  toJSON() {
    return this.#cache.values().toArray();
  }

  *values() {
    yield* this.#cache.values();
  }

  [Symbol.dispose]() {
    this.clear();
  }

  *[Symbol.iterator]() {
    yield* this.#cache.values();
  }
}
