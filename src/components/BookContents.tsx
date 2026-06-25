import { book } from "@/content/book";

export default function BookContents() {
  return (
    <div className="max-w-prose mx-auto px-6 md:px-8">
      <h2 className="font-serif text-2xl md:text-3xl font-semibold mb-8 leading-snug">
        Contents
      </h2>
      {book.contents.map((section) => (
        <div key={section.section} className="mb-8">
          <h3 className="font-serif text-xl font-semibold mb-1">
            {section.section}
          </h3>
          <p className="font-sans text-sm italic text-muted mb-3">
            {section.subtitle}
          </p>
          <ol className="space-y-1">
            {section.chapters.map((chapter) => (
              <li
                key={chapter}
                className="font-sans text-base text-muted pl-4 border-l-2 border-border"
              >
                {chapter}
              </li>
            ))}
          </ol>
        </div>
      ))}
    </div>
  );
}
