import { existsSync, readdirSync } from "node:fs";
import { extname, join } from "node:path";

const FILE_EXT = extname(__filename);

function load(dir: string) {
  if (typeof dir !== "string") return;

  if (!existsSync(dir)) return;

  const files = readdirSync(dir, { withFileTypes: true });

  for (const file of files) {
    const filePath = join(dir, file.name);

    if (!existsSync(filePath)) continue;

    if (file.isDirectory()) {
      load(filePath);

      continue;
    }

    if (file.isFile()) {
      if (file.name === `index${FILE_EXT}` || !file.name.endsWith(FILE_EXT)) continue;

      import(filePath);

      continue;
    }
  }
}

load(__dirname);
