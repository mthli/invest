## Investment Knowledge Loop

### Before any discussion

1. Identify the ticker(s) and theme(s) involved in the question.
2. For each ticker, read `.claude/snapshots/positions/<TICKER>.md` (current consensus
   snapshot). If the journal has had blocks added since the snapshot, also read
   `positions/<TICKER>.md` in full — it's the source of truth.
3. For each theme, read `.claude/snapshots/themes/<theme>.md`. If macro context applies,
   read `macro.md` in full.
4. If a snapshot doesn't exist yet, fall back to the raw journal file. If neither exists,
   say so explicitly before forming new views — don't pretend prior context that isn't
   there.

### After forming new views

- Use `/commit-invest` to persist the view as a structured block.
- Every Thesis must fill `INVALIDATION` — a thesis without an exit trigger is a story, not
  a position. Same for `STANCE` and `HORIZON`: vague views don't survive months of
  forgetting.
- If a new view overrides a prior one, add `SUPERSEDES:` referencing the date and commit
  hash of the prior block.

### Periodically

- Run `/distill-ticker <TICKER>` after a ticker has accumulated 3–5 new blocks since the
  last distill, so the snapshot stays current.
- Run `/distill-theme <theme>` after several theses across multiple tickers have referenced
  the theme.
