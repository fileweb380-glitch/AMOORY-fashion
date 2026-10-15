
import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Star, Headphones } from 'lucide-react';

const features = [
  {
    title: 'Premium Quality',
    description:
      'Handpicked fabrics and superior craftsmanship in every single garment.',
    Icon: ShieldCheck,
  },
  {
    title: 'Trendy & Modern',
    description:
      'Contemporary styles designed to help you express your personality.',
    Icon: Star,
  },
  {
    title: 'Dedicated Support',
    description:
      'We are here to help you via phone, Telegram, or in-store visits.',
    Icon: Headphones,
  },
];

export default function About() {
  return (
    <main className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <span className="about-eyebrow">About Amoory Fashion</span>

        <h1>
          Fashion Builds <span>Confidence.</span>
        </h1>

        <p className="about-hero-description">
          "You can't have anything you want in life if you dress for it."
          We provide trendy clothes, quality materials, and modern styles
          designed to empower your journey.
        </p>
      </section>

      {/* Our Story Section */}
      <section className="about-story">
        <div className="about-story-content">
          <span className="about-eyebrow">Our Commitment</span>

          <h2>Redefining Modern Style &amp; Quality</h2>

          <p>
            At Amoory Fashion, located in Redwa, Sabia, Unit Mall, we
            believe that what you wear is an extension of your ambition.
            Every garment in our collection—from crisp Oxford shirts to
            premium leather shoes and accessories—is selected with
            durability, comfort, and elegance in mind.
          </p>

          <Link to="/shop" className="about-shop-button">
            Shop Our Collection
            <span aria-hidden="true"> →</span>
          </Link>
        </div>

        <div className="about-story-image">
          <img
            src="https://placehold.co/800x1000/24211F/F6F0E6?text=Amoory+Fashion"
            alt="Amoory Fashion store"
            loading="lazy"
          />
          <div className="about-image-caption">
            <span>AMOORY FASHION</span>
            <p>Style that speaks for you.</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="about-features">
        <div className="about-features-heading">
          <span className="about-eyebrow">The Amoory Difference</span>
          <h2>Why Shop With Us?</h2>
          <p>
            More than fashion. It's about quality, confidence, and
            an experience you can trust.
          </p>
        </div>

        <div className="about-features-grid">
          {features.map(({ title, description, Icon }) => (
            <article className="about-feature-card" key={title}>
              <div className="about-feature-icon">
                <Icon size={25} strokeWidth={1.7} />
              </div>

              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="about-cta">
        <span className="about-eyebrow">Your Style Starts Here</span>
        <h2>Discover Your Next Favorite Look.</h2>
        <p>
          Explore our collection and find pieces that fit your
          personality and everyday life.
        </p>
        <Link to="/shop" className="about-cta-button">
          Explore Collection <span aria-hidden="true">→</span>
        </Link>
      </section>
    </main>
  );
}
