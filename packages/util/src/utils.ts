import { deprecate } from "util";

function _bindFunctions<I extends Record<any, any>>(instance: I): void;
function _bindFunctions<I extends Record<any, any>, B extends I | unknown>(instance: I, bind: B): void;
function _bindFunctions(instance: any, bind?: any) {
  if (!instance) return;

  bind ??= instance;

  for (const propertyName of Object.getOwnPropertyNames(Object.getPrototypeOf(instance))) {
    try {
      if (typeof instance[propertyName] === "function")
        bind[propertyName] = instance[propertyName].bind(bind);
    } catch { }
  }
}

/** @deprecated bindFunctions is deprecated and will be removed in the future. */
export const bindFunctions = deprecate(_bindFunctions, "bindFunctions is deprecated and will be removed in the future.");

export function calculatePercentage(value: string | number, major: string | number) {
  return Number((Number(value) / Number(major) * 100).toFixed(2));
}

function _mergeDefaults<A extends Record<any, any>>(defaults: A, options: Partial<A>): A {
  if (options === null) return options;
  if (options === undefined) return defaults;

  for (const key in defaults) {
    if (key === "__proto__" || key === "prototype" || key === "constructor") continue;

    const defaultValue = defaults[key];
    const optionValue = options[key];

    const canRecurse =
      typeof defaultValue === "object" && defaultValue !== null &&
      typeof optionValue === "object" && optionValue !== null &&
      Object.hasOwn(options, key);

    if (canRecurse) {
      options[key as keyof A] = _mergeDefaults(defaultValue, optionValue);
    } else {
      options[key as keyof A] ??= defaultValue;
    }
  }

  return options as A;
}

/** @deprecated mergeDefaults is deprecated and will be removed in the future. */
export const mergeDefaults = deprecate(_mergeDefaults, "mergeDefaults is deprecated and will be removed in the future.");
