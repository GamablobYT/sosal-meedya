import React from "react";
import "../styles/UploadPost.css";

const UploadPost = () => {
  return (
    <div className="upload-post">
      <h2>Create a Post</h2>
      <textarea
        className="post-text"
        placeholder="What's on your mind?"
        rows="5"
      ></textarea>
      <div className="upload-section">
        <label className="upload-image-btn">
          Upload Image
          <input type="file" accept="image/*" className="file-input" />
        </label>
      </div>
      <div className="bond-section">
        <label>
          Minimum bond for post to be visible to others: 
          <input type="number" className="bond-input" />
        </label>
      </div>
      <div>
        <button className="post-submit-btn">Post</button>
      </div>
    </div>
  );
};

export default UploadPost;
