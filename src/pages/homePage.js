import React from 'react';
import { Link } from 'react-router-dom';
import './styles/HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage-container">
      <h1>Welcome to Insightify!</h1>
      <p>
        Discover the latest news across various categories, all together at one place for your convenience.
        Sign up to bookmark articles, and log in to access your favorites and curated news content.
      </p>
      <div className="homepage-buttons">
        <Link to="/about" className="homepage-btn">About</Link>
        <Link to="/login" className="homepage-btn">Log In</Link>
        <Link to="/signup" className="homepage-btn">Sign Up</Link>
      </div>
    </div>
  );
};

export default HomePage;
