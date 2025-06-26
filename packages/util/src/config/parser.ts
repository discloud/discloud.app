import { DiscloudConfigScopes } from "@discloudapp/api-types/v2";
import { type IParser } from "./interfaces/comments/parser";
import { type ICommentRepository } from "./interfaces/comments/repository";

export default class ConfigParser implements IParser {
  protected static readonly arraySplitterPattern = /\s*,\s*/g;
  protected static readonly arraySplitterCharacter = ",";
  protected static readonly assignmentCharacter = "=";
  protected static readonly lineBreakCharacter = "\n";
  protected static readonly lineBreakSplitterPattern = /[\r\n]+/g;
  protected static readonly falseString = "false";
  protected static readonly trueString = "true";
  protected static readonly stringBoolean = new Set([ConfigParser.falseString, ConfigParser.trueString]);

  constructor(
    protected readonly _commentRepository: ICommentRepository,
  ) { }

  parse<T>(content: string): T {
    const lines = content.split(ConfigParser.lineBreakSplitterPattern);

    const parsed = Object.fromEntries(Array.from(this.#parseLines(lines)));

    return this.#parseValues(parsed);
  }

  *#parseLines(lines: string[]) {
    this._commentRepository.clear();

    for (let i = 0; i < lines.length; i++) {
      const content = this._commentRepository.parse(i, lines[i].trimEnd());

      if (!content) continue;

      yield content.split(ConfigParser.assignmentCharacter) as [string, string];
    }
  }

  #parseValues<T>(obj: Record<string, string>): T
  #parseValues(obj: any) {
    let key = DiscloudConfigScopes.APT;
    if (key in obj) obj[key] = obj[key].split(ConfigParser.arraySplitterPattern).filter(Boolean);

    key = DiscloudConfigScopes.AUTORESTART;
    if (key in obj && ConfigParser.stringBoolean.has(obj[key])) obj[key] = obj[key] == ConfigParser.trueString;

    key = DiscloudConfigScopes.RAM;
    if (key in obj && obj[key]) obj[key] = Number(obj[key]);

    key = DiscloudConfigScopes.VLAN;
    if (key in obj && ConfigParser.stringBoolean.has(obj[key])) obj[key] = obj[key] == ConfigParser.trueString;

    return obj;
  }

  stringify(obj: unknown): string
  stringify(obj: any): string {
    return this.#writeComments(this.#stringify(obj));
  }

  #stringify(obj: any): string {
    switch (typeof obj) {
      case "bigint":
      case "boolean":
      case "number":
        return `${obj}`;

      case "object": {
        if (obj === null) return "";

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

      case "string": return obj;

      case "symbol": return String(obj);

      case "function":
      case "undefined":
      default:
        return "";
    }
  }

  #writeComments(lines: string[]): string[]
  #writeComments(content: string): string
  #writeComments(lines: string | string[]) {
    if (!this._commentRepository.size) return lines;

    if (!Array.isArray(lines)) return this.#writeComments(lines.split(ConfigParser.lineBreakSplitterPattern));

    for (const comment of this._commentRepository) {
      if (comment.character) {
        lines[comment.line] += comment.content;
        continue;
      }

      lines.splice(comment.line, 0, comment.content);
    }

    return lines.join(ConfigParser.lineBreakCharacter);
  }
}
