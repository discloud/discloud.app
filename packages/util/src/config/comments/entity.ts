import { type ICommentEntity } from "../interfaces/comments/entity";

export class CommentEntity implements ICommentEntity {
  constructor(
    readonly line: number,
    readonly character: number,
    readonly content: string,
  ) { }

  toString() {
    return this.content;
  }

  toJSON() {
    return Object.assign({}, this);
  }
}
