"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { site, navigation, internetArchiveUrl } from "@/content/site";
import ExternalLink from "./ExternalLink";

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-shadow ${
        scrolled ? "shadow-sm bg-background/95 backdrop-blur-sm" : "bg-background"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 md:py-5">
        <Link
          href="/"
          className="font-serif text-xl md:text-2xl font-semibold text-text hover:text-accent transition-colors"
        >
          {site.name}
        </Link>

        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {navigation.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-sans text-sm font-medium text-muted hover:text-text transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <ExternalLink
            href={internetArchiveUrl}
            className="font-sans text-sm font-semibold bg-accent text-white px-5 py-2.5 rounded-sm hover:bg-accent-light transition-colors"
          >
            Read Free
          </ExternalLink>
        </nav>

        <button
          type="button"
          className="md:hidden flex flex-col gap-1.5 p-2 -mr-2 focus:outline-none focus:ring-2 focus:ring-accent rounded-sm"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <span
            className={`block w-6 h-0.5 bg-text transition-transform ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-text transition-opacity ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-text transition-transform ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {menuOpen && (
        <MobileNav onClose={() => setMenuOpen(false)} />
      )}
    </header>
  );
}

function MobileNav({ onClose }: { onClose: () => void }) {
  return (
    <nav
      id="mobile-menu"
      className="md:hidden border-t border-border bg-background"
      aria-label="Mobile navigation"
    >
      <div className="flex flex-col px-6 py-4 space-y-4">
        {navigation.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="font-sans text-base font-medium text-muted hover:text-text transition-colors py-2"
            onClick={onClose}
          >
            {link.label}
          </Link>
        ))}
        <ExternalLink
          href={internetArchiveUrl}
          className="font-sans text-base font-semibold bg-accent text-white px-5 py-3 rounded-sm hover:bg-accent-light transition-colors text-center"
        >
          Read the Book Free
        </ExternalLink>
      </div>
    </nav>
  );
}
