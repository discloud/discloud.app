import { readdirSync } from "node:fs";
import { extname, join } from "node:path";

const fileExt = extname(__filename);

const files = readdirSync(__dirname, { withFileTypes: true })
  .filter((file) => file.name !== "index.js");

for (const file of files) {
  if (file.isFile()) {
    if (file.name.endsWith(fileExt)) {
      import(`${join(__dirname, file.name)}`)
        .then(() => console.log("Success:", file.name.replace(fileExt, "")));
    }
  }
}
