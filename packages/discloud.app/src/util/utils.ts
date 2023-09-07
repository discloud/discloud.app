export function mergeDefaults<
  A extends Record<any, any>,
  B extends Record<any, any>
>(defaults: A, options: B) {
  if (options === null || options === undefined) return defaults;

  const keys = Object.keys(defaults);

  for (const key of keys) {
    if (typeof defaults[key] === "object") {
      options[key as keyof B] = mergeDefaults(defaults[key], options[key]);
    } else {
      options[key as keyof B] ??= defaults[key];
    }
  }

  return options;
}
