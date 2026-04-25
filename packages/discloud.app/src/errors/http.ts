export class HttpBadStatusError extends Error {
  static fromResponse(response: Response) {
    return new HttpBadStatusError(response.status, response.statusText);
  }

  constructor(readonly code: number, readonly message: string) {
    super(message);
  }
}
