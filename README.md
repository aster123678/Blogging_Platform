# 📝 Blogging Platform with Authentication and Admin Panel

**GLA University, Mathura**
**Department of Computer Engineering & Application**
**B.Tech CSE 3rd Year | Group No. 7 | Academic Year 2025–2026**
**Supervisor: Mr. Akash Gupta**

---

## 👥 Team Members & Responsibilities

| Name | Roll No | Branch | Responsibility |
|------|---------|--------|----------------|
| Himanshu Choudhary | 2315000969 | `feature/backend-auth` | Backend — server.js, User Model, Auth Routes (Register/Login APIs) |
| Himanshu Rajput | 2315000972 | `feature/backend-middleware` | Backend — JWT Middleware, Admin Middleware, Post Routes |
| Jai Chaudhary | 2315001004 | `feature/frontend-components` | Frontend — App.jsx, Navbar, ProtectedRoute, Dashboard, AdminPanel *(Team Leader)* |
| Ishu Srivastava | 2315001000 | `feature/frontend-ui` | Frontend — Register, Login, Post Pages, Create/Edit Post UI |
| Krati Agrawal | 2315001155 | `feature/integration-docs` | Integration — Axios Config, AuthContext, Tailwind Setup, Documentation |

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | React.js, Tailwind CSS, Axios, React Router v6 |
| Backend | Node.js, Express.js |
| Database | MongoDB, Mongoose ODM |
| Authentication | JWT (JSON Web Token), bcrypt |
| Deployment | MongoDB Atlas (DB), Render (Backend), Vercel (Frontend) |

---

## 📁 Project Structure

```
blogging-platform/
│
├── server/                          ← Backend (Himanshu C. + Himanshu R.)
│   ├── models/
│   │   ├── User.js                  ← Himanshu Choudhary
│   │   └── Post.js                  ← Himanshu Rajput (Week 2)
│   ├── routes/
│   │   ├── authRoutes.js            ← Himanshu Choudhary
│   │   └── postRoutes.js            ← Himanshu Rajput (Week 2)
│   ├── middleware/
│   │   └── authMiddleware.js        ← Himanshu Rajput
│   ├── server.js                    ← Himanshu Choudhary
│   ├── .env.example
│   └── package.json
│
└── client/                          ← Frontend (Jai + Ishu + Krati)
    ├── src/
    │   ├── api/
    │   │   └── axios.js             ← Krati Agrawal
    │   ├── context/
    │   │   └── AuthContext.jsx      ← Krati Agrawal
    │   ├── components/
    │   │   ├── Navbar.jsx           ← Jai Chaudhary
    │   │   └── ProtectedRoute.jsx   ← Jai Chaudhary
    │   ├── pages/
    │   │   ├── Login.jsx            ← Ishu Srivastava
    │   │   ├── Register.jsx         ← Ishu Srivastava
    │   │   ├── Dashboard.jsx        ← Jai Chaudhary
    │   │   ├── AdminPanel.jsx       ← Jai Chaudhary
    │   │   ├── PostList.jsx         ← Ishu Srivastava (Week 2)
    │   │   ├── CreatePost.jsx       ← Ishu Srivastava (Week 2)
    │   │   └── EditPost.jsx         ← Ishu Srivastava (Week 2)
    │   ├── App.jsx                  ← Jai Chaudhary
    │   ├── main.jsx                 ← Krati Agrawal
    │   └── index.css                ← Krati Agrawal
    ├── index.html                   ← Krati Agrawal
    ├── vite.config.js               ← Krati Agrawal
    ├── tailwind.config.js           ← Krati Agrawal
    └── package.json                 ← Krati Agrawal
```

---

## 🚀 How to Run Locally

### Prerequisites
- Node.js installed
- MongoDB running locally (or MongoDB Atlas URI)

### 1. Clone the Repository
```bash
git clone https://github.com/YOUR_USERNAME/blogging-platform-group7.git
cd blogging-platform-group7
```

### 2. Setup Backend
```bash
cd server
npm install
cp .env.example .env
# Open .env and fill in your values
npm run dev
```

Backend runs on: **http://localhost:5000**

### 3. Setup Frontend
```bash
cd client
npm install
npm run dev
```

Frontend runs on: **http://localhost:5173**

---

## ⚙️ Environment Variables

Create a `server/.env` file (refer to `.env.example`):

```env
MONGO_URI=mongodb://127.0.0.1:27017/bloggingdb
JWT_SECRET=your_secret_key_here
PORT=5000
```

> ⚠️ Never push `.env` to GitHub. It is already added to `.gitignore`.

---

## 📋 API Endpoints

### Auth Routes — `/api/auth`
| Method | Endpoint | Access | Description | Owner |
|--------|----------|--------|-------------|-------|
| POST | `/api/auth/register` | Public | Register new user | Himanshu Choudhary |
| POST | `/api/auth/login` | Public | Login and get JWT token | Himanshu Choudhary |
| GET | `/api/auth/profile` | Private | Get logged-in user profile | Himanshu Choudhary |

### Post Routes — `/api/posts` *(Week 2)*
| Method | Endpoint | Access | Description | Owner |
|--------|----------|--------|-------------|-------|
| GET | `/api/posts` | Public | Get all posts | Himanshu Rajput |
| GET | `/api/posts/:id` | Public | Get single post | Himanshu Rajput |
| POST | `/api/posts` | Private | Create new post | Himanshu Rajput |
| PUT | `/api/posts/:id` | Private | Update own post | Himanshu Rajput |
| DELETE | `/api/posts/:id` | Private | Delete own post | Himanshu Rajput |

### Admin Routes — `/api/admin` *(Week 3)*
| Method | Endpoint | Access | Description | Owner |
|--------|----------|--------|-------------|-------|
| GET | `/api/admin/users` | Admin | Get all users | Himanshu Rajput |
| DELETE | `/api/admin/users/:id` | Admin | Delete a user | Himanshu Rajput |
| DELETE | `/api/admin/posts/:id` | Admin | Delete any post | Himanshu Rajput |

---

## 📅 Development Progress

### ✅ Week 1 — Authentication (30% Complete)
| Feature | Status | Done By |
|---------|--------|---------|
| Express server setup | ✅ Done | Himanshu Choudhary |
| MongoDB connection | ✅ Done | Himanshu Choudhary |
| User model with bcrypt | ✅ Done | Himanshu Choudhary |
| Register & Login APIs | ✅ Done | Himanshu Choudhary |
| JWT auth middleware | ✅ Done | Himanshu Rajput |
| Admin-only middleware | ✅ Done | Himanshu Rajput |
| Axios config + AuthContext | ✅ Done | Krati Agrawal |
| Register & Login pages (UI) | ✅ Done | Ishu Srivastava |
| Navbar + ProtectedRoute | ✅ Done | Jai Chaudhary |
| Dashboard page | ✅ Done | Jai Chaudhary |
| Admin Panel page | ✅ Done | Jai Chaudhary |
| App routing setup | ✅ Done | Jai Chaudhary |

### 🔜 Week 2 — Blog Post CRUD (Planned)
| Feature | Status | Planned By |
|---------|--------|------------|
| Post model (MongoDB) | ⏳ Pending | Himanshu Rajput |
| Post CRUD API routes | ⏳ Pending | Himanshu Rajput |
| Post list page | ⏳ Pending | Ishu Srivastava |
| Create post page | ⏳ Pending | Ishu Srivastava |
| Edit & Delete post | ⏳ Pending | Ishu Srivastava |
| Dashboard with real post count | ⏳ Pending | Jai Chaudhary |

### 🔜 Week 3 — Admin Panel (Planned)
| Feature | Status | Planned By |
|---------|--------|------------|
| Admin: view all users | ⏳ Pending | Jai Chaudhary + Himanshu R. |
| Admin: delete users/posts | ⏳ Pending | Jai Chaudhary + Himanshu R. |
| Role management | ⏳ Pending | Himanshu Rajput |

### 🔜 Week 4 — Deployment & Testing (Planned)
| Feature | Status | Planned By |
|---------|--------|------------|
| MongoDB Atlas setup | ⏳ Pending | Himanshu Choudhary |
| Backend deploy on Render | ⏳ Pending | Himanshu Choudhary |
| Frontend deploy on Vercel | ⏳ Pending | Krati Agrawal |
| Final testing & bug fixes | ⏳ Pending | All Members |
| Documentation update | ⏳ Pending | Krati Agrawal |

---

## 🔑 Security Features

- JWT token-based authentication with 7-day expiry
- bcrypt password hashing with 10 salt rounds
- Role-based access control (User / Admin)
- Custom middleware protecting all private routes
- Input validation to prevent injection attacks
- `.env` file excluded from version control

---

## 🔑 How to Create an Admin User

1. Register normally on the website
2. Open **MongoDB Compass** → `bloggingdb` → `users` collection
3. Find your document → change `"role": "user"` to `"role": "admin"`
4. Login again → you'll be automatically redirected to the Admin Panel

---

## 📚 References

- [MERN Stack Blog Tutorial with JWT and bcrypt — GeeksforGeeks, 2025](https://www.geeksforgeeks.org)
- [JWT Authentication in Node.js — DigitalOcean, 2025](https://www.digitalocean.com)
- [MongoDB with Mongoose ODM — MongoDB University, 2025](https://university.mongodb.com)
- [Express.js Middleware and REST APIs — Express Official Docs, 2025](https://expressjs.com)
