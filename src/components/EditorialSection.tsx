type Props = {
  title?: string;
  children: React.ReactNode;
  className?: string;
  as?: "section" | "article";
};

export default function EditorialSection({
  title,
  children,
  className = "",
  as: Tag = "section",
}: Props) {
  return (
    <Tag className={`max-w-prose mx-auto px-6 md:px-8 ${className}`}>
      {title && (
        <h2 className="font-serif text-2xl md:text-3xl font-semibold mb-6 leading-snug">
          {title}
        </h2>
      )}
      <div className="font-sans text-[17px] md:text-[18px] leading-relaxed text-muted space-y-4">
        {children}
      </div>
    </Tag>
  );
}
