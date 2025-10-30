import { makeVar } from "@apollo/client";
import { type CartItem } from "../types/cart.types";

export const cartItemsVar = makeVar<CartItem[]>([]);

export const addToCart = (item: CartItem) => {
  const currentItems = cartItemsVar();
  const existingItem = currentItems.find((i) => i.id === item.id);

  if (existingItem) {
    // updating the quantity
    const updatedItems = currentItems.map((cartItem) =>
      cartItem.id === item.id
        ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
        : cartItem,
    );
    cartItemsVar(updatedItems);
  } else {
    // adding new product
    cartItemsVar([...currentItems, item]);
  }
};

export const removeFromCart = (itemId: string) => {
  const currentItems = cartItemsVar();
  cartItemsVar(currentItems.filter((item) => item.id !== itemId));
};

export const updateCartItemQuantity = (itemId: string, quantity: number) => {
  if (quantity <= 0) {
    removeFromCart(itemId);
    return;
  }

  const currentItems = cartItemsVar();
  cartItemsVar(
    currentItems.map((item) =>
      item.id === itemId ? { ...item, quantity } : item,
    ),
  );
};

export const getCartTotal = () => {
  const items = cartItemsVar();
  return items.reduce((total, item) => total + item.price * item.quantity, 0);
};

export const getCartItemCount = () => {
  const items = cartItemsVar();
  return items.reduce((count, item) => count + item.quantity, 0);
};
