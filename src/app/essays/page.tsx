import type { Metadata } from "next";
import { essaysList } from "@/content/home";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Essays and Continuing Inquiries",
  description:
    "Essays exploring questions raised by Emptiness for the Rest of Us, including the nature of the witness, spiritual ego, and learning across traditions.",
};

export default function EssaysPage() {
  return (
    <div className="max-w-prose mx-auto px-6 py-16 md:py-24">
      <SectionHeading as="h1" className="mb-4">
        Essays and Continuing Inquiries
      </SectionHeading>
      <p className="font-sans text-[17px] md:text-[18px] leading-relaxed text-muted mb-8">
        The first essays on this platform will continue exploring questions
        raised by the book. They are being written and will appear here as they
        are completed.
      </p>

      <div className="mb-12">
        <h2 className="font-sans text-sm font-semibold uppercase tracking-widest text-accent mb-4">
          Planned essays
        </h2>
        <ul className="space-y-3">
          {essaysList.map((essay) => (
            <li
              key={essay}
              className="font-serif text-base md:text-lg leading-relaxed text-muted pl-4 border-l-2 border-accent/30"
            >
              {essay}
            </li>
          ))}
        </ul>
      </div>

      <p className="font-sans text-base text-muted italic">
        Essays coming soon. No publication dates have been set.
      </p>
    </div>
  );
}
