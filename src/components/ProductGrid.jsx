
import React from 'react';
import ProductCard from './ProductCard';

export default function ProductGrid({ products = [] }) {
  if (!products.length) {
    return (
      <div className="amoory-catalog-empty">
        No products found.
      </div>
    );
  }

  return (
    <section className="amoory-catalog">
      <div className="amoory-catalog__grid">
        {products.map((product) => (
          <ProductCard
            key={product.id ?? product._id}
            product={product}
          />
        ))}
      </div>
    </section>
  );
}
