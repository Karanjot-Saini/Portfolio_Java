# Karanjot Singh - Java Backend Developer Portfolio

A production-quality developer portfolio website built specifically to showcase Java Backend Developer skills, Spring Boot architecture, enterprise troubleshooting experience, and full-stack projects.

![Tech Stack](https://img.shields.io/badge/Stack-Java%2021%20%7C%20Spring%20Boot%203%20%7C%20React%2018%20%7C%20TailwindCSS-00D2FF)
![Vite](https://img.shields.io/badge/Bundler-Vite%205-blue)
![License](https://img.shields.io/badge/License-MIT-green)

---

## 🌟 Highlights & Features

- **Cyber-Minimalist Aesthetics:** Designed with deep obsidian and midnight navy backgrounds, crisp white typography, and electric-blue accents (`#00D2FF`).
- **Targeted Java Backend Positioning:** Focuses on Java 21, Spring Boot 3, Spring Security (JWT), Spring Data JPA, Hibernate, MySQL, and PostgreSQL.
- **Enterprise Experience Integrity:** Accurately reflects 1.5 years of IT experience at Tech Mahindra (SAP BusinessObjects support, server administration, incident analysis, and production troubleshooting) and translates it into backend reliability.
- **Featured Project Deep-Dive:** Interactive architectural breakdown of **Grewal Electric Store** (Spring Boot + React + MySQL) covering dual-token JWT authentication, transactional cart/order logic, and global REST exception handling.
- **Centralized Data Configuration:** All personal information, URLs, projects, skills, and experience live in a single file (`src/data/portfolioData.js`).
- **Direct Resume Download:** Dedicated functional button serving `public/resume.pdf`.
- **Responsive & Accessible:** Fully optimized across desktop, tablet, and mobile screens.

---

## 📁 Project Structure

```text
portfolio/
├── public/
│   ├── favicon.svg             # Terminal-style SVG favicon
│   └── resume.pdf              # Verified placeholder resume (replace with your PDF)
├── src/
│   ├── components/
│   │   ├── BackgroundEffects.jsx # Cyber grid and electric blue ambient glow
│   │   ├── Navbar.jsx           # Responsive header with scroll spy & resume link
│   │   ├── Hero.jsx             # Intro, Java 21 code snippet, CTAs, and stats
│   │   ├── About.jsx            # Background, enterprise transition & engineering mindset
│   │   ├── Skills.jsx           # Categorized filterable skills with micro tags
│   │   ├── Projects.jsx         # Architecture tabs, Grewal Electric Store & starter repos
│   │   ├── Experience.jsx       # Honest Tech Mahindra production support breakdown
│   │   ├── Contact.jsx          # Validated contact form, one-click copy email & socials
│   │   └── Footer.jsx           # Navigation, tech stack credits, and back-to-top
│   ├── data/
│   │   └── portfolioData.js     # ⭐ Central configuration file for all details & links
│   ├── App.jsx                  # Main page assembler
│   ├── index.css                # Tailwind directives and custom glassmorphism styles
│   └── main.jsx                 # React root renderer
├── index.html                   # SEO metadata, Open Graph, and font preconnects
├── package.json                 # Dependencies and build scripts
├── postcss.config.js            # PostCSS configuration
├── tailwind.config.js           # Theme colors, fonts, and electric glow utilities
└── vite.config.js               # Vite configuration
```

---

## 🚀 Quick Start Guide

### Prerequisites
- **Node.js**: v18.19.0 or higher
- **npm**: v9 or higher

### Installation

1. Open your terminal in the portfolio directory:
   ```bash
   npm install
   ```

2. Start the local development server:
   ```bash
   npm run dev
   ```
   The site will be live at `http://localhost:3000` (or the port shown in your terminal).

3. Build for production:
   ```bash
   npm run build
   ```
   The optimized production bundle will be generated in the `dist/` directory.

4. Preview the production build locally:
   ```bash
   npm run preview
   ```

---

## 🛠️ Personalization Checklist (`src/data/portfolioData.js`)

All placeholders requiring your personal updates are tagged with `[UPDATE_REQUIRED]` in `src/data/portfolioData.js`:

1. **Email & Phone:**
   - Update `email` in `personalInfo` and `contactData`.
   - Update `phone` and `location`.
2. **Social Profiles:**
   - Replace `links.github` with your real GitHub profile link.
   - Replace `links.linkedin` with your real LinkedIn profile link.
3. **Resume File:**
   - Place your real resume PDF into `public/resume.pdf` (overwriting the placeholder).
4. **Project Repositories:**
   - In `projectsData`, update `githubUrl` for the Grewal Electric Store repository to point to your repository.
   - If you deploy a live demo, set `liveUrl` and toggle `demoAvailable: true`.

---

## 🌐 Deployment Options

### Vercel (Recommended)
1. Push this repository to GitHub.
2. Sign in to [Vercel](https://vercel.com) and import the repository.
3. Vercel will automatically detect Vite and set the build command to `npm run build` and output directory to `dist`.
4. Click **Deploy**.

### Netlify
1. Drag and drop the `dist/` folder into Netlify, or link your GitHub repository.
2. Set Build Command: `npm run build`
3. Set Publish Directory: `dist`

### GitHub Pages
1. In `vite.config.js`, set `base: '/portfolio/'` (matching your repo name).
2. Run `npm run build` and deploy the `dist` folder via GitHub Actions or the `gh-pages` branch.
