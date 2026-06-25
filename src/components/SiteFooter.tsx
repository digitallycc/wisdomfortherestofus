import { site } from "@/content/site";

export default function SiteFooter() {
  return (
    <footer className="border-t border-border mt-24">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <p className="font-serif text-lg font-semibold mb-2">{site.name}</p>
            <p className="font-sans text-sm text-muted leading-relaxed">
              {site.tagline}
            </p>
          </div>

          <div>
            <p className="font-sans text-sm font-semibold uppercase tracking-widest text-accent mb-3">
              Contact
            </p>
            <p className="font-sans text-sm text-muted">{site.author.name}</p>
            <p className="font-sans text-sm text-muted">{site.author.location}</p>
            <a
              href={`mailto:${site.author.email}`}
              className="font-sans text-sm text-accent hover:text-accent-light transition-colors"
            >
              {site.author.email}
            </a>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="font-sans text-xs text-muted">
            &copy; {new Date().getFullYear()} {site.author.name}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
