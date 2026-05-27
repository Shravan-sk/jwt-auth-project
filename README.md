# JWT Authentication & Authorization Project

## Overview
This project demonstrates JWT-based Authentication and Authorization using Node.js, Express.js, SQLite, bcrypt, and JSON Web Tokens (JWT).

The application allows users to:
- Register accounts
- Login securely
- Access protected routes
- Implement role-based access control (Admin/User)

---

# Features

✅ User Registration  
✅ User Login  
✅ Password Hashing using bcrypt  
✅ JWT Token Generation  
✅ Protected Routes using JWT  
✅ Role-Based Authorization  
✅ SQLite Database Integration  
✅ Input Validations  
✅ Admin/User Roles  

---

# Technologies Used

- Node.js
- Express.js
- SQLite
- bcryptjs
- jsonwebtoken (JWT)
- dotenv
- cors
- Postman

---

# Project Structure

```bash
jwt-auth-project/
│
├── database/
│   └── db.js
│
├── middleware/
│   ├── authMiddleware.js
│   └── roleMiddleware.js
│
├── routes/
│   └── authRoutes.js
│
├── .env
├── .gitignore
├── package.json
└── server.js
