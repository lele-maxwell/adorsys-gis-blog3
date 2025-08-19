"use client";

import type { PropsWithChildren } from "react";
import { useEffect, useState } from "react";
import { i18nFn } from "@blog/i18n";

export function I18nInit({ children }: PropsWithChildren) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    i18nFn()
      .then(() => setReady(true))
      .catch(() => setReady(true));
  }, []);

  if (!ready) {
    return null;
  }
  return children as any;
}
