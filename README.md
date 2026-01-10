# 🚀 Backend Template – Node.js + Express + EJS

## 📌 Overview

This repository provides a **structured backend template** built using **Node.js and Express**, with **EJS for server-side rendering** and a clean separation of concerns.  
It is suitable for building **scalable web applications** using an **MVC-style architecture**.

---

## 🧰 Tech Stack

- 🟢 **Node.js**
- ⚡ **Express.js**
- 🧩 **EJS** (Templating Engine)
- 🔐 **dotenv** (Environment Variable Management)
- 📦 **npm**
- 🗂️ Static assets served via Express

---

## 📁 Project Structure

project-root/
│
├── public/ # Static assets
│ ├── CSS/
│ ├── Fonts/
│ ├── Icons/
│ ├── Images/
│ └── JS/
│
├── src/
│ ├── config/ # Configuration files (DB, env, etc.)
│ ├── controllers/ # Request handlers / business logic
│ ├── middlewares/ # Custom middleware
│ ├── routes/ # Express routes
│ ├── services/ # Service-layer logic
│ ├── app.js # Express app configuration
│ └── server.js # Server entry point
│
├── views/ # EJS templates
│ ├── Layouts/
│ ├── Pages/
│ ├── Partials/
│ └── error.ejs
│
├── .env # Environment variables (ignored in git)
├── .env.example # Environment template
├── package.json
├── package-lock.json
└── README.md




---

## ✅ Prerequisites

Ensure the following are installed:

- 🟢 **Node.js** (v16 or higher recommended)
- 📦 **npm**

Check versions:

```bash
node -v
npm -v
```

## 🚀 Getting Started

### 1️⃣ Fork the Repository

- Click the **Fork** button on GitHub (top-right).
- This creates a copy under your GitHub account.

---

### 2️⃣ Clone Your Fork

```bash
git clone https://github.com/<your-username>/<repository-name>.git
cd <repository-name>
```

### 3️⃣ Install Dependencies

Install all required packages:

```bash
npm install
```


### 4️⃣ Environment Setup

Rename the environment file:
```
.env.example → .env
```

- Update the .env file with your configuration:

```
PORT=3000

DB_HOST=127.0.0.1
DB_PORT=3307
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=your_database

MONGO_URL=
```

### 5️⃣ Run the Application

Start the server using:
```
node src/server.js
```
