SELECT
  event_name,
  COUNT(*) AS total_events,
  COUNT(DISTINCT anonymous_id) AS unique_readers,
  MIN(occurred_at) AS first_event,
  MAX(occurred_at) AS latest_event
FROM reader_events
GROUP BY event_name
ORDER BY event_name;
