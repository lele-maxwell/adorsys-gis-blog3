"use client";

import { useEffect } from "react";
import i18n from "i18next";
import { I18nextProvider, initReactI18next } from "react-i18next";

export type I18nResources = Record<string, { common: Record<string, unknown> }>;

type Props = {
  lng: "en" | "fr";
  resources: I18nResources;
  children: React.ReactNode;
};

export default function TranslationsProvider({ lng, resources, children }: Props) {
  // Synchronous init on first render to avoid showing raw keys
  if (!i18n.isInitialized) {
    i18n.use(initReactI18next).init({
      resources,
      lng,
      fallbackLng: "en",
      ns: ["common"],
      defaultNS: "common",
      interpolation: { escapeValue: false },
      supportedLngs: ["en", "fr"],
      returnNull: false,
      react: { useSuspense: false },
      initImmediate: false,
    });
  }

  useEffect(() => {
    const hasBundle = i18n.hasResourceBundle(lng, "common");
    if (!hasBundle && resources?.[lng]?.common) {
      i18n.addResources(lng, "common", resources[lng].common as any);
    }
    if (i18n.language !== lng) {
      void i18n.changeLanguage(lng);
    }
  }, [lng, resources]);

  // Honor ?lang= in the URL on client navigation or hard reloads
  useEffect(() => {
    try {
      const url = new URL(window.location.href);
      const qp = (url.searchParams.get("lang") || "").toLowerCase();
      const qpShort = qp.includes("-") ? qp.split("-")[0] : qp;
      if (qpShort === "fr" || qpShort === "en") {
        const target = qpShort as "en" | "fr";
        const doChange = async () => {
          if (!i18n.hasResourceBundle(target, "common")) {
            const res = await fetch(`/i18n/${target}/common.json`);
            if (res.ok) {
              const json = await res.json();
              i18n.addResources(target, "common", json as any);
            }
          }
          if (!i18n.language?.startsWith(target)) {
            await i18n.changeLanguage(target);
          }
          // persist cookie for server navigations
          const maxAgeDays = 30;
          document.cookie = `lang=${target}; Path=/; Max-Age=${maxAgeDays * 24 * 60 * 60}`;
        };
        void doChange();
      }
    } catch {}
  }, []);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}


