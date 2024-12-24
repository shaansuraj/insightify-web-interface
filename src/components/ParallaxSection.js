// src/components/ParallaxSection.js
import React, { useEffect, useRef } from 'react';
import './styles/ParallaxSection.css';

const ParallaxSection = ({ image, children }) => {
  const sectionRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const { top } = sectionRef.current.getBoundingClientRect();
      const yOffset = -0.3 * top;
      sectionRef.current.style.backgroundPosition = `center ${yOffset}px`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      ref={sectionRef}
      className="parallax-section"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="parallax-content">{children}</div>
    </div>
  );
};

export default ParallaxSection;
