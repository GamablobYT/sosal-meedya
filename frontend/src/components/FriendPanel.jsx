import React from "react";
import "../styles/FriendPanel.css";

const FriendPanel = ({ friends, onSelectFriend }) => {
  return (
    <div className="friend-panel">
      <h2>Friends</h2>
      <ul>
        {friends.map((friend) => (
          <li key={friend.id} onClick={() => onSelectFriend(friend)}>
            <img
             src={friend.image ? friend.image : "imgs/default-profile-icon.jpg"}
              alt={friend.name}
              className="friend-image" />
            <span>{friend.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FriendPanel;
