
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Layers3 } from 'lucide-react';
import { CATEGORIES } from '../data/categories';

export default function CategoriesDirectory() {
  return (
    <main className="categories-directory">
      {/* Page Header */}
      <header className="categories-header">
        <div className="categories-eyebrow">
          <span className="categories-eyebrow-line" />
          <span>Discover Your Style</span>
          <span className="categories-eyebrow-line" />
        </div>

        <h1>
          All <span>Categories</span>
        </h1>

        <p>
          Explore our collections, discover your favorites, and
          find pieces that reflect your personal style.
        </p>

        <div className="categories-count">
          <Layers3 size={16} />
          <span>
            {CATEGORIES.length} Collections to Explore
          </span>
        </div>
      </header>

      {/* Category Grid */}
      {CATEGORIES.length > 0 ? (
        <section
          className="categories-grid"
          aria-label="All clothing categories"
        >
          {CATEGORIES.map((cat, index) => (
            <Link
              key={cat.id}
              to={`/shop?category=${encodeURIComponent(cat.id)}`}
              className="category-directory-card"
              aria-label={`Explore ${cat.name}`}
            >
              <div className="category-directory-image">
                <img
                  src={cat.image}
                  alt={cat.name}
                  loading={index < 3 ? 'eager' : 'lazy'}
                />

                <div className="category-directory-overlay" />

                <span className="category-directory-number">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <div className="category-directory-content">
                  <span className="category-directory-label">
                    Explore the Collection
                  </span>

                  <h2>{cat.name}</h2>

                  <span className="category-directory-link">
                    <span>Shop Collection</span>
                    <span className="category-directory-arrow">
                      <ArrowRight size={17} />
                    </span>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </section>
      ) : (
        <div className="categories-empty">
          <Layers3 size={35} />
          <h2>No categories available yet</h2>
          <p>Please check back soon for our latest collections.</p>
        </div>
      )}

      {/* Closing Section */}
      <section className="categories-closing">
        <span className="categories-closing-label">
          AMOORY FASHION
        </span>

        <h2>Your Style. Your Story.</h2>

        <p>
          Every collection brings a new way to express yourself.
          Find the pieces that feel like you.
        </p>

        <Link to="/shop" className="categories-shop-button">
          Explore All Products
          <ArrowRight size={17} />
        </Link>
      </section>
    </main>
  );
}
