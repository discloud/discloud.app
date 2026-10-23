import type { ICommentEntity } from "./entity";

export interface ICommentRepository extends Disposable, Iterable<Readonly<ICommentEntity>> {
  readonly size: number
  clear(): void
  delete(line: number): boolean
  get(line: number): Readonly<ICommentEntity> | void
  parse(line: number, content: string): string | void
  set(line: number, character: number, content: string): void
  values(): Generator<Readonly<ICommentEntity>>
}
