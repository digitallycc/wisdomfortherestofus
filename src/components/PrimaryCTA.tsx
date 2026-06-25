import ExternalLink from "./ExternalLink";
import { internetArchiveUrl } from "@/content/site";

type Props = {
  variant?: "primary" | "dark";
  className?: string;
};

export default function PrimaryCTA({ variant = "primary", className = "" }: Props) {
  const base =
    "inline-block font-sans font-semibold text-center transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent";
  const size = "px-8 py-4 text-lg";
  const styles = {
    primary:
      "bg-accent text-white hover:bg-accent-light focus:ring-offset-background",
    dark: "bg-accent text-white hover:bg-accent-light focus:ring-offset-dark-bg",
  };

  return (
    <ExternalLink
      href={internetArchiveUrl}
      className={`${base} ${size} ${styles[variant]} ${className}`}
    >
      Read the Book Free
    </ExternalLink>
  );
}
