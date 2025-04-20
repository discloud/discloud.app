import { DiscloudConfigScopes } from "@discloudapp/api-types/v2";
import Comments from "./comments";

const configLineSplitterPattern = /[\r\n]+/g;
const configArraySplitterPattern = /\s*,\s*/g;
const configAssignmentCharacter = "=";

export function parseConfigContent<T>(content: string): T
export function parseConfigContent<T>(content: string, comments: Comments): T
export function parseConfigContent(content: string, comments?: Comments) {
  const lines = content.split(configLineSplitterPattern);

  return parseValues(Object.fromEntries(Array.from(parseLines(lines, comments))));
}

export function* parseLines(lines: string[], comments: Comments = new Comments()) {
  comments.clear();

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trimEnd();
    const comment = line.match(Comments.pattern);

    if (typeof comment?.index === "number") {
      comments.add(i, comment.index, comment[1]);

      if (comment.index < 1) continue;
    }

    yield line.replace(Comments.pattern, "").trimEnd().split(configAssignmentCharacter) as [string, string];
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

export function stringifyConfigObject(obj: any, comments?: Comments): string {
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
          result.push(stringifyConfigObject(obj[i], comments));
      } else {
        for (const key in obj)
          result.push(`${key}${configAssignmentCharacter}${stringifyConfigObject(obj[key], comments)}`);
      }

      return writeComments(result.filter(Boolean), comments).join("\n");
    }

    default:
      return `${obj}`;
  }
}

export function writeComments(lines: string[], comments: Comments = new Comments()) {
  if (!comments.size) return lines;

  for (const comment of comments.values()) {
    if (comment.character) {
      lines[comment.line] = lines[comment.line] + comment;
    } else {
      const spliced = lines.splice(comment.line);

      lines.push(comment.content, ...spliced);
    }
  }

  return lines;
}
