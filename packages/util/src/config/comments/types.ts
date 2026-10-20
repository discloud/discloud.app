export interface CommentData {
  readonly line: number;
  readonly character: number;
  readonly content: string;
}

export interface MatchedComment extends RegExpExecArray {
  readonly groups: {
    readonly content: string
  }
}
