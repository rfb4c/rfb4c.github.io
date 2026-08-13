# Personal Website — Ash Feng

## What this is

A personal academic website for Ash Feng, built with Astro + Tailwind CSS. Its primary job is to be
the single link in PhD application outreach emails: a supervisor clicks it and should understand,
within about ninety seconds, what the research question is, what has actually been built, and why a
reply is worth their time.

## Owner profile

- Name: Rui Feng (冯锐), English name: **Ash Feng** (display name used throughout the site)
- Current location: Nagoya, Japan
- Background: Communication research → journalism → software engineering
- Research direction: perceived polarization, media design, HCI, computational social science
- Applying to: CSS/HCI PhD programs, entering Fall 2027
- GitHub: https://github.com/rfb4c
- Repo: `rfb4c/rfb4c.github.io` (public), served at `ashfeng.com`

## Tech stack

- **Framework**: Astro 4.x (static output), `site: https://ashfeng.com`
- **Styling**: Tailwind CSS 3 + @tailwindcss/typography
- **Deployment**: GitHub Pages via GitHub Actions (`.github/workflows/deploy.yml`), custom domain via `public/CNAME`
- **Node**: v20.10.0 (Astro 4 requires it; Astro 5/6 needs Node 22)
- **Package manager**: npm

## Project location

`C:\docs\Ash-s-Private-Plot\` — this IS the project root (astro.config.mjs is here).

Note: `C:\docs\personal-site\` also exists but is a leftover partial copy — ignore it.

## Page structure

```
/            Home      About · Current research · How I got here · Journalism
/research    Research  Mechanism · Method · Three pathways · What comes next · How I got here
/demo        Demo      Walkthrough video, scope note, chapters, live-demo entry
/cv          CV        Full CV rendered as a page, plus PDF download
/writing     Journalism 3 featured works + 4 collapsible series
/blog        Blog      Still routed and buildable, but not linked from the nav
/blog/[slug] Individual blog post (Markdown via content collections)
```

## Key files

- `src/pages/index.astro` — homepage
- `src/pages/research.astro` — research narrative
- `src/pages/demo.astro` — walkthrough + live-demo landing page
- `src/pages/cv.astro` — CV as a page
- `src/pages/writing/index.astro` — journalism page
- `src/data/writing.ts` — journalism data (featuredWorks + writingSeries)
- `src/layouts/BaseLayout.astro` — HTML shell, dark mode, nav, footer; takes an optional `noindex` prop
- `src/components/Nav.astro` — sticky nav with theme toggle + mobile hamburger
- `public/cv/Ash_Feng_CV.pdf` — generated, see below
- `public/robots.txt`
- `public/images/` — journalism covers, plus `lichtung-preview.webp` and `rselected-expanded.webp`

## Design decisions

- **Aesthetic**: diffuse light (弥散光) blobs as decorative elements, heavy whitespace, Inter font
- **Column**: everything sits in `max-w-2xl mx-auto px-6`
- **Section labels**: `text-[10px] font-semibold uppercase tracking-[0.15em]` in gray
- **Colors**: violet `#7C3AED` (accent), orange `#F97316`, cyan `#06B6D4`, jade `#2EA875`; dark mode bg `#0A0A0A`
- **Dark mode**: `dark` class on `<html>`, stored in localStorage, anti-FOUC inline script
- **Built vs proposed**: a filled jade dot `●` means built; a hollow gray ring `○` means proposed.
  This runs through the whole site — the live-system card, the two test arenas, the four-step
  method chain, the research agenda. Keep it consistent; it is how a reader tells at a glance what
  exists from what is planned.
- **One solid button per page**: the black/white filled button is reserved for the primary action
  (open the live demo, download the CV). Everything else is a text link.
- **No headshot photo**: deliberate, to avoid implicit bias in application review. Not a placeholder.
- **Nav**: Research · Demo · CV · Journalism

## Content conventions

These matter more than the code. The site is one of several documents (SOP, outreach emails, the
recorded walkthrough) that a reader may see together, so wording is deliberately aligned.

**Three sentences are fixed and must not be reworded.** They appear verbatim in the SOP and in the
recorded walkthrough narration:

1. Research question — `My research question is: can design interventions in the media environment reduce perceived polarization?`
2. Definition — `Perceived polarization is the systematic misperception of political opinion distributions: people overestimate how extreme the out-group is — and misread what their own group actually believes.`
3. Method — `I follow a mechanism-to-design translation approach: from the literature, I identify the mechanism driving perceived polarization, then derive a system-level intervention targeting that mechanism — whether through algorithmic ranking, information presentation, or the surfacing of identity data.`

Typography may de-emphasise part of a sentence (see the gray lead-in on `/research`), but the words
themselves stay put.

**Project status statement.** Appears on the homepage and on `/demo`, identical in both places:

> I built Lichtung to make these interventions experimentally testable. In my PhD, my next step is
> twofold: to test their causal effects in feed environments, and to translate the underlying
> intervention functions into conversational AI as a second test arena.

Rules that follow from it:

- The simulator is **built / implemented**. Nothing has been tested.
- Never write validated, tested, proven, or demonstrated effectiveness of the interventions.
  `/demo` carries an explicit scope note saying so; keep it.
- Causal testing is **proposed**, for the PhD.
- Feeds and conversational AI are **two test arenas** of one mechanism. Do not frame either as a
  pivot away from the other — readers come from both communities.
- Use descriptive phrasing (`mechanism-to-design`, `perception-targeted intervention design`).
  Do not coin an acronym or a framework name.

**Terminology**: `perceived polarization`, not "perceptual polarization". Matches the CV and the
literature.

**Target**: interventions act on perception, not on the factual accuracy of content. This is what
separates the work from fact-checking, and it is stated on both the homepage and `/research`.

## CV: two artifacts, one source

- `docs/CV_RuiFeng.html` is the **source of truth**. It is a standalone academic-typography
  document (Times, LaTeX-like metrics) meant to print well.
- `public/cv/Ash_Feng_CV.pdf` is generated from it:

  ```bash
  chrome --headless --disable-gpu --no-pdf-header-footer \
    --print-to-pdf="public/cv/Ash_Feng_CV.pdf" \
    "file:///C:/docs/Ash-s-Private-Plot/docs/CV_RuiFeng.html"
  ```

- `src/pages/cv.astro` is a **hand-maintained re-typesetting** of the same content in the site's
  own styles, so the CV is readable on a phone without pinch-zooming.

**When the CV changes, all three must be updated.** Edit the HTML, regenerate the PDF, then port the
change into `cv.astro`.

## Search indexing

- `/cv` renders `<meta name="robots" content="noindex, follow">` via the `noindex` prop on
  `BaseLayout`. `public/robots.txt` disallows the PDF.
- The disallow is scoped to the exact file path, **not** `/cv/`. The built CV page lives at `/cv/`,
  so a directory-wide disallow would stop crawlers from fetching the page at all — and a page that
  is never fetched can never be seen to carry a `noindex` tag. Keep the two mechanisms on separate
  targets.
- Everything else is indexed normally.

## Gotcha: restart the dev server after adding a page

Tailwind's content scan is set up at server start. A **newly created** `.astro` file is not picked
up, so any utility class used only in that file silently produces no CSS — the page renders with no
padding, no spacing, nothing. Editing an existing file is fine; creating one is not.

```bash
# after adding a page
# stop the dev server, then
npm run dev
```

## Journalism page (`/writing`)

**Featured (editorial 3-row stacked layout)**:

1. **Top** — 《新冠康复者遭职场歧视》— Investigation, `aspect-[2/1]`, left-gradient overlay. The Cover, 2022.
2. **Middle** — 《浦东上南九村雨夜中的核酸检测一瞥》— Photography, `aspect-[16/9]`, bottom gradient. The Paper, 2022.
3. **Bottom** — 《疫情下的在日留学日记》— Documentary, `aspect-[2/1]`, black background with letterbox bars (image inset 11% top/bottom), centered play button. The Paper, 2021. Original deleted; linked via an ifeng repost. `isVideo: true`.

The homepage reuses these three in the same layout.

**Series (collapsible `<details>`)**: Photography · Multimedia & VR · Propaganda (badge: 中国新闻奖) · Science & Technology

## Screenshots

- `lichtung-preview.webp` — the live simulator, captured at a 1080px-wide viewport so it stays
  legible when scaled into the card. Recapture from `lichtung.ashfeng.com` if the UI changes.
- `rselected-expanded.webp` — R-Selected with one event phase expanded. The service is retired; the
  image was produced by running its original frontend build against its original database dump
  (both in the EC2 backup) with a stand-in for the Java backend. The caption on `/research` says so.
- Convert screenshots to WebP before committing (`PIL`, quality 86) — the PNGs are 3–4× larger.

## Pending items

- [ ] Footer email (`hyoueicn@gmail.com`) and CV email (`ash.rui.feng@gmail.com`) differ — pick one
- [ ] Chapter timestamps on `/demo` are hardcoded; update them if the video is ever re-cut
- [ ] Intercoder reliability figures are still open in the thesis, so no κ values appear on the site
- [ ] 乍浦路桥 article (thepaper.cn/newsDetail_forward_18440310) noted as personally important — currently in the Photography series
- [ ] Documentary video: no Bilibili version; links to an ifeng repost. Consider self-hosting (yt-dlp + GitHub Releases + `<video>`)
- [ ] Replace the gradient avatar with a photo, if that decision ever changes

## Commands

```bash
npm run dev      # local dev server at http://localhost:4321
npm run build    # static build to ./dist
npm run preview  # preview the built site
```
