import { deepStrictEqual, ok, strictEqual, throws } from "node:assert";
import { test } from "node:test";
import BitField from "../BitField";

test("Number BitField resolve tests", () => {
  const NumberFlags = {
    flag1: 1 << 0 as 1,
    flag2: 1 << 1 as 2,
    flag4: 1 << 2 as 4,
    flag16: 1 << 4 as 16,
    flag32: 1 << 5 as 32,
  } as const;

  class ExtendedNumberBitField extends BitField<keyof typeof NumberFlags, number> {
    static Flags = NumberFlags;
  }

  ok(new ExtendedNumberBitField());

  ok(new ExtendedNumberBitField(Object.values(NumberFlags)));

  ok(new ExtendedNumberBitField(1 << 3));

  strictEqual(new ExtendedNumberBitField(Object.values(NumberFlags)).bitField, 55);

  throws(() => new ExtendedNumberBitField(<keyof typeof NumberFlags>"flag0"));
});

test("BigInt BitField resolve tests", () => {
  const BigIntFlags = {
    flag1: 1n << 0n as 1n,
    flag2: 1n << 1n as 2n,
    flag4: 1n << 2n as 4n,
    flag16: 1n << 4n as 16n,
    flag32: 1n << 5n as 32n,
  } as const;

  class ExtendedBigIntBitField extends BitField<keyof typeof BigIntFlags, bigint> {
    static DefaultBit = 0n;
    static Flags = BigIntFlags;
  }

  ok(new ExtendedBigIntBitField());

  ok(new ExtendedBigIntBitField(Object.values(BigIntFlags)));

  ok(new ExtendedBigIntBitField(1n << 3n));

  strictEqual(new ExtendedBigIntBitField(Object.values(BigIntFlags)).bitField, 55n);

  throws(() => new ExtendedBigIntBitField(<keyof typeof BigIntFlags>"flag0"));
});

test("Number BitField methods tests", () => {
  const NumberFlags = {
    flag1: 1 << 0 as 1,
    flag2: 1 << 1 as 2,
    flag4: 1 << 2 as 4,
    flag16: 1 << 4 as 16,
    flag32: 1 << 5 as 32,
  } as const;

  class ExtendedNumberBitField extends BitField<keyof typeof NumberFlags, number> {
    static Flags = NumberFlags;
  }

  const extendedNumberBitField = new ExtendedNumberBitField(NumberFlags.flag1, NumberFlags.flag4);

  strictEqual(extendedNumberBitField.bitField, 5);
  strictEqual(extendedNumberBitField.any(NumberFlags.flag1, NumberFlags.flag16), true);
  strictEqual(extendedNumberBitField.any(NumberFlags.flag2, NumberFlags.flag32), false);
  strictEqual(extendedNumberBitField.has(NumberFlags.flag1, NumberFlags.flag4), true);
  strictEqual(extendedNumberBitField.has(NumberFlags.flag1, NumberFlags.flag16), false);
  strictEqual(extendedNumberBitField.equals(NumberFlags.flag1, NumberFlags.flag4), true);
  strictEqual(extendedNumberBitField.equals(NumberFlags.flag1), false);
  deepStrictEqual(extendedNumberBitField.missing(NumberFlags.flag1, NumberFlags.flag4), []);
  deepStrictEqual(extendedNumberBitField.missing(NumberFlags.flag1, NumberFlags.flag16), ["flag16"]);
  strictEqual(extendedNumberBitField.add(NumberFlags.flag1).bitField, 5);
  strictEqual(extendedNumberBitField.remove(NumberFlags.flag1).bitField, 4);
  strictEqual(extendedNumberBitField.add(NumberFlags.flag1).bitField, 5);
  strictEqual(extendedNumberBitField.set().bitField, 0);
  strictEqual(extendedNumberBitField.set(NumberFlags.flag1, NumberFlags.flag4).bitField, 5);
  deepStrictEqual(extendedNumberBitField.toArray(), ["flag1", "flag4"]);
  deepStrictEqual([...extendedNumberBitField], ["flag1", "flag4"]);
  strictEqual(extendedNumberBitField.toJSON(), 5);
  strictEqual(extendedNumberBitField.valueOf(), 5);
  deepStrictEqual(extendedNumberBitField.serialize(), {
    flag1: true,
    flag2: false,
    flag4: true,
    flag16: false,
    flag32: false,
  });
});

test("BigInt BitField methods tests", () => {
  const BigIntFlags = {
    flag1: 1n << 0n as 1n,
    flag2: 1n << 1n as 2n,
    flag4: 1n << 2n as 4n,
    flag16: 1n << 4n as 16n,
    flag32: 1n << 5n as 32n,
  } as const;

  class ExtendedNumberBitField extends BitField<keyof typeof BigIntFlags, bigint> {
    static DefaultBit = 0n;
    static Flags = BigIntFlags;
  }

  const extendedNumberBitField = new ExtendedNumberBitField(BigIntFlags.flag1, BigIntFlags.flag4);

  strictEqual(extendedNumberBitField.bitField, 5n);
  strictEqual(extendedNumberBitField.any(BigIntFlags.flag1, BigIntFlags.flag16), true);
  strictEqual(extendedNumberBitField.any(BigIntFlags.flag2, BigIntFlags.flag32), false);
  strictEqual(extendedNumberBitField.has(BigIntFlags.flag1, BigIntFlags.flag4), true);
  strictEqual(extendedNumberBitField.has(BigIntFlags.flag1, BigIntFlags.flag16), false);
  strictEqual(extendedNumberBitField.equals(BigIntFlags.flag1, BigIntFlags.flag4), true);
  strictEqual(extendedNumberBitField.equals(BigIntFlags.flag1), false);
  deepStrictEqual(extendedNumberBitField.missing(BigIntFlags.flag1, BigIntFlags.flag4), []);
  deepStrictEqual(extendedNumberBitField.missing(BigIntFlags.flag1, BigIntFlags.flag16), ["flag16"]);
  strictEqual(extendedNumberBitField.add(BigIntFlags.flag1).bitField, 5n);
  strictEqual(extendedNumberBitField.remove(BigIntFlags.flag1).bitField, 4n);
  strictEqual(extendedNumberBitField.add(BigIntFlags.flag1).bitField, 5n);
  strictEqual(extendedNumberBitField.set().bitField, 0n);
  strictEqual(extendedNumberBitField.set(BigIntFlags.flag1, BigIntFlags.flag4).bitField, 5n);
  deepStrictEqual(extendedNumberBitField.toArray(), ["flag1", "flag4"]);
  deepStrictEqual([...extendedNumberBitField], ["flag1", "flag4"]);
  strictEqual(extendedNumberBitField.toJSON(), "5");
  strictEqual(extendedNumberBitField.valueOf(), 5n);
  deepStrictEqual(extendedNumberBitField.serialize(), {
    flag1: true,
    flag2: false,
    flag4: true,
    flag16: false,
    flag32: false,
  });
});
