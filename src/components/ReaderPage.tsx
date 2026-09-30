import Image from "next/image";
import Link from "next/link";
import ReadingTracker from "./ReadingTracker";
import TrackedArchiveLink from "./TrackedArchiveLink";
import { internetArchiveUrl } from "@/content/site";

type Segment = {
  type: string;
  text: string;
};

type Props = {
  eyebrow: string;
  title: string;
  introduction: string;
  segments: Segment[];
  contentId: "opening" | "chapter_one";
  readingTime: string;
  minimumActiveSeconds: number;
  completionActiveSeconds: number;
  next?: {
    eyebrow: string;
    title: string;
    href: string;
  };
};

export default function ReaderPage({
  eyebrow,
  title,
  introduction,
  segments,
  contentId,
  readingTime,
  minimumActiveSeconds,
  completionActiveSeconds,
  next,
}: Props) {
  return (
    <>
      <ReadingTracker
        contentId={contentId}
        minimumActiveSeconds={minimumActiveSeconds}
        completionActiveSeconds={completionActiveSeconds}
      />

      <header className="reader-hero relative overflow-hidden border-b border-white/10 bg-dark-bg text-dark-text">
        <div className="ambient-grid absolute inset-0 opacity-40" aria-hidden="true" />
        <div className="absolute -right-28 -top-36 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-6 pb-16 pt-20 md:grid-cols-[1fr_260px] md:items-end md:px-10 md:pb-24 md:pt-28">
          <div className="max-w-3xl">
            <p className="mb-5 font-sans text-xs font-semibold uppercase tracking-[0.28em] text-rust-light">
              {eyebrow}
            </p>
            <h1 className="text-balance font-serif text-5xl font-semibold leading-[0.96] md:text-7xl lg:text-8xl">
              {title}
            </h1>
            <p className="mt-8 max-w-2xl font-sans text-lg leading-relaxed text-dark-text/70 md:text-xl">
              {introduction}
            </p>
            <div className="mt-8 flex flex-wrap gap-3 font-sans text-xs uppercase tracking-[0.18em] text-dark-text/50">
              <span className="rounded-full border border-white/15 px-4 py-2">{readingTime}</span>
              <span className="rounded-full border border-white/15 px-4 py-2">No signup</span>
              <span className="rounded-full border border-white/15 px-4 py-2">Responsive text</span>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="paper-card rotate-2 rounded-[2rem] p-3 shadow-2xl">
              <Image
                src="/images/book-cover.webp"
                alt="Cover of Emptiness for the Rest of Us by Muhammad Ibrahim, featuring an empty wooden chair in an abstract room of light and shadow."
                width={400}
                height={600}
                className="w-full rounded-[1.4rem]"
              />
            </div>
          </div>
        </div>
      </header>

      <main className="reader-shell">
        <aside className="reader-margin" aria-label="Reading navigation">
          <div className="reader-margin-inner">
            <Link href="/book/" className="reader-margin-link">
              ← The book
            </Link>
            <div className="mt-8 h-px bg-border" />
            <p className="mt-8 font-serif text-xl leading-snug text-text">
              Read slowly. Keep the questions close to experience.
            </p>
          </div>
        </aside>

        <article data-reading-root className="reading-prose">
          {segments.map((segment, index) =>
            segment.type === "heading" ? (
              <h2 key={`${segment.text}-${index}`}>{segment.text}</h2>
            ) : (
              <p key={`${index}-${segment.text.slice(0, 28)}`}>{segment.text}</p>
            ),
          )}
        </article>
      </main>

      <section className="border-y border-white/10 bg-dark-bg px-6 py-16 text-dark-text md:py-24">
        <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-rust-light">
              Continue the inquiry
            </p>
            <h2 className="mt-4 font-serif text-3xl font-semibold md:text-5xl">
              {next?.title ?? "The complete edition is free to read."}
            </h2>
            {next && (
              <p className="mt-3 font-sans text-base text-dark-text/60">
                {next.eyebrow}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
            {next && (
              <Link href={next.href} className="button-light">
                Continue reading →
              </Link>
            )}
            <TrackedArchiveLink
              href={internetArchiveUrl}
              source={`${contentId}_footer`}
              className="button-outline-dark"
            >
              Full book on Archive ↗
            </TrackedArchiveLink>
          </div>
        </div>
      </section>
    </>
  );
}
