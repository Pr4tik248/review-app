import React, { useEffect, useState } from "react";
import axios from "axios";

function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get(import.meta.env.VITE_API_URL + "/posts").then(res => setPosts(res.data));
  }, []);

  return (
    <div>
      {posts.map(post => (
        <div key={post.id} className="border p-2 mb-2">
          <h2 className="font-bold">{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}

export default PostList;
