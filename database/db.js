const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./database/auth.db", (err) => {

  if (err) {
    console.log(err.message);
  } else {
    console.log("SQLite Connected");
  }

});


// Create users table

db.run(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT UNIQUE,
    password TEXT,
    role TEXT
  )
`);

module.exports = db;