import { type FC } from "react";
import { Button } from "@/modules/core/components/button";
import { CartItem } from "@/modules/cart/components/cart-item";
import { CartDropdownProps } from "./cart-dropdown.interface";

export const CartDropdown: FC<CartDropdownProps> = ({
  isOpen,
  onClose,
  items = [],
  total = 0,
  itemCount = 0,
}) => {
  if (!isOpen) return null;

  return (
    <div className="absolute top-full right-0 mt-2 w-96 bg-white border border-gray-200 rounded-lg shadow-xl z-50">
      <div className="flex items-center justify-between p-4 border-b">
        <h3 className="font-semibold text-lg">Кошик ({itemCount})</h3>
        <Button icon="close" variant="ghost" size="icon" onClick={onClose} />
      </div>

      <div className="max-h-96 overflow-y-auto">
        {items.length === 0 ? (
          <p className="text-gray-500 p-4 text-center">Кошик порожній</p>
        ) : (
          <div className="p-4 space-y-4">
            {items.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>

      {items.length > 0 && (
        <div className="p-4 border-t space-y-3">
          <div className="flex justify-between font-semibold">
            <span>Разом:</span>
            <span>${total}</span>
            {/* TODO: Format currency based on Shopify store settings */}
            {/* TODO: add tax calculation if applicable */}
          </div>
          <div className="flex flex-col gap-2">
            <Button onClick={() => {}} className="w-full">
              {/* TODO: Implement navigation to cart page */}
              До кошика
            </Button>
            <Button variant="outline" onClick={onClose} className="w-full">
              Продовжити покупки
              {/* TODO: Add analytics event for continued shopping */}
            </Button>
            {/* TODO: Add security badges or trust signals */}
          </div>
        </div>
      )}
    </div>
  );
};
