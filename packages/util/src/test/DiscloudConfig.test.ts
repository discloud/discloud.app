import assert from "assert";
import { describe } from "node:test";
import { join } from "path";
import { DiscloudConfig } from "../DiscloudConfig";

describe("Testing Discloud Config", () => {
  const dConfig = new DiscloudConfig(join(__dirname, "..", "..", "__test__"));

  assert.strictEqual(dConfig.exists, true);
  assert.strictEqual(dConfig.existsMain, true);
  assert.strictEqual(dConfig.mainFileExt, "txt");
  assert.deepStrictEqual(dConfig.missingProps, []);
  assert.deepStrictEqual(dConfig.data, {
    TYPE: "bot",
    NAME: "test",
    MAIN: "_test.txt",
    RAM: 100,
    VERSION: "latest",
    AUTORESTART: false,
    APT: "canvas",
  });

  dConfig.dispose();
});
