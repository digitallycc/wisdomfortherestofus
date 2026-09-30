import type { Metadata } from "next";
import { site } from "@/content/site";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Privacy",
  description: `Privacy statement for ${site.name}.`,
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    title: `Privacy \u2014 ${site.name}`,
    description: `Privacy statement for ${site.name}.`,
    url: `${site.url}/privacy`,
  },
};

export default function PrivacyPage() {
  return (
    <div className="max-w-prose mx-auto px-6 pb-16 pt-28 md:pb-24 md:pt-36 space-y-6">
      <SectionHeading as="h1">Privacy</SectionHeading>

      <div className="font-sans text-[17px] md:text-[18px] leading-relaxed text-muted space-y-4">
        <p>
          {site.name} does not use advertising trackers, sell visitor data,
          or require an account to read the site.
        </p>

        <p>
          To understand whether readers actually engage with the free opening
          and Chapter One, the site records a small set of first-party events:
          when a reading page is opened, when a meaningful portion has been
          read, when the end is reached, and when a link to Internet Archive is
          selected.
        </p>

        <p>
          The site creates a random anonymous identifier in your browser&apos;s
          local storage so repeat events from the same browser are not counted
          as different readers. It is not derived from your name, email
          address, IP address, device fingerprint, or Internet Archive account.
          No full IP address is stored in the reading-events database.
        </p>

        <p>
          These anonymous events are stored in Cloudflare D1. Cloudflare also
          provides aggregate page-view and performance analytics as part of
          hosting the site. The data is used only to understand readership and
          improve the reading experience.
        </p>

        <p>
          If you contact {site.author.name} via email, your message and email
          address will be treated as private correspondence. Private
          correspondence will never be quoted publicly without explicit
          permission.
        </p>

        <p>
          Links to Internet Archive open a third-party website. Internet
          Archive&apos;s own privacy practices apply after you follow those links.
        </p>

        <p className="text-sm pt-4 border-t border-border">
          Last updated: September 2026
        </p>
      </div>
    </div>
  );
}
