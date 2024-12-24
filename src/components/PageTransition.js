// src/components/PageTransition.js
import React, { useState, useEffect } from 'react';
import './styles/PageTransition.css';

const PageTransition = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
    return () => setIsVisible(false);
  }, []);

  return (
    <div className={`page-transition ${isVisible ? 'visible' : 'hidden'}`}>
      {children}
    </div>
  );
};

export default PageTransition;
