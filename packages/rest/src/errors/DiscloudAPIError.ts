export class DiscloudAPIError extends Error {
  constructor(
    message: string,
    public code: number,
    public method: string,
    public path: string,
    public body: any,
  ) {
    super(`[DISCLOUD API] ${message}`);
  }
}