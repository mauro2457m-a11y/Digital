import React from 'react';
import type { Product } from '../types';
import CheckCircleIcon from './icons/CheckCircleIcon';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-teal-500/20 transition-all duration-300 transform hover:-translate-y-2 flex flex-col">
      <img src={product.image} alt={product.name} className="w-full h-56 object-cover" />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-white mb-2">{product.name}</h3>
        <p className="text-gray-400 mb-6 flex-grow">{product.description}</p>
        
        <ul className="space-y-3 mb-6">
          {product.features.map((feature, index) => (
            <li key={index} className="flex items-center text-gray-300">
              <CheckCircleIcon className="w-5 h-5 text-teal-400 mr-3 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto">
            <div className="flex items-baseline justify-center mb-4">
            {product.originalPrice && (
                <span className="text-gray-500 line-through mr-3 text-xl">{product.originalPrice}</span>
            )}
            <span className="text-4xl font-extrabold text-white">{product.price}</span>
            </div>
            <a
            href={product.checkoutUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-teal-500 text-white text-center font-bold py-4 px-6 rounded-lg text-lg hover:bg-teal-600 transition-colors duration-300 transform hover:scale-105"
            >
            Comprar Agora
            </a>
            <p className="text-xs text-gray-500 text-center mt-3">Compra segura com Kiwify</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
