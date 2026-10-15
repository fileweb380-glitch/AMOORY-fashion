import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  ShoppingBag,
  ArrowLeft,
  CheckCircle,
  Plus,
  Minus,
  MessageCircle,
  ShieldCheck,
  Truck,
} from 'lucide-react';

import ProductCard from '../components/ProductCard';
import { PRODUCTS } from '../data/products';
import { useShop } from '../context/ShopContext';

const TELEGRAM_URL = 'https://t.me/amoorymama';

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useShop();

  // Product IDs are strings, such as "tshirt-01".
const product = PRODUCTS.find(
  (item) => String(item.id ?? item._id) === String(id)
);

  const sizes = product
    ? Array.isArray(product.sizes)
      ? product.sizes
      : product.sizes
        ? [product.sizes]
        : []
    : [];

  const colors = product
    ? Array.isArray(product.colors)
      ? product.colors
      : product.colors
        ? [product.colors]
        : []
    : [];

  const [selectedSize, setSelectedSize] = useState(
    sizes[0] ?? 'Standard'
  );

  const [selectedColor, setSelectedColor] = useState(
    colors[0] ?? 'Default'
  );

  const [quantity, setQuantity] = useState(1);
  const [addedNotification, setAddedNotification] = useState(false);

  useEffect(() => {
    setSelectedSize(sizes[0] ?? 'Standard');
    setSelectedColor(colors[0] ?? 'Default');
    setQuantity(1);
    setAddedNotification(false);
  }, [id]);

  useEffect(() => {
    if (!addedNotification) return;

    const timer = setTimeout(() => {
      setAddedNotification(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [addedNotification]);

  if (!product) {
    return (
      <main className="product-details-page">
        <section className="product-not-found">
          <ShoppingBag size={42} />
          <span className="product-details-eyebrow">
            AMOORY FASHION
          </span>
          <h1>Product Not Found</h1>
          <p>
            We couldn't find this product. Explore our collection
            to discover your next favorite style.
          </p>
          <Link to="/shop" className="product-primary-button">
            <ArrowLeft size={17} />
            Back to Shop
          </Link>
        </section>
      </main>
    );
  }

  const formattedPrice = Number(product.price || 0).toLocaleString(
    'en-US'
  );

  const handleAddToCart = () => {
    addToCart(product, selectedSize, selectedColor, quantity);
    setAddedNotification(true);
  };

  const handleTelegramOrder = () => {
    const message = [
      'Hello Amoory Fashion!',
      '',
      `I would like to order: ${product.name}`,
      `Price: ${formattedPrice} ETB`,
      `Size: ${selectedSize}`,
      `Color: ${selectedColor}`,
      `Quantity: ${quantity}`,
      `Product ID: ${product.id ?? product._id}`,
      '',
      'Please tell me how to complete my order.',
    ].join('\n');

    window.open(
      `${TELEGRAM_URL}?text=${encodeURIComponent(message)}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  const relatedProducts = PRODUCTS.filter(
    (item) =>
      item.category === product.category &&
      String(item.id ?? item._id) !== String(product.id ?? product._id)
  ).slice(0, 4);

  return (
    <main className="product-details-page">
      <div className="product-details-container">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="product-back-button"
        >
          <ArrowLeft size={17} />
          Back
        </button>

        <div className="product-details-breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <Link to="/shop">Shop</Link>
          <span>/</span>
          <span>{product.name}</span>
        </div>

        <section className="product-details-card">
          <div className="product-details-image">
            {product.image ? (
              <img
                src={product.image}
                alt={product.name}
                fetchPriority="high"
              />
            ) : (
              <div className="product-image-placeholder">
                <ShoppingBag size={48} />
                <span>Image unavailable</span>
              </div>
            )}

            {product.featured && (
              <span className="product-featured-badge">
                Featured Collection
              </span>
            )}

            {!product.inStock && (
              <span className="product-stock-badge">
                Currently Unavailable
              </span>
            )}

            <div className="product-image-brand">
              <span>AMOORY FASHION</span>
              <p>Style that speaks for you.</p>
            </div>
          </div>

          <div className="product-details-content">
            <span className="product-details-eyebrow">
              {String(product.category || 'Collection').replaceAll('-', ' ')}
            </span>

            <h1>{product.name}</h1>

            <p className="product-details-price">
              {formattedPrice} <span>ETB</span>
            </p>

            <div className="product-stock-status">
              <span
                className={
                  product.inStock
                    ? 'product-stock-dot'
                    : 'product-stock-dot is-unavailable'
                }
              />
              {product.inStock
                ? 'Available to order'
                : 'Please contact us for availability'}
            </div>

            <p className="product-details-description">
              {product.description ||
                'Discover this style from the Amoory Fashion collection.'}
            </p>

            <div className="product-details-divider" />

            {sizes.length > 0 && (
              <fieldset className="product-option-group">
                <legend>
                  Size <span>— {selectedSize}</span>
                </legend>

                <div className="product-option-list">
                  {sizes.map((size) => (
                    <button
                      type="button"
                      key={size}
                      className={`product-option-button ${
                        selectedSize === size ? 'is-selected' : ''
                      }`}
                      aria-pressed={selectedSize === size}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </fieldset>
            )}

            {colors.length > 0 && (
              <fieldset className="product-option-group">
                <legend>
                  Color <span>— {selectedColor}</span>
                </legend>

                <div className="product-option-list">
                  {colors.map((color) => (
                    <button
                      type="button"
                      key={color}
                      className={`product-option-button ${
                        selectedColor === color ? 'is-selected' : ''
                      }`}
                      aria-pressed={selectedColor === color}
                      onClick={() => setSelectedColor(color)}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </fieldset>
            )}

            <div className="product-quantity-row">
              <span className="product-quantity-label">Quantity</span>

              <div className="product-quantity-control">
                <button
                  type="button"
                  onClick={() =>
                    setQuantity((current) => Math.max(1, current - 1))
                  }
                  disabled={quantity <= 1}
                  aria-label="Decrease quantity"
                >
                  <Minus size={16} />
                </button>

                <span aria-live="polite">{quantity}</span>

                <button
                  type="button"
                  onClick={() =>
                    setQuantity((current) => current + 1)
                  }
                  aria-label="Increase quantity"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            <div className="product-details-actions">
              <button
                type="button"
                onClick={handleTelegramOrder}
                className="product-telegram-order"
              >
                <MessageCircle size={19} />
                Order on Telegram
              </button>

              <button
                type="button"
                onClick={handleAddToCart}
                className="product-add-to-cart"
              >
                <ShoppingBag size={18} />
                Add to Cart
              </button>
            </div>

            {addedNotification && (
              <div className="product-added-notification" role="status">
                <CheckCircle size={19} />
                <span>Added to your shopping cart!</span>
                <Link to="/cart">View Cart</Link>
              </div>
            )}

            <div className="product-details-benefits">
              <div>
                <ShieldCheck size={21} />
                <span>Personalized service</span>
              </div>

              <div>
                <MessageCircle size={21} />
                <span>Order assistance on Telegram</span>
              </div>

              <div>
                <Truck size={21} />
                <span>Ask us about delivery</span>
              </div>
            </div>

            <a
              className="product-telegram-link"
              href={TELEGRAM_URL}
              target="_blank"
              rel="noreferrer"
            >
              Visit our Telegram channel
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>

        {relatedProducts.length > 0 && (
          <section className="product-related-section">
            <div className="product-related-heading">
              <div>
                <span className="product-details-eyebrow">
                  COMPLETE YOUR LOOK
                </span>
                <h2>You May Also Like</h2>
              </div>

              <Link to="/shop" className="product-related-link">
                Explore All <span aria-hidden="true">→</span>
              </Link>
            </div>

            <div className="product-related-grid">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard
                  key={relatedProduct.id ?? relatedProduct._id}
                  product={relatedProduct}
                />
              ))}
            </div>
          </section>
        )}

        <footer className="product-details-footer">
          <span>STYLE</span>
          <span className="product-footer-dot">•</span>
          <span>QUALITY</span>
          <span className="product-footer-dot">•</span>
          <span>YOU</span>
        </footer>
      </div>
    </main>
  );
}
