"use client";

import icon from "@blog/components/icon.svg";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@blog/components/container";
import { useTranslation } from "react-i18next";

export default function LargeFooter() {
  const { t } = useTranslation();
  return (
    <div className="bg-base-300">
      <Container>
        <footer className="footer sm:footer-horizontal px-2 sm:px-0 py-6 sm:py-10 gap-6">
          <aside className="max-w-sm">
            <Image src={icon} className="fill-current w-20 h-20 sm:w-24 sm:h-24" alt={t("footer.logo") ?? "logo"} />
            <p className="mt-2 text-sm opacity-80">
              {t("footer.copyright", { year: new Date().getFullYear() })}
              <br />
              {t("footer.rights")}
            </p>
          </aside>
          <nav>
            <h6 className="footer-title">{t("footer.company")}</h6>
            <Link href="/res/faq" className="link link-hover">
              {t("footer.faq")}
            </Link>
            <Link href="/res/contact" className="link link-hover">
              {t("footer.contact")}
            </Link>
          </nav>
          <nav>
            <h6 className="footer-title">{t("footer.legal")}</h6>
            <Link href="/res/tos" className="link link-hover">
              {t("footer.terms")}
            </Link>
            <Link href="/res/privacy" className="link link-hover">
              {t("footer.privacy")}
            </Link>
          </nav>
        </footer>
      </Container>
    </div>
  );
}
