import React, { useState } from "react";
import Dashboard from "./pages/Dashboard";
import "./styles/dashboard.css";

const App = () => {
  // Mock data for the user
  const user = {
    name: "user",
    profilePhoto: "",
    bio: "Loves coding and coffee!",
  };

  // Mock data for friends
  const [friends, setFriends] = useState([
    {
      id: 1,
      name: "Saheli",
      mainRating: 54,
      image: "",
      characteristics: [
        { name: "Funniness", rating: 50 },
        { name: "Comfort", rating: 43 },
        { name: "Trust", rating: 69 },
      ],
    },
    {
      id: 2,
      name: "Woman",
      mainRating: 31,
      image: "",
      characteristics: [
        { name: "Funniness", rating: 71 },
        { name: "Comfort", rating: 12 },
        { name: "Trust", rating: 10 },
      ],
    },
  ]);

  // Mock data for posts
  const posts = [
    { author: "Saheli", content: "bhook lagi hai!" },
    { author: "J", content: "yolo!" },
    { author: "randy orton", content: "Check out my latest photo!" },
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
