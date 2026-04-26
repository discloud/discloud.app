interface IFlexibleBuffer {
  readonly length: number
  push(value: ArrayLike<number>): this
  toBuffer(): Buffer
  toArray(): number[]
  clear(): void
  toJSON(): { type: "Buffer"; data: number[] }
}

export abstract class FlexibleBuffer implements IFlexibleBuffer {
  static flexible() {
    return new ArrayFlexibleBuffer();
  }

  static fixed(size: number) {
    return new BufferFlexibleBuffer(size);
  }

  abstract readonly length: number
  abstract push(_value: ArrayLike<number>): this
  abstract toBuffer(): Buffer
  abstract toArray(): number[]
  abstract clear(): void
  abstract toJSON(): { type: "Buffer"; data: number[] }
}

export class BufferFlexibleBuffer extends FlexibleBuffer {
  private readonly _buffer: Buffer;
  private _index: number = 0;

  constructor(size: number) {
    super();
    this._buffer = Buffer.alloc(size);
  }

  get length(): number {
    return this._index;
  }

  push(value: ArrayLike<number>): this {
    this._buffer.set(value, this._index);
    this._index += value.length;
    return this;
  }

  toBuffer(): Buffer {
    return this._buffer;
  }

  toArray(): number[] {
    return Array.from(this._buffer);
  }

  clear(): void {
    this._buffer.fill(0);
    this._index = 0;
  }

  toJSON() {
    return this._buffer.toJSON();
  }
}

export class ArrayFlexibleBuffer extends FlexibleBuffer {
  private readonly _buffer: any[] = [];
  private _length = 0;

  get length(): number {
    return this._length;
  }

  push(value: ArrayLike<number>): this {
    this._buffer.push(value);
    this._length += value.length;
    return this;
  }

  toBuffer(): Buffer {
    return Buffer.concat(this._buffer);
  }

  toArray(): number[] {
    return this._buffer;
  }

  clear(): void {
    this._buffer.length = 0;
    this._length = 0;
  }

  toJSON(): { type: "Buffer", data: number[] } {
    return this.toBuffer().toJSON();
  }
}
