import { site } from "@/content/site";

export default function NewsletterSignup() {
  if (!site.newsletterEnabled) return null;
  return (
    <section className="border border-border rounded-sm p-6 max-w-prose mx-auto">
      <p className="font-sans text-sm text-muted italic">
        Newsletter signup coming soon.
      </p>
    </section>
  );
}
