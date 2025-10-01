"use client";
import { Container } from "@blog/components/container";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useRef, useState, startTransition } from "react";

export function AppNavBar() {
  const { t, i18n, ready } = useTranslation();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const dropdownRef = useRef<HTMLDetailsElement | null>(null);

  // Safety check for i18n initialization
  const current = i18n?.language?.startsWith("fr") ? "fr" : "en";
  const hasCommonNs = i18n?.hasResourceBundle?.(current, "common") ?? false;

  useEffect(() => {
    setMounted(true);
  }, []);

  // Determine if we're on blogs page or about page
  const isOnBlogsPage = pathname?.startsWith("/courses") || pathname?.startsWith("/b");
  const isOnAboutPage = pathname?.startsWith("/res/about");

  const buildLanguageUrl = useCallback(
    (lng: "en" | "fr") => {
      const params = new URLSearchParams(searchParams?.toString() ?? "");
      // On blog reading pages, switch language by going to the home page
      if (pathname?.startsWith("/b")) {
        return lng === "en" ? "/" : `/?lang=${lng}`;
      }
      if (pathname?.startsWith("/courses")) {
        if (lng === "en") params.delete("lang");
        else params.set("lang", lng);
        // reset pagination when switching language on courses
        params.delete("page");
        const qs = params.toString();
        return qs ? `${pathname}?${qs}` : pathname;
      }
      // Preserve current route elsewhere (e.g., /res, /b, /)
      if (lng === "en") params.delete("lang");
      else params.set("lang", lng);
      const qs = params.toString();
      return pathname ? (qs ? `${pathname}?${qs}` : pathname) : "/";
    },
    [pathname, searchParams]
  );

  const setLang = useCallback(
    (lng: "en" | "fr") => {
      if ((i18n.language || "en").startsWith(lng)) {
        // Already on this language; just close
        if (dropdownRef.current) dropdownRef.current.open = false;
        setOpen(false);
        return;
      }
      void i18n.changeLanguage(lng);
      try {
        const maxAgeDays = 30;
        document.cookie = `lang=${lng}; Path=/; Max-Age=${maxAgeDays * 24 * 60 * 60}`;
      } catch (_) {
        // ignore cookie errors
      }
      const url = buildLanguageUrl(lng);
      if (url) {
        startTransition(() => {
          router.push(url);
        });
      }
      if (dropdownRef.current) dropdownRef.current.open = false;
      setOpen(false);
    },
    [i18n, buildLanguageUrl, router]
  );

  // Using <details> element for the language dropdown to avoid click/focus glitches
  useEffect(() => {}, []);

  // Prevent hydration mismatch by rendering nothing until mounted
  if (!mounted) {
    return null;
  }

  // Prevent hydration mismatch by showing fallback during translation loading
  if (!ready || !t || !hasCommonNs) {
    const params = new URLSearchParams(searchParams?.toString() ?? "");
    const urlLang = params.get("lang");
    const fallbackLang = urlLang === "fr" ? "fr" : "en";
    return (
      <div className="sticky top-0 z-40 bg-white/10 backdrop-blur-xl border-b border-white/20">
        <Container className="py-0">
          <nav className="navbar min-h-14 sm:min-h-16">
            <div className="navbar-start flex gap-2 sm:gap-4">
              <Link
                href={fallbackLang === "en" ? "/" : `/?lang=${fallbackLang}`}
                className="group flex flex-row items-center gap-1.5 sm:gap-2 select-none cursor-pointer hover:opacity-80 transition-opacity"
                aria-label="Brand"
              >
                <span className="text-base sm:text-lg md:text-xl font-extrabold uppercase text-white/90 tracking-wide" suppressHydrationWarning>
                  GIS Blog
                </span>
              </Link>
            </div>

            <div className="navbar-end flex items-center gap-2 sm:gap-3">
              {/* Desktop/Tablet links (static labels to avoid i18n mismatch) */}
              <Link
                href={fallbackLang === "en" ? "/courses" : "/courses?lang=fr"}
                className="text-sm sm:text-base hover:font-bold transition-all duration-200 hidden md:inline text-white/80 hover:text-white"
                suppressHydrationWarning
              >
                Courses
              </Link>
              <Link
                href={fallbackLang === "en" ? "/res/about" : "/res/about?lang=fr"}
                className="text-sm sm:text-base hover:font-bold transition-all duration-200 hidden md:inline text-white/80 hover:text-white"
                suppressHydrationWarning
              >
                About
              </Link>

              {/* Language selector dropdown (closed by default) */}
              <div className="relative dropdown dropdown-end">
                <div
                  role="button"
                  className="inline-flex items-center gap-1.5 sm:gap-2 text-white/80 hover:text-white hover:font-extrabold px-1 select-none cursor-pointer"
                  aria-haspopup="menu"
                  aria-expanded={false}
                  aria-label={fallbackLang === "en" ? "Current language: English" : "Langue actuelle: Français"}
                >
                  <span className="text-sm sm:text-base font-medium" suppressHydrationWarning>
                    {fallbackLang === "en" ? "English" : "Français"}
                  </span>
                  <svg
                    className="w-3 sm:w-4 h-3 sm:h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </div>

              {/* Small-screen overflow menu (closed by default) */}
              <div className="relative md:hidden">
                <details className="dropdown dropdown-end">
                  <summary className="btn btn-ghost btn-xs text-white/80 hover:text-white px-1 bg-black rounded">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden
                    >
                      <circle cx="12" cy="6" r="1" />
                      <circle cx="12" cy="12" r="1" />
                      <circle cx="12" cy="18" r="1" />
                    </svg>
                  </summary>
                  <ul className="menu dropdown-content mt-2 p-1 shadow bg-black text-white rounded-box w-32 z-[100]">
                    <li>
                      <Link
                        href={fallbackLang === "en" ? "/courses" : "/courses?lang=fr"}
                        className="hover:text-primary hover:brightness-125 transition-all duration-200 text-white"
                        suppressHydrationWarning
                      >
                        Courses
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={fallbackLang === "en" ? "/res/about" : "/res/about?lang=fr"}
                        className="hover:text-primary hover:brightness-125 transition-all duration-200 text-white"
                        suppressHydrationWarning
                      >
                        About
                      </Link>
                    </li>
                  </ul>
                </details>
              </div>
            </div>
          </nav>
        </Container>
      </div>
    );
  }

  return (
    <div className="sticky top-0 z-40 bg-white/10 backdrop-blur-xl border-b border-white/20">
      <Container className="py-0">
        <nav className="navbar min-h-14 sm:min-h-16">
          <div className="navbar-start flex gap-2 sm:gap-4">
            <Link
              href="/"
              className="group flex flex-row items-center gap-1.5 sm:gap-2 select-none cursor-pointer hover:opacity-80 transition-opacity"
              aria-label="Brand"
            >
              <span className="text-base sm:text-lg md:text-xl font-extrabold uppercase text-white/90 tracking-wide">
                {t("nav.brand")}
              </span>
            </Link>
          </div>

          <div className="navbar-end flex items-center gap-2 sm:gap-3">
            {/* Desktop/Tablet links */}
              <Link
                href={current === "en" ? "/courses" : "/courses?lang=fr"}
              className={`text-sm sm:text-base hover:font-bold transition-all duration-200 hidden md:inline ${
                isOnBlogsPage
                  ? "text-primary font-semibold"
                  : "text-white/80 hover:text-white"
              }`}
            >
              <span>{t("nav.courses")}</span>
            </Link>
            <Link
              href={current === "fr" ? "/res/about?lang=fr" : "/res/about"}
              className={`text-sm sm:text-base hover:font-bold transition-all duration-200 hidden md:inline ${
                isOnAboutPage
                  ? "text-primary font-semibold"
                  : "text-white/80 hover:text-white"
              }`}
            >
              <span>{t("nav.about")}</span>
            </Link>

            {/* Language selector dropdown */}
            <details
              ref={dropdownRef}
              className={`dropdown dropdown-end`}
              onToggle={(e) => setOpen((e.target as HTMLDetailsElement).open)}
            >
              <summary
                className="inline-flex items-center gap-1.5 sm:gap-2 text-white/80 hover:text-white hover:font-extrabold px-1 select-none cursor-pointer list-none"
                aria-haspopup="menu"
                aria-expanded={open}
                aria-controls="lang-menu"
                aria-label={`Current language: ${
                  current === "en" ? "English" : "Français"
                }`}
              >
                <span className="text-sm sm:text-base font-medium">
                  {current === "en" ? "English" : "Français"}
                </span>
                <svg
                  className="w-3 sm:w-4 h-3 sm:h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </summary>
              <ul
                role="menu"
                id="lang-menu"
                className="menu dropdown-content mt-2 p-1 shadow bg-black text-white rounded-box w-32 z-[100]"
              >
                <li>
                  <button
                    role="menuitemradio"
                    aria-checked={current === "en"}
                    onClick={() => setLang("en")}
                    className={`hover:text-primary hover:brightness-125 transition-all duration-200 ${
                      current === "en" ? "text-primary font-semibold" : "text-white"
                    }`}
                  >
                    English
                  </button>
                </li>
                <li>
                  <button
                    role="menuitemradio"
                    aria-checked={current === "fr"}
                    onClick={() => setLang("fr")}
                    className={`hover:text-primary hover:brightness-125 transition-all duration-200 ${
                      current === "fr" ? "text-primary font-semibold" : "text-white"
                    }`}
                  >
                    Français
                  </button>
                </li>
              </ul>
            </details>

            {/* Small-screen overflow menu (3 dots) */}
            <div className="relative md:hidden">
              <details className="dropdown dropdown-end">
                <summary className="btn btn-ghost btn-xs text-white/80 hover:text-white px-1 bg-black rounded">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    <circle cx="12" cy="6" r="1" />
                    <circle cx="12" cy="12" r="1" />
                    <circle cx="12" cy="18" r="1" />
                  </svg>
                </summary>
                <ul className="menu dropdown-content mt-2 p-1 shadow bg-black text-white rounded-box w-32 z-[100]">
                  <li>
                    <Link
                      href={current === "en" ? "/courses" : "/courses?lang=fr"}
                      className={`hover:text-primary hover:brightness-125 transition-all duration-200 ${
                        isOnBlogsPage ? "text-primary font-semibold" : "text-white"
                      }`}
                    >
                      <span>{t("nav.courses")}</span>
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href={current === "fr" ? "/res/about?lang=fr" : "/res/about"}
                      className={`hover:text-primary hover:brightness-125 transition-all duration-200 ${
                        isOnAboutPage ? "text-primary font-semibold" : "text-white"
                      }`}
                    >
                      <span>{t("nav.about")}</span>
                    </Link>
                  </li>
                </ul>
              </details>
            </div>
          </div>
        </nav>
      </Container>
    </div>
  );
}
