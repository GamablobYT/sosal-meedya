import React from "react";
import "../styles/ProfileModal.css";

const ProfileModal = ({ user, onClose }) => {
  return (
    <div className="profile-modal">
      <button onClick={onClose}>Close</button>
      <h2>{user.name}</h2>
      <img
       src={user.profilePhoto} alt="Profile" />
      <p>{user.bio}</p>
    </div>
  );
};

export default ProfileModal;
