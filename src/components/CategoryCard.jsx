
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function CategoryCard({ category }) {
  if (!category) return null;

  return (
    <Link
      to={`/shop?category=${encodeURIComponent(category.id)}`}
      className="category-card"
      aria-label={`Explore ${category.name}`}
    >
      <div className="category-card-image">
        {category.image ? (
          <img
            src={category.image}
            alt={category.name}
            loading="lazy"
          />
        ) : (
          <div className="category-card-placeholder">
            <span>{category.name}</span>
          </div>
        )}

        <div className="category-card-overlay" />
      </div>

      <div className="category-card-content">
        <div className="category-card-text">
          <h3>{category.name}</h3>
          <span>Explore Collection</span>
        </div>

        <span className="category-card-arrow" aria-hidden="true">
          <ArrowRight size={20} />
        </span>
      </div>
    </Link>
  );
}
