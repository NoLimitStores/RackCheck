import { nl } from "./dictionaries/nl";
import { en } from "./dictionaries/en";
import { de } from "./dictionaries/de";
import { fr } from "./dictionaries/fr";
import type { Dictionary } from "./dictionaries/nl";
import type { Locale } from "./routes";

type AnyObject = Record<string, unknown>;

function isPlainObject(value: unknown): value is AnyObject {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

/**
 * Diepe merge waarbij `override` (de vertaling) voorrang krijgt op `base`
 * (Nederlands). Ontbrekende sleutels vallen terug op het Nederlands, zodat een
 * onvolledige vertaling nooit een crash of een leeg veld oplevert.
 */
function deepMerge<T>(base: T, override: unknown): T {
  if (!isPlainObject(base) || !isPlainObject(override)) {
    return (override === undefined ? base : (override as T));
  }
  const result: AnyObject = { ...(base as AnyObject) };
  for (const key of Object.keys(override)) {
    const baseValue = (base as AnyObject)[key];
    const overrideValue = (override as AnyObject)[key];
    result[key] =
      isPlainObject(baseValue) && isPlainObject(overrideValue)
        ? deepMerge(baseValue, overrideValue)
        : overrideValue === undefined
          ? baseValue
          : overrideValue;
  }
  return result as T;
}

const overrides: Record<Locale, unknown> = { nl: {}, en, de, fr };

/** Volledige, type-safe dictionary voor een taal, met Nederlandse fallback. */
export function getDictionary(locale: Locale): Dictionary {
  return deepMerge(nl, overrides[locale] ?? {});
}

export type { Dictionary };
