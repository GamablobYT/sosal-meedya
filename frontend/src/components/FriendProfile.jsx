import React, { useState, useEffect } from "react";
import "../styles/FriendProfile.css";

const FriendProfile = ({ friend, onSave }) => {
  if (!friend) return <div className="friend-profile">Select a friend</div>;

  const [ratings, setRatings] = useState(
    friend.characteristics.map((char) => char.rating)
  );

  useEffect(() => {
    if (friend.characteristics) {
      setRatings(friend.characteristics.map((char) => char.rating));
    }
  }, [friend]);

  const handleSliderChange = (index, value) => {
    const newRatings = [...ratings];
    newRatings[index] = value;
    setRatings(newRatings);
  };

  const incrementRating = (index) => {
    if (ratings[index] < 100) {
      handleSliderChange(index, ratings[index] + 1);
    }
  };

  const decrementRating = (index) => {
    if (ratings[index] > 0) {
      handleSliderChange(index, ratings[index] - 1);
    }
  };

  const handleSave = () => {
    const updatedCharacteristics = friend.characteristics.map((char, index) => ({
      ...char,
      rating: ratings[index],
    }));
    const updatedFriend = { ...friend, characteristics: updatedCharacteristics };
    if (onSave) {
      onSave(updatedFriend); // Pass updated friend data to the parent
    }
  };

  return (
    <div className="friend-profile">
      <img
        src="/imgs/default-profile-icon.jpg"
        alt={friend.name}
        className="friend-image"
      />
      <h2>{friend.name}</h2>
      <p>Bond: {(ratings.reduce((a, b) => a + b, 0) / ratings.length).toFixed(0)}</p>
      <ul>
        {friend.characteristics.map((char, index) => (
          <li key={index} className="characteristic">
            <span className="char-name">{char.name + ":"}</span>
            <button onClick={() => decrementRating(index)} className="char-btn">
              -
            </button>
            <input
              type="range"
              min="0"
              max="100"
              value={ratings[index]}
              onChange={(e) => handleSliderChange(index, parseInt(e.target.value))}
              className="char-slider"
            />
            <button onClick={() => incrementRating(index)} className="char-btn">
              +
            </button>
            <span className="char-value">{ratings[index]}</span>
          </li>
        ))}
      </ul>
      <button className="save-btn" onClick={handleSave}>
        Save
      </button>
    </div>
  );
};

export default FriendProfile;
