import type { Metadata } from "next";
import { site } from "@/content/site";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Muhammad Ibrahim for reviews, interviews, reading groups, and discussion.",
};

export default function ContactPage() {
  return (
    <div className="max-w-prose mx-auto px-6 py-16 md:py-24">
      <SectionHeading as="h1" className="mb-8">
        Contact
      </SectionHeading>

      <div className="space-y-2 mb-8 font-sans text-[17px] text-muted">
        <p className="font-semibold text-text">{site.author.name}</p>
        <p>{site.author.location}</p>
        <a
          href={`mailto:${site.author.email}?subject=Inquiry%20via%20Wisdom%20for%20the%20Rest%20of%20Us`}
          className="text-accent hover:text-accent-light transition-colors underline"
        >
          {site.author.email}
        </a>
      </div>

      <div className="border-t border-border pt-8">
        <h2 className="font-sans text-sm font-semibold uppercase tracking-widest text-accent mb-4">
          Inquiry categories
        </h2>
        <ul className="space-y-2">
          <li className="font-sans text-base text-muted pl-4 relative before:content-['\2013'] before:absolute before:left-0 before:text-accent">
            Reviews and critical responses
          </li>
          <li className="font-sans text-base text-muted pl-4 relative before:content-['\2013'] before:absolute before:left-0 before:text-accent">
            Podcasts and interviews
          </li>
          <li className="font-sans text-base text-muted pl-4 relative before:content-['\2013'] before:absolute before:left-0 before:text-accent">
            Reading groups
          </li>
          <li className="font-sans text-base text-muted pl-4 relative before:content-['\2013'] before:absolute before:left-0 before:text-accent">
            University and community discussions
          </li>
          <li className="font-sans text-base text-muted pl-4 relative before:content-['\2013'] before:absolute before:left-0 before:text-accent">
            Buddhist, philosophical, and interfaith responses
          </li>
        </ul>
      </div>
    </div>
  );
}
