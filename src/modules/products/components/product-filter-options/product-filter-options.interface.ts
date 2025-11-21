export type ProductFilterOption = {
  id: string;
  label: string;
  value: boolean;
  count?: number;
};

export type ProductFilterOptionsProps = {
  options: ProductFilterOption[];
  onChange: (id: string, checked: boolean) => void;
};
