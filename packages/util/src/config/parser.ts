import { DiscloudConfigScopes } from "@discloudapp/api-types/v2";

const configCleanerPattern = /(^\s*#.*[\r\n]+)|(\s*#.*)/gm;
const configLineSplitterPattern = /[\r\n]+/g;
const configArraySplitterPattern = /\s*,\s*/g;

export function parseConfigContent<T>(content: string): T
export function parseConfigContent(content: string) {
  const lines = content.replace(configCleanerPattern, "").split(configLineSplitterPattern);

  return parseValues(Object.fromEntries(Array.from(parseLines(lines))));
}

function* parseLines(lines: string[]) {
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    yield line.trimEnd().split("=");
  }
}

const STRING_BOOLEAN = new Set(["false", "true"]);

function parseValues<T>(obj: Record<string, string>): T
function parseValues(obj: any) {
  let key = DiscloudConfigScopes.APT;
  if (key in obj) obj[key] = obj[key].split(configArraySplitterPattern).filter(Boolean);

  key = DiscloudConfigScopes.AUTORESTART;
  if (key in obj && STRING_BOOLEAN.has(obj[key])) obj[key] = obj[key] == true;

  key = DiscloudConfigScopes.RAM;
  if (key in obj && !isNaN(obj[key])) obj[key] = Number(obj[key]);

  return obj;
}

export function stringifyConfigObject(obj: any): string {
  if (obj === undefined || obj === null) return "";
  if (!obj) return `${obj}`;

  switch (typeof obj) {
    case "bigint":
    case "number":
      return `${obj}`;

    case "string":
      return obj;

    case "symbol":
      return String(obj);

    case "object": {
      const result = [];

      if (Array.isArray(obj)) {
        for (let i = 0; i < obj.length; i++)
          result.push(stringifyConfigObject(obj[i]));
      } else {
        for (const key in obj)
          result.push(`${key}=${stringifyConfigObject(obj[key])}`);
      }

      return result.filter(Boolean).join("\n");
    }

    default:
      return `${obj}`;
  }
}
