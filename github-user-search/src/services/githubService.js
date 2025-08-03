import axios from 'axios';

export const fetchUserData = async (username) => {
  const url = `https://api.github.com/users/${username}`;

  const response = await axios.get(url, {
    headers: {
      Authorization: `token ${import.meta.env.VITE_GITHUB_API_KEY}`,
    },
  });

  return response.data;
};
