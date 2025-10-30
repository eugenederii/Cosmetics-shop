export type CartItem = {
  id: string;
  variantId: string;
  quantity: number;
  title: string;
  price: number;
  image?: string;
  handle?: string;
};

export type Cart = {
  id: string;
  items: CartItem[];
  total: number;
  itemCount: number;
};
