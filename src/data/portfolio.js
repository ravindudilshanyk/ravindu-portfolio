export const personal = {
  name: "Ravindu Dilshan",
  surname: "Karunathilaka",
  role: "Full Stack Developer",
  phone: "+94 76 405 2661",
  email: "karunathilakad39@gmail.com",
  linkedin: "https://linkedin.com/in/ravindudilshany",
  github: "https://github.com/ravindudilshanyk",
  location: "Ambalangoda, Sri Lanka",
  summary:
    "Final-year Computer Science & Technology undergraduate at Uva Wellassa University of Sri Lanka with hands-on experience designing and building full-stack web and desktop applications. Proficient in React.js, Node.js, Express.js, PostgreSQL, and TypeScript. Seeking a Software Engineering Internship or Junior Software Engineer role.",
};

export const skills = {
  proficient: [
    "JavaScript","TypeScript","PHP","Java","React.js","Next.js",
    "Express.js","Tailwind CSS","CSS3","REST APIs","MySQL","PostgreSQL","MongoDB",
  ],
  familiar: [
    "Python","C","C#","Vue.js","Angular","Laravel","React Native",
    "Electron.js","Three.js","Socket.IO",".NET","SQLite","Firebase","Docker",
  ],
  practices: [
    "OOP","RESTful API Design","Database Design","Agile/SDLC","Version Control","Debugging",
  ],
  softSkills: [
    "Analytical Thinking","Problem Solving","Collaborative Development","Communication","Adaptability",
  ],
  tools: ["Git","GitHub","VS Code","IntelliJ IDEA","Postman","Figma","Jira","Linux"],
};

export const projects = [
  {
    num: "01",
    name: "Pinklet POS System",
    type: "Client Project",
    period: "2026",
    location: "Pinklet Cakes & Gift Items Shop – Batapola, Sri Lanka",
    repo: "https://github.com/ravindudilshanyk/pinklet-pos",
    demo: "https://youtu.be/9OQDSeCV_Wo?si=Bm7ch5t-b8Lk3h7b",
    tags: ["Electron.js","React 18","TypeScript","Node.js","Express.js","SQLite","Prisma ORM","Tailwind CSS v4"],
    desc: "Production-ready offline-first desktop POS system for a real retail bakery business in Sri Lanka, replacing manual billing and paper-based records entirely.",
    highlights: [
      "pnpm monorepo with 4 packages (Electron, React, Express, shared TS types) — full-stack type safety",
      "Normalized SQLite schema with Prisma ORM (12+ models), JWT RBAC (Owner/Cashier), bcrypt + OTP",
      "Multi-layer billing engine: quick sales, pre-orders, discount layers, loyalty coins, real-time profit",
      "Pre-order lifecycle: 5-stage tracking, advance payments, outstanding balance, overdue alerts",
      "PDF receipt generation for 80mm thermal printers with WhatsApp invoice sharing",
      "Analytics dashboard: revenue/profit trends, cashier performance, category & inventory reports",
    ],
  },
  {
    num: "02",
    name: "Smart Route LK",
    type: "Solo Project",
    period: "2026 – Present",
    location: "Ambalangoda, Sri Lanka",
    repo: "https://github.com/ravindudilshanyk/smart-route-lk-web",
    demo: "https://youtu.be/FESmeSB-sKw?si=dcYiWmQGtTxf50qc",
    tags: ["React","Node.js","Express.js","PostgreSQL","Socket.IO","Tailwind CSS","JWT","PDFKit","Google OAuth 2.0"],
    desc: "Intelligent bus booking platform for Sri Lanka with segment-based seat allocation and connecting route search.",
    highlights: [
      "Segment-based seat allocation via PostgreSQL stop-order overlap detection — one seat, multiple passengers",
      "Connecting bus search engine with automatic transfer timing validation and combined fare calculation",
      "Dual auth: JWT + Google OAuth 2.0 with progressive profile completion",
      "13-table PostgreSQL schema across 4 user roles with segment-level availability tracking",
      "Per-passenger QR tickets with bus-specific conductor validation across multi-leg journeys",
      "4-step bus registration wizard with live seat layout preview and atomic database transactions",
    ],
  },
  {
    num: "03",
    name: "Pinklet Gift Platform",
    type: "University Group Project",
    period: "2025",
    location: "Uva Wellassa University of Sri Lanka",
    repo: "https://github.com/ravindudilshanyk/pinklet",
    tags: ["React.js",".NET","PostgreSQL","Three.js"],
    demo: "https://www.youtube.com/watch?v=34JQLvnK1P8",
    desc: "Interactive gift customization platform with 3D cake preview, vendor marketplace, and budget-based gift suggestions.",
    highlights: [
      "Budget-based gift suggestion engine by occasion, age, and gender with curated package recommendations",
      "Manual package builder with live pricing updates (add/remove/adjust items)",
      "Custom cake ordering: reference image upload → shop owner quote → payment confirmation",
      "3D cake customization tool using Three.js for live browser-based visual preview",
      "Vendor marketplace enabling local sellers to expand available inventory",
    ],
  },
  {
    num: "04",
    name: "Rent IT",
    type: "University Group Project",
    period: "2024",
    location: "Uva Wellassa University of Sri Lanka",
    repo: "https://github.com/ravindudilshanyk/RenItNew",
    tags: ["React (Vite)","PHP","MySQL","PayHere"],
    desc: "Online rental platform with time-aware availability, OTP-based handover tracking, and PayHere payment integration.",
    highlights: [
      "Time-aware rental availability: auto-blocks items during active rental periods",
      "Return delivery buffer time logic preventing double-booking",
      "OTP-based item handover and return verification (Uber-style delivery model)",
      "Damage reporting, date extension support, and additional payment collection",
      "PayHere payment gateway for secure online transactions",
    ],
  },
  {
    num: "05",
    name: "Vote SL",
    type: "Research Project - Ongoing",
    period: "2025 – Present",
    location: "Uva Wellassa University of Sri Lanka",
    repo: "https://github.com/ravindudilshanyk/VoteSL-Mobile",
    tags: ["Blockchain","Facial Recognition","Next.js","Node.js","React Native","PostgreSQL"],
    desc: "Secure e-voting research prototype with blockchain-based immutable vote storage and facial recognition authentication.",
    highlights: [
      "Dual-platform: React Native mobile voter app + Next.js admin dashboard for live monitoring",
      "Blockchain-based immutable vote storage with tamper-proof audit trails",
      "Facial recognition biometric authentication preventing impersonation",
      "RBAC across 5 roles: Super Admin, Election Officers, Grama Niladhari, Result Officers, Observers",
      "Multilingual UI (Sinhala, Tamil, English) — presidential & parliamentary election types",
    ],
  },
];

export const experience = [
  {
    period: "2026 – Present",
    badge: "Active",
    title: "Solo Developer — Pinklet POS",
    company: "Client Project · Batapola, Sri Lanka",
    desc: "Designed and built a production-ready full-stack desktop POS application end-to-end for a real bakery business. Owns architecture, UI/UX, backend API, database design, and client delivery.",
  },
  {
    period: "2025 – Present",
    badge: "Active",
    title: "UI Designer — IEEE CS Website",
    company: "IEEE Student Branch, Uva Wellassa University",
    desc: "Designed accessible, user-friendly interface layouts for the official IEEE Computer Society chapter website. Collaborated with the dev team for design consistency across all pages.",
  },
  {
    period: "2022 – Present",
    badge: "Final Year",
    title: "BSc Computer Science & Technology",
    company: "Uva Wellassa University of Sri Lanka · GPA 3.39/4.0",
    desc: "Studied core CS fundamentals — algorithms, data structures, databases, networks, and software engineering. Built multiple full-stack projects independently and in teams.",
  },
];

export const certifications = [
  { name: "IBM Full Stack Software Developer", platform: "Coursera", status: "In Progress" },
  { name: "AI For Everyone — DeepLearning.AI", platform: "Coursera", status: "In Progress" },
];

export const languages = [
  { lang: "Sinhala", level: "Native" },
  { lang: "English", level: "Proficient" },
];
