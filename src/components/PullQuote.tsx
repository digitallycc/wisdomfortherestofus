type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function PullQuote({ children, className = "" }: Props) {
  return (
    <blockquote
      className={`font-serif text-xl md:text-2xl leading-relaxed text-accent border-l-4 border-accent pl-6 italic ${className}`}
    >
      {children}
    </blockquote>
  );
}
