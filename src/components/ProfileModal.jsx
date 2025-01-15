import React from "react";
import "../styles/ProfileModal.css";

const ProfileModal = ({ user, onClose }) => {
  return (
    <div className="profile-modal">
      <button onClick={onClose}>Close</button>
      <img
       src={user.profilePhoto ? user.profilePhoto : "/imgs/default-profile-icon.jpg"} alt="Profile" className="big-profile-photo" />
      <h2>{user.name}</h2>
      <p>{user.bio}</p>
    </div>
  );
};

export default ProfileModal;