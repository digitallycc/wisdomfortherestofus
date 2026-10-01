import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import TrackedArchiveLink from "@/components/TrackedArchiveLink";
import { book } from "@/content/book";
import {
  internetArchivePdfUrl,
  internetArchiveUrl,
  site,
} from "@/content/site";

export const metadata: Metadata = {
  title: `${book.title}: ${book.subtitle}`,
  description: book.overview,
  alternates: { canonical: "/book/" },
  openGraph: {
    title: `${book.title}: ${book.subtitle}`,
    description: book.description,
    url: `${site.url}/book/`,
  },
};

export default function BookPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-dark-bg text-dark-text">
        <Image
          src="/images/hero-atmosphere.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-bg via-dark-bg/90 to-dark-bg/35" />
        <div className="ambient-grid absolute inset-0 opacity-30" aria-hidden="true" />

        <div className="relative mx-auto grid min-h-[78vh] max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-[1fr_380px] md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-rust-light">
              The complete book · Free edition
            </p>
            <h1 className="mt-6 text-balance font-serif text-5xl font-semibold leading-[0.93] md:text-7xl lg:text-8xl">
              {book.title}
            </h1>
            <p className="mt-5 font-serif text-2xl italic text-dark-text/65 md:text-3xl">
              {book.subtitle}
            </p>
            <p className="mt-8 max-w-2xl font-sans text-lg leading-relaxed text-dark-text/75 md:text-xl">
              {book.description}
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link href="/read/opening/" className="button-light">
                Begin with the opening →
              </Link>
              <TrackedArchiveLink
                href={internetArchiveUrl}
                source="book_hero"
                className="button-outline-dark"
              >
                Complete book on Archive ↗
              </TrackedArchiveLink>
            </div>
          </div>

          <div className="mx-auto w-full max-w-[330px] md:max-w-none">
            <div className="paper-card rotate-2 rounded-[2.2rem] p-4 shadow-[0_35px_90px_rgba(0,0,0,.5)]">
              <Image
                src="/images/book-cover.webp"
                alt="Cover of Emptiness for the Rest of Us by Muhammad Ibrahim, featuring an empty wooden chair in an abstract room of light and shadow."
                width={400}
                height={600}
                priority
                className="w-full rounded-[1.5rem]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 -mt-8 px-6 md:-mt-12">
        <div className="paper-card mx-auto max-w-5xl rounded-[2rem] px-7 py-8 shadow-xl md:px-12 md:py-10">
          <blockquote className="grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
            <p className="font-serif text-2xl leading-relaxed text-text md:text-3xl">
              “An accessible, warm-hearted presentation of the central ideas of
              Madhyamaka metaphysics and of their ethical implications. Muhammad
              Ibrahim has found the perfect voice in which to encourage people to
              take these ideas seriously, regardless of their religious or
              ideological commitments. It will be of real benefit to people who want
              to improve their lives along these lines, but who find technical
              presentations forbidding.”
            </p>
            <footer className="font-sans text-sm text-muted md:text-right">
              <strong className="block text-text">Jay L. Garfield</strong>
              Smith College · Harvard Divinity School
            </footer>
          </blockquote>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="eyebrow">Two ways in</p>
            <h2 className="mt-4 max-w-lg font-serif text-4xl font-semibold leading-tight md:text-5xl">
              Begin with the human question. Then test it against the ordinary world.
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <Link href="/read/opening/" className="editorial-card group">
              <span className="card-number">01</span>
              <p className="eyebrow mt-12">Begin with the question</p>
              <h3 className="mt-3 font-serif text-3xl font-semibold">The Phantom in the Room</h3>
              <p className="mt-4 font-sans leading-relaxed text-muted">
                Why the inquiry matters before any argument begins.
              </p>
              <span className="mt-8 inline-block font-sans text-sm font-semibold text-accent">
                Read the opening →
              </span>
            </Link>

            <Link href="/read/chapter-one/" className="editorial-card group sm:translate-y-10">
              <span className="card-number">02</span>
              <p className="eyebrow mt-12">Chapter One</p>
              <h3 className="mt-3 font-serif text-3xl font-semibold">The Illusion of the Obvious</h3>
              <p className="mt-4 font-sans leading-relaxed text-muted">
                A chair, its parts, and the hidden web beneath apparent solidity.
              </p>
              <span className="mt-8 inline-block font-sans text-sm font-semibold text-accent">
                Read Chapter One →
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-paper px-6 py-20 md:py-28">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 md:grid-cols-[1fr_1.25fr]">
            <div>
              <p className="eyebrow">Inside the book</p>
              <h2 className="mt-4 font-serif text-4xl font-semibold md:text-5xl">
                From understanding to seeing—and from seeing to living.
              </h2>
              <p className="mt-6 font-sans text-lg leading-relaxed text-muted">
                {book.overview}
              </p>
            </div>

            <div className="space-y-8">
              {book.contents.map((part) => (
                <div key={part.section} className="rounded-[1.8rem] border border-border bg-background p-7 md:p-9">
                  <p className="eyebrow">{part.section}</p>
                  <p className="mt-2 font-serif text-xl italic text-muted">{part.subtitle}</p>
                  <ol className="mt-6 space-y-3">
                    {part.chapters.map((chapter) => (
                      <li key={chapter} className="border-t border-border pt-3 font-serif text-xl">
                        {chapter}
                      </li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <p className="eyebrow">Keep it, share it, read it your way</p>
          <h2 className="mt-4 font-serif text-4xl font-semibold md:text-6xl">
            The complete edition remains freely available.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl font-sans text-lg leading-relaxed text-muted">
            Internet Archive remains the public home of record. Read in its online
            viewer or keep the PDF for offline reading—without registration or payment.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <TrackedArchiveLink href={internetArchiveUrl} source="book_archive" className="button-dark">
              Read on Internet Archive ↗
            </TrackedArchiveLink>
            <TrackedArchiveLink href={internetArchivePdfUrl} source="book_pdf" className="button-outline">
              Download PDF ↗
            </TrackedArchiveLink>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Book",
            "@id": `${site.url}/book/#book`,
            name: book.title,
            alternateName: book.subtitle,
            description: book.overview,
            image: `${site.url}/images/og-image.jpg?v=2`,
            author: { "@type": "Person", name: site.author.name },
            datePublished: book.published,
            genre: book.genre,
            inLanguage: book.language,
            url: `${site.url}/book/`,
            mainEntityOfPage: `${site.url}/book/`,
            sameAs: internetArchiveUrl,
            license: book.license,
          }),
        }}
      />
    </>
  );
}
