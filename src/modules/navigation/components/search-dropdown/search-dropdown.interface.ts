export interface SearchSuggestion {
  id: string;
  text: string;
  href?: string;
}

export interface SearchProduct {
  id: string;
  title: string;
  category: string;
  price: number;
  oldPrice?: number;
  image?: string;
  href: string;
}

export interface SearchDropdownProps {
  searchQuery: string;
  isOpen: boolean;
  onClose: () => void;
}
