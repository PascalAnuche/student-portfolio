# Product Requirements Document
## Student Portfolio & Academic Management Website — COS 106 Term Project

---

## 1. Overview

This is a five-page responsive website built with HTML, CSS, and JavaScript that works as both a personal academic portfolio and a lightweight student management tool, the site needs to look like something a real university student would proudly link on a CV, not like a classroom exercise, so the priority is clean design, working interactivity, and genuinely semantic markup.

**Owner:** Onyebuchi Anuche (student, developer)
**Course:** COS 106 – Introduction to Web Technologies
**Deliverable weight:** 20 marks
**Submission:** Hosted live link + GitHub repository link

---

## 2. Goals

- Demonstrate real proficiency in HTML, CSS, and JavaScript, not just template assembly
- Ship a site that's fully responsive from mobile to desktop
- Build a genuinely useful academic planner with add, complete, and delete functionality, backed by localStorage so tasks persist between visits
- Build a contact form with real client-side validation, not just `required` attributes
- Keep visual design consistent, professional, and on-brand across all five pages

---

## 3. Target User

A university student who wants one link that shows who they are, what they've built, and what they're capable of, while also using the site's planner page for their own day-to-day task tracking, a secondary audience is anyone grading the project against the COS 106 rubric, so every required element listed in the brief needs to be visibly and unambiguously present.

---

## 4. Site Map

1. `index.html` — Homepage
2. `about.html` — About Me
3. `projects.html` — Projects
4. `planner.html` — Academic Planner
5. `contact.html` — Contact

Shared across all pages: header with logo/name, nav menu (hamburger on mobile), footer with social links and copyright.

---

## 5. Page-by-Page Requirements

### 5.1 Homepage (`index.html`)
- Hero section: student name, professional photograph (placeholder image acceptable), short welcome message
- Navigation menu, sticky or fixed, present on every page
- Brief biography (2–3 short paragraphs)
- A "highlights" strip: quick stats or badges (e.g. GPA, current level, key skill tags)
- Call-to-action buttons linking to Projects and Contact
- Footer with social/contact icons

### 5.2 About Me (`about.html`)
- Educational background — timeline-style list (institution, years, programme)
- Career aspirations — short narrative section
- Technical skills — visual skill bars or tag chips, grouped by category (languages, tools, soft skills)
- Hobbies and interests — icon + label grid
- Embedded multimedia: a short intro video (HTML5 `<video>`) or audio clip

### 5.3 Projects (`projects.html`)
- Minimum three project cards, each with:
  - Project title and one-paragraph description
  - Screenshot/image
  - Tech stack tags
  - "View Project" / "View Code" links (real if available, otherwise linked to placeholder repos)
- Grid layout using CSS Grid, responsive down to a single column on mobile
- Optional filter buttons (e.g. "All / Web / Mobile / Design") for a JS-driven interactive touch — not required by the brief but strengthens the JS demonstration

### 5.4 Academic Planner (`planner.html`)
Core interactive feature of the site, must include:
- Input field + "Add Task" button
- Task list rendered dynamically via DOM manipulation
- Each task has a checkbox to mark complete (with strikethrough/visual state change) and a delete button
- Tasks persist across page reloads via `localStorage`
- Optional: due-date field per task, and a simple counter ("3 tasks remaining")
- Empty state message when no tasks exist

**JS concepts demonstrated:** arrays (task list), functions (add/complete/delete), event handling (click, submit, keypress), DOM manipulation (render list from array), localStorage persistence.

### 5.5 Contact (`contact.html`)
- Form fields: Name, Email, Phone Number, Message
- Client-side validation on submit:
  - No field may be empty
  - Email must match a valid email pattern
  - Phone number must contain digits only (reject letters/symbols)
  - Inline error messages shown next to the offending field, not a single alert box
- Success state: confirmation message shown on valid submit (form does not need to actually send anywhere — a simulated success message is acceptable, but the interaction should feel real)
- A small embedded Google Map or address block is a nice-to-have, not required

---

## 6. HTML Requirements Checklist

- [ ] Semantic elements throughout (`header`, `nav`, `main`, `section`, `article`, `footer`, not div-soup)
- [ ] At least one real `<form>` with proper `<label>` associations
- [ ] At least one `<table>` (suggestion: a simple grades/courses table on the About page)
- [ ] Images with meaningful `alt` text
- [ ] Internal and external hyperlinks
- [ ] Ordered and/or unordered lists (skills, hobbies, timeline)
- [ ] One multimedia element (`<video>` or `<audio>`)

---

## 7. CSS Requirements Checklist

- [ ] Single external stylesheet (`styles.css`), no inline styles
- [ ] Fully responsive: mobile (< 480px), tablet (481–768px), desktop (> 768px)
- [ ] Flexbox for nav and card rows, CSS Grid for the projects and skills layouts
- [ ] Distinct hover/active states for nav links and buttons
- [ ] At least one meaningful transition or animation (e.g. card hover lift, planner task add/remove fade)
- [ ] Consistent colour system applied via CSS custom properties (see Design System doc)
- [ ] Mobile nav collapses into a hamburger menu

---

## 8. JavaScript Requirements Checklist

- [ ] Event handling (click, submit, change, keypress)
- [ ] DOM manipulation (creating/removing elements, toggling classes)
- [ ] Form validation with custom logic (not just HTML5 attributes alone)
- [ ] Dynamic content updates (planner list, task counter, filter buttons)
- [ ] Arrays used to store structured data (tasks)
- [ ] Functions organised by responsibility (addTask, deleteTask, toggleComplete, validateForm, etc.)
- [ ] Interactive task management system with full CRUD-lite behaviour (create, toggle, delete)

---

## 9. Non-Functional Requirements

- Page load should feel instant — keep images optimised, avoid unnecessary libraries
- No horizontal scroll on any breakpoint
- Consistent header/footer/nav across all five pages
- Accessible colour contrast (WCAG AA minimum) and keyboard-navigable nav and form

---

## 10. File Structure

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
│   ├── planner.js
│   ├── contact-validation.js
│   └── main.js
├── assets/
│   ├── images/
│   └── media/
└── README.md
```

---

## 11. Grading Alignment (20 Marks — suggested breakdown)

| Area | Marks |
|---|---|
| HTML structure & semantics | 4 |
| CSS styling & responsiveness | 5 |
| JavaScript functionality (planner + validation) | 6 |
| Design quality & consistency | 3 |
| Deployment + GitHub submission | 2 |

---

## 12. Deliverables

1. Live hosted link (GitHub Pages, Netlify, or Vercel all work well for a static site like this)
2. GitHub repository link with clean commit history
3. All five HTML pages, one CSS file, and organised JS files as per the structure above
