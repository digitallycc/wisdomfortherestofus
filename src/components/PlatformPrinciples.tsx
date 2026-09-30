import { platformPrinciples } from "@/content/home";

export default function PlatformPrinciples() {
  return (
    <div className="max-w-5xl mx-auto px-6 md:px-8">
      <h2 className="font-serif text-2xl md:text-3xl font-semibold mb-10 leading-snug">
        What this platform is — and is not
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        <div className="md:pr-12 md:border-r md:border-border">
          <h3 className="font-sans text-sm font-semibold uppercase tracking-widest text-accent mb-4">
            This is a place for
          </h3>
          <ul className="space-y-2">
            {platformPrinciples.is.map((item) => (
              <li
                key={item}
                className="font-sans text-base text-text pl-4 relative before:content-['\2013'] before:absolute before:left-0 before:text-accent"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-sans text-sm font-semibold uppercase tracking-widest text-muted mb-4">
            This is not
          </h3>
          <ul className="space-y-2">
            {platformPrinciples.isNot.map((item) => (
              <li
                key={item}
                className="font-sans text-base text-muted pl-4 relative before:content-['\2013'] before:absolute before:left-0 before:text-border"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="font-serif text-lg md:text-xl leading-relaxed text-text italic mt-10 max-w-prose">
        {platformPrinciples.conclusion}
      </p>
    </div>
  );
}
