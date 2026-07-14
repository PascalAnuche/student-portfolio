# AGENTS.md

Instructions for any AI coding agent (Claude Code, Cursor, etc.) working in this repository. Read this before touching any file, alongside `PRD.md` and `DESIGN-SYSTEM.md` in the project root.

---

## What this repo is

A static, five-page student portfolio and academic planner site for a COS 106 term project, plain HTML, CSS, and vanilla JavaScript only, no frameworks, no bundlers, no npm dependencies beyond Google Fonts loaded via `<link>`.

## Source of truth

- `PRD.md` — full functional spec, page-by-page requirements, checklists
- `DESIGN-SYSTEM.md` — colours, typography, spacing, component styling, all as CSS custom properties
- `RULES.md` — coding conventions and constraints for this repo

If a request conflicts with these files, follow the files, and flag the conflict rather than silently picking one.

## Boundaries

- Do not introduce a framework (React, Vue, Tailwind, Bootstrap), the brief requires demonstrating raw HTML/CSS/JS proficiency
- Do not add a build step, no webpack, vite, or npm scripts, the site must run by opening `index.html` directly
- Do not hardcode colours or font sizes in HTML or inline styles, everything routes through the CSS custom properties defined in `css/styles.css`
- Do not add third-party JS libraries for the planner or form validation, both must be hand-written vanilla JS per the PRD, this is the core grading criterion
- Do not remove or weaken the semantic HTML requirements (proper `header`/`nav`/`main`/`section`/`footer`, real `<table>`, real `<video>`/`<audio>`, real lists)

## File structure to maintain

```
student-portfolio/
├── index.html
├── about.html
├── projects.html
├── planner.html
├── contact.html
├── css/
│   └── styles.css
├── js/
│   ├── main.js
│   ├── planner.js
│   └── contact-validation.js
├── assets/
│   ├── images/
│   └── media/
├── PRD.md
├── DESIGN-SYSTEM.md
├── RULES.md
├── AGENTS.md
└── README.md
```

Keep JS split by responsibility as shown above, don't collapse everything into one file, and don't split further than this without a good reason.

## Workflow expectations

1. Before generating code, confirm the relevant PRD section and design tokens
2. After building a page, self-check it against the HTML/CSS/JS checklists in `PRD.md` (Sections 6–8)
3. Keep commits small and scoped to one page or one feature (e.g. "Add planner task CRUD", "Style contact form validation states"), not one giant commit
4. Never commit `node_modules`, `.DS_Store`, or editor config files, see `.gitignore`

## Definition of done

A change is done when: it matches the PRD requirement it addresses, it uses only tokens from `DESIGN-SYSTEM.md`, it works down to 375px viewport width with no horizontal scroll, and it doesn't break any other page's shared header/nav/footer.
