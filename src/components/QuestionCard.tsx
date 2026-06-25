type Props = {
  title: string;
  body: string;
};

export default function QuestionCard({ title, body }: Props) {
  return (
    <article className="bg-white border border-border rounded-sm p-6 md:p-8">
      <h3 className="font-serif text-xl font-semibold mb-3 leading-snug">
        {title}
      </h3>
      <p className="font-sans text-base leading-relaxed text-muted">
        {body}
      </p>
    </article>
  );
}
