import React, { createContext, useState, useContext, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

const themes = {
  default: { '--primary': '#003366', '--button-bg': '#007acc', '--button-hover': '#005b99' },
  summer: { '--primary': '#ff7f50', '--button-bg': '#ffa07a', '--button-hover': '#ff6347' },
  winter: { '--primary': '#4682b4', '--button-bg': '#1e90ff', '--button-hover': '#00bfff' },
  dark: { '--primary': '#222', '--button-bg': '#555', '--button-hover': '#333', '--text-color': '#fff' },
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('default');
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  useEffect(() => {
    const selectedTheme = darkMode ? themes.dark : themes[theme];
    Object.keys(selectedTheme).forEach((key) => {
      document.documentElement.style.setProperty(key, selectedTheme[key]);
    });
  }, [theme, darkMode]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
