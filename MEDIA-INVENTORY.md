# Media Inventory

37 images, 5 videos. Drop files at the paths indicated. Tell me when a batch is done ("Batch 2 is in") and I'll wire them up in the MDX.

## Conventions

- All paths are relative to `token-nexus-docs/public/`
- In-app reference path will be `/token-nexus-docs/images/<section>/<file>` - I handle that, just save with the suggested filename
- Use PNG for screenshots. JPG also fine for photography-heavy shots. Keep under ~400 KB per image where you can.
- Videos: MP4, H.264, 1080p or 720p, under ~10 MB preferred. No audio needed.
- Dark theme captures only - the docs are dark-only.
- Crop tight to the panel. Don't include the entire Figma chrome unless a screenshot specifically needs it.

---

## Batch 1 - Homepage + Overview (6 images)

- [ ] `images/homepage/workspace.png` - Hero shot of the TokenNexus main workspace (mapping panel)
  - Source: `src/pages/index.astro:43`
- [ ] `images/overview/token-drift-diagram.png` - Diagram showing token value drifting from GitHub source across Figma files over time. Can be an illustration/diagram rather than a screenshot.
  - Source: `src/pages/overview/what-is-tokennexus.mdx:34`
- [ ] `images/overview/auto-match-panel.png` - Mapping panel after auto-match, variables showing confidence scores
  - Source: `src/pages/overview/what-is-tokennexus.mdx:48`
- [ ] `images/overview/welcome-wizard.png` - Welcome / onboarding wizard screen
  - Source: `src/pages/overview/see-it-in-action.mdx:49`
- [ ] `images/overview/mapping-automatch.png` - Mapping panel with auto-match suggestions highlighted
  - Source: `src/pages/overview/see-it-in-action.mdx:51`
- [ ] `images/overview/sync-diff.png` - Sync diff modal with before/after values and color swatches
  - Source: `src/pages/overview/see-it-in-action.mdx:53`

---

## Batch 2 - Quickstart (6 images)

- [ ] `images/quickstart/01-install.png` - Figma Community page showing the TokenNexus install button
  - Source: `src/pages/quickstart.mdx:36`
- [ ] `images/quickstart/02-repo-connect.png` - Setup wizard showing the repo connection form
  - Source: `src/pages/quickstart.mdx:46`
- [ ] `images/quickstart/03-file-selection.png` - Token file selection screen with list of JSON files
  - Source: `src/pages/quickstart.mdx:52`
- [ ] `images/quickstart/04-automatch-results.png` - Mapping panel after auto-match (matched / suggested / unmatched lists visible)
  - Source: `src/pages/quickstart.mdx:64`
- [ ] `images/quickstart/05-suggestions.png` - Suggestions panel with confirm / dismiss actions on each row
  - Source: `src/pages/quickstart.mdx:76`
- [ ] `images/quickstart/06-sync-diff.png` - Sync diff modal showing 3 rows of before / after values
  - Source: `src/pages/quickstart.mdx:82`

---

## Batch 3 - Connect to GitHub (4 images)

- [ ] `images/core/connect-01-pat-permissions.png` - GitHub PAT creation screen with Contents permission set to Read-only
  - Source: `src/pages/core/connect-to-github.mdx:26`
- [ ] `images/core/connect-02-setup-wizard.png` - Plugin open on the setup wizard (step 1 of the repo connection flow)
  - Source: `src/pages/core/connect-to-github.mdx:39`
- [ ] `images/core/connect-03-success.png` - Successful connection confirmation screen
  - Source: `src/pages/core/connect-to-github.mdx:61`
- [ ] `images/core/connect-04-file-list.png` - File selection screen listing 4 JSON files with checkboxes
  - Source: `src/pages/core/connect-to-github.mdx:71`

---

## Batch 4 - Generate Variables (4 images)

- [ ] `images/core/generate-01-empty-state.png` - Empty mapping panel with the "Create variables from git" button
  - Source: `src/pages/core/generate-variables.mdx:32`
- [ ] `images/core/generate-02-file-select.png` - Token file selection step in the Generate Variables wizard
  - Source: `src/pages/core/generate-variables.mdx:43`
- [ ] `images/core/generate-03-plan-preview.png` - Generation plan preview showing collections, modes, variable count
  - Source: `src/pages/core/generate-variables.mdx:55`
- [ ] `images/core/generate-04-progress.png` - Generation progress bar with active phase label and percentage
  - Source: `src/pages/core/generate-variables.mdx:61`

---

## Batch 5 - Map Your Variables + Review & Save (5 images)

- [ ] `images/core/map-01-automatch.png` - Auto-match running with progress indicator
  - Source: `src/pages/core/map-your-variables.mdx:22`
- [ ] `images/core/map-02-suggestions.png` - Suggestions panel showing 3 suggested mappings with confirm / dismiss
  - Source: `src/pages/core/map-your-variables.mdx:38`
- [ ] `images/core/map-03-manual-dropdown.png` - Manual mapping dropdown open for a single variable, showing search results
  - Source: `src/pages/core/map-your-variables.mdx:46`
- [ ] `images/core/review-01-panel.png` - Review changes panel showing a mix of Ready / Broken / Not ready items (status pills visible)
  - Source: `src/pages/core/review-and-save.mdx:21`
- [ ] `images/core/review-02-search.png` - Review panel with search field active and filtered results
  - Source: `src/pages/core/review-and-save.mdx:50`

---

## Batch 6 - Run a Sync (3 images)

- [ ] `images/core/sync-01-button.png` - Sync button in the top navigation bar, ideally in a loading state
  - Source: `src/pages/core/run-a-sync.mdx:26`
- [ ] `images/core/sync-02-diff-modal.png` - Sync diff modal with 5 rows showing variable name, token path, before/after values, type badge
  - Source: `src/pages/core/run-a-sync.mdx:32`
- [ ] `images/core/sync-03-deselected.png` - Diff modal with two rows deselected, apply button showing count to apply
  - Source: `src/pages/core/run-a-sync.mdx:63`

---

## Batch 7 - How It Works + Mode Bindings + Reference (3 images)

- [ ] `images/core/how-it-works-naming.png` - Diagram comparing token path structure vs Figma variable naming convention side-by-side. Diagram/illustration, not a plugin screenshot.
  - Source: `src/pages/core/how-it-works.mdx:41`
- [ ] `images/deeper/mode-bindings-panel.png` - Mode bindings panel showing a variable mapped to different tokens per mode (Light and Dark)
  - Source: `src/pages/deeper/mode-bindings.mdx:20`
- [ ] `images/reference/type-badges.png` - TypeBadge examples in the mapping panel showing all four types. Ratio is 4:1, so capture a wide strip.
  - Source: `src/pages/reference.mdx:106`

---

## Batch 8 - Troubleshooting (6 images)

All error / empty states. You may want a dedicated test repo to force these.

- [ ] `images/troubleshooting/01-connection-error.png` - Connection error state in the setup panel with error message visible
  - Source: `src/pages/troubleshooting.mdx:21`
- [ ] `images/troubleshooting/02-empty-files.png` - Empty file browser state with empty-state message
  - Source: `src/pages/troubleshooting.mdx:62`
- [ ] `images/troubleshooting/03-parse-error.png` - Parsing error panel showing affected file name and error description
  - Source: `src/pages/troubleshooting.mdx:86`
- [ ] `images/troubleshooting/04-diff-suspicious.png` - Diff panel with a suspicious row highlighted, token source value annotated/circled
  - Source: `src/pages/troubleshooting.mdx:108`
- [ ] `images/troubleshooting/05-sync-confirmation.png` - Sync modal after apply, showing confirmation of changes written to Figma
  - Source: `src/pages/troubleshooting.mdx:136`
- [ ] `images/troubleshooting/06-reset-panel.png` - Settings / reset panel showing mapping export and clear storage options
  - Source: `src/pages/troubleshooting.mdx:160`

---

## Batch 9 - Videos (5 videos)

Keep them short - target 1-3 minutes each. No audio needed.

- [ ] `videos/full-workflow.mp4` - Complete TokenNexus workflow: repo connection → first sync (~6 min target in the doc, but shorter is fine)
  - Source: `src/pages/overview/see-it-in-action.mdx:17`
- [ ] `videos/github-connect.mp4` - GitHub connection and PAT setup (~2 min)
  - Source: `src/pages/overview/see-it-in-action.mdx:24`
- [ ] `videos/mapping.mp4` - Mapping variables using auto-match and manual review (~3 min)
  - Source: `src/pages/overview/see-it-in-action.mdx:33`
- [ ] `videos/sync.mp4` - Full sync walkthrough, diff review to applied changes
  - Source: `src/pages/overview/see-it-in-action.mdx:42`
- [ ] `videos/homepage-sync-walkthrough.mp4` - Homepage video: sync flow from token change in GitHub to updated Figma variable (the homepage can reuse one of the above - your call)
  - Source: `src/pages/index.astro:103`

---

## How to hand a batch back to me

Just say: **"Batch 3 is in"** (or whichever). I'll verify the files are in place, wire them up in the MDX, and confirm what's live.

If any filename changed or you captured extras, list them in the message.
