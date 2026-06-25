import { platformPrinciples } from "@/content/home";

export default function PlatformPrinciples() {
  return (
    <div className="max-w-prose mx-auto px-6 md:px-8">
      <h2 className="font-serif text-2xl md:text-3xl font-semibold mb-6 leading-snug">
        What this platform is\u2014and is not
      </h2>

      <div className="mb-8">
        <h3 className="font-sans text-sm font-semibold uppercase tracking-widest text-accent mb-3">
          This is a place for:
        </h3>
        <ul className="space-y-1">
          {platformPrinciples.is.map((item) => (
            <li key={item} className="font-sans text-base text-muted pl-4 relative before:content-['\2013'] before:absolute before:left-0 before:text-accent">
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="font-sans text-sm font-semibold uppercase tracking-widest text-accent mb-3">
          This is not:
        </h3>
        <ul className="space-y-1">
          {platformPrinciples.isNot.map((item) => (
            <li key={item} className="font-sans text-base text-muted pl-4 relative before:content-['\2013'] before:absolute before:left-0 before:text-accent">
              {item}
            </li>
          ))}
        </ul>
      </div>

      <p className="font-serif text-lg leading-relaxed text-text italic">
        {platformPrinciples.conclusion}
      </p>
    </div>
  );
}
