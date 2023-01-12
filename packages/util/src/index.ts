export * from "./BitField";
export * from "./FileResolver";
export * from "./ModPermissionsBF";

export function calculatePercentage(value: string | number, major: string | number) {
  return Number((Number(value) / Number(major) * 100).toFixed(2));
}
