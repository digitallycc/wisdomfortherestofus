import { reviewerSection } from "@/content/home";
import { site } from "@/content/site";

export default function InquiryList() {
  return (
    <div className="max-w-prose mx-auto px-6 md:px-8">
      <h2 className="font-serif text-2xl md:text-3xl font-semibold mb-4 leading-snug">
        {reviewerSection.title}
      </h2>
      <p className="font-sans text-[17px] md:text-[18px] leading-relaxed text-muted mb-6">
        {reviewerSection.body}
      </p>
      <p className="font-sans text-sm font-semibold uppercase tracking-widest text-accent mb-3">
        I welcome:
      </p>
      <ul className="space-y-1 mb-6">
        {reviewerSection.welcomes.map((item) => (
          <li key={item} className="font-sans text-base text-muted pl-4 relative before:content-['\2013'] before:absolute before:left-0 before:text-accent">
            {item}
          </li>
        ))}
      </ul>
      <p className="font-sans text-sm italic text-muted mb-6">
        {reviewerSection.note}
      </p>
      <div className="border-t border-border pt-6">
        <p className="font-sans text-sm text-muted">{site.author.name}</p>
        <p className="font-sans text-sm text-muted">{site.author.location}</p>
        <a
          href={`mailto:${site.author.email}?subject=Inquiry%20via%20Wisdom%20for%20the%20Rest%20of%20Us`}
          className="font-sans text-sm text-accent hover:text-accent-light transition-colors underline"
        >
          {site.author.email}
        </a>
      </div>
    </div>
  );
}
