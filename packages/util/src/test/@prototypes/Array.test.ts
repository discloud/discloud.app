import assert from "assert";
import { suite, test } from "node:test";

suite("@prototypes/array", async () => {
  const alreadyExistsArrayFromAsync = typeof Array.fromAsync === "function";

  await import("../../@prototypes/array.js");

  async function* generate(n: number) { for (let i = 0; i < n;) yield ++i; }

  test("Testing Array.fromAsync", {
    skip: alreadyExistsArrayFromAsync && "Array.fromAsync already exists, skipping tests",
  }, async () => {
    const n = 10;
    const generated = await Array.fromAsync(generate(n));
    assert.strictEqual(generated.length, n);
  });
});
