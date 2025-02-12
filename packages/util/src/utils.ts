export function bindFunctions<I extends Record<any, any>>(instance: I): void;
export function bindFunctions<I extends Record<any, any>, B extends I | unknown>(instance: I, bind: B): void;
export function bindFunctions(instance: any, bind?: any) {
  if (!instance) return;

  bind ??= instance;

  for (const propertyName of Object.getOwnPropertyNames(Object.getPrototypeOf(instance))) {
    try {
      if (typeof instance[propertyName] === "function")
        bind[propertyName] = instance[propertyName].bind(bind);
    } catch { }
  }
}

export function calculatePercentage(value: string | number, major: string | number) {
  return Number((Number(value) / Number(major) * 100).toFixed(2));
}

export function mergeDefaults<A extends Record<any, any>>(defaults: A, options: Partial<A>): A {
  if (options === null) return options;
  if (options === undefined) return defaults;

  for (const key in defaults) {
    if (typeof options[key] === "object") {
      options[key as keyof A] = mergeDefaults(defaults[key], options[key]!);
    } else {
      options[key as keyof A] ??= defaults[key];
    }
  }

  return options as A;
}
