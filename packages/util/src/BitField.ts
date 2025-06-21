/**
 * @internal
 */
export interface BitFieldConstructor<S extends string, N extends bigint | number> {
  new(...bits: BitFieldResolvable<S, N>[]): BitField<S, N>
  readonly DefaultBit: N
  readonly Flags: EnumLike<S, N>
  resolve(bit: BitFieldResolvable<S, N>): N
}

export interface BitField<S extends string, N extends bigint | number> {
  constructor: BitFieldConstructor<S, N>;
  /**
   * Bitfield of the packed bits
   */
  bitField: N;
}

/**
 * Data structure that makes it easy to interact with a bitfield.
 */
export abstract class BitField<S, N> {
  static readonly DefaultBit: bigint | number = 0;

  /**
   * Numeric bitfield flags.
   * Defined in extension classes
   */
  static readonly Flags: EnumLike<unknown, bigint | number> = {};

  constructor(...bits: BitFieldResolvable<S, N>[]) {
    this.bitField = this.constructor.resolve(bits ?? this.constructor.DefaultBit);
  }

  /**
   * Adds bits to these ones.
   * @param bits - Bits to add
   * @returns These bits or new BitField if the instance is frozen.
   */
  add(...bits: BitFieldResolvable<S, N>[]): this {
    // @ts-expect-error ts(2362)
    const total = bits.reduce((p, b) => p | this.constructor.resolve(b), this.constructor.DefaultBit);

    // @ts-expect-error ts(2322)
    if (Object.isFrozen(this)) return new this.constructor(this.bitField | total);

    // @ts-expect-error ts(2363)
    this.bitField |= total;

    return this;
  }

  /**
   * Checks whether the bitfield has a bit, or any of multiple bits.
   * @param bits - Bit(s) to check for
   */
  any(...bits: BitFieldResolvable<S, N>[]): boolean {
    return (this.bitField & this.constructor.resolve(bits)) !== this.constructor.DefaultBit;
  }

  /**
   * Checks if this bitfield equals another
   * @param bits - Bit(s) to check for
   */
  equals(...bits: BitFieldResolvable<S, N>[]): boolean {
    return this.bitField === this.constructor.resolve(bits);
  }

  /**
   * Freezes these bits, making them immutable.
   */
  freeze(): Readonly<this> {
    return Object.freeze(this);
  }

  /**
   * Checks whether the bitfield has a bit, or multiple bits.
   * @param bits - Bit(s) to check for
   */
  has(...bits: BitFieldResolvable<S, N>[]): boolean {
    const bit = this.constructor.resolve(bits);
    return (this.bitField & bit) === bit;
  }

  /**
   * Gets all given bits that are missing from the bitfield.
   * @param bits - Bit(s) to check for
   */
  missing(...bits: BitFieldResolvable<S, N>[]): S[] {
    return new this.constructor(bits).remove(this).toArray() as S[];
  }

  /**
   * Removes bits from these.
   * @param bits - Bits to remove
   * @returns These bits or new BitField if the instance is frozen.
   */
  remove(...bits: BitFieldResolvable<S, N>[]): this {
    // @ts-expect-error ts(2362)
    const total = bits.reduce((p, b) => p | this.constructor.resolve(b), this.constructor.DefaultBit);

    // @ts-expect-error ts(2322)
    if (Object.isFrozen(this)) return new this.constructor(this.bitField & ~total);

    // @ts-expect-error ts(2322)
    this.bitField &= ~total;

    return this;
  }

  /**
   * Gets an object mapping field names to a {@link boolean} indicating whether the
   * bit is available.
   */
  serialize() {
    const serialized = {} as Record<S, boolean>;
    for (const flag in this.constructor.Flags) {
      if (!isNaN(flag as any)) continue;
      serialized[flag as any as S] = this.has(this.constructor.Flags[flag]);
    }
    return serialized;
  }

  /**
   * Replace the bits with these.
   * @param bits - bits to set
   * @returns These bits or new BitField if the instance is frozen.
   */
  set(...bits: BitFieldResolvable<S, N>[]): this {
    // @ts-expect-error ts(2322)
    if (Object.isFrozen(this)) return new this.constructor(bits);

    this.bitField = this.constructor.resolve(bits);

    return this;
  }

  /**
   * Gets an {@link Array} of bitfield names based on the bits available.
   */
  toArray() {
    const iterator = this[Symbol.iterator]();
    return iterator.toArray?.() ?? Array.from(this[Symbol.iterator]());
  }

  toJSON(): N extends number ? N : `${N}` {
    return (typeof this.bitField === "number" ? this.bitField : `${this.bitField}`) as any;
  }

  toString() {
    return `${this.bitField}` as const;
  }

  valueOf() {
    return this.bitField as N;
  }

  *[Symbol.iterator]() {
    for (const flag in this.constructor.Flags) {
      // @ts-expect-error ts(2345)
      if (isNaN(flag) && this.has(this.constructor.Flags[flag])) yield flag as any as S;
    }
  }

  /**
   * Resolves bitfields to their numeric form.
   * @param bit - bit(s) to resolve
   */
  static resolve<S extends string, N extends bigint | number>(bit: BitFieldResolvable<S, N>): N {
    if (bit instanceof BitField) return bit.bitField;

    const DefaultBit = this.DefaultBit as N;

    // @ts-expect-error ts(2322)
    if (Array.isArray(bit)) return bit.reduce((p, b) => p | this.resolve(b), DefaultBit);

    // @ts-expect-error ts(2322) ts(2365)
    if (typeof DefaultBit === typeof bit && bit >= DefaultBit) return bit;

    if (typeof bit === "string") {
      // @ts-expect-error ts(7053)
      if (this.Flags[bit] !== undefined) return this.Flags[bit];

      // @ts-expect-error ts(2322)
      if (!isNaN(Number(bit))) return typeof DefaultBit === "bigint" ? BigInt(bit) : Number(bit);
    }

    throw new RangeError(`Invalid BitField: ${bit}`);
  }
}

/**
 * Data that can be resolved to give a bitfield. This can be:
 * * A bit number (this can be a number literal or a value taken from {@link BitField.Flags})
 * * A string bit number
 * * An instance of BitField
 * * An Array of BitFieldResolvable
 */
export type BitFieldResolvable<S extends string, N extends bigint | number> =
  | `${bigint}`
  | number
  | N
  | S
  | BitField<S, N>
  | BitFieldResolvable<S, N>[]

type EnumLike<E, V> = { [P in keyof E]: V };

export default BitField;