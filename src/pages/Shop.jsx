
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  Search,
  AlertCircle,
  SlidersHorizontal,
  X,
} from 'lucide-react';

import ProductCard from '../components/ProductCard';

import { CATEGORIES } from '../data/categories';
import { PRODUCTS } from '../data/products';

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();

  const categoryParam = searchParams.get('category') || 'all';
  const searchParam = searchParams.get('search') || '';

  const [selectedCategory, setSelectedCategory] =
    useState(categoryParam);

  const [searchFilter, setSearchFilter] = useState(searchParam);
  const [sortBy, setSortBy] = useState('newest');

  useEffect(() => {
    setSelectedCategory(searchParams.get('category') || 'all');
    setSearchFilter(searchParams.get('search') || '');
  }, [searchParams]);

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);

    const params = new URLSearchParams(searchParams);

    if (categoryId === 'all') {
      params.delete('category');
    } else {
      params.set('category', categoryId);
    }

    setSearchParams(params);
  };

  const handleSearchChange = (value) => {
    setSearchFilter(value);

    const params = new URLSearchParams(searchParams);

    if (value.trim()) {
      params.set('search', value);
    } else {
      params.delete('search');
    }

    setSearchParams(params);
  };

  const resetFilters = () => {
    setSelectedCategory('all');
    setSearchFilter('');
    setSortBy('newest');
    setSearchParams({});
  };

  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesCategory =
      selectedCategory === 'all' ||
      product.category === selectedCategory;

    const searchText = searchFilter.trim().toLowerCase();

    const matchesSearch =
      (product.name || '').toLowerCase().includes(searchText) ||
      (product.description || '').toLowerCase().includes(searchText) ||
      (product.category || '').toLowerCase().includes(searchText);

    return matchesCategory && matchesSearch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-low') {
      return Number(a.price || 0) - Number(b.price || 0);
    }

    if (sortBy === 'price-high') {
      return Number(b.price || 0) - Number(a.price || 0);
    }

    if (sortBy === 'featured') {
      return Number(Boolean(b.featured)) -
        Number(Boolean(a.featured));
    }

    const dateA = Date.parse(a.dateAdded || '') || 0;
    const dateB = Date.parse(b.dateAdded || '') || 0;

    return dateB - dateA;
  });

  return (
    <main className="shop-page">
      {/* Page Heading */}
      <header className="shop-header">
        <span className="shop-eyebrow">Curated for You</span>

        <h1>Amoory Collections</h1>

        <p>
          Discover your next favorite look. Explore thoughtfully
          selected styles, search our collection, and find pieces
          that feel like you.
        </p>

        <div className="shop-header-divider">
          <span />
          <span className="shop-header-diamond">◆</span>
          <span />
        </div>
      </header>

      {/* Search and Filters */}
      <section
        className="shop-toolbar"
        aria-label="Product filters"
      >
        <div className="shop-toolbar-top">
          <div className="shop-search">
            <Search size={19} aria-hidden="true" />

            <input
              type="search"
              aria-label="Search products"
              placeholder="Search by name, description, or category..."
              value={searchFilter}
              onChange={(event) =>
                handleSearchChange(event.target.value)
              }
            />

            {searchFilter && (
              <button
                type="button"
                className="shop-clear-search"
                onClick={() => handleSearchChange('')}
                aria-label="Clear search"
              >
                <X size={17} />
              </button>
            )}
          </div>

          <label className="shop-sort-control">
            <SlidersHorizontal size={17} aria-hidden="true" />

            <span>Sort:</span>

            <select
              value={sortBy}
              onChange={(event) => setSortBy(event.target.value)}
              aria-label="Sort products"
            >
              <option value="newest">Newest Arrivals</option>
              <option value="featured">Featured First</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </label>
        </div>

        {/* Categories */}
        <div className="shop-category-area">
          <div className="shop-category-heading">
            <span>Explore Categories</span>

            <span className="shop-category-count">
              {CATEGORIES.length} categories
            </span>
          </div>

          <div className="shop-category-list">
            <button
              type="button"
              onClick={() => handleCategoryChange('all')}
              className={`shop-category-button ${
                selectedCategory === 'all' ? 'is-active' : ''
              }`}
              aria-pressed={selectedCategory === 'all'}
            >
              All Items
              <span className="shop-category-number">
                {PRODUCTS.length}
              </span>
            </button>

            {CATEGORIES.map((category) => (
              <button
                type="button"
                key={category.id}
                onClick={() =>
                  handleCategoryChange(category.id)
                }
                className={`shop-category-button ${
                  selectedCategory === category.id
                    ? 'is-active'
                    : ''
                }`}
                aria-pressed={
                  selectedCategory === category.id
                }
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Results Heading */}
      <div className="shop-results-heading">
        <div>
          <span className="shop-eyebrow">The Collection</span>

          <h2>
            {selectedCategory === 'all'
              ? 'All Products'
              : CATEGORIES.find(
                  (category) =>
                    category.id === selectedCategory
                )?.name || 'Filtered Products'}
          </h2>
        </div>

        <p aria-live="polite">
          <strong>{sortedProducts.length}</strong>{' '}
          {sortedProducts.length === 1 ? 'item' : 'items'} found
        </p>
      </div>

      {/* Centered Product Grid */}
      {sortedProducts.length > 0 ? (
        <section className="amoory-catalog">
          <div className="amoory-catalog__grid">
            {sortedProducts.map((product) => (
              <ProductCard
                key={product.id ?? product._id}
                product={product}
              />
            ))}
          </div>
        </section>
      ) : (
        <section className="shop-empty-state">
          <div className="shop-empty-icon">
            <AlertCircle size={34} />
          </div>

          <span className="shop-eyebrow">
            Nothing Here Yet
          </span>

          <h2>No Products Found</h2>

          <p>
            We couldn't find anything matching your search or
            selected category. Try another search or explore
            all our products.
          </p>

          <button
            type="button"
            onClick={resetFilters}
            className="shop-reset-button"
          >
            Reset Filters
          </button>
        </section>
      )}

      {/* Footer Statement */}
      <footer className="shop-footer">
        <span className="shop-footer-line" />
        <p>Find your style. Make it yours.</p>
        <span className="shop-footer-line" />
      </footer>
    </main>
  );
}
