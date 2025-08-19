"use client";
import "@blog/i18n/boot";

import { useTranslation } from "react-i18next";

type Props = { total: number };

export function CoursesHeader({ total }: Props) {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-center sm:text-left">
      <h1 className="text-2xl sm:text-3xl font-bold">{t("nav.courses")}</h1>
      <span className="badge badge-primary badge-md sm:badge-lg">
        {t("courses.available", { count: total })}
      </span>
    </div>
  );
}
