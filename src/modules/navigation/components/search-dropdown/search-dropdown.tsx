"use client";

import { FC, useMemo } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/modules/core/components/popover";
import {
  SearchDropdownProps,
  SearchSuggestion,
  SearchProduct,
} from "./search-dropdown.interface";
import { ArrowRight } from "lucide-react";
import { Button } from "@/modules/core/components/button";

const mockSuggestions: SearchSuggestion[] = [
  { id: "1", text: "крем для лиця", href: "/search?q=крем+для+лиця" },
  { id: "2", text: "крем для рук", href: "/search?q=крем+для+рук" },
  { id: "3", text: "крем для обличчя", href: "/search?q=крем+для+обличчя" },
];

const mockProducts: SearchProduct[] = [
  {
    id: "1",
    title: "Тональный крем - Lumene CC Color Correcting Cream",
    category: "Тональний крем",
    price: 1700,
    oldPrice: 2200,
    image: "/products/lumene-cc.jpg",
    href: "/product/lumene-cc",
  },
  {
    id: "2",
    title: "Тональный крем - Lancome Teint Miracle",
    category: "Тональний крем",
    price: 2800,
    image: "/products/lancome-teint.jpg",
    href: "/product/lancome-teint",
  },
  {
    id: "3",
    title: "Увлажняющий тональный крем - Estee Lauder Futurist",
    category: "Зволожувальний тональний крем",
    price: 3300,
    image: "/products/estee-futurist.jpg",
    href: "/product/estee-futurist",
  },
  {
    id: "4",
    title: "Тональный крем SPF 15 - Enough Collagen Moisture",
    category: "Тональний крем SPF 15",
    price: 2450,
    image: "/products/enough-collagen.jpg",
    href: "/product/enough-collagen",
  },
];

export const SearchDropdown: FC<SearchDropdownProps> = ({
  searchQuery,
  isOpen,
  onClose,
}) => {
  const filteredSuggestions = useMemo(() => {
    if (!searchQuery) return mockSuggestions.slice(0, 3);
    return mockSuggestions.filter((s) =>
      s.text.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  }, [searchQuery]);

  const filteredProducts = useMemo(() => {
    if (!searchQuery) return mockProducts.slice(0, 4);
    return mockProducts.filter(
      (p) =>
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  }, [searchQuery]);

  const hasResults =
    filteredSuggestions.length > 0 || filteredProducts.length > 0;

  return (
    <Popover open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <PopoverTrigger asChild>
        <div />
      </PopoverTrigger>
      <PopoverContent
        className="w-[800px] p-0"
        align="center"
        sideOffset={8}
        onOpenAutoFocus={(e) => e.preventDefault()}
      >
        <div className="grid grid-cols-2 divide-x">
          <div className="p-4">
            <h3 className="text-sm font-medium mb-3 px-2">
              Можливо, ви шукали
            </h3>
            {filteredSuggestions.length > 0 ? (
              <div className="space-y-1">
                {filteredSuggestions.map((suggestion) => (
                  <a
                    key={suggestion.id}
                    href={suggestion.href}
                    className="flex items-center justify-between px-2 py-2 text-sm hover:bg-gray-100 rounded-md transition-colors group"
                  >
                    <span>{suggestion.text}</span>
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                ))}
              </div>
            ) : (
              <p className="text-sm text-gray-500 px-2">Нема підказок</p>
            )}
          </div>

          <div className="p-4">
            <h3 className="text-sm font-medium mb-3 px-2">Продукти</h3>
            {filteredProducts.length > 0 ? (
              <div className="space-y-3">
                {filteredProducts.map((product) => (
                  <a
                    key={product.id}
                    href={product.href}
                    className="flex gap-3 p-2 hover:bg-gray-100 rounded-md transition-colors"
                  >
                    {product.image && (
                      <div className="w-16 h-16 bg-gray-200 rounded flex-shrink-0 flex items-center justify-center">
                        <span className="text-xs text-gray-500">DEAL</span>
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-medium line-clamp-2 mb-1">
                        {product.title}
                      </h4>
                      <p className="text-xs text-gray-500 mb-1">
                        {product.category}
                      </p>
                      <div className="flex items-center gap-2">
                        {product.oldPrice && (
                          <span className="text-xs text-gray-400 line-through">
                            {product.oldPrice} ₴
                          </span>
                        )}
                        <span className="text-sm font-semibold">
                          {product.price} ₴
                        </span>
                      </div>
                    </div>
                  </a>
                ))}

                {filteredProducts.length > 3 && (
                  <Button
                    variant="default"
                    className="w-full mt-4"
                    onClick={onClose}
                  >
                    Показати всі результати
                  </Button>
                )}
              </div>
            ) : (
              <p className="text-sm text-gray-500 px-2">Нема товарів</p>
            )}
          </div>
        </div>

        {!hasResults && searchQuery && (
          <div className="p-8 text-center">
            <p className="text-sm text-gray-500">
              Нічого не знайдено за запитом &quot;{searchQuery}&quot;
            </p>
          </div>
        )}
      </PopoverContent>
    </Popover>
  );
};
