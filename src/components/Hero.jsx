
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section className="amoory-hero">
      <div className="hero-container">
        {/* Hero Content */}
        <div className="hero-content">
          <div className="hero-badge">
            Amoory Fashion
          </div>

          <h1 className="hero-title">
            Dress for the
            <br />
            <span>Life You Want.</span>
          </h1>

          <p className="hero-description">
            Trendy Clothes | Quality Materials | Modern Style.
            Elevate your everyday wardrobe with garments crafted
            for confidence and distinction.
          </p>

          {/* Action Buttons */}
          <div className="hero-actions">
            <Link to="/shop" className="hero-btn hero-btn-primary">
              Shop Collection
              <ArrowRight size={18} />
            </Link>

            <Link
              to="/categories"
              className="hero-btn hero-btn-outline"
            >
              Explore Categories
            </Link>
          </div>

          {/* Brand Highlights */}
          <div className="hero-highlights">
            <div className="hero-highlight">
              <CheckCircle size={17} />
              <span>100+ Premium Items</span>
            </div>

            <div className="hero-highlight">
              <CheckCircle size={17} />
              <span>High-Grade Fabrics</span>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="hero-visual">
          <div className="hero-image-frame">
            <img
              src="/he.jpg"
              alt="Amoory Fashion lifestyle collection"
              className="hero-image"
              fetchPriority="high"
            />

            <div className="hero-image-caption">
              <p className="hero-caption-label">
                Signature Mantra
              </p>

              <p className="hero-caption-text">
                Fashion Builds Confidence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
