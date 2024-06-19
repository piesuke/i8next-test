import { InitOptions } from "i18next";

import { i18nConfig } from "../../../i18nConfig";
import resources from "../../../@types/resources";

export type NameSpaces = keyof typeof resources;

export const getOptions = (
  lng = i18nConfig.defaultLocale,
  ns?: string
): InitOptions => {
  return {
    supportedLngs: i18nConfig.locales,
    fallbackLng: i18nConfig.defaultLocale,
    lng,
    fallbackNS: Object.keys(resources)[0],
    ns: ns ?? [],
    keySeparator: ".",
  };
};
