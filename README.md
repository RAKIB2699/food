# 🥗 Community Food Sharing & Surplus Reduction Platform

A full-stack web application enabling users to share surplus food, reduce community food waste, and request donations — designed with clean UI, secure authentication, and real-world CRUD operations.

This project was built as part of a full-stack developer assignment to demonstrate proficiency with the MERN stack, Firebase, Tailwind CSS, React Query, and modern deployment strategies.

---

## 🌍 Live Links

- 🔗 **Client:** [https://YOUR_FRONTEND_URL.netlify.app](https://YOUR_FRONTEND_URL.netlify.app)
- 🔗 **Server:** [https://YOUR_BACKEND_URL.onrender.com](https://YOUR_BACKEND_URL.onrender.com)

---

## 🚀 Tech Stack

### 🧑‍💻 Frontend
- React `^19.1.0`
- React Router DOM `^7.7.0`
- Firebase Auth `^12.0.0`
- Axios `^1.10.0`
- Tailwind CSS `^4.1.11`
- SweetAlert2 `^11.22.2`
- React Icons `^5.5.0`
- TanStack React Query `^5.83.0`
- @tailwindcss/vite `^4.1.11`

### 🛠️ Backend
- Node.js
- Express.js
- MongoDB
- JSON Web Token (JWT)
- CORS, dotenv

---

## 🔐 Authentication Features

- Firebase email/password login & registration
- Google sign-in support
- Form validation with error toasts (password length, case)
- JWT-based secure routing
- User avatar display & logout
- Private route protection (also works on reload)

---

## 🧾 Core Functionality

### 🏠 Home Page
- Eye-catching banner/slider
- "Featured Foods" section showing top 6 by quantity
- 2 extra custom sections for engagement
- Framer Motion animations

### 🍽️ Available Foods Page
- Shows foods with `status: "available"`
- Search by food name
- Sort by expiration date
- 2-column and 3-column layout toggle
- View Details button (login protected)

### ➕ Add Food (Private Route)
- Form fields:
  - Food Name, Image, Quantity, Pickup Location
  - Expiration Date, Notes
  - Auto-fills Donor Name, Email, and Image
- Status defaults to `"available"`
- On submit: food is added to DB and visible on Available Foods

### 🔍 Food Details Page
- Shows full food info
- "Request" button (opens modal)
- Modal includes:
  - Non-editable fields (Donor, Pickup, Expiration, etc.)
  - Editable Notes
- On request:
  - Food `status` updated to `"requested"`
  - Removed from Available Foods
  - Added to My Requests

### ⚙️ Manage My Foods (Private Route)
- View all foods added by current user
- Update and Delete buttons
  - Update opens modal/form
  - Delete prompts confirmation with SweetAlert

### 📋 My Food Requests (Private Route)
- Shows all foods requested by user
- Display info includes:
  - Donor Name, Pickup Location, Expiration Date, Request Date

---

## 📂 Folder Structure (Client)

