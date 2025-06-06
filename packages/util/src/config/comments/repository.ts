import { type ICommentEntity } from "../interfaces/comments/entity";
import { type ICommentRepository } from "../interfaces/comments/repository";
import { CommentEntity } from "./entity";
import { type MatchedComment } from "./types";

export default class CommentRepository implements ICommentRepository {
  static readonly char = "#";
  /** `/(?<content>\s*#.*$)/` */
  static readonly pattern = /(?<content>\s*#.*$)/;

  static match(line: string): MatchedComment | null {
    return CommentRepository.pattern.exec(line) as MatchedComment;
  }

  readonly #cache = new Map<number, ICommentEntity>();

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

    this.set(line, result.index, result.groups!.content);

    if (result.index < 1) return;

    return content.substring(0, result.index);
  }

  set(line: number, character: number, content: string) {
    const comment: ICommentEntity = new CommentEntity(line, character, content);

    this.#cache.set(character, comment);
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
