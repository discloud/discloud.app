export default class DiscloudAPIError extends Error {
  constructor(
    message: string,
    public code: number | string,
    public method: string,
    public path: string,
    public body: any,
  ) {
    super(`\x1b[31m[DISCLOUD API] ${message}\x1b[0m`);
  }
}