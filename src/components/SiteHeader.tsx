"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { internetArchiveUrl, navigation, site } from "@/content/site";
import TrackedArchiveLink from "./TrackedArchiveLink";

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!menuOpen) return;

    document.body.style.overflow = "hidden";
    firstLinkRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href.replace(/\/$/, ""));
  };

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-6 md:pt-5">
      <div className="mx-auto flex max-w-5xl items-center justify-end text-dark-text md:pointer-events-auto md:justify-between md:rounded-full md:border md:border-white/10 md:bg-[#171615]/92 md:px-4 md:py-2 md:shadow-[0_12px_38px_rgba(0,0,0,.24)] md:backdrop-blur-xl">
        <Link
          href="/"
          className="hidden items-center gap-3 rounded-full pr-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-rust-light md:flex"
          aria-label={`${site.name} home`}
        >
          <span className="grid h-9 w-9 place-items-center rounded-full bg-paper font-serif text-xl font-semibold text-text">
            ◌
          </span>
          <span className="hidden font-serif text-sm font-semibold tracking-wide sm:inline md:text-base">
            {site.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
          {navigation.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={`rounded-full px-4 py-2 font-sans text-xs font-semibold transition-colors ${
                isActive(link.href)
                  ? "bg-paper text-[#1a1a1a]"
                  : "text-dark-text/62 hover:bg-white/8 hover:text-dark-text"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <TrackedArchiveLink
            href={internetArchiveUrl}
            source="header"
            className="ml-1 rounded-full border border-rust-light/60 px-4 py-2 font-sans text-xs font-semibold text-dark-text transition-colors hover:bg-accent"
          >
            Full edition ↗
          </TrackedArchiveLink>
        </nav>

        <button
          type="button"
          className="pointer-events-auto flex h-12 w-12 flex-col items-center justify-center gap-1.5 rounded-full border border-white/15 bg-[#171615]/94 shadow-[0_10px_30px_rgba(0,0,0,.28)] backdrop-blur-xl md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <span className={`block h-px w-5 bg-dark-text transition-transform ${menuOpen ? "translate-y-[3.5px] rotate-45" : ""}`} />
          <span className={`block h-px w-5 bg-dark-text transition-transform ${menuOpen ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
        </button>
      </div>

      {menuOpen && (
        <nav
          id="mobile-menu"
          className="pointer-events-auto mx-auto mt-2 max-w-5xl rounded-[1.5rem] border border-white/10 bg-[#171615]/98 p-4 text-dark-text shadow-2xl backdrop-blur-xl md:hidden"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col gap-1">
            {navigation.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                ref={index === 0 ? firstLinkRef : undefined}
                className="rounded-xl px-4 py-3 font-sans text-base text-dark-text/78 hover:bg-white/8 hover:text-dark-text"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <TrackedArchiveLink
              href={internetArchiveUrl}
              source="mobile_header"
              className="mt-2 rounded-xl bg-paper px-4 py-3 text-center font-sans text-sm font-semibold text-text"
            >
              Complete edition on Archive ↗
            </TrackedArchiveLink>
          </div>
        </nav>
      )}
    </header>
  );
}
