import assert from "assert";
import { suite, test } from "node:test";
import { join } from "path";
import { DiscloudConfig, MissingMainError } from "../config";

suite("Testing Discloud Config", () => {
  const BASE_TEST_PATH = join(__dirname, "..", "..", "__test__", "config");

  test("Testing valid Discloud Config", () => {
    const dConfig = new DiscloudConfig(join(BASE_TEST_PATH, "valid"));

    assert.doesNotThrow(() => dConfig.validate());
    assert(dConfig.existsMain);
    assert.strictEqual(dConfig.mainFileExt, "txt");
    assert.deepStrictEqual(dConfig.missingProps, []);
    assert.deepStrictEqual(dConfig.data, {
      TYPE: "bot",
      NAME: "test",
      MAIN: "_test.txt",
      RAM: 100,
      VERSION: "latest",
      AUTORESTART: false,
      APT: ["canvas"],
    });
  });

  test("Testing invalid Discloud Config", () => {
    const dConfig = new DiscloudConfig(join(BASE_TEST_PATH, "invalid"));

    assert.throws(() => dConfig.validate());
  });

  test("Testing invalid MAIN Discloud Config", () => {
    const dConfig = new DiscloudConfig(join(BASE_TEST_PATH, "invalid", "MAIN"));

    assert.throws(() => dConfig.validate(), new MissingMainError());
  });
});
