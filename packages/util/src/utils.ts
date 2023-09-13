export function calculatePercentage(value: string | number, major: string | number) {
  return Number((Number(value) / Number(major) * 100).toFixed(2));
}

export function mergeDefaults<A extends Record<any, any>>(defaults: A, options: Partial<A>): A {
  if (options === null || options === undefined) return defaults;

  const keys = Object.keys(defaults);

  for (const key of keys) {
    if (typeof defaults[key] === "object") {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      options[key as keyof A] = mergeDefaults(defaults[key], options[key]);
    } else {
      options[key as keyof A] ??= defaults[key];
    }
  }

  return options as A;
}
