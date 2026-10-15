
import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShoppingBag,
  Plus,
  Minus,
  Trash2,
  ArrowRight,
} from 'lucide-react';
import { useShop } from '../context/ShopContext';

export default function Cart() {
  const {
    cart,
    updateQuantity,
    removeFromCart,
    cartSubtotal,
    openComingSoonModal,
  } = useShop();

  const formatPrice = (price) => Number(price || 0).toLocaleString();

  return (
    <main className="cart-page">
      {/* Page Heading */}
      <header className="cart-heading">
        <span className="cart-eyebrow">Your Bag</span>
        <h1>Shopping Cart</h1>
        <p>Review your selected pieces before you continue.</p>
      </header>

      {cart.length > 0 ? (
        <div className="cart-layout">
          {/* Cart Items */}
          <section className="cart-items" aria-label="Shopping cart items">
            <div className="cart-items-heading">
              <h2>Your Selection</h2>
              <span>
                {cart.reduce(
                  (total, item) => total + Number(item.quantity || 0),
                  0
                )}{' '}
                items
              </span>
            </div>

            {cart.map((item, index) => (
              <article className="cart-item" key={index}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-item-image"
                />

                <div className="cart-item-details">
                  <span className="cart-item-category">
                    {item.category}
                  </span>

                  <h3>{item.name}</h3>

                  <div className="cart-item-options">
                    <span>
                      Size: <strong>{item.size || 'N/A'}</strong>
                    </span>
                    <span>
                      Color: <strong>{item.color || 'N/A'}</strong>
                    </span>
                  </div>

                  <p className="cart-item-price">
                    {formatPrice(item.price)} ETB
                  </p>

                  <div className="cart-item-actions">
                    <div
                      className="cart-quantity"
                      aria-label={`Quantity for ${item.name}`}
                    >
                      <button
                        type="button"
                        onClick={() => updateQuantity(index, -1)}
                        aria-label={`Decrease quantity of ${item.name}`}
                        disabled={Number(item.quantity) <= 1}
                      >
                        <Minus size={14} />
                      </button>

                      <span aria-live="polite">{item.quantity}</span>

                      <button
                        type="button"
                        onClick={() => updateQuantity(index, 1)}
                        aria-label={`Increase quantity of ${item.name}`}
                      >
                        <Plus size={14} />
                      </button>
                    </div>

                    <button
                      type="button"
                      className="cart-remove-button"
                      onClick={() => removeFromCart(index)}
                      aria-label={`Remove ${item.name} from cart`}
                    >
                      <Trash2 size={17} />
                      <span>Remove</span>
                    </button>
                  </div>
                </div>

                <div className="cart-item-total">
                  <span>Item total</span>
                  <strong>
                    {formatPrice(
                      Number(item.price || 0) *
                        Number(item.quantity || 0)
                    )}{' '}
                    ETB
                  </strong>
                </div>
              </article>
            ))}

            <Link to="/shop" className="cart-back-link">
              <span aria-hidden="true">←</span> Continue browsing
            </Link>
          </section>

          {/* Order Summary */}
          <aside className="cart-summary">
            <h2>Order Summary</h2>

            <div className="cart-summary-row">
              <span>Subtotal</span>
              <strong>{formatPrice(cartSubtotal)} ETB</strong>
            </div>

            <div className="cart-summary-row">
              <span>Estimated shipping</span>
              <span className="cart-shipping-note">
                Confirm at checkout
              </span>
            </div>

            <p className="cart-shipping-info">
              Shipping costs will be confirmed when you arrange your order.
            </p>

            <div className="cart-summary-total">
              <span>Total</span>
              <strong>{formatPrice(cartSubtotal)} ETB</strong>
            </div>

           <Link to='/soon' style={{textDecoration:'none'}}>
            <button
              type="button"
              className="cart-checkout-button"
              onClick={openComingSoonModal}
            >
              Proceed to Checkout
              <ArrowRight size={17} />
            </button>
           </Link>

            <Link to="/shop" className="cart-continue-button">
              Continue Shopping
            </Link>

            <div className="cart-trust-note">
              <ShoppingBag size={18} />
              <p>Thank you for shopping with Amoory Fashion.</p>
            </div>
          </aside>
        </div>
      ) : (
        /* Empty Cart */
        <section className="cart-empty">
          <div className="cart-empty-icon">
            <ShoppingBag size={35} strokeWidth={1.5} />
          </div>

          <span className="cart-eyebrow">A Little Something Missing</span>

          <h2>Your Cart is Empty</h2>

          <p>
            You haven't added anything to your shopping bag yet.
            Explore our collection and discover something you love.
          </p>

          <Link to="/shop" className="cart-checkout-button cart-empty-button">
            Start Shopping
            <ArrowRight size={17} />
          </Link>
        </section>
      )}
    </main>
  );
}
