import React from 'react';

const CategorySelector = ({ setCategory }) => {
  const categories = ['general', 'business', 'entertainment', 'health', 'science', 'sports', 'technology'];

  return (
    <div className="category-selector-container">
      <label htmlFor="category">Choose a category: </label>
      <select
        id="category"
        onChange={(e) => setCategory(e.target.value)}
        className="category-selector"
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategorySelector;
