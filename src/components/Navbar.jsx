
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  ShoppingBag,
  Search,
  Menu,
  X,
  Send,
  Camera,
} from 'lucide-react';
import { useShop } from '../context/ShopContext';


export default function Navbar() {
  const { totalCartItems } = useShop();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();

    const query = searchQuery.trim();

    if (query) {
      navigate(`/shop?search=${encodeURIComponent(query)}`);
      setSearchQuery('');
      closeMobileMenu();
    }
  };

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/shop', label: 'Shop' },
    { to: '/categories', label: 'Categories' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <header className="amoory-header">
      <div className="navbar-container">

<img
  src="/AMOORY.jpg"
  alt="Amoory Fashion"
  className="navbar-logo-image"
/>


        {/* Desktop Navigation */}
        <nav className="navbar-desktop-links" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link key={link.to} to={link.to}>
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="navbar-actions">
          {/* Desktop Search */}
          <form
            onSubmit={handleSearchSubmit}
            className="navbar-search navbar-desktop-search"
            role="search"
          >
            <Search size={17} aria-hidden="true" />

            <input
              type="search"
              placeholder="Search clothes..."
              aria-label="Search products"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </form>

          {/* Shopping Cart */}
          <Link
            to="/cart"
            className="navbar-cart"
            aria-label={`Shopping cart, ${totalCartItems || 0} items`}
          >
            <ShoppingBag size={22} />

            {totalCartItems > 0 && (
              <span className="navbar-cart-count">
                {totalCartItems}
              </span>
            )}
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="navbar-menu-toggle"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="navbar-mobile-menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        id="navbar-mobile-menu"
        className={`navbar-mobile-menu ${
          mobileMenuOpen ? 'navbar-mobile-menu-open' : ''
        }`}
        aria-hidden={!mobileMenuOpen}
        inert={!mobileMenuOpen}
      >
        {/* Mobile Search */}
        <form
          onSubmit={handleSearchSubmit}
          className="navbar-search navbar-mobile-search"
          role="search"
        >
          <Search size={18} aria-hidden="true" />

          <input
            type="search"
            placeholder="Search clothes..."
            aria-label="Search products"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          <button type="submit" aria-label="Submit search">
            Search
          </button>
        </form>

        {/* Mobile Links */}
        <nav aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={closeMobileMenu}
              tabIndex={mobileMenuOpen ? 0 : -1}
            >
              {link.label === 'Shop'
                ? 'Shop All Collections'
                : link.label === 'About'
                  ? 'About Amoory'
                  : link.label === 'Contact'
                    ? 'Contact & Location'
                    : link.label}
            </Link>
          ))}

          <Link
            to="/cart"
            onClick={closeMobileMenu}
            tabIndex={mobileMenuOpen ? 0 : -1}
          >
            Shopping Cart
          </Link>
        </nav>

        {/* Mobile Footer */}
        <div className="navbar-mobile-footer">
          <span>Amoory Fashion © 2026</span>

          <div className="navbar-social-links">
            <a
              href="https://t.me/AmooryFashion"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Amoory Fashion on Telegram"
              tabIndex={mobileMenuOpen ? 0 : -1}
            >
              <Send size={19} />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              tabIndex={mobileMenuOpen ? 0 : -1}
            >
              <Camera size={19} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
