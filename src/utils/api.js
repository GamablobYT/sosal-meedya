const API_BASE_URL = "http://localhost:8000/api"; // Update this URL if needed

export const fetchUser = async () => {
  const response = await fetch(`${API_BASE_URL}/user`);
  if (!response.ok) throw new Error("Failed to fetch user data");
  return response.json();
};

export const fetchFriends = async () => {
  const response = await fetch(`${API_BASE_URL}/friends`);
  if (!response.ok) throw new Error("Failed to fetch friends data");
  return response.json();
};

export const fetchPosts = async () => {
  const response = await fetch(`${API_BASE_URL}/posts`);
  if (!response.ok) throw new Error("Failed to fetch posts");
  return response.json();
};
