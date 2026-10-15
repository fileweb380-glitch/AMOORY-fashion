
import React from 'react';
import {
  Phone,
  MapPin,
  Send,
  ArrowUpRight,
  Clock,
  ShoppingBag,
} from 'lucide-react';

export default function Contact() {
  return (
    <main className="contact-page">
      {/* Hero */}
      <header className="contact-hero">
        <span className="contact-eyebrow">We Are Here for You</span>

        <h1>
          Let's Start a <span>Conversation.</span>
        </h1>

        <p>
          Questions about our collections, sizes, or availability?
          We'd love to hear from you. Get in touch or visit us in store.
        </p>

        <div className="contact-hero-decoration" aria-hidden="true">
          <span />
          <span>✦</span>
          <span />
        </div>
      </header>

      {/* Contact Cards */}
      <section className="contact-grid">
        {/* Contact Information */}
        <article className="contact-card">
          <div className="contact-card-heading">
            <div className="contact-icon">
              <Phone size={23} />
            </div>

            <div>
              <span className="contact-card-eyebrow">Say Hello</span>
              <h2>Get in Touch</h2>
            </div>
          </div>

          <p className="contact-card-description">
            Reach out directly for product enquiries, availability,
            or help choosing your next look.
          </p>

          <div className="contact-divider" />

          <a className="contact-method" href="tel:+251949586551">
            <div className="contact-method-icon">
              <Phone size={19} />
            </div>

            <div className="contact-method-content">
              <span>Phone 1</span>
              <strong>+251 9 49 58 65 51</strong>
              <small>Call us directly</small>
            </div>

            <ArrowUpRight size={18} className="contact-method-arrow" />
          </a>

          <a className="contact-method" href="tel:+251917959217">
            <div className="contact-method-icon">
              <Phone size={19} />
            </div>

            <div className="contact-method-content">
              <span>Phone 2</span>
              <strong>+251 9 17 95 92 17</strong>
              <small>Our additional contact number</small>
            </div>

            <ArrowUpRight size={18} className="contact-method-arrow" />
          </a>

          <a
            className="contact-method"
            href="https://t.me/AmooryFashion"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="contact-method-icon">
              <Send size={19} />
            </div>

            <div className="contact-method-content">
              <span>Telegram</span>
              <strong>@AmooryFashion</strong>
              <small>Message us on Telegram</small>
            </div>

            <ArrowUpRight size={18} className="contact-method-arrow" />
          </a>

          <div className="contact-note">
            <ShoppingBag size={18} />
            <p>
              We're happy to help you find the right style for you.
            </p>
          </div>
        </article>

        {/* Store Location */}
        <article className="contact-card contact-location-card">
          <div className="contact-card-heading">
            <div className="contact-icon">
              <MapPin size={24} />
            </div>

            <div>
              <span className="contact-card-eyebrow">Come Visit Us</span>
              <h2>Our Location</h2>
            </div>
          </div>

          <p className="contact-card-description">
            Prefer to shop in person? Visit our store and explore
            our collection up close.
          </p>

          <div className="contact-divider" />

          <div className="contact-address">
            <div className="contact-method-icon">
              <MapPin size={21} />
            </div>

            <div>
              <span>Store Address</span>
              <strong>Redwa, Sabia, Unit Mall</strong>
              <p>First Floor</p>
            </div>
          </div>

          <div className="contact-location-banner">
            <div className="contact-location-banner-icon">
              <Clock size={21} />
            </div>

            <div>
              <strong>Planning a Visit?</strong>
              <p>
                Contact us before visiting to confirm our store hours
                and product availability.
              </p>
            </div>
          </div>

          <div className="contact-location-bottom">
            <span className="contact-location-dot" />
            <p>We look forward to welcoming you.</p>
          </div>
        </article>
      </section>

      {/* Closing Banner */}
      <section className="contact-closing">
        <span className="contact-eyebrow">Amoory Fashion</span>

        <h2>Good Style. Great Service.</h2>

        <p>
          Your next favorite piece might be just one conversation away.
        </p>

        <a href="https://t.me/AmooryFashion"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-telegram-button"
        >
          <Send size={17} />
          Message Us on Telegram
          <ArrowUpRight size={17} />
        </a>
      </section>

      {/* Brand Footer */}
      <footer className="contact-footer">
        <span>STYLE</span>
        <span className="contact-footer-dot">•</span>
        <span>QUALITY</span>
        <span className="contact-footer-dot">•</span>
        <span>YOU</span>
      </footer>
    </main>
  );
}
