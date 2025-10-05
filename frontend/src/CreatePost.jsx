import React, { useState } from "react";
import axios from "axios";

function CreatePost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const submitPost = async () => {
    const token = localStorage.getItem("token");
    await axios.post(
      import.meta.env.VITE_API_URL + "/posts",
      { title, content },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    setTitle("");
    setContent("");
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        className="border p-1 mr-2"
      />
      <input
        type="text"
        placeholder="Content"
        value={content}
        onChange={e => setContent(e.target.value)}
        className="border p-1 mr-2"
      />
      <button onClick={submitPost} className="bg-blue-500 text-white p-1">Post</button>
    </div>
  );
}

export default CreatePost;
