# Printfolio

A portfolio generator for developers. Fill in your details, pick a template, and download a clean HTML file you can host anywhere.

No sign-ups, no databases, no backend. Everything runs in the browser.

**Live site:** [printfolio-gamma.vercel.app](https://printfolio-gamma.vercel.app)

---

## What it does

Most developers need a portfolio but don't want to spend days designing one from scratch. Printfolio lets you type in your info — name, skills, projects, experience — and instantly preview it across different layouts. When you're happy with it, export it as a single HTML file and throw it on any hosting platform.

Your data auto-saves to local storage, so you won't lose progress if you close the tab.

## Templates

There are three templates right now:

- **Minimalist** — Clean typography, lots of whitespace, simple borders. Good if you want something that stays out of the way.
- **Creative** — Colorful cards, thick borders, badge accents. More personality.
- **Professional** — Split layout with a sidebar for personal info and a main section for experience/education. Classic resume feel.

You can switch between them instantly in the builder.

## Running locally

You'll need Node.js (v18+).

```bash
git clone https://github.com/aaryan303/Printfolio.git
cd Printfolio
npm install
npm run dev
```

Opens at `http://localhost:5173`.

## How the export works

The "Export HTML" button generates a fully self-contained HTML file with all styles inlined. No external dependencies, no JavaScript required in the output — just a static page you can open in any browser or deploy to GitHub Pages, Netlify, Vercel, whatever.

There's also JSON export/import if you want to save your data and come back to edit later.

## Project structure

```
src/
  components/
    templates/          # MinimalTemplate, CreativeTemplate, ProfessionalTemplate
    PortfolioEditor.jsx # The form where you enter your details
    PortfolioPreview.jsx
    HeroSection.jsx
    Navbar.jsx
  pages/
    LandingPage.jsx     # Marketing page
    BuilderPage.jsx     # Editor + preview side by side
  data/
    defaultData.js      # Sample data that loads on first visit
  utils/
    export.js           # HTML and JSON export logic
```

## Built with

- React 19
- Vite 8
- Tailwind CSS 4
- Framer Motion (animations)
- Lucide React (icons)

## Overview 
<img width="1857" height="941" alt="image" src="https://github.com/user-attachments/assets/f1543b51-15f8-44d4-b3a4-b934724c2076" />
<img width="1858" height="941" alt="image" src="https://github.com/user-attachments/assets/1b978f6d-fd8a-4e70-81cf-6df278a34022" />
<img width="1857" height="942" alt="image" src="https://github.com/user-attachments/assets/a0dc4ef2-3e7c-4f9c-a663-19a7aac98eff" />
<img width="1852" height="992" alt="image" src="https://github.com/user-attachments/assets/4e99d401-7486-4bb5-9a80-a79e8f3cb010" />

## Author

Aryan — [LinkedIn](https://www.linkedin.com/in/aryan0782)

## License

USE IT HOW EVER YOU WANT :D
