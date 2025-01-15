import React from "react";
import "../styles/Feed.css";

const Feed = ({ posts }) => {
  return (
    <div className="feed">
      {posts.map((post, index) => (
        <div key={index} className="post">
          <h3>{post.author}</h3>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Feed;
