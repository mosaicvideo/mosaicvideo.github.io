# mosaicvideo.github.io

Showcase site for [Mosaic](https://github.com/mosaicvideo/mosaic) — a cross-platform
desktop app and CLI for generating video contact sheets, screenshots, animated preview
reels and animated contact sheets.

Live at **<https://mosaicvideo.github.io/>**.

## Layout

| Path | What it is |
|---|---|
| `index.html` | Landing page — hero, downloads, output types, CLI demo |
| `guide.html` | Manual and FAQ |
| `cli.html` | `mosaic-cli` reference |
| `install.sh` / `install.ps1` | One-liner installers for `mosaic-cli` |
| `assets/` | CSS, JS, screenshots, OG image |
| `robots.txt` / `sitemap.xml` | Search-engine discovery |

No build step. Preview locally with:

```sh
python3 -m http.server 8000
```

## Deployment

GitHub Pages serves `main` directly. Pushing to `main` publishes.

## Versions

Version strings in the HTML (`id="nav-version"`, `id="line-version"`, and the JSON-LD
`softwareVersion`) are **fallbacks** for when `assets/download.js` cannot reach the
GitHub Releases API — offline, rate-limited, or JS disabled. Normally the page shows the
real latest release, fetched at runtime. They do not need bumping per release.

## The CLI demo is real

The terminal block on the landing page is actual `mosaic-cli` output, not a mock. If you
change it, re-run the binary and paste what it really prints. Note that paths go to
stdout and the run summary to stderr — which is what makes the `| xargs` example valid.
