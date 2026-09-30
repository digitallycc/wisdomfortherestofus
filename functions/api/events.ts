const ALLOWED_EVENTS = new Set([
  "opening_started",
  "opening_read",
  "opening_completed",
  "chapter_one_started",
  "chapter_one_read",
  "chapter_one_completed",
  "ia_click",
]);

const ID_PATTERN = /^[a-f0-9-]{36}$/i;
const LABEL_PATTERN = /^[a-z0-9_-]{1,48}$/i;
const MAX_BODY_BYTES = 2_048;

type EventPayload = {
  eventName?: unknown;
  contentId?: unknown;
  anonymousId?: unknown;
  source?: unknown;
  path?: unknown;
};

function json(body: unknown, status = 200) {
  return Response.json(body, {
    status,
    headers: {
      "cache-control": "no-store",
      "content-security-policy": "default-src 'none'",
      "x-content-type-options": "nosniff",
    },
  });
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const contentLength = Number(context.request.headers.get("content-length") || 0);
  if (contentLength > MAX_BODY_BYTES) {
    return json({ ok: false }, 413);
  }

  const origin = context.request.headers.get("origin");
  const requestUrl = new URL(context.request.url);
  if (origin && origin !== requestUrl.origin) {
    return json({ ok: false }, 403);
  }

  let payload: EventPayload;
  try {
    payload = (await context.request.json()) as EventPayload;
  } catch {
    return json({ ok: false }, 400);
  }

  const eventName = typeof payload.eventName === "string" ? payload.eventName : "";
  const contentId = typeof payload.contentId === "string" ? payload.contentId : "";
  const anonymousId = typeof payload.anonymousId === "string" ? payload.anonymousId : "";
  const source = typeof payload.source === "string" ? payload.source : "unknown";
  const path = typeof payload.path === "string" ? payload.path : "/";

  if (
    !ALLOWED_EVENTS.has(eventName) ||
    !LABEL_PATTERN.test(contentId) ||
    !ID_PATTERN.test(anonymousId) ||
    !LABEL_PATTERN.test(source) ||
    !path.startsWith("/") ||
    path.length > 160
  ) {
    return json({ ok: false }, 400);
  }

  const statement = context.env.DB.prepare(
    eventName === "ia_click"
      ? `INSERT INTO reader_events
          (event_name, content_id, anonymous_id, source, path)
        VALUES (?, ?, ?, ?, ?)`
      : `INSERT OR IGNORE INTO reader_events
          (event_name, content_id, anonymous_id, source, path)
        VALUES (?, ?, ?, ?, ?)`,
  ).bind(eventName, contentId, anonymousId, source, path);

  context.waitUntil(
    statement.run().catch((error: unknown) => {
      console.error(
        JSON.stringify({
          message: "reader_event_write_failed",
          eventName,
          error: error instanceof Error ? error.message : "unknown",
        }),
      );
    }),
  );

  return json({ ok: true }, 202);
};

export const onRequestGet: PagesFunction = async () =>
  json({ ok: false, message: "Method not allowed" }, 405);
