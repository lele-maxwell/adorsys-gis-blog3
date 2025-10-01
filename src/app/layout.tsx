import "@blog/styles/globals.scss";

import { type Metadata } from "next";
import { TRPCReactProvider } from "@blog/trpc/react";
import { HydrateClient } from "@blog/trpc/server";
import { DARK_THEME } from "@blog/components/theme/types";
import type { PropsWithChildren } from "react";
import TranslationsProvider from "@blog/i18n/TranslationsProvider";
import fs from "node:fs/promises";
import path from "node:path";
import { cookies } from "next/headers";

export const metadata: Metadata = {
  title: "GIS Blog",
  description: "GIS Blog by Adorsys",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

async function loadCommon(lng: "en" | "fr") {
  const file = path.join(process.cwd(), "public", "i18n", lng, "common.json");
  const json = await fs.readFile(file, "utf8");
  return JSON.parse(json) as Record<string, unknown>;
}

export default async function RootLayout({ children }: Readonly<PropsWithChildren>) {
  const cookieStore = await cookies();
  const cookieLang = cookieStore.get("lang")?.value;
  const searchLang = undefined; // handled via middleware ideally; keep SSR deterministic
  const lng = (searchLang || cookieLang || "en").toString().startsWith("fr") ? "fr" : "en";
  const common = await loadCommon(lng);
  const resources = { [lng]: { common } } as const;
  return (
    <html lang={lng} data-theme={DARK_THEME}>
      <body className="bg-base-100 text-base-content">
        <TRPCReactProvider>
          <HydrateClient>
            <TranslationsProvider lng={lng} resources={resources}>
              {children}
            </TranslationsProvider>
          </HydrateClient>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
