# 📝 Quick-Blog – Full Stack Blog Application

Quick-Blog is a **full-stack blog application** built using the **MERN stack** principles with a modern **Vite + React frontend**.  
It allows users to read blogs, while admins can manage blogs and comments through a secure dashboard.

---

## 🚀 Features

### 🌐 User Side
- View all published blogs
- Read individual blog posts
- Responsive UI with modern design
- Fast performance using Vite

### 🔐 Admin Panel
- Secure admin login (JWT-based)
- Add new blogs with rich text editor
- Publish / Unpublish blogs
- Delete blogs
- View and manage comments

### ⚙️ Backend Integration
- RESTful APIs
- JWT authentication
- MongoDB database
- Axios for API communication

---

## 🛠️ Tech Stack

### Frontend
- React (Vite)
- React Router v6
- Context API
- Tailwind CSS
- React Quill
- Axios
- React Hot Toast

### Backend
- Node.js
- Express.js
- MongoDB
- JWT Authentication

### Tools & Deployment
- Vite
- Git & GitHub
- Vercel

---



## 🔑 Environment Variables

Create a `.env` file inside the `client` folder:

```env
VITE_BASE_URL=your_backend_api_url
```

Create a `.env` file inside the `server` folder:

```env
# Server Configuration
PORT=5000

# Admin Credentials
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=your_admin_password

# MongoDB Connection URL
MONGODB_URL=your_mongodb_connection_string

# JWT Secret Key
JWT_SECRET=your_jwt_secret_key

# ImageKit Configuration
IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
IMAGEKIT_URL_ENDPOINT=your_imagekit_url_endpoint

# Gemini API Key
GEMINI_API_KEY=your_gemini_api_key


---

## 📦 Installation & Setup

```bash
git clone https://github.com/palak-1505/Quick-Blog.git
cd Quick-Blog/client
npm install
npm run dev
cd Quick-Blog/server
npm install
npm run server
```

---

## 🔒 Admin Authentication
- JWT-based authentication
- Protected admin routes
- Token stored in localStorage

---

## 🌍 Deployment (Vercel)

- Build Command: `npm run build`
- Output Directory: `dist`


