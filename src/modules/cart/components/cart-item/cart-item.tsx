"use client";
import { type FC } from "react";
import { CartItemProps } from "./cart-item.interface";
import { useCart } from "@/modules/cart/hooks/use-cart";
export const CartItem: FC<CartItemProps> = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();
  return (
    <div className="flex items-center gap-4 py-4 border-b">
      <img
        src={item.image}
        alt={item.title}
        className="w-16 h-16 object-cover rounded"
      />
      <div className="flex-1">
        <h3 className="font-medium">{item.title}</h3>
        <p className="text-gray-600">${item.price}</p>
      </div>
      <div className="flex items-center gap-2">
        <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
          -
        </button>
        <span>{item.quantity}</span>
        <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
          +
        </button>
      </div>
      <button onClick={() => removeFromCart(item.id)}>🗑️</button>
    </div>
  );
};
