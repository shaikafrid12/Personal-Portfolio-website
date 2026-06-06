# 🚀 Shaik Afrid - Professional Personal Portfolio Website

A state-of-the-art MERN stack personal portfolio website showcasing computer science skills, timelines, projects, and featuring a contact inquiry API with automated Gmail forwarding.

---

## 🎨 Design & Visuals

This project features a premium **Dark Glassmorphic UI** design built with CSS variables, Tailwind CSS v4, and smooth micro-animations.

*   **Interactive Particle Matrix**: Custom HTML5 canvas draws glowing background coordinate particle connections that react to mouse hover.
*   **Spotlight Card Glows**: Modern spotlight gradients track the mouse position on all highlights, skills, and project cards.
*   **Case Study Modal**: Full markdown support renders rich detailed project layouts inside animated project details overlays.

---

## 🛠️ Technology Stack

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
<br/>
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![Nodemailer](https://img.shields.io/badge/Nodemailer-0A85EA?style=for-the-badge&logo=nodemailer&logoColor=white)

---

## ✨ Features

1.  **Dynamic Timeline Tabs**: Toggle between B.Tech Education history, Internship experiences, and Certifications.
2.  **Interactive Portfolio Showcase**: Filter projects by categories, search technologies live, and view source code or live preview links.
3.  **Active Contact Form API**: Submissions are validated locally, logged directly into a MongoDB database, and forwarded to the administrator's email using custom Gmail SMTP relay configurations.
4.  **Premium Navigation**: Multi-device responsive navigation with command-prompt typography logo style `> Afrid.Dev_`.
5.  **SEO Best Practices**: Proper metadata tags, viewport scaling, high-performance chunk-splitting, and semantic HTML5 structural layout.

---

## 📂 Project Architecture

```text
Personal-Portfolio-website/
├── client/                 # React Frontend
│   ├── public/             # Static Assets (Resume PDF, icons)
│   ├── src/
│   │   ├── assets/         # UI Media assets
│   │   ├── components/     # Reusable UI Blocks (Hero, Projects, Skills)
│   │   ├── pages/          # Navigable page routes
│   │   ├── App.jsx         # App routes config
│   │   └── main.jsx
│   └── vite.config.js      # Vite dev settings + server port proxy
└── server/                 # Express Backend API
    ├── config/             # DB Connection Config
    ├── controllers/        # Project Queries & Mail Submit controllers
    ├── models/             # Mongoose Models (Contact, Project)
    ├── routes/             # API Router definitions
    ├── .env                # Port, DB URIs, and App Credentials
    └── server.js           # API Entry Point & Middleware setup
```

---

## ⚙️ Local Installation & Development

### 1. Prerequisite Setup
*   Ensure **Node.js** and **MongoDB** are installed and active on your system.

### 2. Configure Backend Server
1.  Navigate to the server directory:
    ```bash
    cd server
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Create a `.env` file in the `server` directory and add:
    ```env
    PORT=5000
    MONGODB_URI=mongodb://127.0.0.1:27017/portfolio
    ADMIN_EMAIL=shaikafrid709@gmail.com
    
    # Nodemailer Configurations
    EMAIL_SERVICE=gmail
    EMAIL_USER=shaikafrid709@gmail.com
    EMAIL_PASS=your_app_specific_password_here
    ```
4.  Start the development server:
    ```bash
    npm run dev
    ```

### 3. Configure Frontend Client
1.  Navigate to the client directory:
    ```bash
    cd ../client
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Start the Vite development build:
    ```bash
    npm run dev
    ```
4.  Open your browser and navigate to `http://localhost:3000/`.

---

## 🌐 Render Deployment Strategy

For full guides on hosting this live, deploy both folders as separate micro-services on Render:
*   **Express Server**: Deploy as a **Web Service** using Root Directory `server`, Build Command `npm install`, and Start Command `node server.js`. Add your env vars inside Render dashboard settings.
*   **Vite Frontend**: Deploy as a **Static Site** using Root Directory `client`, Build Command `npm install && npm run build`, and Publish Directory `dist`. Configure a rewrite rule from `/api/*` pointing to your Express web service URL.
