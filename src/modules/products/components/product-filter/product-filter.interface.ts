export type ProductFiltersProps = {
  onFilterChange?: (filters: FilterValues) => void;
  availableCategories?: Category[];
  availableBrands?: Brand[];
  availableTags?: Tag[];
};
export type FilterValues = {
  categories?: string[];
  brands?: string[];
  tags?: string[];
  priceRange?: {
    min: number;
    max: number;
  };
  sortBy?: "newest" | "price-low" | "price-high" | "name";
  inStock?: boolean;
};

export type Category = {
  value: string;
  label: string;
  count?: number;
};

export type Brand = {
  value: string;
  label: string;
  count?: number;
};

export type Tag = {
  value: string;
  label: string;
  count?: number;
};
