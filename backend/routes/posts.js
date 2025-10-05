import express from "express";
import pkg from "pg";
const { Pool } = pkg;
import jwt from "jsonwebtoken";

const router = express.Router();
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

// Middleware to verify JWT
function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ error: "No token" });
  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch {
    res.status(401).json({ error: "Invalid token" });
  }
}

// Create Post
router.post("/", authMiddleware, async (req, res) => {
  const { title, content } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO posts (user_id, title, content) VALUES ($1, $2, $3) RETURNING *",
      [req.user.id, title, content]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get All Posts
router.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM posts ORDER BY id DESC");
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
