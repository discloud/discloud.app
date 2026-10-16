type IBufferRawData = number[]

interface IBufferJson {
  type: string
  data: IBufferRawData
}

interface IFlexibleBuffer {
  readonly length: number
  push(value: ArrayLike<number>): void
  toBuffer(): Buffer
  toArray(): IBufferRawData
  clear(): void
  toJSON(): IBufferJson
}

export abstract class FlexibleBuffer implements IFlexibleBuffer {
  static auto(size?: number | null): FlexibleBuffer {
    return typeof size === "number" && !isNaN(size)
      ? new BufferFlexibleBuffer(size)
      : new ArrayFlexibleBuffer();
  }

  static flexible(): FlexibleBuffer { return new ArrayFlexibleBuffer(); }

  static fixed(size: number): FlexibleBuffer { return new BufferFlexibleBuffer(size); }

  abstract readonly length: number
  abstract push(value: ArrayLike<number>): void
  abstract toBuffer(): Buffer
  abstract toArray(): IBufferRawData
  abstract clear(): void
  abstract toJSON(): IBufferJson
}

class BufferFlexibleBuffer extends FlexibleBuffer {
  constructor(readonly size: number) {
    super();
    this._buffer = Buffer.alloc(size);
  }

  private readonly _buffer: Buffer;
  private _index: number = 0;

  get length(): number {
    return this._index;
  }

  push(value: ArrayLike<number>) {
    this._buffer.set(value, this._index);
    this._index += value.length;
  }

  toBuffer(): Buffer {
    return this._buffer;
  }

  toArray(): IBufferRawData {
    return this.toJSON().data;
  }

  clear(): void {
    this._buffer.fill(0);
    this._index = 0;
  }

  toJSON(): IBufferJson {
    return this._buffer.toJSON();
  }
}

class ArrayFlexibleBuffer extends FlexibleBuffer {
  private readonly _array: Uint8Array[] = [];
  private _length = 0;

  get length(): number {
    return this._length;
  }

  push(value: ArrayLike<number>): void {
    this._array.push(new Uint8Array(value));
    this._length += value.length;
  }

  toBuffer(): Buffer {
    return Buffer.concat(this._array, this._length);
  }

  toArray(): IBufferRawData {
    return this.toJSON().data;
  }

  clear(): void {
    this._array.length = 0;
    this._length = 0;
  }

  toJSON(): IBufferJson {
    return this.toBuffer().toJSON();
  }
}
