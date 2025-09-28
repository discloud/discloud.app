import assert from "assert";
import { existsSync } from "fs";
import { opendir } from "fs/promises";
import { suite, test } from "node:test";
import { DiscloudConfig } from "../config";
import { type ParsedDiscloudConfigData } from "../config/types";

suite("Testing Discloud Config", async () => {
  const file = await findFile();

  assert(file);

  function mockConfigData(props: ParsedDiscloudConfigData = {}) {
    props.MAIN = file!.name;
    return props;
  }

  test("MAIN", () => {
    const data = mockConfigData();
    assert.doesNotThrow(() => DiscloudConfig.validade(data));
    assert(existsSync(data.MAIN!));
  });

  suite("TYPE", () => {
    test("bot", () => {
      assert.doesNotThrow(() => DiscloudConfig.validade(mockConfigData({ TYPE: "bot" })));
      assert.doesNotThrow(() => DiscloudConfig.validade(mockConfigData({ TYPE: "bot", RAM: 100 })));
      assert.throws(() => DiscloudConfig.validade(mockConfigData({ TYPE: "bot", RAM: 99 })));
    });

    test("site", () => {
      assert.throws(() => DiscloudConfig.validade(mockConfigData({ TYPE: "site" })));
      assert.doesNotThrow(() => DiscloudConfig.validade(mockConfigData({ TYPE: "site", ID: "test" })));
      assert.doesNotThrow(() => DiscloudConfig.validade(mockConfigData({ TYPE: "site", ID: "test", RAM: 512 })));
      assert.throws(() => DiscloudConfig.validade(mockConfigData({ TYPE: "site", ID: "test", RAM: 511 })));
    });
  });
});

async function findFile() {
  for await (const dirent of await opendir(".", { recursive: true })) {
    if (dirent.isFile()) return dirent;
  }
}
