import { isUint8Array } from "util/types";

type IBufferRawData = number[]

interface IBufferJson {
  type: string
  data: IBufferRawData
}

interface IFlexibleBuffer extends Iterable<number> {
  readonly length: number
  clear(): void
  push(value: ArrayLike<number>): void
  toArray(): IBufferRawData
  toBuffer(): Buffer
  toJSON(): IBufferJson
}

const _zero = 0;

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

  abstract [Symbol.iterator](): Iterator<number>
}

class ArrayFlexibleBuffer implements FlexibleBuffer {
  readonly #array: Uint8Array[] = [];
  #length = _zero;

  get length(): number {
    return this.#length;
  }

  clear(): void {
    this.#length = this.#array.length = _zero;
  }

  push(value: ArrayLike<number>): void {
    if (!isUint8Array(value)) value = new Uint8Array(value);
    this.#array.push(value as Uint8Array);
    this.#length += value.length;
  }

  toArray(): IBufferRawData {
    return this.toJSON().data;
  }

  toBuffer(): Buffer {
    return Buffer.concat(this.#array, this.#length);
  }

  toJSON(): IBufferJson {
    return this.toBuffer().toJSON();
  }

  *[Symbol.iterator]() {
    for (const buffer of this.#array) {
      yield* buffer;
    }
  }
}

class BufferFlexibleBuffer implements FlexibleBuffer {
  constructor(readonly size: number) {
    this.#buffer = Buffer.alloc(size);
  }

  #buffer: Buffer;
  #index: number = _zero;

  get length(): number {
    return this.#index;
  }

  clear(): void {
    this.#buffer.fill(_zero);
    this.#index = _zero;
  }

  push(value: ArrayLike<number>): void {
    const totalLength = this.#index + value.length;

    if (totalLength > this.#buffer.length)
      this.#buffer = Buffer.concat([this.#buffer], totalLength);

    this.#buffer.set(value, this.#index);
    this.#index = totalLength;
  }

  toArray(): IBufferRawData {
    return this.toJSON().data;
  }

  toBuffer(): Buffer {
    if (this.#index < this.#buffer.length)
      return this.#buffer.subarray(_zero, this.#index);
    return this.#buffer;
  }

  toJSON(): IBufferJson {
    return this.toBuffer().toJSON();
  }

  *[Symbol.iterator]() {
    yield* this.toBuffer();
  }
}
