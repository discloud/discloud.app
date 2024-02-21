import { readdirSync } from "fs";
import { extname, join } from "path";

const fileExt = extname(__filename);

const files = readdirSync(__dirname, { withFileTypes: true })
  .filter((file) => file.name.endsWith(fileExt) && file.name !== "index.js");

for (const file of files) {
  if (file.isFile()) {
    import(join(__dirname, file.name));
  }
}
