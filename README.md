# 🎓 Tutor Time

**Tutor Time** is an online tutor booking platform designed to connect learners with language and subject tutors in a user-friendly and secure environment. It provides a seamless experience for browsing, reviewing, and booking tutors with features similar to platforms like Preply and Italki.

## 🔗 Live Site & Repos
[Visit Live Site](https://tutor-time-39767.web.app/)  
[Server Repo](https://github.com/ishtiak-billah-emon/Tutor-Time-Server)

---

## 🚀 Features

- 🔍 Browse and search tutors by language or category  
- 🔐 JWT‑based authentication with Google and Email/Password login  
- 📅 Book and manage tutors (private routes protected by JWT)  
- 📝 Add, update, delete personal tutorials  
- 🌐 Responsive UI with dark/light mode  
- 💬 Leave reviews for tutors (updates review count using MongoDB `$inc`)  
- 🗂️ Pagination and real-time loading states  
- ⚙️ Firebase & MongoDB secured using environment variables  

---

## 🛠️ Technologies Used

- **React**, **React Router DOM**  
- **Tailwind CSS**, **Daisy UI**  
- **Firebase Auth**  
- **MongoDB**, **Express.js**, **Node.js**  
- **JWT (jsonwebtoken)**  
- **Framer Motion** (animations)  
- **React Toastify** (notifications)  
- **React Hook Form**, **Axios**, **dotenv**

---

## 🧩 Key Pages & Routes

| Page               | Route                | Access         |
|--------------------|----------------------|----------------|
| Home               | `/`                  | Public         |
| Find Tutors        | `/find-tutors`       | Public         |
| Category Tutors    | `/find-tutors/:lang` | Public         |
| Tutor Details      | `/tutor/:id`         | Private        |
| My Booked Tutors   | `/my-booked`         | Private        |
| Add Tutorial       | `/add-tutorial`      | Private        |
| My Tutorials       | `/my-tutorials`      | Private        |

---

## 🧪 Functionality

- **Search** tutors by language  
- **JWT** token stored in localStorage & verified in requests  
- **Protected Routes** with login persistence  
- **User‑specific bookings** and tutorials  
- **Error page** for undefined routes  
- **Responsive Navbar** with theme toggle  

