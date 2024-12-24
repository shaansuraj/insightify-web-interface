import React from 'react';
import { useTheme } from '../context/ThemeContext';
import './styles/ThemeToggler.css';

const ThemeToggler = () => {
  const { theme, setTheme, darkMode, toggleDarkMode } = useTheme();

  return (
    <div className="theme-toggler">
      <button onClick={toggleDarkMode}>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
      <button className={theme === 'default' ? 'active' : ''} onClick={() => setTheme('default')}>
        Default
      </button>
      <button className={theme === 'summer' ? 'active' : ''} onClick={() => setTheme('summer')}>
        Summer
      </button>
      <button className={theme === 'winter' ? 'active' : ''} onClick={() => setTheme('winter')}>
        Winter
      </button>
    </div>
  );
};

export default ThemeToggler;
