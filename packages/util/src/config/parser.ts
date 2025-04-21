import { DiscloudConfigScopes } from "@discloudapp/api-types/v2";
import Comments from "./comments";

export default class ConfigParser {
  private static readonly lineSplitterPattern = /[\r\n]+/g;
  private static readonly arraySplitterPattern = /\s*,\s*/g;
  private static readonly assignmentCharacter = "=";
  private static readonly STRING_BOOLEAN = new Set(["false", "true"]);

  constructor(
    private readonly comments: Comments,
  ) { }

  parse<T>(content: string): T {
    const lines = content.split(ConfigParser.lineSplitterPattern);

    return this.#parseValues(Object.fromEntries(Array.from(this.#parseLines(lines))));
  }

  *#parseLines(lines: string[]) {
    this.comments.clear();

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trimEnd();
      const comment = line.match(Comments.pattern);

      if (typeof comment?.index === "number") {
        this.comments.set(i, comment.index, comment[1]);

        if (comment.index < 1) continue;
      }

      yield line.replace(Comments.pattern, "").trimEnd().split(ConfigParser.assignmentCharacter) as [string, string];
    }
  }

  #parseValues<T>(obj: Record<string, string>): T
  #parseValues(obj: any) {
    let key = DiscloudConfigScopes.APT;
    if (key in obj) obj[key] = obj[key].split(ConfigParser.arraySplitterPattern).filter(Boolean);

    key = DiscloudConfigScopes.AUTORESTART;
    if (key in obj && ConfigParser.STRING_BOOLEAN.has(obj[key])) obj[key] = obj[key] == true;

    key = DiscloudConfigScopes.RAM;
    if (key in obj && !isNaN(obj[key])) obj[key] = Number(obj[key]);

    return obj;
  }

  stringify(obj: unknown): string
  stringify(obj: any): string {
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
            result.push(this.stringify(obj[i]));
        } else {
          for (const key in obj)
            result.push(`${key}${ConfigParser.assignmentCharacter}${this.stringify(obj[key])}`);
        }

        return this.#writeComments(result.filter(Boolean)).join("\n");
      }

      default:
        return `${obj}`;
    }
  }

  #writeComments(lines: string[]) {
    if (!this.comments.size) return lines;

    for (const comment of this.comments.values()) {
      if (comment.character) {
        lines[comment.line] = lines[comment.line] + comment;
      } else {
        const spliced = lines.splice(comment.line);

        lines.push(comment.content, ...spliced);
      }
    }

    return lines;
  }
}