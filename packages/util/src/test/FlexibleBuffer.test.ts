import assert from "assert";
import test, { suite } from "node:test";
import { FlexibleBuffer } from "../FlexibleBuffer";

const _array = [65, 66, 67];

suite("Array FlexibleBuffer", () => {
  const flexibleBuffer = FlexibleBuffer.flexible();

  test("Allow push oversized", () => {
    flexibleBuffer.push(_array);
    assert.strictEqual(flexibleBuffer.length, _array.length);
  });

  test("Transform to buffer", () => {
    assert.doesNotThrow(() => {
      const buffer = flexibleBuffer.toBuffer();

      assert.strictEqual(buffer.length, _array.length);

      for (let i = 0; i < buffer.length; i++) {
        assert.strictEqual(buffer[i], _array[i]);
      }
    });
  });
});

suite("Buffer FlexibleBuffer", () => {
  const array = _array;
  const fixedBuffer = FlexibleBuffer.fixed(array.length);

  test("Allow pushing a list with a size within the limit", () => {
    assert.doesNotThrow(() => fixedBuffer.push(_array));
    assert.strictEqual(fixedBuffer.length, _array.length);
  });

  test("Allow push oversized", () => {
    assert.doesNotThrow(() => {
      fixedBuffer.push(_array);
      array.push(..._array);
    });
  });

  test("Transform to array", () => {
    assert.doesNotThrow(() => {
      const array = fixedBuffer.toArray();
      assert.strictEqual(array.length, array.length);
      assert.deepStrictEqual(array, array);
    });
  });
});
