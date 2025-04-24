export type Platform = {
  _id: string;
  name: string;
  slug: string;
  color?: string;
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
  description?: any[]; // Portable Text format
  features: {
    title: string;
    description?: string;
    icon?: {
      asset: {
        url: string;
      };
    };
    order?: number;
  }[];
  accountCategories: string[];
  vaServices?: {
    title: string;
    description: string;
    price: string;
    icon?: {
      asset: {
        url: string;
      };
    };
  }[];
  accountRequirementFields?: {
    label: string;
    fieldType: string;
    options?: string[];
    required: boolean;
  }[];
  order?: number;
};
