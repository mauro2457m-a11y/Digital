import React from 'react';
import { FAQ_ITEMS } from '../constants';
import Accordion from './Accordion';

const FaqSection: React.FC = () => {
  return (
    <section id="faq" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Perguntas Frequentes</h2>
          <p className="text-lg text-gray-400 mt-4">
            Ainda tem dúvidas? Encontre as respostas que você precisa aqui.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          {FAQ_ITEMS.map((item) => (
            <Accordion key={item.id} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
