const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

db.connect((err) => {
  if (err) throw err;
  console.log("MySQL connected...");
});

app.post("/api/register", (req, res) => {
  const { email, password } = req.body;
  db.query(
    "INSERT INTO users (email, password) VALUES (?, ?)",
    [email, password],
    (err, result) => {
      if (err) throw err;
      res.sendStatus(201);
    }
  );
});

app.post("/api/login", (req, res) => {
  const { email, password } = req.body;
  db.query(
    "SELECT * FROM users WHERE email = ? AND password = ?",
    [email, password],
    (err, results) => {
      if (err) throw err;
      if (results.length > 0) {
        res.sendStatus(200);
      } else {
        res.sendStatus(401);
      }
    }
  );
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
