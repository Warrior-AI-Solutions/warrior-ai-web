# warrior-ai-web

> Stakeholder-facing web presence for Warrior AI Solutions. QA strategy, architecture, and engineering overview — branded for Anna, Weston, and Garrett.

**Stack:** VitePress + Bun + Cloudflare Pages

---

## Quick Start

```bash
bun install
bun run dev       # dev server at http://localhost:5173
bun run build     # production build to docs/.vitepress/dist
bun run preview   # preview production build
```

## Deploy

Pushes to `main` auto-deploy via GitHub Actions → Cloudflare Pages.

**Required Secrets (GitHub → Settings → Secrets):**
- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`

## Structure

```
docs/
├── .vitepress/
│   ├── config.mts          # VitePress config
│   └── theme/
│       ├── index.ts         # Theme entry
│       └── custom.css       # Full Warrior brand CSS
├── index.md                 # Landing page (QA overview)
└── public/
    └── warrior-shield.svg   # (add shield SVG here)
```

## Brand

- **Colors:** Navy (#0A1628 / #1B2A4A) + Gold (#C8A84E) — dark mode first
- **Fonts:** Inter · JetBrains Mono · Playfair Display
- **Tagline:** *Where Truth Meets Time*

---

*Built by Steffen + Jeremy (PAI) | February 2026*
