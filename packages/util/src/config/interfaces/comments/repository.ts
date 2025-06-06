import { type ICommentEntity } from "./entity";

export interface ICommentRepository {
  readonly size: number
  clear(): void
  delete(line: number): boolean
  get(line: number): ICommentEntity | void
  parse(line: number, content: string): string | void
  set(line: number, character: number, content: string): void
  values(): Generator<ICommentEntity, void, unknown>
  [Symbol.dispose](): void
  [Symbol.iterator](): Generator<ICommentEntity, void, unknown>
}
