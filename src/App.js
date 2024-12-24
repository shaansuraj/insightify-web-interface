// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; // For authenticated users
import HomePage from './pages/homePage'; // For non-authenticated users
import Login from './pages/Login';
import Signup from './pages/Signup';
import ArticleDetails from './components/ArticleDetails';
import Favorites from './pages/Favorites';
import Navbar from './components/Navbar';
import About from './pages/About';
import { ThemeProvider } from './context/ThemeContext'; // Added ThemeProvider import
import './App.css';

function App() {
  const [category, setCategory] = useState('general'); // State for category

  const token = localStorage.getItem('token'); // Check if the user is authenticated

  return (
    <ThemeProvider> {/* Wrap the app with ThemeProvider */}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={token ? <Home setCategory={setCategory} /> : <HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/article/:id" element={<ArticleDetails />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
