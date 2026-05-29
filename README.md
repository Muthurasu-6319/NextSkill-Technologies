# 🚀 NextSkill Technologies — Home Page

> A premium, fully responsive marketing website for **NextSkill Technologies**, built with React + Vite and vanilla CSS. Designed to convert visitors into students with a polished, interactive UI.

---

## 📋 Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Sections](#sections)
- [Design Guidelines](#design-guidelines)
- [Getting Started](#getting-started)
- [Scripts](#scripts)
- [Code Rules](#code-rules)

---

## 🌐 Overview

The NextSkill home page is a single-page marketing website showcasing:

- Software training programs (Academy & Internship)
- Course offerings (Design, Development, Digital Marketing)
- Industry mentor profiles
- Student success stories
- Hiring partners
- FAQs, Blog posts, and a contact footer

The site is built to be **mobile-first**, **fast**, and **visually premium** with smooth hover animations, dynamic gradients, and consistent branding throughout.

---

## 🛠 Tech Stack

| Technology | Usage |
|---|---|
| **React 18** | UI component library |
| **Vite** | Build tool & dev server |
| **Vanilla CSS** | All styling (no Tailwind, no inline styles) |
| **CSS Grid & Flexbox** | Layout system |
| **CSS Keyframe Animations** | Micro-interactions & hover effects |

---

## 📁 Project Structure

```
Home Page/
├── public/
│   ├── favicon.svg
│   └── image.png              ← Favicon (NextSkill icon)
├── src/
│   ├── assets/
│   │   ├── Logo.png
│   │   ├── QR.png
│   │   ├── news.png
│   │   ├── mentor.png
│   │   ├── courses.png
│   │   ├── Solutions.png
│   │   ├── OurService.png
│   │   ├── OurProcess.png
│   │   ├── OurClients.png
│   │   ├── hiring-companies-desktop 1.png
│   │   ├── recognised-by-logos 1.png
│   │   ├── reviewer1.png
│   │   ├── reviewer2.png
│   │   ├── reviewer3.png
│   │   ├── Archive/
│   │   │   ├── Archive1.png
│   │   │   └── Archive2.png
│   │   ├── Hero/
│   │   │   └── Hero.png
│   │   ├── OurCoreValues/
│   │   │   ├── Innovation.png
│   │   │   ├── Collabration.png
│   │   │   ├── CustomerFocus.png
│   │   │   ├── OurCommitment.png
│   │   │   ├── Quality.png
│   │   │   └── Security.png
│   │   └── Programs/
│   │       ├── academy.png
│   │       ├── internship.png
│   │       └── awardicon.png
│   ├── Components/
│   │   ├── Navbar.jsx / Navbar.css
│   │   ├── Hero.jsx / Hero.css
│   │   ├── About.jsx / About.css
│   │   ├── Recognised.jsx / Recognised.css
│   │   ├── OurService.jsx / OurService.css
│   │   ├── OurCoreValues.jsx / OurCoreValues.css
│   │   ├── OurProcess.jsx / OurProcess.css
│   │   ├── Technologies.jsx / Technologies.css
│   │   ├── Solutions.jsx / Solutions.css
│   │   ├── Archive.jsx / Archive.css
│   │   ├── OurClients.jsx / OurClients.css
│   │   ├── Programs.jsx / Programs.css
│   │   ├── Courses.jsx / Courses.css
│   │   ├── Mentor.jsx / Mentor.css
│   │   ├── Studentstory.jsx / Studentstory.css
│   │   ├── Hiring.jsx / Hiring.css
│   │   ├── Blogs.jsx / Blogs.css
│   │   └── Footer.jsx / Footer.css
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── index.html
├── vite.config.js
└── package.json
```

---

## 🗂 Sections

The page is built as a sequence of modular React components rendered inside `App.jsx`:

| # | Component | Description |
|---|---|---|
| 1 | `Navbar` | Sticky top navigation bar with logo and links |
| 2 | `Hero` | Full-width hero section with CTA buttons and floating graphics |
| 3 | `About` | Company introduction and value proposition |
| 4 | `Recognised` | Recognition badges / trust indicators |
| 5 | `OurService` | Three-tab service showcase (Design, Development, Marketing) |
| 6 | `OurCoreValues` | Six-card grid of company core values with hover animations |
| 7 | `OurProcess` | Horizontal step-by-step process walkthrough |
| 8 | `Technologies` | Tabbed technology stack section (Frontend, Backend, etc.) |
| 9 | `Solutions` | Solutions offering with featured image |
| 10 | `Archive` | Dual-row auto-scrolling marquee of portfolio images |
| 11 | `OurClients` | Client logos and review testimonials |
| 12 | `Programs` | Academy & Internship dual-card program section |
| 13 | `Courses` | Three course tracks with SVG bullet icons |
| 14 | `Mentor` | Industry mentor cards on dark carbon grid background |
| 15 | `Studentstory` | Six student success story cards with social proof |
| 16 | `Hiring` | Hiring partner logo strip + interactive FAQ accordion |
| 17 | `Blogs` | Recent news & insights blog post cards |
| 18 | `Footer` | CTA banner, nav columns, contact info, social icons |

---

## 🎨 Design Guidelines

### Color Palette
| Token | Value | Usage |
|---|---|---|
| Primary | `#ef4b27` | Buttons, badges, accents, icons |
| Dark | `#0f172a` | Headings, key text |
| Body | `#334155` | Subheadings |
| Muted | `#64748b` | Descriptions, metadata |
| Light Muted | `#94a3b8` | Placeholders, dates |
| Background Light | `#fafbfc` | Light section backgrounds |
| Background Warm | `#fff5f2` | Footer and warm-tone sections |
| Dark Background | `#121316` | Mentor section dark background |

### Typography
- All text uses the system default sans-serif font via inherited body styles
- Font weights used: `500` (body), `600` (labels), `700` (subheadings), `800` (headings)

### Animations
- Card hover: `translateY(-6px to -8px)` lift with box-shadow depth change
- Button hover: `translateY(-2px)` lift with glow shadow
- Image hover: `scale(1.02 to 1.05)` zoom
- Arrow icons: `translateX(4px)` forward slide
- Archive marquee: continuous `translateX` scroll via CSS keyframes
- FAQ accordion: `max-height` transition for smooth open/close

---

## ⚡ Getting Started

### Prerequisites
- Node.js `>=18`
- npm `>=9`

### Install & Run

```bash
# Navigate to the project folder
cd "Home Page"

# Install dependencies
npm install

# Start the dev server
npm run dev
```

The app will be available at **http://localhost:5173**

---

## 📜 Scripts

| Script | Command | Description |
|---|---|---|
| Dev Server | `npm run dev` | Start Vite dev server with HMR |
| Build | `npm run build` | Create production bundle |
| Preview | `npm run preview` | Preview production build locally |
| Lint | `npm run lint` | Run ESLint checks |

---

## 📐 Code Rules

All components in this project follow a strict set of conventions:

1. **No new files** — Only work inside files that exist in the project
2. **No new installs** — Zero additional npm packages added
3. **No hyphens in class/ID names** — All selectors use `camelCase` (e.g. `courseCard`, `mentorSection`)
4. **No Tailwind CSS** — Pure vanilla CSS only inside `.css` files
5. **No inline styles** — All styling lives in the companion `.css` file
6. **No comment lines** — Zero `//` or `/* */` comments in any `.jsx` or `.css` file
7. **Simple React** — No custom hooks, no Context API, no Redux. Only `useState` where needed
8. **Mobile responsive** — Every section has `@media` breakpoints for tablet (`≤991px`) and mobile (`≤576px`)
9. **One font** — Consistent typography across all components

---

## 📱 Responsive Breakpoints

| Breakpoint | Viewport | Layout Change |
|---|---|---|
| Desktop | `> 991px` | Full multi-column grids |
| Tablet | `≤ 991px` | 2-column grids, font scaling |
| Mobile | `≤ 768px` | Padding adjustments, stacked layouts |
| Small Mobile | `≤ 576px` | Single-column grids, smaller headings |

---

## 👨‍💻 Built By

**NextSkill Technologies Pvt Ltd**
📍 Pankaja Mill Road, Ramanathapuram, Coimbatore - 641045
📞 +91 9876543213
✉️ nextskilltechnologies@gmail.com

---

*This README was generated for the NextSkill Home Page project.*
