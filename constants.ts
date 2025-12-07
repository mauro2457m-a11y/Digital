import type { Product, Testimonial, FaqItem } from './types';

// IMPORTANT: Replace these placeholder URLs with your actual Kiwify checkout links.
const KIWIFY_CHECKOUT_URL_1 = "https://pay.kiwify.com.br/PLACEHOLDER_1";
const KIWIFY_CHECKOUT_URL_2 = "https://pay.kiwify.com.br/PLACEHOLDER_2";
const KIWIFY_CHECKOUT_URL_3 = "https://pay.kiwify.com.br/PLACEHOLDER_3";

export const PRODUCTS: Product[] = [
  {
    id: 'prod_1',
    image: 'https://picsum.photos/seed/product1/600/400',
    name: 'E-book: Mestre das Finanças',
    description: 'Aprenda a controlar suas finanças, investir com sabedoria e alcançar a independência financeira.',
    price: 'R$ 49,90',
    originalPrice: 'R$ 99,90',
    checkoutUrl: KIWIFY_CHECKOUT_URL_1,
    features: [
      'Orçamento Pessoal Inteligente',
      'Guia de Investimentos para Iniciantes',
      'Estratégias para Sair das Dívidas',
      'Bônus: Planilha Financeira Exclusiva'
    ]
  },
  {
    id: 'prod_2',
    image: 'https://picsum.photos/seed/product2/600/400',
    name: 'Curso: Marketing Digital Pro',
    description: 'Domine as principais ferramentas de marketing digital e impulsione seu negócio ou carreira.',
    price: 'R$ 197,00',
    originalPrice: 'R$ 497,00',
    checkoutUrl: KIWIFY_CHECKOUT_URL_2,
    features: [
      'Módulos de SEO, SEM e Social Media',
      'Aulas Práticas e Estudos de Caso',
      'Acesso Vitalício e Certificado',
      'Comunidade Exclusiva de Alunos'
    ]
  },
  {
    id: 'prod_3',
    image: 'https://picsum.photos/seed/product3/600/400',
    name: 'Pack de Templates Editáveis',
    description: 'Mais de 500 templates profissionais para redes sociais, apresentações e muito mais. Edite facilmente.',
    price: 'R$ 89,90',
    checkoutUrl: KIWIFY_CHECKOUT_URL_3,
    features: [
      'Compatível com Canva e Photoshop',
      'Design Moderno e Atraente',
      'Economize Horas de Trabalho',
      'Atualizações Mensais Gratuitas'
    ]
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test_1',
    avatar: 'https://picsum.photos/seed/avatar1/100/100',
    name: 'Ana Silva',
    handle: '@anasilva',
    quote: 'O curso de Marketing Digital mudou o rumo da minha carreira. O conteúdo é prático e direto ao ponto. Recomendo demais!'
  },
  {
    id: 'test_2',
    avatar: 'https://picsum.photos/seed/avatar2/100/100',
    name: 'Bruno Costa',
    handle: '@brunocosta',
    quote: 'Finalmente consegui organizar minhas finanças com o e-book. A planilha bônus é uma ferramenta incrível que uso todos os dias.'
  },
  {
    id: 'test_3',
    avatar: 'https://picsum.photos/seed/avatar3/100/100',
    name: 'Carla Dias',
    handle: '@carladias',
    quote: 'O pack de templates salvou minha vida! Consigo criar posts para meu Instagram em minutos, com uma aparência super profissional.'
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq_1',
    question: 'Como receberei o acesso ao produto?',
    answer: 'Após a confirmação do pagamento, você receberá um e-mail da Kiwify com um link para acessar o seu produto digital. O acesso é imediato.'
  },
  {
    id: 'faq_2',
    question: 'Quais são as formas de pagamento aceitas?',
    answer: 'Aceitamos pagamentos via Cartão de Crédito, Boleto Bancário e PIX através da plataforma segura da Kiwify.'
  },
  {
    id: 'faq_3',
    question: 'Tenho garantia?',
    answer: 'Sim! Oferecemos uma garantia incondicional de 7 dias. Se por qualquer motivo você não ficar satisfeito, basta solicitar o reembolso dentro do prazo e devolveremos 100% do seu dinheiro.'
  },
  {
    id: 'faq_4',
    question: 'O acesso ao curso é vitalício?',
    answer: 'Sim, para os cursos, o acesso é vitalício. Você poderá ver e rever as aulas quantas vezes quiser, além de ter acesso a todas as futuras atualizações sem custo adicional.'
  }
];
