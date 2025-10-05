import express from "express";
import cors from "cors";
import postRoutes from "./routes/posts.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/posts", postRoutes); // must match frontend fetch path

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


