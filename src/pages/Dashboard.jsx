import React, { useState } from "react";
import StickyBar from "../components/StickyBar";
import FriendPanel from "../components/FriendPanel";
import Feed from "../components/Feed";
import FriendProfile from "../components/FriendProfile";
import ProfileModal from "../components/ProfileModal";
import UploadPost from "../components/UploadPost";

const Dashboard = ({ user, friends, posts, onSaveFriend }) => {
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [showProfile, setShowProfile] = useState(false);
  // const [friendsList, setFriendsList] = useState(friends);
  const [currentView, setCurrentView] = useState("feed"); // "feed" or "uploadPost"

  const handleSelectFriend = (friend) => {
    setSelectedFriend(friend);
  };

  const handleProfileClick = () => {
    setShowProfile(true);
  };

  const closeProfileModal = () => {
    setShowProfile(false);
  };

  const showUploadPost = () => {
    setCurrentView("uploadPost"); // Switch to upload post page
  };

  const showFeed = () => {
    setCurrentView("feed"); // Switch back to feed
  };

  return (
    <div className="dashboard">
      <StickyBar user={user} onProfileClick={handleProfileClick} onShowUploadPost={showUploadPost} onShowFeed={showFeed} />
      <div className="main-content">
        <FriendPanel friends={friends} onSelectFriend={handleSelectFriend} />
        {currentView === "feed" ? (
          <>
            <Feed posts={posts} />
            <FriendProfile friend={selectedFriend} onSave={onSaveFriend} />
          </>
        ) : (
          <>
          <UploadPost />
          <FriendProfile friend={selectedFriend} onSave={onSaveFriend} />
          </>
        )}
      </div>
      {showProfile && <ProfileModal user={user} onClose={closeProfileModal} />}
    </div>
  );
};

export default Dashboard;
