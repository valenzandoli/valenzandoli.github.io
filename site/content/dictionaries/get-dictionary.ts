import "server-only";
import type { Locale } from "./i18n-config";

const dictionaries = {
  en: () => import("./en").then((m) => m.default),
  es: () => import("./es").then((m) => m.default),
};

export const getDictionary = async (locale: Locale) => dictionaries[locale]();
