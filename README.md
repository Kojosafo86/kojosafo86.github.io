# DataWize Analytics — Portfolio Site

Static portfolio site for Kojo Safo / DataWize Analytics, built to host and
link the project case studies used in his BI/data analyst job search:

- Reseller Profitability Analysis (Car Boot Lister)
- NHS GP Appointments — DNA & Capacity (Power BI)
- A/B Test — Landing Page Conversion (Python/statistics)
- Spend Ledger — Chat With Your Spend Data (DuckDB + LLM text-to-SQL)

Plain HTML/CSS/JS, no build step, no dependencies. Meant to be published via
GitHub Pages.

## Before publishing

- [ ] Set your real LinkedIn URL — search `index.html` for
      `data-linkedin-placeholder` (two spots) and replace `href="#linkedin-placeholder"`
      with your profile URL.
- [ ] Optional: add a CV PDF under `assets/` and link it from the hero section.

## Publish to GitHub Pages

```bash
git init
git add -A
git commit -m "Initial DataWize Analytics portfolio site"
git branch -M main
git remote add origin https://github.com/kojosafo86/kojosafo86.github.io.git
git push -u origin main
```

Create the repo on GitHub first, named exactly `kojosafo86.github.io` (a
GitHub "user site" repo) — pushing to it publishes automatically at
**https://kojosafo86.github.io**, no Pages configuration needed.

If you'd rather keep it as a project site instead (e.g. under an existing
`kojosafo86.github.io` used for something else), name the repo
`datawize-analytics` instead, then in the repo's Settings → Pages, set
Source to the `main` branch. It'll publish at
`https://kojosafo86.github.io/datawize-analytics/`.

## Local preview

```bash
python3 -m http.server 8000
# open http://localhost:8000
```
