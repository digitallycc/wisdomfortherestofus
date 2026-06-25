import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import EditorialSection from "@/components/EditorialSection";
import PrimaryCTA from "@/components/PrimaryCTA";
import PullQuote from "@/components/PullQuote";
import QuestionCard from "@/components/QuestionCard";
import BookContents from "@/components/BookContents";
import AuthorProfile from "@/components/AuthorProfile";
import PlatformPrinciples from "@/components/PlatformPrinciples";
import InquiryList from "@/components/InquiryList";
import NewsletterSignup from "@/components/NewsletterSignup";
import { book } from "@/content/book";
import {
  hero,
  emptinessExplanation,
  whyBuddhism,
  wisdomWithoutConversion,
  whoWeAre,
  bookJourney,
  finalQuestion,
  essaysList,
} from "@/content/home";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: site.name,
  description:
    "A home for serious inquiry into universal wisdom without conversion, jargon, or borrowed identity. Read Emptiness for the Rest of Us free.",
  openGraph: {
    title: `${site.name} \u2014 Serious Ideas for Ordinary Human Lives`,
    description:
      "A home for serious inquiry into universal wisdom without conversion, jargon, or borrowed identity. Read Emptiness for the Rest of Us free.",
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedBookSection />
      <EmptinessExplanationSection />
      <WhyBuddhismSection />
      <WisdomWithoutConversionSection />
      <WhoWeAreSection />
      <BookJourneySection />
      <QuestionsSection />
      <AuthorSection />
      <PlatformSection />
      <ReadFreeSection />
      <ContentsSection />
      <ReviewerSection />
      <EssaysSection />
      <FinalQuestionSection />
    </>
  );
}

function HeroSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <SectionHeading as="h1" className="mb-4">
            {site.name}
          </SectionHeading>
          <p className="font-serif text-xl md:text-2xl leading-relaxed text-muted mb-8">
            {site.tagline}
          </p>
          <p className="font-sans text-[17px] md:text-[18px] leading-relaxed text-muted mb-4">
            {hero.tagline}
          </p>
          <p className="font-sans text-[17px] md:text-[18px] leading-relaxed text-muted mb-6">
            The platform begins with one such inquiry — <em>Emptiness for the Rest of Us</em>: a free book exploring the constructed self, spiritual ego, and the possibility of a less defended life.
          </p>
          <PrimaryCTA className="mb-4" />
          <p className="font-sans text-sm text-muted mt-3">
            {hero.secondaryText}
          </p>
        </div>
        <div>
          <img
            src="/images/book-cover.webp"
            alt="Cover of Emptiness for the Rest of Us by Muhammad Ibrahim, showing an empty meditating robe beneath a moonlit sky."
            width={400}
            height={600}
            className="w-full max-w-xs mx-auto rounded-sm shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}

function FeaturedBookSection() {
  return (
    <section id="book" className="bg-white border-y border-border scroll-mt-20">
      <div className="max-w-prose mx-auto px-6 py-16 md:py-20 text-center">
        <p className="font-sans text-sm font-semibold uppercase tracking-widest text-accent mb-3">
          Featured Book
        </p>
        <SectionHeading className="mb-2">
          {book.title}
        </SectionHeading>
        <p className="font-serif text-xl italic text-muted mb-4">
          {book.subtitle}
        </p>
        <p className="font-sans text-[17px] leading-relaxed text-muted mb-6">
          {book.description}
        </p>
        <PrimaryCTA />
        <p className="font-sans text-sm text-muted mt-3">
          {hero.secondaryText}
        </p>
      </div>
    </section>
  );
}

function EmptinessExplanationSection() {
  return (
    <section className="py-16 md:py-20">
      <EditorialSection title={emptinessExplanation.title}>
        <p>{emptinessExplanation.body}</p>
        <PullQuote className="my-6">
          {emptinessExplanation.precise}
        </PullQuote>
        {emptinessExplanation.examples.map((ex, i) => (
          <p key={i}>{ex}</p>
        ))}
        <p>{emptinessExplanation.conclusion}</p>
      </EditorialSection>
    </section>
  );
}

function WhyBuddhismSection() {
  return (
    <section className="bg-white border-y border-border py-16 md:py-20">
      <EditorialSection title={whyBuddhism.title}>
        <p>{whyBuddhism.body}</p>
        <ul className="space-y-1 mt-4 mb-6">
          {["the nature of the self", "the causes of suffering", "attachment and clinging", "dependent existence", "perception and mental construction", "the relationship between change and freedom", "the difference between experience and the stories built around it"].map((item) => (
            <li key={item} className="font-sans text-[17px] md:text-[18px] leading-relaxed text-muted pl-4 relative before:content-['\2013'] before:absolute before:left-0 before:text-accent">
              {item}
            </li>
          ))}
        </ul>
        <p>{whyBuddhism.clarification}</p>
      </EditorialSection>
    </section>
  );
}

function WisdomWithoutConversionSection() {
  return (
    <section className="py-16 md:py-20">
      <EditorialSection title={wisdomWithoutConversion.title}>
        <p>{wisdomWithoutConversion.body}</p>
        <p>{wisdomWithoutConversion.note}</p>
        <p className="font-sans text-sm font-semibold uppercase tracking-widest text-accent mt-6 mb-2">
          Openness asks:
        </p>
        <PullQuote className="mb-4">
          &ldquo;{wisdomWithoutConversion.opennessQuestion}&rdquo;
        </PullQuote>
        <p className="font-sans text-sm font-semibold uppercase tracking-widest text-accent mt-6 mb-2">
          Honesty asks:
        </p>
        <PullQuote className="mb-6">
          &ldquo;{wisdomWithoutConversion.honestyQuestion}&rdquo;
        </PullQuote>
        <p className="font-semibold text-text">
          {wisdomWithoutConversion.closing}
        </p>
      </EditorialSection>
    </section>
  );
}

function WhoWeAreSection() {
  return (
    <section className="bg-white border-y border-border py-16 md:py-20">
      <EditorialSection title={whoWeAre.title}>
        <p>{whoWeAre.body}</p>
        <p>
          The rest of us are people with jobs, families, debts, and aging parents.
          With uncertain futures, private regrets, old anger, and religious commitments.
          With doubts, tired bodies, complicated relationships, and unfinished questions.
          With minds that keep turning every experience into a story about &ldquo;me.&rdquo;
        </p>
        <p>{whoWeAre.conclusion}</p>
      </EditorialSection>
    </section>
  );
}

function BookJourneySection() {
  return (
    <section className="py-16 md:py-20">
      <EditorialSection title={bookJourney.title}>
        <p className="font-serif text-xl font-semibold text-text">
          {book.title}
        </p>
        <p className="font-serif text-lg italic text-muted mb-6">
          {book.subtitle}
        </p>
      </EditorialSection>
      <div className="max-w-prose mx-auto px-6 md:px-8 mt-8 space-y-8">
        <div className="pl-6 border-l-4 border-accent/30">
          <h3 className="font-serif text-lg font-semibold mb-2">
            {bookJourney.partOne.title}
          </h3>
          <p className="font-sans text-sm italic text-muted mb-3">
            {bookJourney.partOne.subtitle}
          </p>
          <p className="font-sans text-[17px] leading-relaxed text-muted">
            {bookJourney.partOne.description}
          </p>
        </div>
        <div className="pl-6 border-l-4 border-secondary/30">
          <h3 className="font-serif text-lg font-semibold mb-2">
            {bookJourney.partTwo.title}
          </h3>
          <p className="font-sans text-sm italic text-muted mb-3">
            {bookJourney.partTwo.subtitle}
          </p>
          <p className="font-sans text-[17px] leading-relaxed text-muted">
            {bookJourney.partTwo.description}
          </p>
        </div>
      </div>
      <EditorialSection className="mt-8">
        <PullQuote>{bookJourney.transition}</PullQuote>
      </EditorialSection>
    </section>
  );
}

function QuestionsSection() {
  return (
    <section className="bg-white border-y border-border py-16 md:py-20">
      <EditorialSection title="Some questions the book explores">
        <p className="font-sans text-[17px] md:text-[18px] leading-relaxed text-muted">
          The following questions guide the inquiry.
        </p>
      </EditorialSection>
      <div className="max-w-5xl mx-auto px-6 md:px-8 mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {book.questions.map((q) => (
          <QuestionCard key={q.title} title={q.title} body={q.body} />
        ))}
      </div>
    </section>
  );
}

function AuthorSection() {
  return (
    <section id="about" className="py-16 md:py-20 scroll-mt-20">
      <AuthorProfile />
    </section>
  );
}

function PlatformSection() {
  return (
    <section className="bg-white border-y border-border py-16 md:py-20">
      <PlatformPrinciples />
    </section>
  );
}

function ReadFreeSection() {
  return (
    <section className="bg-dark-bg text-dark-text py-16 md:py-20">
      <div className="max-w-prose mx-auto px-6 md:px-8 text-center">
        <SectionHeading className="mb-4 text-dark-text">
          Read the book free
        </SectionHeading>
        <p className="font-sans text-[17px] md:text-[18px] leading-relaxed text-dark-text/80 mb-6">
          The complete book is available through Internet Archive. You can read
          it online, download it, and share the original edition under its
          Creative Commons licence.
        </p>
        <PrimaryCTA variant="dark" />
        <p className="font-sans text-sm text-dark-text/60 mt-3">
          No payment. No registration. No email required.
        </p>
      </div>
    </section>
  );
}

function ContentsSection() {
  return (
    <section className="py-16 md:py-20">
      <BookContents />
    </section>
  );
}

function ReviewerSection() {
  return (
    <section id="contact" className="bg-white border-y border-border py-16 md:py-20 scroll-mt-20">
      <InquiryList />
    </section>
  );
}

function EssaysSection() {
  return (
    <section id="essays" className="py-16 md:py-20 scroll-mt-20">
      <div className="max-w-prose mx-auto px-6 md:px-8">
        <SectionHeading className="mb-4">
          Essays and continuing inquiries
        </SectionHeading>
        <p className="font-sans text-[17px] md:text-[18px] leading-relaxed text-muted mb-8">
          The first essays on this platform will continue exploring questions
          raised by the book:
        </p>
        <ul className="space-y-2 mb-8">
          {essaysList.map((essay) => (
            <li
              key={essay}
              className="font-serif text-base md:text-lg leading-relaxed text-muted pl-4 border-l-2 border-accent/30"
            >
              {essay}
            </li>
          ))}
        </ul>
        <p className="font-sans text-[17px] leading-relaxed text-muted mb-6">
          Future work will follow the questions wherever they lead. The platform
          is not committed to one tradition. But it is committed to taking every
          source seriously enough not to reduce it to a slogan.
        </p>
        <NewsletterSignup />
      </div>
    </section>
  );
}

function FinalQuestionSection() {
  return (
    <section className="bg-dark-bg text-dark-text py-16 md:py-20">
      <div className="max-w-prose mx-auto px-6 md:px-8 text-center">
        <SectionHeading as="h2" className="mb-6 text-dark-text">
          A final invitation
        </SectionHeading>
        <p className="font-sans text-[17px] md:text-[18px] leading-relaxed text-dark-text/80 mb-8">
          {finalQuestion.invitation}
        </p>
        <PullQuote className="text-dark-text border-dark-text/30 text-2xl md:text-3xl mb-6">
          {finalQuestion.question}
        </PullQuote>
        <p className="font-sans text-base text-dark-text/60 italic">
          {finalQuestion.instruction}
        </p>
      </div>
    </section>
  );
}
