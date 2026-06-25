import { reviewerSection } from "@/content/home";

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
      <p className="font-sans text-sm italic text-muted">
        {reviewerSection.note}
      </p>
    </div>
  );
}
