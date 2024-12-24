import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ArticleList from '../components/ArticleList';
import CategorySelector from '../components/CategorySelector';
import './styles/Home.css';

const Home = () => {
  // CHANGED: Instead of expecting setCategory as a prop ({ setCategory }),
  // we define our own local state for category here in Home.
  const [category, setCategory] = useState('general');

  const token = localStorage.getItem('token'); // Check if the user is logged in

  return (
    <div className="home-container">
      {token ? (
        <>
          <h1>Welcome Back!</h1>
          <p>Here are the latest articles curated just for you:</p>
          <p>Choose a category:</p>
          {/* CHANGED: We pass setCategory to the CategorySelector to update local state */}
          <CategorySelector setCategory={setCategory} />
          {/* CHANGED: We now pass the "category" state to ArticleList instead of hardcoding "general" */}
          <ArticleList category={category} />
        </>
      ) : (
        <div className="welcome-section">
          <h1>Welcome to Insightify!</h1>
          <p>
            Discover the latest news across various categories, summarized for your convenience.
            Sign up to bookmark articles, and log in to access your favorites and curated news content.
          </p>
          <div className="home-buttons">
            <Link to="/about" className="home-btn">About</Link>
            <Link to="/login" className="home-btn">Log In</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;