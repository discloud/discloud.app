export interface CommentData {
  line: number;
  character: number;
  content: string;
}

export interface MatchedComment extends RegExpExecArray {
  content: string
}
