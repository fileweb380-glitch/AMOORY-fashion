
import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, ArrowLeft, ShoppingBag, ArrowRight } from 'lucide-react';

export default function ComingSoon() {
  return (
    <main className="coming-soon-page">
      <div className="coming-soon-card">
        <div className="coming-soon-icon">
          <Clock size={42} />
        </div>

        <span className="coming-soon-label">
          We'll Start Soon Ordering System
        </span>

        <h1>Coming Soon!</h1>

        <p>
          Our online ordering experience is currently under development.
          We're working hard to make shopping with us easier. For Now Order On Telegram
          Stay tuned!
        </p>

        <div className="coming-soon-status">
          <ShoppingBag size={18} />
          <span>Online ordering is coming soon</span>
        </div>

        <div className="coming-soon-actions">
  <Link to="/shop" className="coming-soon-back">
    <ArrowLeft size={18} />
    Back to Shop
  </Link>

  <a
    href="https://t.me/amoorymama"
    className="coming-soon-back"
    target="_blank"
    rel="noopener noreferrer"
  >
    <ArrowRight size={18} />
    Go to Telegram Channel
  </a>
</div>
      </div>
    </main>
  );
}
