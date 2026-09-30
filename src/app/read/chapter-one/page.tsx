import type { Metadata } from "next";
import ReaderPage from "@/components/ReaderPage";
import readings from "@/content/readings.json";
import { book } from "@/content/book";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: `The Illusion of the Obvious — Chapter One of ${book.title}`,
  description:
    "Read Chapter One of Emptiness for the Rest of Us: a clear examination of why nothing stands alone as it first appears.",
  alternates: { canonical: "/read/chapter-one/" },
  openGraph: {
    title: `The Illusion of the Obvious — ${book.title}`,
    description:
      "Begin with a chair, then follow the hidden web of conditions that makes every apparently separate thing possible.",
    url: `${site.url}/read/chapter-one/`,
  },
};

export default function ChapterOnePage() {
  return (
    <ReaderPage
      eyebrow={readings.chapterOne.eyebrow}
      title={readings.chapterOne.title}
      introduction="The inquiry begins with an ordinary chair—and the quiet assumption that things are simply what they appear to be."
      segments={readings.chapterOne.segments}
      contentId="chapter_one"
      readingTime="18 minute read"
      minimumActiveSeconds={60}
      completionActiveSeconds={180}
    />
  );
}
