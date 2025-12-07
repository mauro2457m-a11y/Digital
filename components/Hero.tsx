import React from 'react';

const Hero: React.FC = () => {
  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 md:py-32 text-center bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <span className="text-teal-400 font-semibold uppercase tracking-wider">Transforme sua vida e carreira</span>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mt-4 mb-6 leading-tight">
            Produtos Digitais que Geram Resultados Reais
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-10">
            Acesse conhecimento de ponta e ferramentas exclusivas para acelerar seu crescimento pessoal e profissional.
          </p>
          <button
            onClick={scrollToProducts}
            className="bg-teal-500 text-white font-bold py-4 px-10 rounded-lg text-lg hover:bg-teal-600 transition-colors duration-300 transform hover:scale-105 shadow-lg shadow-teal-500/20"
          >
            QUERO CONHECER OS PRODUTOS
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
