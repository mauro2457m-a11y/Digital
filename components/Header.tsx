import React from 'react';

const Header: React.FC = () => {
  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white tracking-tighter">
          <span className="text-teal-400">Digital</span>Store
        </h1>
        <button
          onClick={scrollToProducts}
          className="hidden md:inline-block bg-teal-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-teal-600 transition-colors duration-300 transform hover:scale-105"
        >
          Ver Produtos
        </button>
      </div>
    </header>
  );
};

export default Header;
