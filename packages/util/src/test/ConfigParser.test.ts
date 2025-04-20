import { suite, test, type TestContext } from "node:test";
import Comments from "../config/comments";
import { parseLines, writeComments } from "../config/parser";

suite("Testing Discloud Config Parser", () => {
  const linesToParse = [
    "# first comment test",
    "ID=123456789 # second comment test",
  ];

  const comments = new Comments();

  test("Testing parser with comments", (t: TestContext) => {
    const actual = Object.fromEntries(Array.from(parseLines(linesToParse, comments)));
    const expected = { ID: "123456789" };

    t.assert.deepStrictEqual(actual, expected);
  });

  test("Verifying comments", (t: TestContext) => {
    const expectedCommentsData = [
      { line: 0, character: 0, content: "# first comment test" },
      { line: 1, character: 12, content: " # second comment test" },
    ];

    const actual = Array.from(comments.values());

    t.assert.deepEqual(actual, expectedCommentsData);
  });

  test("Testing writing comments in lines", (t: TestContext) => {
    const linesToWriteComments = ["ID=123456789"];

    const actual = writeComments(linesToWriteComments, comments);

    t.assert.deepStrictEqual(actual, linesToParse);
  });
});
