"use client";

import dynamic from "next/dynamic";

export const CourseCard = dynamic(
  () => import("./course-card").then((m) => m.CourseCard),
  { ssr: false }
);


