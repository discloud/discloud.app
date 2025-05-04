import { DiscloudConfigScopes } from "@discloudapp/api-types/v2";
import Comments from "./comments";

export default class ConfigParser {
  private static readonly arraySplitterPattern = /\s*,\s*/g;
  private static readonly arraySplitterCharacter = ",";
  private static readonly assignmentCharacter = "=";
  private static readonly lineBreakCharacter = "\n";
  private static readonly lineBreakSplitterPattern = /[\r\n]+/g;
  private static readonly falseString = "false";
  private static readonly trueString = "true";
  private static readonly stringBoolean = new Set([ConfigParser.falseString, ConfigParser.trueString]);

  constructor(
    private readonly comments: Comments,
  ) { }

  parse<T>(content: string): T {
    const lines = content.split(ConfigParser.lineBreakSplitterPattern);

    const parsed = Object.fromEntries(Array.from(this.#parseLines(lines)));

    return this.#parseValues(parsed);
  }

  *#parseLines(lines: string[]) {
    this.comments.clear();

    for (let i = 0; i < lines.length; i++) {
      let line = lines[i].trimEnd();
      const result = Comments.match(line);

      if (result !== null) {
        this.comments.set(i, result.index, result.groups!.content);

        if (result.index < 1) continue;

        line = line.substring(0, result.index);
      }

      yield line.split(ConfigParser.assignmentCharacter) as [string, string];
    }
  }

  #parseValues<T>(obj: Record<string, string>): T
  #parseValues(obj: any) {
    let key = DiscloudConfigScopes.APT;
    if (key in obj) obj[key] = obj[key].split(ConfigParser.arraySplitterPattern).filter(Boolean);

    key = DiscloudConfigScopes.AUTORESTART;
    if (key in obj && ConfigParser.stringBoolean.has(obj[key])) obj[key] = obj[key] == ConfigParser.trueString;

    key = DiscloudConfigScopes.RAM;
    if (key in obj && !isNaN(obj[key])) obj[key] = Number(obj[key]);

    return obj;
  }

  stringify(obj: unknown): string
  stringify(obj: any): string {
    return this.#writeComments(this.#stringify(obj));
  }

  #stringify(obj: any): string {
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
            result.push(this.#stringify(obj[i]));

          return result.join(ConfigParser.arraySplitterCharacter);
        }

        for (const key in obj)
          result.push(`${key}${ConfigParser.assignmentCharacter}${this.#stringify(obj[key])}`);

        return result.join(ConfigParser.lineBreakCharacter);
      }

      default:
        return `${obj}`;
    }
  }

  #writeComments(lines: string[]): string[]
  #writeComments(content: string): string
  #writeComments(lines: string | string[]) {
    if (!this.comments.size) return lines;

    let linesIsArray = true;

    if (!Array.isArray(lines)) {
      linesIsArray = false;
      lines = lines.split(ConfigParser.lineBreakSplitterPattern);
    }

    for (const comment of this.comments.values()) {
      if (comment.character) {
        lines[comment.line] += comment.content;
        continue;
      }

      const spliced = lines.splice(comment.line);

      lines.push(comment.content, ...spliced);
    }

    return linesIsArray ? lines : lines.join(ConfigParser.lineBreakCharacter);
  }
}