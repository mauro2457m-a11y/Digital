import React from 'react';
import type { Testimonial } from '../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-gray-800 p-8 rounded-xl shadow-lg h-full flex flex-col">
      <p className="text-gray-300 mb-6 flex-grow">"{testimonial.quote}"</p>
      <div className="flex items-center mt-auto">
        <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover mr-4" />
        <div>
          <p className="font-bold text-white">{testimonial.name}</p>
          <p className="text-sm text-teal-400">{testimonial.handle}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
