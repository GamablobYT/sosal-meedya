import React from "react";
import "../styles/StickyBar.css";

const StickyBar = ({ user, onProfileClick, onShowUploadPost, onShowFeed }) => {
  return (
    <div className="sticky-bar">
      <h1>Sosal meedya epp</h1>
      <div className="actions">
        <button onClick={onShowFeed} className="home-icon">
          🏠
        </button>
        <button onClick={onShowUploadPost} className="plus-icon">
          +
        </button>
        <div className="profile-section" onClick={onProfileClick}>
          <img src={user.profilePhoto ? user.profilePhoto : "imgs/default-profile-icon.jpg"} alt="Profile" className="profile-photo" />
          <span>{user.name}</span>
        </div>
      </div>
      
    </div>
  );
};

export default StickyBar;
