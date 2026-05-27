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


1. User Registration  
2.User Login  
3.Password Hashing using bcrypt  
4.JWT Token Generation  
5.Protected Routes using JWT  
6.Role-Based Authorization  
7.SQLite Database Integration  
8.Input Validations  
9.Admin/User Roles  

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
