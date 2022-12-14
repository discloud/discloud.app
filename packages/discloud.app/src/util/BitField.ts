/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
/**
 * @internal
 */
export type BitFieldConstructor<S extends string, N extends bigint | number> = typeof BitField<S, N> & {
  DefaultBit: N
  Flags: EnumLike<S, N>
  resolve(bit: BitFieldResolvable<S, N>): N
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
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
export class BitField<S, N> {
  static DefaultBit = 0;

  /**
   * Numeric bitfield flags.
   * <info>Defined in extension classes</info>
   */
  static Flags: EnumLike<any, any> = {};

  constructor(bits: BitFieldResolvable<S, N> = BitField.DefaultBit) {
    this.bitField = this.constructor.resolve(bits);
  }

  /**
   * Adds bits to these ones.
   * @param bits - Bits to add
   * @returns These bits or new BitField if the instance is frozen.
   */
  add(...bits: BitFieldResolvable<S, N>[]): BitField<S, N> {
    const total = bits.reduce((p, b) => p | this.constructor.resolve(b), this.constructor.DefaultBit);

    if (Object.isFrozen(this)) return new this.constructor(this.bitField | total);

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
  freeze(): Readonly<BitField<S, N>> {
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
  remove(...bits: BitFieldResolvable<S, N>[]): BitField<S, N> {
    const total = bits.reduce((p, b) => p | this.constructor.resolve(b), this.constructor.DefaultBit);

    if (Object.isFrozen(this)) return new this.constructor(this.bitField & ~total);

    this.bitField &= ~total;

    return this;
  }

  /**
   * Gets an object mapping field names to a {@link boolean} indicating whether the
   * bit is available.
   */
  serialize() {
    return Object.entries(this.constructor.Flags)
      .reduce((acc, [flag, bit]) => ({ ...acc, [flag]: this.has(bit) }),
        <Record<S, boolean>>{});
  }

  /**
   * Gets an {@link Array} of bitfield names based on the bits available.
   */
  toArray() {
    return Object.keys(this.constructor.Flags).filter(bit => this.has(bit)) as S[];
  }

  toJSON() {
    return typeof this.bitField === "number" ? this.bitField : this.bitField.toString();
  }

  valueOf() {
    return this.bitField as N;
  }

  *[Symbol.iterator]() {
    yield* this.toArray();
  }

  /**
   * Resolves bitfields to their numeric form.
   * @param bit - bit(s) to resolve
   */
  static resolve<N extends bigint | number>(bit: BitFieldResolvable<string, N>): N {
    const DefaultBit = this.DefaultBit as N;

    if (typeof DefaultBit === typeof bit && bit >= DefaultBit) return bit;

    if (bit instanceof BitField) return bit.bitField;

    if (Array.isArray(bit)) return bit.reduce((p, b) => p | this.resolve(b), DefaultBit);

    if (typeof bit === "string") {
      if (typeof this.Flags[bit] !== "undefined") return this.Flags[bit];

      if (!isNaN(Number(bit))) return typeof DefaultBit === "bigint" ? BigInt(bit) : Number(bit);
    }

    throw new RangeError("Invalid BitField");
  }
}

export default BitField;

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

type EnumLike<E, V> = Record<keyof E, V>