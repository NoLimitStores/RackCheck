import type { Dictionary } from "./nl";

/**
 * Diepe, gedeeltelijke variant van de dictionary. Arrays worden als geheel
 * overschreven (niet element voor element gemerged), zodat bijvoorbeeld de
 * keuzelijst van het formulier compleet blijft.
 */
export type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends readonly unknown[] ? T[K] : T[K] extends object ? DeepPartial<T[K]> : T[K];
};

export type LocaleDict = DeepPartial<Dictionary>;
