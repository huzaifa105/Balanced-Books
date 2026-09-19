export type PageRoute =
  | 'home'
  | 'about'
  | 'services'
  | 'services-bookkeeping'
  | 'services-controller'
  | 'services-quickbooks'
  | 'who-we-help'
  | 'resources'
  | 'contact'
  | 'privacy-policy'
  | 'terms-of-use';

export type ServiceCategory =
  | 'Bookkeeping & Month-End Close'
  | 'Fractional Controller Services'
  | 'QuickBooks Online Cleanup & Support'
  | 'General Bookkeeping Support'
  | 'Not Sure Yet';

export interface ContactFormData {
  fullName: string;
  businessName: string;
  email: string;
  phone: string;
  serviceInterest: ServiceCategory;
  message: string;
  consentAgreed: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export interface ResourceArticle {
  id: string;
  title: string;
  summary: string;
  category:
    | 'Bookkeeping Basics'
    | 'Financial Operations'
    | 'QuickBooks Online'
    | 'Growth & Advisory'
    | 'Bookkeeping'
    | 'Founders'
    | string;
  readTime: string;
  content: string[];
  keyTakeaways: string[];
}
