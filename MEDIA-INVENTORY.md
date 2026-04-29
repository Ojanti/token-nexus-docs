# Media Inventory

## Conventions

- All paths are relative to `token-nexus-docs/public/`
- Use PNG for screenshots. Keep under ~400 KB per image.
- Videos: MP4, H.264, 1080p or 720p, under ~10 MB. No audio needed.
- Dark theme only. Crop tight to the plugin panel.

---

## Still needed (static images)

None. Optional drift diagram was removed from the product plan.

### Unrecognised files

Two files were found in `images/quickstart/` that don't match any expected name. Not wired up yet.

- `images/quickstart/__1.png`
- `images/quickstart/__2.png`

Let me know what these are and I'll place them.

---

## Batch 8 - Troubleshooting (cancelled)

Not used. `troubleshooting.mdx` is text-only (no screenshots).

---

## Batch 9 - Videos (5 videos)

- [ ] `videos/full-workflow.mp4` - Complete workflow: repo connection → first sync
  - Source: `src/pages/overview/see-it-in-action.mdx`
- [ ] `videos/github-connect.mp4` - GitHub connection and PAT setup
  - Source: `src/pages/overview/see-it-in-action.mdx`
- [ ] `videos/mapping.mp4` - Mapping variables using auto-match and manual review
  - Source: `src/pages/overview/see-it-in-action.mdx`
- [ ] `videos/sync.mp4` - Full sync walkthrough, diff review to applied changes
  - Source: `src/pages/overview/see-it-in-action.mdx`
- [ ] `videos/homepage-sync-walkthrough.mp4` - Homepage video (can reuse one of the above)
  - Source: `src/pages/index.astro`

---

---

## Done

34 images processed (incl. `images/homepage/workspace.png`, `images/core/how-it-works-naming.png`). 5 duplicates consolidated (deleted redundant copies, all references point to one canonical file).

### Deduplication applied

| Deleted (duplicate) | Canonical path kept | Pages updated |
|---|---|---|
| `overview/auto-match-panel.png` | `core/map-01-automatch.png` | `what-is-tokennexus.mdx` |
| `quickstart/02-repo-connect.png` | `core/connect-02-setup-wizard.png` | `quickstart.mdx` |
| `core/connect-04-file-list.png.png` | `quickstart/03-file-selection.png` | `connect-to-github.mdx` |
| `overview/sync-diff.png` | `core/sync-02-diff-modal.png` | `see-it-in-action.mdx`, `quickstart.mdx` |
| `quickstart/06-sync-diff.png` | `core/sync-02-diff-modal.png` | `quickstart.mdx` |

### User comments acted on

- `review-01-panel.png` and `review-02-search.png` merged → both `review-and-save.mdx` placeholders now point to `core/review-01-panel.png`
- `images/reference/type-badges.png` → placeholder removed from `reference.mdx` entirely

### Batch 1 - Overview (partial: 4/6)

- [x] `images/overview/welcome-wizard.png` → `src/pages/overview/see-it-in-action.mdx`
- [x] `images/overview/mapping-automatch.png` → `src/pages/overview/see-it-in-action.mdx`
- [x] `images/core/map-01-automatch.png` → `src/pages/overview/what-is-tokennexus.mdx` + `src/pages/core/map-your-variables.mdx` (shared)
- [x] `images/core/sync-02-diff-modal.png` → `src/pages/overview/see-it-in-action.mdx` + `src/pages/quickstart.mdx` + `src/pages/core/run-a-sync.mdx` (shared)

### Batch 2 - Quickstart (4/6 unique; 2 shared with core)

- [x] `images/quickstart/01-install.png` → `src/pages/quickstart.mdx`
- [x] `images/quickstart/03-file-selection.png` → `src/pages/quickstart.mdx` + `src/pages/core/connect-to-github.mdx` (shared)
- [x] `images/quickstart/04-automatch-results.png` → `src/pages/quickstart.mdx`
- [x] `images/quickstart/05-suggestions.png` → `src/pages/quickstart.mdx`
- [x] `images/core/connect-02-setup-wizard.png` → `src/pages/quickstart.mdx` + `src/pages/core/connect-to-github.mdx` (shared)
- [x] `images/core/sync-02-diff-modal.png` → shared (see above)

### Batch 3 - Connect to GitHub (4/4)

- [x] `images/core/connect-01-pat-permissions.png` → `src/pages/core/connect-to-github.mdx`
- [x] `images/core/connect-02-setup-wizard.png` → shared (see above)
- [x] `images/core/connect-03-success.png` → `src/pages/core/connect-to-github.mdx`
- [x] `images/quickstart/03-file-selection.png` → shared (see above)

### Batch 4 - Generate Variables (4/4)

- [x] `images/core/generate-01-empty-state.png` → `src/pages/core/generate-variables.mdx`
- [x] `images/core/generate-02-file-select.png` → `src/pages/core/generate-variables.mdx`
- [x] `images/core/generate-03-plan-preview.png` → `src/pages/core/generate-variables.mdx`
- [x] `images/core/generate-04-progress.png` → `src/pages/core/generate-variables.mdx`

### Batch 5 - Map Your Variables + Review & Save (4/5)

- [x] `images/core/map-01-automatch.png` → shared (see above)
- [x] `images/core/map-02-suggestions.png` → `src/pages/core/map-your-variables.mdx`
- [x] `images/core/map-03-manual-dropdown.png` → `src/pages/core/map-your-variables.mdx`
- [x] `images/core/review-01-panel.png` → both placeholders in `src/pages/core/review-and-save.mdx`

### Batch 6 - Run a Sync (3/3)

- [x] `images/core/sync-01-button.png` → `src/pages/core/run-a-sync.mdx`
- [x] `images/core/sync-02-diff-modal.png` → shared (see above)
- [x] `images/core/sync-03-deselected.png` → `src/pages/core/run-a-sync.mdx`

### Batch 7 - Mode Bindings (1/3)

- [x] `images/core/mode-bindings-panel.png` → `src/pages/deeper/mode-bindings.mdx` (file placed in `core/` not `deeper/` - reference updated accordingly)

### Homepage + How it works (naming diagram)

- [x] `images/homepage/workspace.png` → `src/pages/index.astro`
- [x] `images/core/how-it-works-naming.png` → `src/pages/core/how-it-works.mdx`
