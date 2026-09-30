import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import TrackedArchiveLink from "@/components/TrackedArchiveLink";
import { book } from "@/content/book";
import { finalQuestion } from "@/content/home";
import { internetArchiveUrl, site } from "@/content/site";

export const metadata: Metadata = {
  title: {
    absolute: `${book.title} — A Free Inquiry Into Self, Suffering, and Change`,
  },
  description:
    "Read Emptiness for the Rest of Us free. A clear inquiry into the self, suffering, and change, drawn from Buddhism and explored by a Muslim author.",
  alternates: { canonical: "/" },
  openGraph: {
    title: `${book.title} — ${book.subtitle}`,
    description: book.description,
    url: site.url,
  },
};

export default function HomePage() {
  return (
    <>
      <section className="cinematic-hero relative min-h-[calc(100svh-4rem)] overflow-hidden bg-dark-bg text-dark-text">
        <Image
          src="/images/hero-atmosphere.webp"
          alt="A solitary empty chair in a wide surreal landscape of stone, paper, light, and translucent connected planes."
          fill
          priority
          sizes="100vw"
          className="object-cover object-[62%_center]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(23,22,21,.98)_0%,rgba(23,22,21,.88)_37%,rgba(23,22,21,.26)_72%,rgba(23,22,21,.08)_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/75 via-transparent to-dark-bg/25" />
        <div className="ambient-grid absolute inset-0 opacity-30" aria-hidden="true" />

        <div className="relative mx-auto flex min-h-[calc(100svh-4rem)] max-w-7xl items-center px-6 py-20 md:px-10 md:py-24">
          <div className="max-w-3xl">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-rust-light">
              A free book · No conversion required
            </p>
            <h1 className="mt-6 text-balance font-serif text-5xl font-semibold leading-[0.9] md:text-7xl lg:text-[6.5rem]">
              Emptiness
              <span className="block text-dark-text/62">for the Rest of Us</span>
            </h1>
            <p className="mt-6 font-serif text-2xl italic text-dark-text/65 md:text-3xl">
              Seeing the Folly of “I”
            </p>
            <p className="mt-8 max-w-xl font-sans text-lg leading-relaxed text-dark-text/78 md:text-xl">
              What if the self you spend your whole life defending is not as solid as it feels?
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link href="/read/opening/" className="button-light">
                Begin with the opening →
              </Link>
              <Link href="/book/" className="button-outline-dark">
                Explore the book
              </Link>
            </div>

            <p className="mt-5 font-sans text-sm text-dark-text/48">
              Read online in responsive text · complete edition on Internet Archive
            </p>
          </div>

          <div className="absolute bottom-8 right-5 hidden w-[320px] lg:block xl:right-10">
            <div className="paper-card rotate-2 rounded-[2rem] p-3 shadow-[0_28px_80px_rgba(0,0,0,.55)]">
              <div className="grid grid-cols-[94px_1fr] gap-4 rounded-[1.45rem] bg-paper p-4">
                <Image
                  src="/images/book-cover.webp"
                  alt="Cover of Emptiness for the Rest of Us by Muhammad Ibrahim."
                  width={160}
                  height={240}
                  className="h-full w-full rounded-xl object-cover"
                />
                <div className="flex flex-col justify-between py-1">
                  <div>
                    <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">
                      The first inquiry
                    </p>
                    <p className="mt-2 font-serif text-2xl font-semibold leading-none text-text">
                      The Phantom in the Room
                    </p>
                  </div>
                  <Link href="/read/opening/" className="font-sans text-xs font-semibold text-accent">
                    Read now →
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute right-[27rem] top-[18%] hidden max-w-[250px] rounded-[1.5rem] border border-white/10 bg-black/20 p-5 backdrop-blur-md xl:block">
            <p className="font-serif text-lg leading-relaxed text-dark-text/82">
              “The movement is from understanding to seeing, and from seeing to living.”
            </p>
          </div>
        </div>
      </section>

      <section className="relative z-10 -mt-1 border-b border-border bg-background px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div className="lg:sticky lg:top-32">
              <p className="eyebrow">Choose an entrance</p>
              <h2 className="mt-4 max-w-lg font-serif text-4xl font-semibold leading-[1.02] md:text-6xl">
                Begin with the question—or with the reasoning.
              </h2>
              <p className="mt-6 max-w-md font-sans text-lg leading-relaxed text-muted">
                The book opens personally before it becomes philosophical. Both paths are available here as comfortable, responsive reading pages.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Link href="/read/opening/" className="editorial-card group min-h-[430px]">
                <span className="card-number">01</span>
                <div className="mt-auto pt-24">
                  <p className="eyebrow">Begin with the question</p>
                  <h3 className="mt-3 font-serif text-4xl font-semibold leading-none">
                    The Phantom in the Room
                  </h3>
                  <p className="mt-5 font-sans leading-relaxed text-muted">
                    The actual opening of the book: why the burden of being someone deserves examination.
                  </p>
                  <span className="mt-8 inline-block font-sans text-sm font-semibold text-accent">
                    Read the opening · 8 min →
                  </span>
                </div>
              </Link>

              <Link href="/read/chapter-one/" className="editorial-card group min-h-[430px] md:translate-y-12">
                <span className="card-number">02</span>
                <div className="mt-auto pt-24">
                  <p className="eyebrow">The Lamp of Inquiry</p>
                  <h3 className="mt-3 font-serif text-4xl font-semibold leading-none">
                    The Illusion of the Obvious
                  </h3>
                  <p className="mt-5 font-sans leading-relaxed text-muted">
                    Start with a chair. Follow its parts, conditions, names, and uses into the hidden web beneath apparent solidity.
                  </p>
                  <span className="mt-8 inline-block font-sans text-sm font-semibold text-accent">
                    Read Chapter One · 18 min →
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-paper px-6 py-20 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-[0.95fr_1.05fr] md:items-center">
            <div className="relative min-h-[430px]">
              <div className="absolute left-0 top-4 w-[72%] rounded-[2rem] bg-dark-bg p-8 text-dark-text shadow-2xl md:p-10">
                <p className="eyebrow text-rust-light">The question</p>
                <p className="mt-6 font-serif text-3xl leading-tight md:text-4xl">
                  What if the self you spend your whole life defending is not what you think it is?
                </p>
              </div>
              <div className="insight-card absolute bottom-0 right-0 w-[70%] rounded-[2rem] p-7">
                <p className="font-sans text-sm leading-relaxed text-[#514943]">
                  Every relationship, ambition, fear, grievance, and prayer orbits something we call “I.” The book asks us to look for it carefully.
                </p>
              </div>
            </div>

            <div>
              <p className="eyebrow">What emptiness means here</p>
              <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight md:text-6xl">
                Not nothingness. Not a denial of life.
              </h2>
              <p className="mt-7 font-sans text-lg leading-relaxed text-muted">
                Nothing—including the self—exists as a completely separate, fixed, and independent thing. A person depends on body, language, ancestry, relationship, culture, memory, habit, hope, grief, and change.
              </p>
              <p className="mt-5 font-serif text-2xl leading-relaxed text-text">
                The self is not nothing. But it may not be the solid owner we have imagined. And if the self is not fixed, suffering may not be fixed either.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-dark-bg px-6 py-20 text-dark-text md:py-28">
        <div className="mx-auto max-w-5xl text-center">
          <p className="eyebrow text-rust-light">Praise for the book</p>
          <blockquote>
            <p className="mt-8 font-serif text-3xl leading-relaxed md:text-5xl md:leading-[1.24]">
              “An accessible, warm-hearted presentation of the central ideas of Madhyamaka metaphysics and of their ethical implications. Muhammad Ibrahim has found the perfect voice in which to encourage people to take these ideas seriously, regardless of their religious or ideological commitments. It will be of real benefit to people who want to improve their lives along these lines, but who find technical presentations forbidding.”
            </p>
            <footer className="mt-8 font-sans text-sm text-dark-text/55">
              <strong className="block text-base text-dark-text">Jay L. Garfield</strong>
              Professor Emeritus of Philosophy, Smith College · Visiting Professor of Buddhist Philosophy, Harvard Divinity School
            </footer>
          </blockquote>
        </div>
      </section>

      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <p className="eyebrow">Four questions</p>
          <div className="mt-8 grid gap-px overflow-hidden rounded-[2rem] border border-border bg-border md:grid-cols-2">
            {book.questions.map((question, index) => (
              <article key={question.title} className="bg-background p-7 md:p-10">
                <span className="font-sans text-xs font-semibold text-accent">0{index + 1}</span>
                <h2 className="mt-5 font-serif text-3xl font-semibold">{question.title}</h2>
                <p className="mt-4 font-sans leading-relaxed text-muted">{question.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="scroll-mt-28 border-y border-border bg-paper px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-[0.65fr_1.35fr]">
          <div>
            <p className="eyebrow">About the author</p>
            <p className="mt-4 font-serif text-4xl font-semibold">Muhammad Ibrahim</p>
            <p className="mt-2 font-sans text-sm text-muted">Islamabad, Pakistan</p>
          </div>
          <div className="space-y-5 font-sans text-lg leading-relaxed text-muted">
            <p>
              I am a Muslim from Pakistan in my late fifties. I do not write as a Buddhist monk, teacher, formal practitioner, historian, or academic specialist. I write as a reader, a thinker, and a human being who has spent many years examining questions of identity, suffering, belief, fear, purpose, and the burden of being someone.
            </p>
            <p>
              I have deliberately not translated Buddhist emptiness into familiar Islamic vocabulary, nor tried to prove that Buddhism and Islam are secretly saying the same thing. This project proceeds with two commitments: to seek wisdom without fear, and to represent its source without dishonesty.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 text-center md:py-28">
        <div className="mx-auto max-w-4xl">
          <p className="eyebrow">A final invitation</p>
          <p className="mt-6 font-sans text-lg leading-relaxed text-muted">
            {finalQuestion.invitation}
          </p>
          <h2 className="mt-8 font-serif text-4xl font-semibold leading-tight md:text-6xl">
            {finalQuestion.question}
          </h2>
          <p className="mt-5 font-serif text-xl italic text-muted">{finalQuestion.instruction}</p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/read/opening/" className="button-dark">
              Begin reading →
            </Link>
            <TrackedArchiveLink href={internetArchiveUrl} source="home_final" className="button-outline">
              Complete edition ↗
            </TrackedArchiveLink>
          </div>
        </div>
      </section>
    </>
  );
}
