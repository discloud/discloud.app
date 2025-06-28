import assert from "assert";
import { suite, test } from "node:test";
import { join } from "path";
import { DiscloudConfig, MissingMainError } from "../config";
import { type ParsedDiscloudConfigData } from "../config/types";

suite("Testing Discloud Config", async () => {
  const BASE_TEST_PATH = join(__dirname, "..", "..", "__test__", "config");

  function mockConfigData(props: ParsedDiscloudConfigData = {}) {
    props.MAIN = "package.json";
    return props;
  }

  await test("Testing valid Discloud Config", async () => {
    const dConfig = new DiscloudConfig(join(BASE_TEST_PATH, "valid"));

    await assert.doesNotReject(() => dConfig.validate());
    assert(dConfig.existsMain);
    assert.strictEqual(dConfig.mainFileExt, ".txt");
    assert.deepStrictEqual(dConfig.missingProps, []);
    assert.deepStrictEqual(dConfig.data, {
      APT: [],
      AUTORESTART: "",
      AVATAR: "",
      HOSTNAME: "",
      ID: "",
      MAIN: "_test.txt",
      NAME: "",
      RAM: "",
      START: "",
      STORAGE: "",
      TYPE: "",
      VERSION: "",
      VLAN: "",
    });
  });

  await test("Testing invalid Discloud Config", async () => {
    const dConfig = new DiscloudConfig(join(BASE_TEST_PATH, "invalid"));

    await assert.rejects(() => dConfig.validate());
  });

  await test("Testing invalid MAIN Discloud Config", async () => {
    const dConfig = new DiscloudConfig(join(BASE_TEST_PATH, "invalid", "MAIN"));

    await assert.rejects(() => dConfig.validate(), new MissingMainError());
  });

  test("Testing valid TYPE site Discloud Config", () => {
    assert.doesNotThrow(() => DiscloudConfig.validade(mockConfigData({
      ID: "ID",
      RAM: 512,
      TYPE: "site",
    })));
  });

  test("Testing valid RAM Discloud Config", () => {
    assert.doesNotThrow(() => DiscloudConfig.validade(mockConfigData()));

    assert.doesNotThrow(() => DiscloudConfig.validade(mockConfigData({ RAM: 100 })));

    assert.doesNotThrow(() => DiscloudConfig.validade(mockConfigData({
      ID: "ID",
      TYPE: "site",
    })));

    assert.doesNotThrow(() => DiscloudConfig.validade(mockConfigData({
      ID: "ID",
      RAM: 512,
      TYPE: "site",
    })));
  });

  test("Testing invalid RAM Discloud Config", () => {
    assert.throws(() => DiscloudConfig.validade(mockConfigData({ RAM: 99 })));

    assert.throws(() => DiscloudConfig.validade(mockConfigData({
      RAM: 511,
      TYPE: "site",
    })));
  });
});
