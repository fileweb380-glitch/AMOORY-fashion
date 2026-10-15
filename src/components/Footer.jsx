
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Send, Camera } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { to: '/', label: 'Home' },
    { to: '/shop', label: 'Shop All' },
    { to: '/categories', label: 'Categories' },
    { to: '/about', label: 'About Us' },
    { to: '/contact', label: 'Contact & Location' },
  ];

  const categoryLinks = [
    { to: '/shop?category=shirts', label: 'Shirts' },
    { to: '/shop?category=t-shirts', label: 'T-Shirts' },
    { to: '/shop?category=jeans', label: 'Jeans' },
    { to: '/shop?category=shoes', label: 'Shoes' },
    { to: '/shop?category=accessories', label: 'Accessories' },
  ];

  return (
    <footer className="amoory-footer">
      <div className="footer-container">
        {/* Main Footer Columns */}
        <div className="footer-grid">
          {/* Brand Information */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <span className="footer-logo-name">AMOORY</span>
              <span className="footer-logo-subtitle">Fashion</span>
            </Link>

            <p className="footer-quote">
              "You can't have anything you want in life if you dress for it."
            </p>

            <p className="footer-tagline">
              Trendy Clothes | Quality Materials | Modern Style
            </p>

            <div className="footer-socials">
              <a
                href="https://t.me/AmooryFashion"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Amoory Fashion on Telegram"
              >
                <Send size={17} />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Camera size={17} />
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="footer-column">
            <h3>Quick Navigation</h3>

            <ul>
              {navigationLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div className="footer-column">
            <h3>Top Categories</h3>

            <ul>
              {categoryLinks.map((category) => (
                <li key={category.to}>
                  <Link to={category.to}>{category.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Store Contact */}
          <div className="footer-column footer-contact">
            <h3>Store Visit</h3>

            <div className="footer-contact-list">
              <p>
                <MapPin size={17} />
                <span>
                  Redwa, Sabia, Unit Mall, First Floor
                </span>
              </p>

              <a href="tel:+251949586551">
                <Phone size={16} />
                <span>+251 9 49 58 65 51</span>
              </a>

              <a href="tel:+251917959217">
                <Phone size={16} />
                <span>+251 9 17 95 92 17</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>
            © {currentYear} AMOORY FASHION. All rights reserved.
          </p>

          <p className="footer-bottom-tagline">
            Designed for Premium Fashion Excellence
          </p>
        </div>
      </div>
    </footer>
  );
}
