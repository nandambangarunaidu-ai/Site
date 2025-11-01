export interface Service {
  id: string;
  name: string;
  description: string;
  bgImage?: string;
}

export type PageType = 'home' | 'services' | 'about' | 'contact';
