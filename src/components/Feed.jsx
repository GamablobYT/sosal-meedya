import React from "react";
import "../styles/Feed.css";

const Feed = ({ posts }) => {
  return (
    <div className="feed">
      {posts.map((post, index) => (
        <div key={index} className="post">
          <h3>{post.author}</h3>
          <p>{post.content}</p>
          {post.image && (
            <div className="post-image-container">
              <img src={post.image} alt="Post attachment" className="post-image" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Feed;
