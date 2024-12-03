import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// Function to validate and format the data fetched from the API
const validateAndFormatData = (fetchedData) => {
  if (Array.isArray(fetchedData)) {
    return fetchedData;  // Data is already an array
  } else if (fetchedData && typeof fetchedData === 'object' && fetchedData.articles) {
    return Array.isArray(fetchedData.articles) ? fetchedData.articles : [];
  } else {
    console.error('Articles data is not in the expected format');
    return [];
  }
};

const ArticleList = ({ category }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);
      try {
        const response = await fetch(`http://localhost:8000/news?category=${category}`);
        
        if (!response.ok) {
          console.error('Failed to fetch articles, status:', response.status);
          setArticles([]);
          return;
        }

        const data = await response.json();
        console.log('Fetched data:', data); // Log the data from the backend

        const formattedArticles = validateAndFormatData(data);
        setArticles(formattedArticles);
      } catch (error) {
        console.error('Error fetching articles:', error);
        setArticles([]);
      }
      setLoading(false);
    };

    fetchArticles();
  }, [category]);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="article-list">
      {Array.isArray(articles) && articles.length > 0 ? (
        articles.map((article, index) => (
          <Link to={`/article/${index}`} state={{ article }} key={index} className="article-link">
            <div className="article-item">
              <h3>{article.title}</h3>
              <p>{new Date(article.publishedAt).toLocaleString()}</p>
            </div>
          </Link>
        ))
      ) : (
        <div>No articles found.</div>
      )}
    </div>
  );
};

export default ArticleList;
