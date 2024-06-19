"use client";
import { useCurrentLocale } from "next-i18n-router/client";
import { i18nConfig } from "../../../i18nConfig";
import { useTranslation } from "../i18n/client";

export const ClientComponent = () => {
  const locale = useCurrentLocale(i18nConfig);
  const { t } = useTranslation(locale, "common");

  return <div>{t("hello")}</div>;
};
