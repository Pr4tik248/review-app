import express from "express";

const router = express.Router();
let posts = [
  { id: 1, title: "Welcome to the University Review Platform!", content: "Test post" }
];

router.get("/", (req, res) => {
  res.json(posts);
});

router.post("/", (req, res) => {
  const { title, content } = req.body;
  const newPost = { id: posts.length + 1, title, content };
  posts.push(newPost);
  res.status(201).json(newPost);
});

export default router;
