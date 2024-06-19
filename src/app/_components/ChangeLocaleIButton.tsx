"use client";

import { useCurrentLocale } from "next-i18n-router/client";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { i18nConfig } from "../../../i18nConfig";

export const ChangeLocaleButton = () => {
  const pathname = usePathname();
  const locale = useCurrentLocale(i18nConfig) ?? "ja";

  const router = useRouter();
  const changeLocale = (newLocale: string) => {
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = "; expires=" + date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    if (locale === i18nConfig.defaultLocale) {
      router.push("/" + newLocale + pathname);
    } else {
      router.push(pathname.replace(`/${locale}`, `/${newLocale}`));
    }

    router.refresh();
  };

  return (
    <>
      <button onClick={() => changeLocale("ja")}>ja</button>
      <button onClick={() => changeLocale("en")}>en</button>
    </>
  );
};
