# ADITYA — THE SERIES

A cinematic, streaming-inspired portfolio for **Aditya Raj**: Full Stack Developer (Next.js) and B.Tech Computer Science student.
Every section is an episode, every project is an Original, and the whole site plays like a series.

> A personal portfolio with a fictional streaming-platform look. It is not affiliated with Netflix or any other streaming service and uses none of their logos.

## Run it locally

Requires **Node.js 18+**.

```bash
npm install
npm run dev
```

Open http://localhost:5173.

Production build:

```bash
npm run build
npm run preview
```

The static site is written to `dist/` and can be deployed as-is to Vercel, Netlify, GitHub Pages or any static host.

## Updating the content

**All content lives in one file: [`src/data/portfolio.ts`](src/data/portfolio.ts).** It is generated from Aditya's resume, and every component reads from it.

| To change… | Edit |
| --- | --- |
| Name, intro, email, LinkedIn, GitHub | `profile` |
| Projects (Collivra, SkillPulse, C++ Console Player) | `projects` |
| Achievements / credentials | `achievements`, `certifications` |
| Skills and interactive evidence cross-references | `skillCategories`, `skillEvidence` |
| Seasons and episodes (My Journey) | `seasons` |
| Top 10 row | `topPicks` |
| ▶ Play Intro cinematic highlight reel | `introSlides` |
| Profile order (Aditya / Recruiter / Developer / Hackathon) | `viewerProfiles` |
| Opening studio card text | `profile.originalLabel` |

**Resume:**
Regenerate or customize with:
```bash
npm run pdf
```
Produces `public/assets/Aditya_Raj_Resume.pdf`.

**Photos:**
Build responsive WebP portraits and social share image with:
```bash
npm run images
```

## What's inside

```
src/
  data/portfolio.ts        ← single source of truth (from Aditya's resume)
  App.tsx                  ← stages: opening → profile select → home; overlays
  components/
    OpeningSequence        ← studio card → ADITYA → THE SERIES → portrait → ▶ PLAY
    ProfileSelector        ← "Who's watching?" (Aditya / Recruiter / Developer / Hackathon)
    Navbar                 ← dynamic section navigation + profile switcher
    Hero                   ← billboard hero, dynamic parallax, floating tech chips
    ContinueWatching       ← quick access cards to resume, projects, and skills
    Originals              ← horizontal pinned project carousels + project modals
    TopPicks               ← Top 10 numbered series picks
    Skills                 ← interactive skill universe with live project evidence popups
    Seasons                ← episode-based career journey
    Achievements           ← golden laurel cards + credential rail
    ResumeViewer           ← interactive resume screenplay sheet + PDF viewer
    FinalCTA               ← "TO BE CONTINUED..." + contact actions
```
