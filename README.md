# TokenNexus Docs

Documentation site for [TokenNexus](https://www.figma.com/community) - the Figma plugin that connects GitHub-hosted design tokens to Figma variables.

**Live site:** [ojanti.github.io/token-nexus-docs](https://ojanti.github.io/token-nexus-docs)

---

## Stack

- [Astro 4](https://astro.build) - static site generator
- [MDX](https://mdxjs.com) - markdown with components
- Deployed via GitHub Actions to GitHub Pages

## Local development

```bash
npm install
npm run dev
```

Site runs at `http://localhost:4321/token-nexus-docs`

## Build

```bash
npm run build
```

Output goes to `dist/`. Deployed automatically on push to `main`.

## Structure

```text
src/
  components/   Astro UI components (Callout, CodeBlock, BeamDiagram, etc.)
  layouts/      DocsLayout - the three-column shell
  pages/        One MDX file per docs page
  styles/       global.css - all design tokens and layout
```

## Contributing

Content lives in `src/pages/`. Each file is MDX - markdown with optional component imports at the top.

To add a page: create the `.mdx` file, add it to the nav in `src/components/Sidebar.astro`.

---

Built by [Itebujohn](https://www.linkedin.com/in/itebujohn/)
