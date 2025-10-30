import { useReactiveVar } from "@apollo/client";
import {
  cartItemsVar,
  addToCart,
  removeFromCart,
  updateCartItemQuantity,
  getCartTotal,
  getCartItemCount,
} from "@/modules/cart/state/cart-state";

export const useCart = () => {
  const items = useReactiveVar(cartItemsVar);
  const total = getCartTotal();
  const itemCount = getCartItemCount();

  return {
    items,
    total,
    itemCount,

    addToCart,
    removeFromCart,
    updateQuantity: updateCartItemQuantity,

    isEmpty: items.length === 0,
    hasItems: items.length > 0,
  };
};
