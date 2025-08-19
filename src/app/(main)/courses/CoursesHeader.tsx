"use client";
import "@blog/i18n/boot";

import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

type Props = { total: number };

export function CoursesHeader({ total }: Props) {
  const { t } = useTranslation();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const tr = (key: string, options?: any): string => (mounted ? (t(key, options) as unknown as string) : "");
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-3xl font-bold" suppressHydrationWarning>{tr("nav.courses")}</h1>
      <span className="badge badge-primary badge-lg">
        <span suppressHydrationWarning>{tr("courses.available", { count: total })}</span>
      </span>
    </div>
  );
}
