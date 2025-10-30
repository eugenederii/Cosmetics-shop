import { useRef } from "react";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/modules/core/components/button";
import { CartDropdown } from "@/modules/cart/components/cart-dropdown";
import { useBoolean } from "usehooks-ts";
import { useClickOutside } from "@/modules/core/hooks/use-click-outside";
import { useCart } from "@/modules/cart/hooks/use-cart";

export const CartButton = () => {
  const {
    value: isDropdownOpen,
    toggle: toggleDropdown,
    setFalse: closeDropdown,
  } = useBoolean(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  useClickOutside(dropdownRef, closeDropdown);

  const { itemCount, total, items } = useCart();

  return (
    <div className="relative" ref={dropdownRef}>
      <Button
        variant="ghost"
        size="icon"
        className="relative"
        onClick={toggleDropdown}
      >
        <ShoppingCart className="h-5 w-5" />
        {itemCount >= 0 && (
          <span className="absolute -top-1 -right-1 bg-rose-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
            {itemCount}
          </span>
        )}
      </Button>
      <CartDropdown
        isOpen={isDropdownOpen}
        onClose={closeDropdown}
        items={items}
        total={total}
        itemCount={itemCount}
      />
    </div>
  );
};
