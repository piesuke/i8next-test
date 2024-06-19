"use client";

import i18next from "i18next";
import resourcesToBackend from "i18next-resources-to-backend";
import { useEffect } from "react";
import {
  initReactI18next,
  useTranslation as useTranslationOrigin,
} from "react-i18next";
import { getOptions, NameSpaces } from "./settings";

// eslint-disable-next-line import/no-named-as-default-member
void i18next
  .use(initReactI18next)
  .use(
    resourcesToBackend(
      (language: string, namespace: string) =>
        import(`./${language}/${namespace}.json`)
    )
  )
  .init({
    ...getOptions(),
    lng: undefined,
    detection: {
      order: ["path", "cookie", "htmlTag"],
    },
  });

export const useTranslation = <T extends NameSpaces>(lang = "ja", ns: T) => {
  const { t, i18n } = useTranslationOrigin<T>(ns);

  console.log("useTranslation", lang, ns);

  useEffect(() => {
    const changeLanguage = async () => {
      const shouldChangeLanguage = lang && lang !== i18n.resolvedLanguage;
      if (shouldChangeLanguage) {
        console.log("changeLanguage");
        await i18n.changeLanguage(lang);
      }
    };
    void changeLanguage();
  }, [lang, i18n]);

  return { t, i18n };
};
