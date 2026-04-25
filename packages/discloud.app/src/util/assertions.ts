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

export function validateSubdomainId(value: string): void
export function validateSubdomainId(value: unknown): void
export function validateSubdomainId(value: any) {
  assert(subdomainIdRegexp.test(value), new Error("Invalid Subdomain Id. Make sure it matches ^[a-z0-9-]{2,20}$"));
}

/** https://docs.discloud.com/api-and-integrations/api-overview/subdomain#post-subdomain-subdomainname */
const subdomainIdRegexp = /^[a-z0-9-]{2,20}$/;
