
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import Hero from '../components/Hero';
import Benefits from '../components/Benefits';
import CategoryCard from '../components/CategoryCard';
import ProductCard from '../components/ProductCard';
import { CATEGORIES } from '../data/categories';
import { PRODUCTS } from '../data/products';

export default function Home() {
  const featuredProducts = PRODUCTS.filter(
    (product) => product.featured
  ).slice(0, 8);

  const previewCategories = CATEGORIES.slice(0, 10);

  return (
    <main className="home-page">
      {/* Hero Section */}
      <section className="home-hero-section">
        <Hero />
      </section>

      {/* Benefits Section */}
      <section className="home-benefits-section">
        <Benefits />
      </section>

      {/* Shop by Category */}
      <section className="home-categories-section">
        <div className="home-container">
          <div className="home-section-heading">
            <div>
              <span className="home-eyebrow">
                Curated Collections
              </span>
              <h2>Shop by Category</h2>
            </div>

            <Link to="/categories" className="home-section-link">
              View All Categories
              <ChevronRight size={17} />
            </Link>
          </div>

          {previewCategories.length > 0 ? (
            <div className="home-category-grid">
              {previewCategories.map((category) => (
                <CategoryCard
                  key={category.id}
                  category={category}
                />
              ))}
            </div>
          ) : (
            <p className="home-empty-message">
              Our collections are being prepared. Please check back soon.
            </p>
          )}
        </div>
      </section>

      {/* Featured Products */}
      <section className="home-products-section">
        <div className="home-container">
          <div className="home-section-heading">
            <div>
              <span className="home-eyebrow">
                Handpicked Selection
              </span>
              <h2>Featured Garments</h2>
            </div>

            <Link to="/shop" className="home-section-link">
              Browse All Products
              <ChevronRight size={17} />
            </Link>
          </div>

          {featuredProducts.length > 0 ? (
            <div className="home-product-grid">
              {featuredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))}
            </div>
          ) : (
            <p className="home-empty-message">
              New featured products are coming soon.
            </p>
          )}
        </div>
      </section>

      {/* Brand Philosophy */}
      <section className="home-philosophy">
        <div className="home-philosophy-decoration" aria-hidden="true">
          A
        </div>

        <div className="home-philosophy-content">
          <span className="home-eyebrow">
            Amoory Philosophy
          </span>

          <h2>
            "You can't have anything you want in life if you dress for it."
          </h2>

          <p>
            Discover quality, thoughtful craftsmanship, and modern
            styles designed to help you express your personality.
          </p>

          <Link to="/shop" className="home-philosophy-button">
            Explore Full Collection
            <span aria-hidden="true"> →</span>
          </Link>
        </div>
      </section>

      {/* Closing Brand Statement */}
      <footer className="home-brand-footer">
        <span>STYLE</span>
        <span className="home-footer-dot">•</span>
        <span>QUALITY</span>
        <span className="home-footer-dot">•</span>
        <span>YOU</span>
      </footer>
    </main>
  );
}
