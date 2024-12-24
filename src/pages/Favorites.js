// src/pages/Favorites.js
import React, { useEffect } from 'react';
import { useFavorites } from '../hooks/useFavorites'; 
import PageTransition from '../components/PageTransition';
import './styles/Favorites.css';

function Favorites() {
  const { favorites, fetchFavorites, removeFavorite } = useFavorites();

  useEffect(() => {
    fetchFavorites();
    // eslint-disable-next-line
  }, []);

  return (
    <PageTransition>
    <div className="favorites">
      <h2>My Favorites</h2>
      {favorites.length === 0 ? (
        <p>You have no favorite articles.</p>
      ) : (
        <div className="favorite-articles">
          {favorites.map((fav) => (
            <div key={fav.id} className="favorite-card" style={{ border: '1px solid #ddd', margin: '8px', padding: '8px' }}>
              <h3>{fav.articleTitle}</h3>
              {fav.articleUrlToImage && (
                <img
                  src={fav.articleUrlToImage}
                  alt={fav.articleTitle}
                  style={{ width: '100%', maxHeight: '200px', objectFit: 'cover' }}
                />
              )}
              <p><strong>URL:</strong> <a href={fav.articleUrl} target="_blank" rel="noopener noreferrer">{fav.articleUrl}</a></p>
              <p><strong>Article ID:</strong> {fav.articleId}</p>
              {/* Read Full Article opens the external URL */}
              <a href={fav.articleUrl} target="_blank" rel="noopener noreferrer" className="read-more-link">
                Read Full Article
              </a>
              <br />
              <button onClick={() => removeFavorite(fav.id)} className="remove-favorite-btn" style={{ marginTop: '8px', padding: '6px 12px' }}>
                Remove from Favorites
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
    </PageTransition>
  );
}

export default Favorites;
