import { AppNavBar } from "@blog/components/navbar";
import LargeFooter from "../../components/footer/large-footer";
import type { PropsWithChildren } from "react";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const VerticalNav = dynamic(() => import("@blog/components/side/vertical-nav"), {
  ssr: false,
});

export default function MainLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <div className="min-h-screen flex flex-col">
      <Suspense fallback={null}>
        <AppNavBar />
      </Suspense>
      <VerticalNav />
      <main id="main" className="flex-1">
        {children}
      </main>
      <LargeFooter />
    </div>
  );
}
