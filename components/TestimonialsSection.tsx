import React from 'react';
import { TESTIMONIALS } from '../constants';
import TestimonialCard from './TestimonialCard';

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">O Que Nossos Clientes Dizem</h2>
          <p className="text-lg text-gray-400 mt-4">
            Resultados reais de pessoas que confiaram em nossos produtos.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
