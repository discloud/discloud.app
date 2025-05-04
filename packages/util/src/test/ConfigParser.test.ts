import { suite, test, type TestContext } from "node:test";
import Comments from "../config/comments";
import ConfigParser from "../config/parser";

suite("Testing Discloud Config Parser", () => {
  const comments = new Comments();
  const parser = new ConfigParser(comments);

  const content = [
    "# first comment test",
    "ID=123456789 # second comment test",
    "RAM=100",
    "AUTORESTART=true",
    "APT=apt1,apt2",
  ].join("\n");

  const expectedParsed = {
    ID: "123456789",
    RAM: 100,
    AUTORESTART: true,
    APT: ["apt1", "apt2"],
  };

  const expectedComments = [
    { line: 0, character: 0, content: "# first comment test" },
    { line: 1, character: 12, content: " # second comment test" },
  ];

  test("Testing parser with comments", (t: TestContext) => {
    const actual = parser.parse(content);

    t.assert.deepStrictEqual(actual, expectedParsed);
  });

  test("Checking comments", (t: TestContext) => {
    const actual = Array.from(comments.values());

    t.assert.deepEqual(actual, expectedComments);
  });

  test("Testing writing comments in lines", (t: TestContext) => {
    const actual = parser.stringify(expectedParsed);

    t.assert.strictEqual(actual, content);
  });
});
