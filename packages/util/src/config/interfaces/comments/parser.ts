export interface IParser {
  parse<T>(content: string): T
  stringify(obj: unknown): string
}
