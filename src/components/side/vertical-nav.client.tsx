"use client";

import dynamic from "next/dynamic";

const VerticalNavDynamic = dynamic(() => import("./vertical-nav"), {
    ssr: false,
});

export default function VerticalNavClient() {
    return <VerticalNavDynamic/>;
}


