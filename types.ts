export interface ServicePackage {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  paymentTerms: string;
  maintenance: string;
  isPopular?: boolean;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
}

export interface NavItem {
  label: string;
  path: string;
}