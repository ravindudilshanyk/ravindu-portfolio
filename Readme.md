# 🚀 Ravindu Dilshan Karunathilaka — Portfolio

[![Live Demo](https://img.shields.io/badge/Live-ravindu--dilshan--karunathilaka.vercel.app-E24B4A?style=for-the-badge&logo=vercel)](https://ravindu-dilshan-karunathilaka.vercel.app)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-ravindudilshany-0A66C2?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/ravindudilshany)
[![GitHub](https://img.shields.io/badge/GitHub-ravindudilshanyk-181717?style=for-the-badge&logo=github)](https://github.com/ravindudilshanyk)

> Personal portfolio website built with React + Vite. Features real GitHub contribution graph, project demo pages with YouTube integration, working contact form, and full responsive design.

---

## ✨ Features

- **Hero Section** — Animated photo with spinning ring, floating badges, live stats
- **Projects** — 5 real projects with detail pages, tech tags, and YouTube demo videos
- **GitHub Graph** — Live contribution heatmap pulled from real GitHub data (no token needed)
- **Contact Form** — Working email delivery via EmailJS
- **Fully Responsive** — Mobile, tablet, and desktop
- **Dark Red Theme** — Custom design system with CSS variables

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + Vite |
| Styling | Plain CSS with CSS Variables |
| Routing | React Router DOM |
| Email | EmailJS |
| GitHub Data | github-contributions-api + GitHub REST API |
| Deployment | Vercel |

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── Experience.jsx
│   ├── Github.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── pages/
│   └── ProjectDetail.jsx
├── data/
│   └── portfolio.js      ← all CV data lives here
├── assets/
│   └── ravindu.jpg
├── App.jsx
├── main.jsx
└── index.css
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm

### Installation

```bash
# Clone the repo
git clone https://github.com/ravindudilshanyk/ravindu-portfolio.git
cd ravindu-portfolio

# Install dependencies
npm install

# Create .env file
cp .env.example .env
# Fill in your EmailJS credentials in .env

# Start dev server
npm run dev
```

### Environment Variables

Create a `.env` file in the project root:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_GITHUB_USERNAME=ravindudilshanyk
```

Get your EmailJS credentials at [emailjs.com](https://emailjs.com)

---

## 📦 Build & Deploy

```bash
# Build for production
npm run build

# Preview production build locally
npm run preview
```

Deployed on **Vercel** — auto-deploys on every push to `main`.

---

## 🎨 Customization

All personal data is centralized in one file:

```js
// src/data/portfolio.js
export const personal = { ... }   // name, email, links
export const skills   = { ... }   // tech stack
export const projects = [ ... ]   // projects + YouTube demo links
export const experience = [ ... ] // work & education timeline
```

Just update `portfolio.js` and everything across the site updates automatically.

---

## 📬 Contact

**Ravindu Dilshan Karunathilaka**

- 🌐 Portfolio: [ravindu-dilshan-karunathilaka.vercel.app](https://ravindu-dilshan-karunathilaka.vercel.app)
- 💼 LinkedIn: [linkedin.com/in/ravindudilshany](https://linkedin.com/in/ravindudilshany)
- 🐙 GitHub: [github.com/ravindudilshanyk](https://github.com/ravindudilshanyk)
- 📧 Email: karunathilakad39@gmail.com

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">Built with ❤️ in Sri Lanka 🇱🇰</p>