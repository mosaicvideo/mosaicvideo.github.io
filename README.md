# mosaicvideo.github.io

Showcase site for [Mosaic](https://github.com/mosaicvideo/mosaic) — a cross-platform
desktop app and CLI for generating video contact sheets, screenshots, animated preview
reels and animated contact sheets.

Live at **<https://mosaicvideo.github.io/>**.

## Layout

| Path | What it is |
|---|---|
| `index.html` | Landing page — download, sample outputs, features, CLI install |
| `guide.html` | Manual and FAQ |
| `cli.html` | `mosaic-cli` reference |
| `install.sh` / `install.ps1` | One-liner installers for `mosaic-cli` |
| `assets/` | `site.css` (shared by every page), JS, Inter font, screenshots, OG image |
| `robots.txt` / `sitemap.xml` | Search-engine discovery |

No build step. Preview locally with:

```sh
python3 -m http.server 8000
```

## Deployment

GitHub Pages serves `main` directly. Pushing to `main` publishes.

## Versions

Version strings in the HTML (`id="nav-version"` and the JSON-LD
`softwareVersion`) are **fallbacks** for when `assets/download.js` cannot reach the
GitHub Releases API — offline, rate-limited, or JS disabled. Normally the page shows the
real latest release, fetched at runtime. They do not need bumping per release.
