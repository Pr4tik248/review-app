import React from "react";
import Navbar from "./components/Navbar.jsx";
import PostList from "./components/PostList.jsx";
import CreatePost from "./components/CreatePost.jsx";

function App() {
  return (
    <div className="container mx-auto p-4">
      <Navbar />
      <CreatePost />
      <PostList />
    </div>
  );
}

export default App;
