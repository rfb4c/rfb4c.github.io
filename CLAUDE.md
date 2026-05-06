# Personal Website — Ash Feng

## What this is

A personal academic website for Ash Feng, built with Astro + Tailwind CSS. Primary purpose: PhD applications (套磁), presenting research background to potential supervisors. Secondary: a blog for personal writing.

## Owner profile

- Name: Rui Feng (冯睿), English name: **Ash Feng** (display name used throughout the site)
- Current location: Nagoya, Japan
- Background: Communication researcher → Journalist → Full-stack engineer
- Current role: IT Consultant & AI Solutions Engineer at Accenture Japan
- Research direction: Perceptual polarization, media design, HCI, computational communication
- Applying to: CSS/HCI PhD programs (likely US/Europe)
- Email: hyoueicn@gmail.com
- GitHub: https://github.com/rfb4c

## Tech stack

- **Framework**: Astro 4.x (static output)
- **Styling**: Tailwind CSS 3 + @tailwindcss/typography
- **Deployment**: GitHub Pages via GitHub Actions (`.github/workflows/deploy.yml`)
- **Node**: v20.10.0 (Astro 4 required; Astro 5/6 requires Node 22)
- **Package manager**: npm

## Project location

`C:\docs\Ash-s-Private-Plot\` — this IS the project root (astro.config.mjs is here).

Note: `C:\docs\personal-site\` also exists but is a leftover partial copy — ignore it.

## Design decisions

- **Aesthetic**: Diffuse light (弥散光) blobs as decorative elements, heavy whitespace, Inter font
- **Hero blobs**: Two blobs, right side only, diagonal (rose-pink `#D94070` upper-right + jade green `#2EA875` lower, overlapping). Anchored in Hero section, overflow into About section below.
- **Colors**: Violet `#7C3AED` (accent), Orange `#F97316`, Cyan `#06B6D4`; dark mode bg `#0A0A0A`
- **Dark mode**: Toggled via `dark` class on `<html>`, stored in localStorage, anti-FOUC inline script
- **No headshot photo**: Deliberate choice to avoid implicit bias in Western PhD applications. The gradient circle avatar is intentional design, not a placeholder.
- **Nav links**: Journalism → `/writing`, Blog → `/blog`, CV → `#` (placeholder)

## Page structure

```
/                   Homepage: bio, education, experience, projects, blog preview, journalism preview
/writing            Journalism page: 3 Featured (editorial layout) + 4 collapsible series
/blog               Blog post list
/blog/[slug]        Individual blog post (Markdown via content collections)
```

## Key files

- `src/pages/index.astro` — homepage (most content lives here)
- `src/pages/writing/index.astro` — journalism page
- `src/data/writing.ts` — all journalism data (featuredWorks + writingSeries)
- `src/content/blog/` — Markdown blog posts
- `src/content/config.ts` — blog collection schema
- `src/layouts/BaseLayout.astro` — HTML shell, dark mode, nav, footer
- `src/components/Nav.astro` — sticky nav with theme toggle + mobile hamburger
- `public/images/` — cover images for Featured journalism cards

## Homepage sections (in order)

1. **Hero**: gradient avatar, name (`Ash Feng`), tagline (`IT Consultant · AI Engineer · Former Journalist`), location, research interest tags
2. **About**: 2-paragraph bio + education (M.A. Kansai Univ. Japan / B.A. Shanghai Polytechnic)
3. **Experience** (timeline):
   - Accenture Japan — Consultant & AI Solutions Engineer, Nagoya, Aug 2025–Present
     - Project 1: Major energy group (development lead, LLM+MCP pipeline)
     - Project 2: Metropolitan government international PR dept (development member, AI agent for multilingual PR record generation — research-adjacent)
   - Neutral Co., Ltd. — System Engineer, Nagoya, Oct 2023–Jul 2025 (vehicle design systems)
   - The Cover (封面新闻) — Journalist, Beijing, Jul–Nov 2022
   - The Paper (澎湃新闻) — Intern Journalist, Shanghai, 2021–2022
4. **Projects**: Lichtung 林地空间 (feed simulator, lichtung-three.vercel.app) + r-selected (not deployed)
5. **Blog preview**: latest 2 posts, link to /blog
6. **Journalism preview**: 3 Featured works in editorial layout, link to /writing

## Journalism page (`/writing`)

**Section name**: "Journalism" (nav label, page h1, homepage section heading — all updated)

**Featured (editorial 3-row stacked layout)**:
1. **Top** — 《新冠康复者遭职场歧视》— Investigation, `aspect-[2/1]`, left-gradient overlay, text left-anchored. The Cover, 2022. Prompted State Council policy response.
2. **Middle** — 《浦东上南九村雨夜中的核酸检测一瞥》— Photography, `aspect-[16/9]`, wide landscape, bottom gradient. The Paper, 2022.
3. **Bottom** — 《疫情下的在日留学日记》— Documentary, `aspect-[2/1]`, black background with cinematic letterbox bars (image inset 11% top/bottom), centered play button. The Paper (澎湃新闻), 2021. Note: original on The Paper (deleted); currently linked via Phoenix TV/ifeng repost. `isVideo: true`.

**Series (collapsible, `<details>` element)**:
1. Photography — The Paper, 2021–2023, 10 pieces
2. Multimedia & VR — The Paper, 2021–2022, 5 pieces
3. Propaganda — The Paper + The Cover, 2021–2022, badge: 中国新闻奖 (大国工程 series + 曹杨新村 建党百年)
4. Science & Technology — The Cover, 2022, 4 pieces

## Pending items

- [ ] Replace gradient avatar with real photo (when ready — currently intentionally omitted)
- [ ] Fill in CV link in nav
- [ ] Update `site` in `astro.config.mjs` with real GitHub Pages URL
- [ ] Add GitHub repo links to r-selected project card
- [ ] 乍浦路桥 article (www.thepaper.cn/newsDetail_forward_18440310) is noted as personally important — currently in Photography series
- [ ] Documentary video: no Bilibili version; currently links to ifeng repost. Consider self-hosting if video file is available (yt-dlp + GitHub Releases + `<video>` tag).

## Commands

```bash
npm run dev      # local dev server at http://localhost:4321
npm run build    # static build to ./dist
npm run preview  # preview built site
```
