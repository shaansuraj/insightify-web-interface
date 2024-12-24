// src/hooks/useFavorites.js
import { useState } from 'react';
import axios from 'axios'; // or your axiosInstance

function getUserIdFromToken(token) {
  try {
    const payloadBase64 = token.split('.')[1];
    if (!payloadBase64) return null;
    const decodedPayload = atob(payloadBase64);
    const parsed = JSON.parse(decodedPayload);
    return parsed.userId || null;
  } catch (err) {
    console.error('[useFavorites] Error parsing token:', err);
    return null;
  }
}

export function useFavorites() {
  const [favorites, setFavorites] = useState([]);

  const fetchFavorites = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      console.error('[useFavorites] No token found; cannot fetch favorites.');
      return;
    }
    const userId = getUserIdFromToken(token);
    if (!userId) {
      console.error('[useFavorites] No userId in token; cannot fetch favorites.');
      return;
    }
    try {
      const response = await axios.get(`http://localhost:8000/favorites/user?userId=${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setFavorites(response.data);
    } catch (error) {
      console.error('[useFavorites] Error fetching favorites:', error);
    }
  };

  const addToFavorites = async (article) => {
    console.log('[useFavorites] addToFavorites called with article:', article);

    const token = localStorage.getItem('token');
    if (!token) {
      alert('Please log in first');
      return;
    }
    const userId = getUserIdFromToken(token);
    if (!userId) {
      alert('No user found in token payload');
      return;
    }

    // Construct the body matching your Favorite entity
    const favoriteData = {
      user: { id: userId },
      articleId: article.id,         // the newly generated ID from uuid
      articleTitle: article.title,
      articleUrl: article.url,
    };

    try {
      const response = await axios.post('http://localhost:8000/favorites/add', favoriteData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log('[useFavorites] addToFavorites response:', response.data);
      // Optionally refetch the favorites
      fetchFavorites();
    } catch (error) {
      console.error('[useFavorites] Error adding to favorites:', error);
    }
  };

  const removeFavorite = async (favoriteId) => {
    console.log('[useFavorites] removeFavorite called with:', favoriteId);
    const token = localStorage.getItem('token');
    if (!token) {
      alert('Please log in to remove favorites');
      return;
    }

    try {
      const response = await axios.delete(`http://localhost:8000/favorites/remove/${favoriteId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log('[useFavorites] removeFavorite response:', response.data);
      // Update local state
      setFavorites((prev) => prev.filter((fav) => fav.id !== favoriteId));
    } catch (error) {
      console.error('[useFavorites] Error removing favorite:', error);
    }
  };

  return {
    favorites,
    fetchFavorites,
    addToFavorites,
    removeFavorite,
  };
}
