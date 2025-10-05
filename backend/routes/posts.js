import express from "express";
const router = express.Router();

// Example in-memory posts array
let posts = [
  { id: 1, title: "First Post", content: "This is the first review" },
  { id: 2, title: "Second Post", content: "Another review" },
];

// GET all posts
router.get("/", (req, res) => {
  res.json(posts);
});

// POST new post
router.post("/", (req, res) => {
  const { title, content } = req.body;
  const newPost = { id: posts.length + 1, title, content };
  posts.push(newPost);
  res.json(newPost);
});

export default router;
