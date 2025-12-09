export interface Product {
  id: string;
  title: string;
  subtitle: string;
  description: string[];
  imageUrl: string;
  cta: string;
}

export interface Pack {
  title: string;
  items: string[];
  description: string;
  highlight?: boolean;
}

export interface Testimonial {
  name: string;
  role: string;
  text: string;
  focus: 'Energía' | 'Digestión' | 'Peso';
}

export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  city: string;
  country: string;
  message: string;
  date: string;
  status: 'new' | 'contacted';
}