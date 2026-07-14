# Build Prompt
## For use with Claude Code or any AI coding assistant

Paste this whole prompt in, alongside `PRD.md` and `DESIGN-SYSTEM.md` in the same folder, and ask the assistant to read both files first.

---

You are building a five-page, fully responsive Student Portfolio & Academic Management website for a COS 106 "Introduction to Web Technologies" term project. Read `PRD.md` and `DESIGN-SYSTEM.md` in this repository before writing any code, they define the full functional spec and the exact colour/typography system to use, do not deviate from either without a strong reason.

**Stack:** Plain HTML5, CSS3, and vanilla JavaScript only, no frameworks, no build tools, no npm dependencies except Google Fonts (Lora + Inter) loaded via `<link>`. This is a static site meant to run by opening `index.html` directly or via GitHub Pages.

**Build the following file structure exactly:**

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
└── README.md
```

**Requirements, in order of priority:**

1. Build a shared header/nav and footer, identical across all five pages, with the nav collapsing into a hamburger menu below 768px (implement the toggle in `main.js`, using a slide-in panel, not a full page reload)
2. Apply the full colour and typography system from `DESIGN-SYSTEM.md` as CSS custom properties in `:root`, do not hardcode hex values anywhere else in the stylesheet
3. Build each page per its section in `PRD.md` — homepage, about, projects, planner, contact — using semantic HTML5 throughout (`header`, `nav`, `main`, `section`, `article`, `footer`)
4. Build the Academic Planner as a fully working task manager in `planner.js`: an array of task objects (`{id, text, completed, dueDate}`), functions to add/toggle/delete tasks, DOM re-rendering from the array on every change, and persistence to `localStorage` so tasks survive a page reload, include an empty-state message and a live "X tasks remaining" counter
5. Build contact form validation in `contact-validation.js`: prevent submission if any field is empty, validate the email against a proper regex pattern, validate the phone field to digits only, and show inline error messages next to each invalid field rather than a single alert, show a success message on valid submit
6. Include one HTML `<table>` (suggested: a courses/grades table on the About page), one `<video>` or `<audio>` element (About page), and real semantic lists for skills/hobbies/timeline content
7. Make the projects grid use CSS Grid, responsive from 3 columns (desktop) to 1 column (mobile), each card with an image, title, description, tech tags, and links
8. Add at least one meaningful CSS transition or animation beyond simple hovers, e.g. a fade/slide when a planner task is added or removed
9. Use placeholder but realistic content throughout (sample student name, sample bio, three sample projects with believable descriptions) so the site looks complete and presentable, not like a template with lorem ipsum

**Code quality expectations:**
- Comment each JS file briefly at the top explaining its responsibility
- Keep CSS organised with clear section comments (Variables, Base, Header/Nav, Homepage, About, Projects, Planner, Contact, Footer, Media Queries)
- No inline `style=""` attributes, no inline `onclick=""` — attach all event listeners in JS
- Validate that every page passes basic HTML validation (no unclosed tags, proper nesting)

**When finished:**
- Confirm every checklist item in Section 6, 7, and 8 of `PRD.md` (HTML/CSS/JS requirements checklists) is met
- Write a short `README.md` at the project root explaining what the site is, how to run it locally, and noting the live/hosted link and GitHub repo link placeholders for the student to fill in
