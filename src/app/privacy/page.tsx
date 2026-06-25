import type { Metadata } from "next";
import { site } from "@/content/site";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Privacy",
  description: `Privacy statement for ${site.name}.`,
};

export default function PrivacyPage() {
  return (
    <div className="max-w-prose mx-auto px-6 py-16 md:py-24 space-y-6">
      <SectionHeading as="h1">Privacy</SectionHeading>

      <div className="font-sans text-[17px] md:text-[18px] leading-relaxed text-muted space-y-4">
        <p>
          {site.name} does not collect personal information, set tracking
          cookies, or use analytics services.
        </p>

        <p>
          This website is built as a static site and does not include any
          third-party scripts, embedded content, or tracking mechanisms.
        </p>

        <p>
          If you contact {site.author.name} via email, your message and email
          address will be treated as private correspondence. Private
          correspondence will never be quoted publicly without explicit
          permission.
        </p>

        <p>
          This website is hosted as a static export. Your interaction with the
          site is limited to what your browser and network normally reveal when
          loading any web page.
        </p>

        <p className="text-sm pt-4 border-t border-border">
          Last updated: June 2026
        </p>
      </div>
    </div>
  );
}
