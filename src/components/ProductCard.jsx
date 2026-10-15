import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingBag, Eye, ArrowUpRight } from 'lucide-react';

export default function ProductCard({ product }) {
  const navigate = useNavigate();

  if (!product) return null;

  const productId = product.id ?? product._id;
  const productName = product.name || 'Untitled Product';
  const productImage = product.image;
  const productCategory =
    product.category?.replaceAll('-', ' ') || 'Collection';

  const formattedPrice = Number(product.price || 0).toLocaleString(
    'en-US'
  );

  return (
    <article className="amoory-product-card">
      <div className="amoory-product-card__media">
        <Link
          to={`/product/${productId}`}
          className="amoory-product-card__image-link"
          aria-label={`View ${productName}`}
        >
          {productImage ? (
            <img
              src={productImage}
              alt={productName}
              className="amoory-product-card__image"
              loading="lazy"
            />
          ) : (
            <div className="amoory-product-card__placeholder">
              <ShoppingBag size={32} />
              <span>Image unavailable</span>
            </div>
          )}
        </Link>

        <span className="amoory-product-card__badge">
          New Collection
        </span>

        <Link
          to={`/product/${productId}`}
          className="amoory-product-card__quick-view"
          aria-label={`View ${productName}`}
        >
          <ArrowUpRight size={19} />
        </Link>
      </div>

      <div className="amoory-product-card__content">
        <span className="amoory-product-card__category">
          {productCategory}
        </span>

        <h3 className="amoory-product-card__name">
          <Link to={`/product/${productId}`}>
            {productName}
          </Link>
        </h3>

        <p className="amoory-product-card__price">
          {formattedPrice} <span>ETB</span>
        </p>

        <div className="amoory-product-card__actions">
          <Link
            to={`/product/${productId}`}
            className="amoory-product-card__view"
          >
            <Eye size={16} />
            <span>View Details</span>
          </Link>

          <button
            type="button"
            className="amoory-product-card__order"
            onClick={() => navigate('/soon')}
          >
            <ShoppingBag size={16} />
            <span>Order</span>
          </button>
        </div>
      </div>
    </article>
  );
}
