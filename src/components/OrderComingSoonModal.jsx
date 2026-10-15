
import React from 'react';
import { X, Clock, Phone, MapPin } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export default function OrderComingSoonModal() {
  const { isModalOpen, closeModal } = useShop();

  if (!isModalOpen) return null;

  const handleCall = () => {
    closeModal();
    window.location.href = 'tel:+251949586551';
  };

  return (
    <div
      className="order-modal-overlay"
      onClick={closeModal}
    >
      <div
        className="order-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="order-modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={closeModal}
          className="order-modal-close"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        <div className="order-modal-icon">
          <Clock size={32} />
        </div>

        <div className="order-modal-heading">
          <h3 id="order-modal-title">
            Online Ordering Coming Soon!
          </h3>

          <p>
            We're working on bringing you a better shopping
            experience. For now, please contact us directly
            to ask about our products.
          </p>
        </div>

        <div className="order-modal-contact">
          <p className="order-modal-contact-title">
            Direct Contact:
          </p>

          <p className="order-modal-contact-item">
            <Phone size={15} />
            <span>
              +251 9 49 58 65 51 / +251 9 17 95 92 17
            </span>
          </p>

          <p className="order-modal-contact-item">
            <MapPin size={15} />
            <span>
              Redwa, Sabia, Unit Mall, First Floor
            </span>
          </p>
        </div>

        <div className="order-modal-actions">
          <button
            type="button"
            onClick={handleCall}
            className="order-modal-call btn-primary"
          >
            <Phone size={16} />
            Call Us Now
          </button>

          <button
            type="button"
            onClick={closeModal}
            className="order-modal-continue btn-outline"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
}
