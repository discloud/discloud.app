import assert from "assert";
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

  assert.ok(new ExtendedNumberBitField());

  assert.ok(new ExtendedNumberBitField(Object.values(NumberFlags)));

  assert.ok(new ExtendedNumberBitField(1 << 3));

  assert.strictEqual(new ExtendedNumberBitField(Object.values(NumberFlags)).bitField, 55);

  assert.throws(() => new ExtendedNumberBitField(<keyof typeof NumberFlags>"flag0"));
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

  assert.ok(new ExtendedBigIntBitField());

  assert.ok(new ExtendedBigIntBitField(Object.values(BigIntFlags)));

  assert.ok(new ExtendedBigIntBitField(1n << 3n));

  assert.strictEqual(new ExtendedBigIntBitField(Object.values(BigIntFlags)).bitField, 55n);

  assert.throws(() => new ExtendedBigIntBitField(<keyof typeof BigIntFlags>"flag0"));
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

  assert.strictEqual(extendedNumberBitField.bitField, 5);
  assert.strictEqual(extendedNumberBitField.any(NumberFlags.flag1, NumberFlags.flag16), true);
  assert.strictEqual(extendedNumberBitField.any(NumberFlags.flag2, NumberFlags.flag32), false);
  assert.strictEqual(extendedNumberBitField.has(NumberFlags.flag1, NumberFlags.flag4), true);
  assert.strictEqual(extendedNumberBitField.has(NumberFlags.flag1, NumberFlags.flag16), false);
  assert.strictEqual(extendedNumberBitField.equals(NumberFlags.flag1, NumberFlags.flag4), true);
  assert.strictEqual(extendedNumberBitField.equals(NumberFlags.flag1), false);
  assert.deepStrictEqual(extendedNumberBitField.missing(NumberFlags.flag1, NumberFlags.flag4), []);
  assert.deepStrictEqual(extendedNumberBitField.missing(NumberFlags.flag1, NumberFlags.flag16), ["flag16"]);
  assert.strictEqual(extendedNumberBitField.add(NumberFlags.flag1).bitField, 5);
  assert.strictEqual(extendedNumberBitField.remove(NumberFlags.flag1).bitField, 4);
  assert.strictEqual(extendedNumberBitField.add(NumberFlags.flag1).bitField, 5);
  assert.strictEqual(extendedNumberBitField.set().bitField, 0);
  assert.strictEqual(extendedNumberBitField.set(NumberFlags.flag1, NumberFlags.flag4).bitField, 5);
  assert.deepStrictEqual(extendedNumberBitField.toArray(), ["flag1", "flag4"]);
  assert.deepStrictEqual([...extendedNumberBitField], ["flag1", "flag4"]);
  assert.strictEqual(extendedNumberBitField.toJSON(), 5);
  assert.strictEqual(extendedNumberBitField.valueOf(), 5);
  assert.deepStrictEqual(extendedNumberBitField.serialize(), {
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

  assert.strictEqual(extendedNumberBitField.bitField, 5n);
  assert.strictEqual(extendedNumberBitField.any(BigIntFlags.flag1, BigIntFlags.flag16), true);
  assert.strictEqual(extendedNumberBitField.any(BigIntFlags.flag2, BigIntFlags.flag32), false);
  assert.strictEqual(extendedNumberBitField.has(BigIntFlags.flag1, BigIntFlags.flag4), true);
  assert.strictEqual(extendedNumberBitField.has(BigIntFlags.flag1, BigIntFlags.flag16), false);
  assert.strictEqual(extendedNumberBitField.equals(BigIntFlags.flag1, BigIntFlags.flag4), true);
  assert.strictEqual(extendedNumberBitField.equals(BigIntFlags.flag1), false);
  assert.deepStrictEqual(extendedNumberBitField.missing(BigIntFlags.flag1, BigIntFlags.flag4), []);
  assert.deepStrictEqual(extendedNumberBitField.missing(BigIntFlags.flag1, BigIntFlags.flag16), ["flag16"]);
  assert.strictEqual(extendedNumberBitField.add(BigIntFlags.flag1).bitField, 5n);
  assert.strictEqual(extendedNumberBitField.remove(BigIntFlags.flag1).bitField, 4n);
  assert.strictEqual(extendedNumberBitField.add(BigIntFlags.flag1).bitField, 5n);
  assert.strictEqual(extendedNumberBitField.set().bitField, 0n);
  assert.strictEqual(extendedNumberBitField.set(BigIntFlags.flag1, BigIntFlags.flag4).bitField, 5n);
  assert.deepStrictEqual(extendedNumberBitField.toArray(), ["flag1", "flag4"]);
  assert.deepStrictEqual([...extendedNumberBitField], ["flag1", "flag4"]);
  assert.strictEqual(extendedNumberBitField.toJSON(), "5");
  assert.strictEqual(extendedNumberBitField.valueOf(), 5n);
  assert.deepStrictEqual(extendedNumberBitField.serialize(), {
    flag1: true,
    flag2: false,
    flag4: true,
    flag16: false,
    flag32: false,
  });
});
