import assert from "assert";

export function validateStringType(value: string): void
export function validateStringType(value: unknown): void
export function validateStringType(value: unknown) {
  assert(typeof value === "string", new TypeError(`Expected string but received ${typeof value}`));
}

export function validateNonEmptyString(value: string): void
export function validateNonEmptyString(value: unknown): void
export function validateNonEmptyString(value: any) {
  validateStringType(value);
  assert(value.length, new RangeError("The string cannot be empty"));
}

export function validateNumberType(value: number): void
export function validateNumberType(value: unknown): void
export function validateNumberType(value: unknown) {
  assert(typeof value === "number", new TypeError(`Expected number but received ${typeof value}`));
}
