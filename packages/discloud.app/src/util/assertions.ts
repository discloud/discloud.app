import assert from "assert";

export function validateStringType(value: string): void
export function validateStringType(value: unknown): void
export function validateStringType(value: unknown) {
  assert(typeof value === "string");
}

export function validateNumberType(value: number): void
export function validateNumberType(value: unknown): void
export function validateNumberType(value: unknown) {
  assert(typeof value === "number");
}
