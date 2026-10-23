export class HttpBadStatusError extends Error {
  static fromResponse(response: Response) {
    return new HttpBadStatusError(response.statusText, response.status);
  }

  constructor(message: string, readonly code: number) {
    super(message);
  }
}
