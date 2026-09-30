"use client";

import { useEffect } from "react";
import { trackReaderEvent, type ReaderEventName } from "@/lib/analytics";

type ContentId = "opening" | "chapter_one";

type Props = {
  contentId: ContentId;
  minimumActiveSeconds: number;
  completionActiveSeconds: number;
};

export default function ReadingTracker({
  contentId,
  minimumActiveSeconds,
  completionActiveSeconds,
}: Props) {
  useEffect(() => {
    const article = document.querySelector<HTMLElement>("[data-reading-root]");
    if (!article) return;

    const prefix = contentId === "opening" ? "opening" : "chapter_one";
    trackReaderEvent(`${prefix}_started` as ReaderEventName, contentId, "reader");

    let activeSeconds = 0;
    let maxProgress = 0;
    let meaningfulReadSent = false;
    let completedSent = false;

    const measure = () => {
      const rect = article.getBoundingClientRect();
      const articleTop = window.scrollY + rect.top;
      const travelled = window.scrollY + window.innerHeight - articleTop;
      maxProgress = Math.max(
        maxProgress,
        Math.min(1, Math.max(0, travelled / article.scrollHeight)),
      );

      if (
        !meaningfulReadSent &&
        activeSeconds >= minimumActiveSeconds &&
        maxProgress >= 0.55
      ) {
        meaningfulReadSent = true;
        trackReaderEvent(`${prefix}_read` as ReaderEventName, contentId, "reader");
      }

      if (
        !completedSent &&
        activeSeconds >= completionActiveSeconds &&
        maxProgress >= 0.9
      ) {
        completedSent = true;
        trackReaderEvent(
          `${prefix}_completed` as ReaderEventName,
          contentId,
          "reader",
        );
      }
    };

    const interval = window.setInterval(() => {
      if (document.visibilityState === "visible" && document.hasFocus()) {
        activeSeconds += 1;
        measure();
      }
    }, 1_000);

    window.addEventListener("scroll", measure, { passive: true });
    window.addEventListener("resize", measure);
    measure();

    return () => {
      window.clearInterval(interval);
      window.removeEventListener("scroll", measure);
      window.removeEventListener("resize", measure);
    };
  }, [completionActiveSeconds, contentId, minimumActiveSeconds]);

  return null;
}
