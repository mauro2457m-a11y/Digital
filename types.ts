export interface Product {
  id: string;
  image: string;
  name: string;
  description: string;
  price: string;
  originalPrice?: string;
  checkoutUrl: string;
  features: string[];
}

export interface Testimonial {
  id: string;
  avatar: string;
  name: string;
  handle: string;
  quote: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}
