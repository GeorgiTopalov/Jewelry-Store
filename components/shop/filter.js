import React from "react";
import styles from "../../styles/shop/filter.module.css";
import React, { useState } from 'react';

const FilterSection = () => {
  const [isCategoryOpen, setIsCategoryOpen] = useState({}); // State to track open categories

  const categories = {
    'Category': ['Stack ring', 'Wedding Band', 'Engagement Ring'],
    'Price': ['150$-300$', '300$-500$', '500$-800$', '800$-1200$', '1200$-2000$'],
    'Gemstone Shape': ['Oval', 'Radiant', 'Emerald', 'Marquise', 'Trillion'],
  };

  const toggleCategory = (category) => {
    setIsCategoryOpen(prevState => ({ ...prevState, [category]: !prevState[category] }));
  };

  return (
    <aside className={styles['filter-section']}>
      <h3>Filter by</h3>
      {Object.entries(categories).map(([category, options]) => (
        <div key={category} className={styles['filter-category']}>
          <button className={styles['category-title']} onClick={() => toggleCategory(category)}>
            {category}
          </button>
          {isCategoryOpen[category] && (
            <div className={styles.options}>
              {options.map(option => (
                <label key={option} className={styles['option']}>
                  <input type="checkbox" value={option} />
                  {option}
                </label>
              ))}
            </div>
          )}
        </div>
      ))}
    </aside>
  );
};

export default FilterSection;

