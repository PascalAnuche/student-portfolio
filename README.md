# Student Portfolio & Academic Management Website

A five-page responsive website built for COS 106 — Introduction to Web Technologies, combining a personal academic portfolio with a working academic planner and validated contact form. Built with plain HTML, CSS, and JavaScript, no frameworks, no build tools.

## Pages

- `index.html` — Homepage
- `about.html` — About Me
- `projects.html` — Projects
- `planner.html` — Academic Planner (add/complete/delete tasks, persisted via localStorage)
- `contact.html` — Contact form with client-side validation

## Running locally

No build step required, just open `index.html` in a browser, or serve the folder locally for a cleaner experience:

```
npx serve .
```

or open the folder in VS Code with the Live Server extension.


## Deployment

- **Live site:** https://pascalanuche.github.io/student-portfolio/ *(goes live once GitHub Pages is enabled — see below)*
- **Repository:** https://github.com/PascalAnuche/student-portfolio

Recommended host: GitHub Pages (free, simplest for a static site like this) — enable it under repo Settings → Pages, pointing to the `main` branch root.

## Tech

HTML5, CSS3 (Flexbox + Grid, custom properties), vanilla JavaScript (DOM manipulation, event handling, localStorage, form validation). Fonts: Lora (headings) and Inter (body), loaded via Google Fonts.
