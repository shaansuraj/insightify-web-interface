import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ArticleList from './components/ArticleList';
import ArticleDetails from './components/ArticleDetails';
import './index.css';

const App = () => {
  const [category, setCategory] = useState('general');

  return (
    <Router>
      <Header setCategory={setCategory} />
      <div className="app-container">
        <Routes>
          <Route path="/" element={<ArticleList category={category} />} />
          <Route path="/article/:id" element={<ArticleDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
