import type { Metadata } from "next";
import ReaderPage from "@/components/ReaderPage";
import readings from "@/content/readings.json";
import { book } from "@/content/book";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: `The Phantom in the Room — Read the Opening of ${book.title}`,
  description:
    "Begin with the question that opens Emptiness for the Rest of Us: what is the self we spend our lives defending?",
  alternates: { canonical: "/read/opening/" },
  openGraph: {
    title: `The Phantom in the Room — ${book.title}`,
    description:
      "A quiet invitation to examine the self, suffering, and the burden of having to be someone.",
    url: `${site.url}/read/opening/`,
  },
};

export default function OpeningPage() {
  return (
    <ReaderPage
      eyebrow={readings.opening.eyebrow}
      title={readings.opening.title}
      introduction="Before the reasoning begins, the book starts with the question beneath the whole inquiry: who are we when the identities we defend are allowed to loosen?"
      segments={readings.opening.segments}
      contentId="opening"
      readingTime="8 minute read"
      minimumActiveSeconds={35}
      completionActiveSeconds={90}
      next={{
        eyebrow: "Chapter One · The Lamp of Inquiry",
        title: "The Illusion of the Obvious",
        href: "/read/chapter-one/",
      }}
    />
  );
}
