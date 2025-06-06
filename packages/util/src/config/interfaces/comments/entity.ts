import { type CommentData } from "../../comments/types";

export interface ICommentEntity {
  readonly line: number
  readonly character: number
  readonly content: string
  toString(): string
  toJSON(): CommentData
}
