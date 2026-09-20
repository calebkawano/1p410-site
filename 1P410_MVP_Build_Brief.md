# 1P410 Technologies — MVP Website Build Brief
*Hand this directly to Claude/Codex as the build prompt.*

## Project Summary
Build a single-page, static marketing site skeleton for **1P410 Technologies**, an independent software studio. This is an MVP scaffold — visual structure and layout fidelity matter far more than working links, forms, or backend logic. Placeholder content and dead links are fine. Priority: nail the *feel* first.

## Brand & Naming
- Studio name: **1P410 Technologies** (root domains already owned: `1p410.net`, `1p410technologies.net`)
- Name origin: **1 Peter 4:10 only** ("As each has received a gift, use it to serve one another") — this is the single anchor for the brand's philosophy. Keep it as one clean, quiet source of meaning behind the name.
- The verse should **not** appear loudly on the main page. It appears exactly once, in the footer only (see Section 6). No other scripture, no elaboration elsewhere.
- Tone: quiet conviction, high craft, zero religious iconography. No crosses, no scripture on the hero. The philosophy: "a good craftsman witnesses through the quality of the work, not symbols on it."
- Portfolio apps to feature: **Bread** (Bible tracking app) and **Variance** (quant finance interview prep app).

## Visual Direction
Primary structural references: **Teenage Engineering** and **Nothing** (Carl Pei's brand) — precision, exposed structure, engineered feel.

### Color Palette (FINAL)
- Base dark background: `#0A0A0A` (near-black)
- Base light text: `#F5F5F5` (off-white)
- Secondary/muted text: `#8A8A8A` (mid gray, for mono labels/captions)
- **Accent — Neon Pink: `#FF2ED1`** (single signature accent color, used exactly like Nothing's red LED accent — sparse, flat, unmistakable)
- Optional secondary support tone (rarely used, low-opacity only): `#1A1A1A` for card backgrounds/hover states

Rules for the accent:
1. Apply flat and saturated — no gradients, no soft glows, no drop shadows on the pink itself.
2. Use it in exactly a handful of spots: status dot in nav, hover state on portfolio card borders, the underline on the active nav link, one small "live" indicator, and the cursor/focus state on the (fake) contact form.
3. Never use pink for body text or large fill areas — it's a highlight color, not a background color.
4. Everywhere else stays strict black/white/gray. The contrast between austere black-and-white and one shot of neon pink is the entire visual strategy — don't dilute it with a second accent color.

### Core Aesthetic Principles
1. **Radical negative space** — generous margins, very few elements per viewport, nothing decorative.
2. **Transparency / honesty as a motif** — visually "expose" structure rather than hide it: thin 1px hairline borders (`#2A2A2A`), visible grid lines, exposed component labels, monospace tags for metadata.
3. **Typography-led design** — one geometric sans (e.g. system UI / Inter) for headlines, one monospace (e.g. JetBrains Mono / IBM Plex Mono) for labels, tags, and metadata. Large type scale contrast (huge hero headline vs. tiny mono captions).
4. **Grid rigor** — everything snapped to a strict 12-column grid with consistent gutters; alignment should feel engineered, not designed loosely.
5. **Subtle motion only** — if animating, minimal fade/slide-in on scroll. No flashy effects. Exception: the neon pink accent can have a very brief pulse/blink animation (like a hardware status LED) — this is the one place motion is encouraged, since it reinforces the "engineered object" feel.

## Tech Stack (recommend to Claude/Codex)
- **Next.js (App Router) + TypeScript + Tailwind CSS**.
- No backend, no CMS, no database. All content hardcoded in components/constants.
- Deployable as static export; fake `onSubmit` handlers are fine (console.log or disabled state).
- Use `next/font` for type loading. Framer Motion only if trivial (mainly for the pink LED-pulse effect); otherwise skip animation for MVP.

## Page Structure (single page, section-based scaffold)

### 1. Nav (fixed, minimal)
- Left: wordmark `1P410` (monospace, small, tracked out: `1 P 4 1 0`)
- A tiny neon pink status dot next to the wordmark (like a power LED) — subtle pulse animation.
- Right: 3 links max — `Portfolio`, `Manifesto`, `Contact` — anchor links or dead stubs. Active/hovered link gets a neon pink underline.
- Transparent background, becomes solid black (`#0A0A0A`) on scroll.

### 2. Hero
- Full viewport height.
- Massive headline, 2 lines max:
  > Crafted tools
  > for focused lives.
- One small subhead below, mono font, muted gray:
  > An independent studio building software for stewardship, clarity, and craft.
- Optional single ghost-outline button labeled `View Portfolio`, border turns neon pink on hover.

### 3. Portfolio Strip
- Section label (mono, uppercase, tracked, muted gray): `PORTFOLIO / 02`
- Two cards side by side (stack on mobile):
  - **Bread** — tagline: "Track your walk through Scripture." Placeholder icon block (solid color/gradient div).
  - **Variance** — tagline: "Quantitative finance interview prep." Same placeholder treatment.
  - Each card: app name (large), one-line tagline, small mono tag row (e.g. `iOS` `SwiftUI` `Live`), thin hairline border (`#2A2A2A`) that **turns neon pink on hover**. No real link needed — `#` or disabled `<a>`.

### 4. Principles (Manifesto teaser)
- Section label: `PRINCIPLES / 03`
- Three short principle blocks in a row (stack on mobile), numbered `01 02 03` in mono, with the numeral itself rendered in neon pink:
  1. **Stewardship** — "We build tools that respect your time and attention."
  2. **Clarity** — "Good software should feel calm, honest, and easy to trust."
  3. **Craft** — "Details are the whole point — latency, type, copy, behavior."
- No scripture text here. Optional tiny footnote link "Read our manifesto →" pointing to a stub `/manifesto` route (blank "Coming soon" page).

### 5. Studio / Founder blurb
- Section label: `STUDIO / 04`
- Short placeholder paragraph (2–3 sentences), third person, understated tone:
  > 1P410 is a small studio building focused software. We're currently a team of a few builders and interns working across iOS and quantitative tooling.

### 6. Footer
- Minimal: `© 2026 1P410 Technologies` (mono, small, low-opacity gray) + 2–3 dead social/contact links.
- The **only** place the name's origin is spelled out, tiny mono line, low-opacity:
  > 1P410 — from 1 Peter 4:10
- No other verse, no elaboration.

## Copy Style Rules for Claude/Codex
- Sentence case, minimal punctuation, no exclamation marks, no marketing hyperbole ("revolutionary," "game-changing," etc. are banned).
- Prefer short declarative lines over paragraphs.
- Mono font strictly for labels/tags/metadata, never for body copy.
- Reference 1 Peter 4:10 in exactly one place (footer). Do not add other scripture anywhere.
- Neon pink is a highlight color only — never used for large text blocks or backgrounds.

## What NOT to build for MVP
- No working contact form backend.
- No real app store links (use `#` placeholders).
- No CMS, no real database, no auth.
- No blog.
- No image assets required — use solid-color/gradient div placeholders wherever an icon or screenshot would normally go.

## Definition of Done for This MVP
- Runs locally with `npm run dev` and renders all sections above in correct order with the described visual language.
- Neon pink accent (`#FF2ED1`) appears only in the specified spots (status dot, hover states, active nav underline, numeral highlights) — not overused.
- Fully responsive down to mobile width.
- No console errors on load.
- Placeholder content is acceptable everywhere except section headlines and labels, which should match the copy above.
