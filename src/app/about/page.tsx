import type { Metadata } from "next";
import { site } from "@/content/site";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "About",
  description:
    "Wisdom for the Rest of Us exists to examine wisdom wherever it is found. Muhammad Ibrahim is a Pakistani Muslim writer and independent thinker.",
};

export default function AboutPage() {
  return (
    <div className="max-w-prose mx-auto px-6 py-16 md:py-24 space-y-8">
      <SectionHeading as="h1">About</SectionHeading>

      <section className="space-y-4 font-sans text-[17px] md:text-[18px] leading-relaxed text-muted">
        <p>
          {site.name} exists to examine wisdom wherever it is found. It does not
          claim all traditions are identical. It is not a Buddhist organisation.
        </p>
        <p>
          The present work focuses on Buddhist emptiness because that is the
          first serious inquiry. Future work may follow the questions wherever
          they lead.
        </p>
      </section>

      <section className="space-y-4 font-sans text-[17px] md:text-[18px] leading-relaxed text-muted pt-8 border-t border-border">
        <h2 className="font-serif text-xl font-semibold text-text">
          About the author
        </h2>
        <p>
          Muhammad Ibrahim is a Pakistani Muslim writer and independent thinker.
          He does not claim Buddhist teaching or academic authority.
        </p>
        <p>
          The project values openness, accuracy, and respectful disagreement.
          Ibrahim writes from Islamabad, Pakistan.
        </p>
      </section>
    </div>
  );
}
