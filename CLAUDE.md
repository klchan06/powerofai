# Power of AI - Project Rules

## Core Rules
- Always invoke the frontend-design skill before writing any frontend code. Every session, no exceptions.
- This is a Dutch AI consultancy/agency website for **powerofai.nl**
- All user-facing text must be in **Dutch**
- Design must feel **light, modern, and premium** — NOT dark themed. Use white/light backgrounds with colorful accents.

## Brand Identity
- **Company**: Power of AI
- **Tagline**: De kracht van AI voor jouw bedrijf
- **Industry**: AI Consultancy, Automation, Training
- **Tone**: Professional, accessible, innovative, trustworthy
- **Target audience**: Dutch businesses (MKB to enterprise) looking to adopt AI

## Design Direction
- **Light theme** with clean white backgrounds
- Accent colors: vibrant blue/cyan gradients with purple touches
- Inspiration from theautomationgroup.nl and digitalbricks.ai but LIGHTER
- Modern glassmorphism effects, subtle gradients, smooth animations
- No generic AI aesthetics — distinctive and branded
- Professional typography with good hierarchy
- Responsive design (mobile-first)

## Brand Assets
- Check `brand_assets/` folder for logo and brand guidelines
- Always use brand colors and typography from guidelines

## Tech Stack
- Single-page HTML/CSS/JS landing page
- Tailwind CSS via CDN
- Vanilla JS for animations and interactivity
- No frameworks needed — keep it simple and fast

## Screenshot Workflow
- Use Puppeteer to take screenshots of the site during development
- Store screenshots in `temp_screenshots/` folder
- After building initial version, do a 2-pass screenshot review:
  1. Screenshot each section
  2. Compare against design intent
  3. Fix mismatches
  4. Screenshot again to verify
- Delete temporary screenshots when done with a review cycle

## File Structure
```
/
├── CLAUDE.md
├── brand_assets/
│   └── brand_guidelines.md
├── index.html
├── temp_screenshots/
└── package.json
```

## Development
- Always test on localhost before pushing
- Use `npx serve .` or Python http server for local development
- Never push to GitHub unless explicitly told to
