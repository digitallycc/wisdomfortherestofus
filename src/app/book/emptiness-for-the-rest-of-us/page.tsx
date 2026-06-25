import type { Metadata } from "next";
import { book } from "@/content/book";
import { site, internetArchiveUrl } from "@/content/site";
import SectionHeading from "@/components/SectionHeading";
import PrimaryCTA from "@/components/PrimaryCTA";
import BookContents from "@/components/BookContents";
import EditorialSection from "@/components/EditorialSection";
import ExternalLink from "@/components/ExternalLink";

export const metadata: Metadata = {
  title: `${book.title} \u2014 Muhammad Ibrahim`,
  description:
    "A free book exploring Buddhist emptiness, the constructed self, change, spiritual ego, and the possibility of a less defended life.",
  openGraph: {
    title: `${book.title} \u2014 Muhammad Ibrahim`,
    description:
      "A free book exploring Buddhist emptiness, the constructed self, change, spiritual ego, and the possibility of a less defended life.",
  },
};

export default function BookPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Book",
            name: book.title,
            author: {
              "@type": "Person",
              name: site.author.name,
            },
            datePublished: book.published,
            genre: book.genre,
            inLanguage: book.language,
            url: `${site.url}/book/emptiness-for-the-rest-of-us`,
            sameAs: internetArchiveUrl,
            license: book.license,
          }),
        }}
      />

      <section className="max-w-5xl mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <img
              src="/images/book-cover.webp"
              alt="Cover of Emptiness for the Rest of Us by Muhammad Ibrahim, showing an empty meditating robe beneath a moonlit sky."
              width={400}
              height={600}
            className="w-full max-w-sm mx-auto rounded-sm shadow-lg"
            />
          </div>
          <div>
            <p className="font-sans text-sm font-semibold uppercase tracking-widest text-accent mb-2">
              Featured Book
            </p>
            <SectionHeading as="h1" className="mb-2">
              {book.title}
            </SectionHeading>
            <p className="font-serif text-xl italic text-muted mb-4">
              {book.subtitle}
            </p>
            <p className="font-sans text-[17px] leading-relaxed text-muted mb-4">
              {book.description}
            </p>
            <PrimaryCTA className="mb-3" />
            <p className="font-sans text-sm text-muted">
              No payment. No registration. No conversion.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white border-y border-border py-16 md:py-20">
        <EditorialSection title="Book overview">
          <p>{book.overview}</p>
        </EditorialSection>
      </section>

      <section className="py-16 md:py-20">
        <EditorialSection title="Who it is for">
          <p>{book.whoItIsFor}</p>
        </EditorialSection>
      </section>

      <TwoPartSection />

      <section className="bg-white border-y border-border py-16 md:py-20">
        <BookContents />
      </section>

      <section className="py-16 md:py-20">
        <EditorialSection title="Author's note">
          <p>{book.authorNote}</p>
        </EditorialSection>
      </section>

      <section className="bg-dark-bg text-dark-text py-16 md:py-20">
        <div className="max-w-prose mx-auto px-6 md:px-8 text-center">
          <SectionHeading className="mb-4 text-dark-text">
            Read the book free
          </SectionHeading>
          <p className="font-sans text-[17px] md:text-[18px] leading-relaxed text-dark-text/80 mb-6">
            The complete book is available through Internet Archive. Licensed
            under{" "}
            <ExternalLink
              href={book.license}
              className="text-dark-text underline hover:text-dark-text/80"
            >
              Creative Commons BY-NC-ND 4.0
            </ExternalLink>
            .
          </p>
          <PrimaryCTA variant="dark" />
          <p className="font-sans text-sm text-dark-text/60 mt-3">
            No payment. No registration. No email required.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-prose mx-auto px-6 md:px-8 text-center">
          <SectionHeading className="mb-4">
            For reviewers and interviewers
          </SectionHeading>
          <p className="font-sans text-[17px] md:text-[18px] leading-relaxed text-muted mb-6">
            If you would like to review the book, host a discussion, or arrange
            an interview, please reach out.
          </p>
          <a
            href={`mailto:${site.author.email}?subject=Regarding%20${encodeURIComponent(book.title)}`}
            className="font-sans text-base font-semibold text-accent hover:text-accent-light transition-colors underline"
          >
            {site.author.email}
          </a>
        </div>
      </section>
    </>
  );
}

function TwoPartSection() {
  return (
    <section className="bg-white border-y border-border py-16 md:py-20">
      <div className="max-w-prose mx-auto px-6 md:px-8 space-y-6">
        <SectionHeading>Two-part structure</SectionHeading>
        {book.parts.map((part) => (
          <div key={part.title}>
            <h3 className="font-serif text-lg font-semibold text-text mb-1">
              {part.title}
            </h3>
            <p className="font-sans text-sm italic text-muted mb-2">
              {part.subtitle}
            </p>
            <p className="font-sans text-[17px] leading-relaxed text-muted">
              {part.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
