export class BufferOverflowError extends Error {
  readonly name = "BufferOverflow";

  constructor(
    readonly size: number,
    readonly max: number,
  ) {
    super("Buffer overflow");
  }
}
