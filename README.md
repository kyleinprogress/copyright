# Copyright Worker

A Cloudflare Worker that serves copyright and license pages for kyleinprogress.com, independent of the main site infrastructure.

## Pages Served

- `/copyright` — Main copyright and image usage terms
- `/copyright/personal-use` — Personal use license for shared photos

## Development

Install dependencies:

```bash
npm install
```

Build and run locally:

```bash
npm run build
npx wrangler dev
```

The local server runs at `http://localhost:8787`.

## Editing Content

Markdown files are in `content/`. After editing, rebuild to see changes:

```bash
npm run build
```

## Deployment

Deploys automatically via GitHub integration when pushing to main.

To deploy manually:

```bash
npm run deploy
```

## Project Structure

```text
├── content/
│   ├── copyright.md        # Main copyright terms
│   └── personal-use.md     # Personal use license
├── scripts/
│   └── build.js            # Compiles markdown to HTML
├── src/
│   ├── index.js            # Worker entry point
│   └── content.js          # Generated HTML (do not edit)
├── styles/
│   └── main.css            # Stylesheet (inlined at build)
└── wrangler.toml           # Cloudflare Worker config
```
