import Link from "next/link";
import { site, navigation } from "@/content/site";
import { book } from "@/content/book";
import ExternalLink from "./ExternalLink";

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-dark-bg text-dark-text">
      <div className="max-w-7xl mx-auto px-6 py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <p className="font-serif text-lg font-semibold mb-2">{site.name}</p>
            <p className="font-sans text-sm text-dark-text/55 leading-relaxed">
              {site.tagline}
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <p className="font-sans text-sm font-semibold uppercase tracking-widest text-accent mb-3">
              Explore
            </p>
            <ul className="space-y-2">
              {navigation.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-sans text-sm text-dark-text/55 hover:text-dark-text transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/privacy"
                  className="font-sans text-sm text-dark-text/55 hover:text-dark-text transition-colors"
                >
                  Privacy
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <p className="font-sans text-sm font-semibold uppercase tracking-widest text-accent mb-3">
              Contact
            </p>
            <p className="font-sans text-sm text-dark-text/55">{site.author.name}</p>
            <p className="font-sans text-sm text-dark-text/55">{site.author.location}</p>
            <a
              href={`mailto:${site.author.email}`}
              className="font-sans text-sm text-accent hover:text-accent-light transition-colors break-words"
            >
              {site.author.email}
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-8 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-sans text-xs text-dark-text/45">
            &copy; {new Date().getFullYear()} {site.author.name}. All rights
            reserved.
          </p>
          <p className="font-sans text-xs text-dark-text/45">
            {book.title} is released under a{" "}
            <ExternalLink
              href={book.license}
              className="text-accent hover:text-accent-light transition-colors"
            >
              Creative Commons BY-NC-ND 4.0
            </ExternalLink>{" "}
            licence.
          </p>
        </div>
      </div>
    </footer>
  );
}
