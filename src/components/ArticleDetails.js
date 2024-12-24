// src/pages/ArticleDetails.js
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios'; // or your axiosInstance if you prefer
import './styles/ArticleDetails.css';

function ArticleDetails() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const article = state?.article;
  const [isFavorite, setIsFavorite] = useState(false);
  const [favoriteId, setFavoriteId] = useState(null); // To track the Favorite's ID

  /**
   * Helper to generate a unique ID (timestamp + random)
   * if the article doesn't have one.
   */
  const generateArticleId = () => {
    return Date.now().toString(36) + Math.random().toString(36).slice(2);
  };

  /**
   * Helper to decode the userId from the JWT.
   */
  const getUserIdFromToken = (token) => {
    try {
      const payloadBase64 = token.split('.')[1];
      if (!payloadBase64) return null;
      const decodedPayload = atob(payloadBase64);
      const parsed = JSON.parse(decodedPayload);
      return parsed.userId || null;
    } catch (error) {
      console.error('[ArticleDetails] Error parsing token:', error);
      return null;
    }
  };

  /**
   * Check if the current article is already in favorites on component mount.
   */
  useEffect(() => {
    const checkIfFavorite = async () => {
      const token = localStorage.getItem('token');
      if (!token) return;

      const userId = getUserIdFromToken(token);
      if (!userId) return;

      try {
        const response = await axios.get(`http://localhost:8000/favorites/user?userId=${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const favorites = response.data;
        const existingFavorite = favorites.find(fav => fav.articleId === (article.id || generateArticleId()));
        if (existingFavorite) {
          setIsFavorite(true);
          setFavoriteId(existingFavorite.id);
        }
      } catch (error) {
        console.error('[ArticleDetails] Error fetching favorites:', error);
      }
    };

    checkIfFavorite();
    // eslint-disable-next-line
  }, [article]);

  /**
   * POST /favorites/add to actually persist the favorite.
   * Generates an articleId if articleObj doesn't have one.
   */
  const addToFavoritesBackend = async (articleObj) => {
    const token = localStorage.getItem('token');
    if (!token) {
      alert('Please log in to add articles to favorites');
      return;
    }

    const userId = getUserIdFromToken(token);
    if (!userId) {
      alert('No userId found in token payload');
      return;
    }

    // If the article lacks an .id, generate a unique one:
    if (!articleObj.id) {
      articleObj.id = generateArticleId();
      console.log('[ArticleDetails] Generated articleId:', articleObj.id);
    }

    // Construct the favorite object
    const favoriteData = {
      user: { id: userId },
      articleId: articleObj.id,      // guaranteed non-null now
      articleTitle: articleObj.title || 'No Title',
      articleUrl: articleObj.url || '',
    };

    try {
      console.log('[ArticleDetails] addToFavoritesBackend sending:', favoriteData);
      // If you prefer your axiosInstance, use that instead of axios:
      // await axiosInstance.post('/favorites/add', favoriteData, { ... })
      const response = await axios.post('http://localhost:8000/favorites/add', favoriteData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log('[ArticleDetails] addToFavoritesBackend response:', response.data);
      
      // Assuming the backend returns the created Favorite object, including 'id'
      const savedFavorite = response.data;
      if (savedFavorite && savedFavorite.id) {
        setFavoriteId(savedFavorite.id);
        setIsFavorite(true);
      }

      alert('Article added to favorites');
    } catch (error) {
      console.error('[ArticleDetails] Error adding to favorites:', error);
      alert('Failed to add favorite. Check console for details.');
    }
  };

  /**
   * DELETE /favorites/remove/{id} to remove the favorite.
   */
  const removeFromFavoritesBackend = async (favoriteId) => {
    const token = localStorage.getItem('token');
    if (!token) {
      alert('Please log in to remove favorites');
      return;
    }
    try {
      console.log('[ArticleDetails] removeFromFavoritesBackend sending DELETE for favoriteId:', favoriteId);
      const response = await axios.delete(`http://localhost:8000/favorites/remove/${favoriteId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log('[ArticleDetails] removeFromFavoritesBackend response:', response.data);
      alert('Article removed from favorites');
    } catch (error) {
      console.error('[ArticleDetails] Error removing favorite:', error);
      alert('Failed to remove favorite. Check console for details.');
    }
  };

  /**
   * Toggle the local isFavorite, but also call the backend if user is logged in.
   */
  const toggleFavorite = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      alert('Please log in to add articles to favorites');
      return;
    }

    if (!isFavorite) {
      // If currently NOT a favorite, do "add"
      await addToFavoritesBackend(article);
      // setIsFavorite(true); // already set in addToFavoritesBackend if successful
    } else {
      // If currently a favorite, do "remove"
      if (favoriteId) {
        await removeFromFavoritesBackend(favoriteId);
        setFavoriteId(null);
        setIsFavorite(false);
      } else {
        alert('Cannot remove favorite: Favorite ID not found.');
      }
    }
  };

  if (!article) return <div>Article not found!</div>;

  return (
    <div className="article-details">
      <button onClick={() => navigate(-1)} className="back-button">Back</button>
      <h2>{article.title}</h2>
      <p><strong>Published At:</strong> {new Date(article.publishedAt).toLocaleString()}</p>
      {article.urlToImage && <img src={article.urlToImage} alt={article.title} className="article-image" />}
      <p>{article.content}</p>
      <a href={article.url} target="_blank" rel="noopener noreferrer" className="read-more-link">
        Read Full Article
      </a>
      <button onClick={toggleFavorite} className="favorite-btn">
        {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
    </div>
  );
}

export default ArticleDetails;
