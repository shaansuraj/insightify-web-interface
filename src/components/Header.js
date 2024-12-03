import React from 'react';
import CategorySelector from './CategorySelector';

const Header = ({ setCategory }) => {
  return (
    <header className="header">
      <h1>Insightify</h1>
      <CategorySelector setCategory={setCategory} />
    </header>
  );
};

export default Header;
