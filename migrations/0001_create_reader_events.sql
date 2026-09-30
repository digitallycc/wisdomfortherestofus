CREATE TABLE IF NOT EXISTS reader_events (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  event_name TEXT NOT NULL CHECK (
    event_name IN (
      'opening_started',
      'opening_read',
      'opening_completed',
      'chapter_one_started',
      'chapter_one_read',
      'chapter_one_completed',
      'ia_click'
    )
  ),
  content_id TEXT NOT NULL,
  anonymous_id TEXT NOT NULL,
  source TEXT NOT NULL DEFAULT 'unknown',
  path TEXT NOT NULL,
  occurred_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE UNIQUE INDEX IF NOT EXISTS idx_reader_events_unique_read
  ON reader_events (event_name, content_id, anonymous_id)
  WHERE event_name <> 'ia_click';

CREATE INDEX IF NOT EXISTS idx_reader_events_name_time
  ON reader_events (event_name, occurred_at);

CREATE INDEX IF NOT EXISTS idx_reader_events_anonymous
  ON reader_events (anonymous_id);
