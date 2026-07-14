# RULES.md

Coding conventions and constraints for the Student Portfolio & Academic Management site. These apply to anyone (human or AI agent) writing code in this repo.

---

## HTML

- Semantic elements only, no `<div>` where a `header`, `nav`, `main`, `section`, `article`, or `footer` is more correct
- One `<h1>` per page, headings must nest in order (no jumping `h1` → `h3`)
- Every `<img>` needs meaningful `alt` text, decorative images use `alt=""`
- Every form input needs an associated `<label>` (via `for`/`id`, not just placeholder text)
- No inline `style=""` attributes, no inline `onclick=""`/`onchange=""` — all styling lives in `styles.css`, all behaviour is attached via `addEventListener` in JS
- Indentation: 2 spaces, consistent across all five pages

## CSS

- All colours, font sizes, spacing values, and border-radii reference CSS custom properties defined in `:root`, never a raw hex code or px value pulled from nowhere
- Mobile-first media queries, base styles target mobile, `min-width` queries layer up to tablet and desktop
- Use Flexbox for one-dimensional layouts (nav, rows of buttons), CSS Grid for two-dimensional layouts (projects grid, skills grid)
- Class naming: lowercase, hyphenated, BEM-ish where nesting matters (`.card`, `.card__title`, `.card--featured`), avoid overly generic names like `.box` or `.wrapper2`
- Group rules by section with a comment header (`/* === Navigation === */`) matching the order listed in `BUILD-PROMPT.md`

## JavaScript

- Vanilla JS only, no jQuery, no external libraries
- `const` by default, `let` only when a variable is genuinely reassigned, never `var`
- One responsibility per function, `addTask()` adds, `renderTasks()` renders, don't merge the two
- Task data lives in a single array of objects, the DOM is always a render of that array, never mutated directly and separately from it
- Wrap all `localStorage` reads in a check for `null`/invalid JSON so a first-time visitor with no saved data doesn't throw an error
- Form validation logic is self-contained in `contact-validation.js` and runs on submit, not on every keystroke, except optionally for real-time email format feedback
- Comment any regex used for validation with a one-line explanation of what it matches

## Git & Commits

- Branch per feature if working beyond a single session (`feature/planner`, `feature/contact-validation`)
- Commit messages: imperative mood, scoped, e.g. `Add task completion toggle`, not `updates` or `fix stuff`
- No committed secrets, API keys, or `.env` files, this project shouldn't need any, if it does, stop and reconsider the approach

## Content

- Placeholder content must read as real and specific, a believable student name, a believable bio, three specific project descriptions, not "Lorem ipsum" or "Project 1"
- Keep tone professional and warm, this is a student's public-facing portfolio, not a corporate site
