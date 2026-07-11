import assert from "assert";
import test, { suite } from "node:test";
import { FlexibleBuffer } from "../FlexibleBuffer";

const array = [1, 2, 3];

suite("Array FlexibleBuffer", () => {
  const buffer = FlexibleBuffer.flexible();

  test("Allow push oversized", () => {
    buffer.push(array);
    assert.strictEqual(buffer.length, array.length);
  });
});

suite("Buffer FlexibleBuffer", () => {
  const buffer = FlexibleBuffer.fixed(1);

  test("Deny push oversized", () => {
    assert.throws(() => buffer.push(array));
  });
});
