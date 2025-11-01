export type Product = {
  id: string;
  title: string;
  description: string;
  handle: string;
  featuredImage?: {
    url: string | null;
  } | null;
};

export type ProductCardProps = {
  product: Product;
};
