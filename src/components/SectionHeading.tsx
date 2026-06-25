type Props = {
  as?: "h1" | "h2" | "h3";
  children: React.ReactNode;
  className?: string;
  serif?: boolean;
};

export default function SectionHeading({
  as: Tag = "h2",
  children,
  className = "",
  serif = true,
}: Props) {
  const font = serif ? "font-serif" : "font-sans";
  const sizes: Record<string, string> = {
    h1: "text-3xl md:text-4xl lg:text-5xl leading-tight",
    h2: "text-2xl md:text-3xl leading-snug",
    h3: "text-xl md:text-2xl leading-snug",
  };

  return (
    <Tag className={`${font} ${sizes[Tag]} font-semibold ${className}`}>
      {children}
    </Tag>
  );
}
