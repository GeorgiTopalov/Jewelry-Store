import styles from "../../styles/shop/filter.module.css";
import React, { useState } from "react";
import Link from "next/link";

const FilterSection = () => {
  const [isCategoryOpen, setIsCategoryOpen] = useState({}); 

  const categories = {
    Category: ["Stack ring", "Wedding Band", "Engagement Ring"],
    Price: ["150$-300$", "300$-500$", "500$-800$", "800$-1200$", "1200$-2000$"],
    "Gemstone Shape": ["Oval", "Radiant", "Emerald", "Marquise", "Trillion"],
    "Gemstone Color": ["Blue", "Red", "Green", "Transparent", "Yellow"]
  };

  const toggleCategory = (category) => {
    setIsCategoryOpen((prevState) => ({
      ...prevState,
      [category]: !prevState[category],
    }));
  };

  

  return (
    <aside id={styles['filter-menu']} >
      <Link href="#" className={styles["btn-filter"]}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 128 128"
          >
            <path d="M2.788,0h117.297c1.544,0,2.795,1.251,2.795,2.795c0,0.85-0.379,1.611-0.978,2.124l-46.82,46.586v39.979 c0,1.107-0.643,2.063-1.576,2.516l-22.086,12.752c-1.333,0.771-3.039,0.316-3.812-1.016c-0.255-0.441-0.376-0.922-0.375-1.398 h-0.006V51.496L0.811,4.761C-0.275,3.669-0.27,1.904,0.822,0.819c0.544-0.541,1.255-0.811,1.966-0.811V0L2.788,0z M113.323,5.591 H9.493L51.851,48.24c0.592,0.512,0.966,1.27,0.966,2.114v49.149l16.674-9.625V50.354h0.008c0-0.716,0.274-1.432,0.822-1.977 L113.323,5.591L113.323,5.591z"/>
          </svg>
        Filter
      </Link>
      <div className={styles['filter-section']}>
        <h3>Filter by</h3>
        <div>
        {Object.entries(categories).map(([category, options]) => (
          <div key={category} className={styles['filter-category']}>
            <button
              className={styles['category-title']}
              onClick={() => toggleCategory(category)}
            >
              {category}
            </button>
            {isCategoryOpen[category] && (
              <div className={styles['sub-category']}>
                {options.map((option) => (
                  <label key={option}>
                    <input className={styles['filter-checkbox']} type="checkbox" value={option} />
                    {option}
                  </label>
                ))}
              </div>
            )}
          </div>
        ))}
        </div>
      </div>
    </aside>
  );
};

export default FilterSection;
