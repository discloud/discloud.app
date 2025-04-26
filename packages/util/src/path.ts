import { dirname, join } from "path";

const BUILD_ROOT_PATH = __dirname;
const ROOT_PATH = dirname(BUILD_ROOT_PATH);

export function joinWithRoot(...path: string[]) {
  return join(ROOT_PATH, ...path);
}
