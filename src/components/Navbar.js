import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import Tooltip from './Tooltip';
import './styles/Navbar.css';

function Navbar() {
  const { darkMode, toggleDarkMode } = useTheme();
  const token = localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/';
  };

  return (
    <nav className="navbar">
      <h1 className="logo">Insightify</h1>
      <div className="nav-links">
        <Tooltip text="Go to Home">
          <Link to="/" className="nav-link">Home</Link>
        </Tooltip>
        <Tooltip text="About Us">
          <Link to="/about" className="nav-link">About</Link>
        </Tooltip>
        {token ? (
          <>
            <Tooltip text="Your favorite articles">
              <Link to="/favorites" className="nav-link">Favorites</Link>
            </Tooltip>
            <Tooltip text="Logout from your account">
              <button onClick={handleLogout} className="logout-btn">Logout</button>
            </Tooltip>
          </>
        ) : (
          <Tooltip text="Log in to access more features">
            <Link to="/login" className="nav-link">Login</Link>
          </Tooltip>
        )}
        <Tooltip text={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}>
          <button onClick={toggleDarkMode} className="theme-toggle-btn">
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </Tooltip>
      </div>
    </nav>
  );
}

export default Navbar;
