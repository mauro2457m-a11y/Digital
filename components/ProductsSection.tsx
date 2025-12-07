import React from 'react';
import { PRODUCTS } from '../constants';
import ProductCard from './ProductCard';

const ProductsSection: React.FC = () => {
  return (
    <section id="products" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Nossos Produtos</h2>
          <p className="text-lg text-gray-400 mt-4">
            Soluções criadas para te ajudar a alcançar seus objetivos de forma mais rápida e eficiente.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
