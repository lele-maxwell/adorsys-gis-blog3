"use client";

import Link from "next/link";
import { Container } from "@blog/components/container";
import { useTranslation } from "react-i18next";
import { GitHub, Linkedin, Send, Youtube } from "react-feather";

export default function LargeFooter() {
  const { t, ready } = useTranslation();
  const get = (key: string) => (ready ? t(key) : key);
  
  return (
    <div className="bg-black/60 border-t border-white/10">
      <Container>
        <footer className="py-8 sm:py-10 text-white/85 sm:flex sm:justify-between sm:items-start">
          <aside className="text-center sm:text-left mb-8 sm:mb-0">
            <Link href="/" aria-label="Go to Home" className="inline-block">
              <span className="block text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase text-white/90 hover:text-white transition-colors">
                {get("nav.brand")}
              </span>
            </Link>

            <p className="text-sm sm:text-base mt-2">
              {ready ? t("footer.copyright", { year: new Date().getFullYear() }) : `copyright © ${new Date().getFullYear()}`}
              <br />
              {get("footer.rights")}
            </p>
          </aside>

          {/* Social links */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-0">
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="inline-flex items-center justify-center rounded-full p-2 sm:p-2.5 border border-white/15 text-white/85 hover:text-white hover:bg-white/10 transition"
              title="GitHub"
            >
              <GitHub size={18} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              aria-label="Telegram"
              className="inline-flex items-center justify-center rounded-full p-2 sm:p-2.5 border border-white/15 text-white/85 hover:text-white hover:bg-white/10 transition"
              title="Telegram"
            >
              <Send size={18} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="inline-flex items-center justify-center rounded-full p-2 sm:p-2.5 border border-white/15 text-white/85 hover:text-white hover:bg-white/10 transition"
              title="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
              className="inline-flex items-center justify-center rounded-full p-2 sm:p-2.5 border border-white/15 text-white/85 hover:text-white hover:bg-white/10 transition"
              title="YouTube"
            >
              <Youtube size={18} />
            </a>
          </div>

          {/* Mobile: COMPANY and LEGAL on same line */}
          <div className="flex flex-row flex-wrap justify-center sm:hidden gap-8 mb-8 sm:mb-0">
            <nav className="text-center">
              <h6 className="footer-title text-base">{get("footer.company")}</h6>
              <div className="flex flex-col gap-1">
                <Link href="/res/faq" className="link link-hover text-sm">
                  {get("footer.faq")}
                </Link>
                <Link href="/res/contact" className="link link-hover text-sm">
                  {get("footer.contact")}
                </Link>
              </div>
            </nav>
            <nav className="text-center">
              <h6 className="footer-title text-base">{get("footer.legal")}</h6>
              <div className="flex flex-col gap-1">
                <Link href="/res/tos" className="link link-hover text-sm">
                  {get("footer.terms")}
                </Link>
                <Link href="/res/privacy" className="link link-hover text-sm">
                  {get("footer.privacy")}
                </Link>
              </div>
            </nav>
          </div>

          {/* Desktop: Original horizontal layout */}
          <nav className="hidden sm:block text-left">
            <h6 className="footer-title text-base sm:text-lg">
              {get("footer.company")}
            </h6>

            <div className="flex flex-col gap-1">
              <Link
                href="/res/faq"
                className="link link-hover text-sm sm:text-base"
              >
                {get("footer.faq")}
              </Link>
              <Link
                href="/res/contact"
                className="link link-hover text-sm sm:text-base"
              >
                {get("footer.contact")}
              </Link>
            </div>
          </nav>
          <nav className="hidden sm:block text-left">
            <h6 className="footer-title text-base sm:text-lg">
              {get("footer.legal")}
            </h6>

            <div className="flex flex-col gap-1">
              <Link
                href="/res/tos"
                className="link link-hover text-sm sm:text-base"
              >
                {get("footer.terms")}
              </Link>
              <Link
                href="/res/privacy"
                className="link link-hover text-sm sm:text-base"
              >
                {get("footer.privacy")}
              </Link>
            </div>
          </nav>
        </footer>
      </Container>
    </div>
  );
}
