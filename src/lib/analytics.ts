"use client";

const VISITOR_KEY = "wfru-anonymous-reader";

export type ReaderEventName =
  | "opening_started"
  | "opening_read"
  | "opening_completed"
  | "chapter_one_started"
  | "chapter_one_read"
  | "chapter_one_completed"
  | "ia_click";

function getAnonymousId() {
  try {
    const existing = window.localStorage.getItem(VISITOR_KEY);
    if (existing) return existing;

    const created = crypto.randomUUID();
    window.localStorage.setItem(VISITOR_KEY, created);
    return created;
  } catch {
    return crypto.randomUUID();
  }
}

export function trackReaderEvent(
  eventName: ReaderEventName,
  contentId: string,
  source: string,
) {
  const payload = JSON.stringify({
    eventName,
    contentId,
    anonymousId: getAnonymousId(),
    source,
    path: window.location.pathname,
  });

  void fetch("/api/events", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: payload,
    keepalive: true,
    credentials: "same-origin",
  }).catch(() => {
    // Analytics must never interrupt reading or navigation.
  });
}
