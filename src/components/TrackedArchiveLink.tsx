"use client";

import type { MouseEventHandler, ReactNode } from "react";
import { trackReaderEvent } from "@/lib/analytics";

type Props = {
  href: string;
  source: string;
  children: ReactNode;
  className?: string;
  title?: string;
};

export default function TrackedArchiveLink({
  href,
  source,
  children,
  className,
  title,
}: Props) {
  const handleClick: MouseEventHandler<HTMLAnchorElement> = () => {
    trackReaderEvent("ia_click", "book", source);
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      title={title}
      onClick={handleClick}
    >
      {children}
    </a>
  );
}
