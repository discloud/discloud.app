import assert from "assert";
import test, { suite } from "node:test";
import { ArrayFlexibleBuffer, BufferFlexibleBuffer, FlexibleBuffer } from "../FlexibleBuffer";

suite("Array FlexibleBuffer", () => {
  const buffer = FlexibleBuffer.flexible();

  test("Instance must be ArrayBased", () => {
    assert(buffer instanceof ArrayFlexibleBuffer);
  });

  test("Allow push oversized", () => {
    buffer.push([1, 2, 3]);
    assert(buffer.length === 3);
  });
});

suite("Buffer FlexibleBuffer", () => {
  const buffer = FlexibleBuffer.fixed(0);

  test("Instance must be BufferBased", () => {
    assert(buffer instanceof BufferFlexibleBuffer);
  });

  test("Deny push oversized", () => {
    assert.throws(() => buffer.push([0]));
  });
});
