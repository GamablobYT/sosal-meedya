import React, { useState } from "react";
import Dashboard from "./pages/Dashboard";
import friendsData from "./data/friends";
import "./styles/dashboard.css";

const App = () => {
  // Mock data for the user
  const user = {
    name: "lund",
    profilePhoto: "",
    bio: "isko apna katwana pasand hai!",
  };

  // Mock data for friends
  const [friends, setFriends] = useState(friendsData);

  // Mock data for posts
  const posts = [
    {
      author: "Saheli",
      content: "bhook lagi hai!",
      image: "https://preview.redd.it/whos-the-happy-cat-v0-7ywz19uui3de1.jpg?width=720&format=pjpg&auto=webp&s=7f6a77e54bcec217d881f324769692052e3c61a1",
    },
    {
      author: "J", 
      content: "ma chuda gandu!" 
    },
    { 
      author: "rand(i) orton", 
      content: "Check out my latest photo!" 
    },
  ];

  const handleSaveFriend = (updatedFriend) => {
    const updatedFriends = friends.map((friend) =>
      friend.id === updatedFriend.id ? updatedFriend : friend
    );
    setFriends(updatedFriends); // Update the friends list
    console.log("Updated friends:", updatedFriends); // Optional: Debugging log
  };

  return <Dashboard
   onSaveFriend={handleSaveFriend}
   user={user} friends={friends} posts={posts} />;
};

export default App;
