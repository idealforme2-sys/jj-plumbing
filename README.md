# JJ Plumbing — Landing Page

A premium, high-interactivity single-page site for JJ Plumbing, built with Vite, React 19, TypeScript, Tailwind CSS v4, Lucide Icons, and Motion.

## Setup

```bash
npm install
npm run dev
```

Open the printed local URL (usually http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

## Structure

- `src/index.css` — theme tokens (colors, fonts) and utility classes
- `src/components/` — all page sections:
  - `CinematicEntrance` — 3.5s loading intro
  - `Navigation` — sticky glass header
  - `Hero` — asymmetric hero with marquee
  - `SignatureServices` — 4 service cards
  - `HowItWorks` — 3-step diagnostics cycle
  - `QuoteTool` — interactive "Valve Evaluator"
  - `Reviews` — testimonials
  - `ServiceArea` — coverage + zip check
  - `FAQ` — accordion
  - `FinalCTA` — closing conversion section
  - `Footer`
  - `MobileStickyCTA` — fixed mobile call/book bar
