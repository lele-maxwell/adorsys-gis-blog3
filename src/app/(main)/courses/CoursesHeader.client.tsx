"use client";

import dynamic from "next/dynamic";

export const CoursesHeader = dynamic(() => import("./CoursesHeader").then(m => m.CoursesHeader), {
    ssr: false,
});


