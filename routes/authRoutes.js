const express = require("express");

const router = express.Router();

const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");

const db = require("../database/db");

const authMiddleware = require("../middleware/authMiddleware");

const roleMiddleware = require("../middleware/roleMiddleware");


// REGISTER

router.post("/register", async (req, res) => {

  const { name, email, password, role } = req.body;

  // Empty fields validation
  if (!name || !email || !password) {

    return res.status(400).json({
      message: "All fields are required"
    });

  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {

    return res.status(400).json({
      message: "Invalid email format"
    });

  }

  // Password validation
  if (password.length < 6) {

    return res.status(400).json({
      message: "Password must be at least 6 characters"
    });

  }

  // Role validation
  const allowedRoles = ["admin", "user"];

  if (role && !allowedRoles.includes(role)) {

    return res.status(400).json({
      message: "Invalid role"
    });

  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  const query = `
    INSERT INTO users (name, email, password, role)
    VALUES (?, ?, ?, ?)
  `;

  db.run(
    query,
    [name, email, hashedPassword, role || "user"],
    function (err) {

      if (err) {

        return res.status(400).json({
          message: "User already exists"
        });

      }

      res.status(201).json({
        message: "User registered successfully"
      });

    }
  );

});


// LOGIN

router.post("/login", (req, res) => {

  const { email, password } = req.body;

  // Empty validation
  if (!email || !password) {

    return res.status(400).json({
      message: "Email and password required"
    });

  }

  const query = `
    SELECT * FROM users WHERE email = ?
  `;

  db.get(query, [email], async (err, user) => {

    if (!user) {

      return res.status(400).json({
        message: "Invalid credentials"
      });

    }

    const isMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!isMatch) {

      return res.status(400).json({
        message: "Invalid credentials"
      });

    }

    const token = jwt.sign(
      {
        id: user.id,
        role: user.role
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d"
      }
    );

    res.json({
      message: "Login successful",
      token
    });

  });

});


// PROFILE ROUTE

router.get(
  "/profile",
  authMiddleware,
  (req, res) => {

    res.json({
      message: "Protected Profile",
      user: req.user
    });

  }
);


// ADMIN ROUTE

router.get(
  "/admin",
  authMiddleware,
  roleMiddleware("admin"),
  (req, res) => {

    res.json({
      message: "Welcome Admin"
    });

  }
);

module.exports = router;