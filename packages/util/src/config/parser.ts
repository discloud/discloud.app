import { DiscloudConfigScopes } from "@discloudapp/api-types/v2";
import type { IParser } from "./interfaces/comments/parser";
import type { ICommentRepository } from "./interfaces/comments/repository";

const _arraySplitterPattern = /\s*,\s*/g;
const _arraySplitterCharacter = ",";
const _assignmentCharacter = "=";
const _lineBreakCharacter = "\n";
const _lineBreakSplitterPattern = /\r?\n/g;
const _trueAsText = "true";
const _zero = 0;

export default class ConfigParser implements IParser {
  constructor(
    protected readonly _commentRepository: ICommentRepository,
  ) { }

  parse<T>(content: string): T {
    const lines = content.trim().split(_lineBreakSplitterPattern);

    const parsed = Object.fromEntries(Array.from(this.#parseLines(lines)));

    return _parseValues(parsed);
  }

  *#parseLines(lines: string[]) {
    this._commentRepository.clear();

    for (let i = _zero; i < lines.length; i++) {
      const content = this._commentRepository.parse(i, lines[i].trimEnd());
      if (content) yield content.split(_assignmentCharacter) as [string, string];
    }
  }

  stringify(obj: unknown): string
  stringify(obj: any): string {
    return this.#writeComments(_stringify(obj));
  }

  #writeComments(lines: string[]): string[]
  #writeComments(content: string): string
  #writeComments(lines: string | string[]) {
    if (!this._commentRepository.size) return lines;

    if (!Array.isArray(lines)) return this.#writeComments(lines.split(_lineBreakSplitterPattern));

    for (const comment of this._commentRepository) {
      if (comment.character !== _zero) {
        lines[comment.line] += comment.content;
        continue;
      }

      lines.splice(comment.line, _zero, comment.content);
    }

    return lines.join(_lineBreakCharacter);
  }
}

function _parseValues<T>(obj: Record<string, string>): T
function _parseValues(obj: any) {
  if (obj[DiscloudConfigScopes.APT] != null)
    obj[DiscloudConfigScopes.APT] = _resolveArrayValue(obj[DiscloudConfigScopes.APT]);

  if (obj[DiscloudConfigScopes.AUTORESTART] != null)
    obj[DiscloudConfigScopes.AUTORESTART] = _resolveBooleanValue(obj[DiscloudConfigScopes.AUTORESTART]);

  if (obj[DiscloudConfigScopes.RAM] != null)
    obj[DiscloudConfigScopes.RAM] = _resolveNumberValue(obj[DiscloudConfigScopes.RAM]);

  if (obj[DiscloudConfigScopes.VLAN] != null)
    obj[DiscloudConfigScopes.VLAN] = _resolveBooleanValue(obj[DiscloudConfigScopes.VLAN]);

  return obj;
}

function _resolveArrayValue(value: string) {
  return value.split(_arraySplitterPattern).filter(Boolean);
}

function _resolveBooleanValue(value: boolean | string) {
  return value == _trueAsText;
}

function _resolveNumberValue(value: string) {
  return Number(value);
}

function _stringify(obj: any): string {
  switch (typeof obj) {
    case "bigint":
    case "boolean":
    case "number":
      return `${obj}`;

    case "object": {
      if (obj === null) return "";

      const result = [];

      if (Array.isArray(obj)) {
        for (let i = _zero; i < obj.length; i++)
          result.push(_stringify(obj[i]));

        return result.join(_arraySplitterCharacter);
      }

      for (const key in obj)
        result.push(`${key}${_assignmentCharacter}${_stringify(obj[key])}`);

      return result.join(_lineBreakCharacter);
    }

    case "string": return obj;

    case "symbol": return String(obj);

    case "function":
    case "undefined":
    default:
      return "";
  }
}
