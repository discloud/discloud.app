import { isUint8Array } from "util/types";

type IBufferRawData = number[]

interface IBufferJson {
  type: string
  data: IBufferRawData
}

interface IFlexibleBuffer {
  readonly length: number
  clear(): void
  push(value: ArrayLike<number>): void
  toArray(): IBufferRawData
  toBuffer(): Buffer
  toJSON(): IBufferJson
}

export abstract class FlexibleBuffer implements IFlexibleBuffer {
  static auto(size?: number | null): FlexibleBuffer {
    return typeof size === "number" && !isNaN(size)
      ? new BufferFlexibleBuffer(size)
      : new ArrayFlexibleBuffer();
  }

  static fixed(size: number): FlexibleBuffer { return new BufferFlexibleBuffer(size); }

  static flexible(): FlexibleBuffer { return new ArrayFlexibleBuffer(); }

  abstract readonly length: number
  abstract clear(): void
  abstract push(value: ArrayLike<number>): void
  abstract toArray(): IBufferRawData
  abstract toBuffer(): Buffer
  abstract toJSON(): IBufferJson
}

class ArrayFlexibleBuffer extends FlexibleBuffer {
  private readonly _array: Uint8Array[] = [];
  private _length = 0;

  get length(): number {
    return this._length;
  }

  clear(): void {
    this._length = this._array.length = 0;
  }

  push(value: ArrayLike<number>): void {
    if (!isUint8Array(value)) value = new Uint8Array(value);
    this._array.push(value as Uint8Array);
    this._length += value.length;
  }

  toArray(): IBufferRawData {
    return this.toJSON().data;
  }

  toBuffer(): Buffer {
    return Buffer.concat(this._array, this._length);
  }

  toJSON(): IBufferJson {
    return this.toBuffer().toJSON();
  }
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

  clear(): void {
    this._buffer.fill(0);
    this._index = 0;
  }

  push(value: ArrayLike<number>) {
    this._buffer.set(value, this._index);
    this._index += value.length;
  }

  toArray(): IBufferRawData {
    return this.toJSON().data;
  }

  toBuffer(): Buffer {
    return this._buffer;
  }

  toJSON(): IBufferJson {
    return this._buffer.toJSON();
  }
}
