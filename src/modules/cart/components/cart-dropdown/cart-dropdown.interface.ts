import { type CartItem } from "@/modules/cart/types/cart.types";

export type CartDropdownProps = {
  isOpen: boolean;
  onClose: () => void;
  items?: CartItem[];
  total?: number;
  itemCount?: number;
};
