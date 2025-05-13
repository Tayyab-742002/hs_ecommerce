// Common types used throughout the application

export interface Platform {
  _id: string;
  name: string;
  slug: {
    current: string;
  };
  description?: any[]; // Portable Text format
  logo?: {
    asset: {
      url: string;
    };
  };
  banner?: {
    asset: {
      url: string;
    };
  };
  features?: Array<{
    title: string;
    description?: string;
    icon?: {
      asset: {
        url: string;
      };
    };
    order?: number;
  }>;
  vaServices?: Array<{
    title: string;
    description?: string;
    price?: string;
    icon?: {
      asset: {
        url: string;
      };
    };
  }>;
  accountCategories?: string[];
  accountRequirementFields?: Array<{
    label: string;
    fieldType: string;
    options?: string[];
    required?: boolean;
  }>;
  order?: number;
}

export interface VAService {
  title: string;
  description?: string;
  price?: string;
  icon?: {
    asset: {
      url: string;
    };
  };
}

export interface Account {
  _id: string;
  title: string;
  platform: {
    _id: string;
    name: string;
    logo?: {
      asset: {
        url: string;
      };
    };
  };
  category?: string;
  price?: string;
  features?: string[];
  metrics?: Record<string, string>;
  status?: string;
  createdAt?: string;
}

export interface ReinstatementService {
  _id: string;
  title: string;
  slug: string;
  platform: {
    _id: string;
    name: string;
    slug: string;
    logo?: {
      asset: {
        url: string;
      };
    };
  };
  description?: string;
  image?: {
    asset: {
      url: string;
    };
  };
  features?: string[];
  successRate?: string;
  turnaroundTime?: string;
  price?: string;
  order?: number;
}

export interface AllServiceDetail {
  _id: string;
  name: string;
  slug: string;
  platform: {
    _id: string;
    name: string;
    slug: string;
    logo?: {
      asset: {
        url: string;
      };
    };
  };
  icon?: {
    asset: {
      url: string;
    };
  };
  shortDescription: string;
  description?: any[]; // Portable Text format
  features?: Array<{
    title: string;
    description?: string;
    included: boolean;
    highlight?: boolean;
  }>;
  price: string;
  isReinstatement: boolean;
  order?: number;
  seo?: {
    title?: string;
    description?: string;
  };
}
