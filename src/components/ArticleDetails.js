import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ArticleDetails = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const article = state?.article;

  if (!article) return <div>Article not found!</div>;

  return (
    <div className="article-details">
      <button onClick={() => navigate(-1)} className="back-button">Back</button>
      <h2>{article.title}</h2>
      <p><strong>Published At:</strong> {new Date(article.publishedAt).toLocaleString()}</p>
      <img src={article.urlToImage} alt={article.title} className="article-image" />
      <p>{article.content}</p>
      <a href={article.url} target="_blank" rel="noopener noreferrer" className="read-more-link">Read Full Article</a>
    </div>
  );
};

export default ArticleDetails;
