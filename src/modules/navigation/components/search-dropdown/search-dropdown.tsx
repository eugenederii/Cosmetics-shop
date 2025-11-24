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
import { useDeviceType } from "@/modules/core/hooks/use-device-type";

const mockSuggestions: SearchSuggestion[] = [
  { id: "1", text: "крем для лиця", href: "/search?q=крем+для+лиця" },
  { id: "2", text: "крем для рук", href: "/search?q=крем+для+рук" },
  { id: "3", text: "крем для обличчя", href: "/search?q=крем+для+обличчя" },
];

const mockProducts: SearchProduct[] = [
  {
    id: "1",
    title: "Денний крем - La Roche-Posay Effaclar Mat",
    category: "Денний крем",
    price: 850,
    image: "/products/la-roche-posay-effaclar.jpg",
    href: "/product/la-roche-posay-effaclar",
  },
  {
    id: "2",
    title: "Зволожувальний крем - Vichy Aqualia Thermal",
    category: "Зволожувальний крем",
    price: 720,
    oldPrice: 850,
    image: "/products/vichy-aqualia.jpg",
    href: "/product/vichy-aqualia",
  },
  {
    id: "3",
    title: "Антивіковий крем - L'Oreal Revitalift",
    category: "Антивіковий крем",
    price: 650,
    image: "/products/loreal-revitalift.jpg",
    href: "/product/loreal-revitalift",
  },
  {
    id: "4",
    title: "Крем для навколоочної зони - Clinique All About Eyes",
    category: "Крем для навколоочної зони",
    price: 1200,
    image: "/products/clinique-all-about-eyes.jpg",
    href: "/product/clinique-all-about-eyes",
  },
  {
    id: "5",
    title: "Денний крем - Garnier Skin Active",
    category: "Денний крем",
    price: 320,
    image: "/products/garnier-skin-active.jpg",
    href: "/product/garnier-skin-active",
  },
  {
    id: "6",
    title: "Зволожувальний крем - Nivea Soft",
    category: "Зволожувальний крем",
    price: 180,
    image: "/products/nivea-soft.jpg",
    href: "/product/nivea-soft",
  },
  {
    id: "7",
    title: "Антивіковий крем - Olay Regenerist",
    category: "Антивіковий крем",
    price: 950,
    image: "/products/olay-regenerist.jpg",
    href: "/product/olay-regenerist",
  },
  {
    id: "8",
    title: "Денний крем - The Ordinary Natural Moisturizing Factors",
    category: "Денний крем",
    price: 450,
    image: "/products/the-ordinary-nmf.jpg",
    href: "/product/the-ordinary-nmf",
  },
  {
    id: "9",
    title: "Зволожувальний крем - CeraVe Moisturizing Cream",
    category: "Зволожувальний крем",
    price: 520,
    image: "/products/cerave-moisturizing.jpg",
    href: "/product/cerave-moisturizing",
  },
  {
    id: "10",
    title: "Антивіковий крем - Kiehl's Ultra Facial Cream",
    category: "Антивіковий крем",
    price: 1800,
    image: "/products/kiehls-ultra-facial.jpg",
    href: "/product/kiehls-ultra-facial",
  },
  {
    id: "11",
    title: "Денний крем - Neutrogena Hydro Boost",
    category: "Денний крем",
    price: 680,
    oldPrice: 750,
    image: "/products/neutrogena-hydro-boost.jpg",
    href: "/product/neutrogena-hydro-boost",
  },
  {
    id: "12",
    title: "Зволожувальний крем - Avene Hydrance Optimale",
    category: "Зволожувальний крем",
    price: 890,
    image: "/products/avene-hydrance.jpg",
    href: "/product/avene-hydrance",
  },
  {
    id: "13",
    title: "Антивіковий крем - Lancome Renergie Multi-Lift",
    category: "Антивіковий крем",
    price: 3200,
    image: "/products/lancome-renergie.jpg",
    href: "/product/lancome-renergie",
  },
  {
    id: "14",
    title: "Денний крем - Eucerin Q10 Anti-Wrinkle",
    category: "Денний крем",
    price: 550,
    image: "/products/eucerin-q10.jpg",
    href: "/product/eucerin-q10",
  },
  {
    id: "15",
    title: "Зволожувальний крем - Clinique Moisture Surge",
    category: "Зволожувальний крем",
    price: 1400,
    oldPrice: 1600,
    image: "/products/clinique-moisture-surge.jpg",
    href: "/product/clinique-moisture-surge",
  },
  {
    id: "16",
    title: "Зволожувальний крем - Bioderma Sensibio Defensive",
    category: "Зволожувальний крем",
    price: 780,
    image: "/products/bioderma-sensibio.jpg",
    href: "/product/bioderma-sensibio",
  },
  {
    id: "17",
    title: "Денний крем - Estee Lauder Advanced Night Repair",
    category: "Денний крем",
    price: 2500,
    oldPrice: 2800,
    image: "/products/estee-lauder-advanced.jpg",
    href: "/product/estee-lauder-advanced",
  },
  {
    id: "18",
    title: "Антивіковий крем - Shiseido Benefiance WrinkleResist24",
    category: "Антивіковий крем",
    price: 2100,
    image: "/products/shiseido-benefiance.jpg",
    href: "/product/shiseido-benefiance",
  },
  {
    id: "19",
    title: "Зволожувальний крем - La Mer Crème de la Mer",
    category: "Зволожувальний крем",
    price: 8500,
    image: "/products/la-mer-creme.jpg",
    href: "/product/la-mer-creme",
  },
];

export const SearchDropdown: FC<SearchDropdownProps> = ({
  searchQuery,
  isOpen,
  onClose,
}) => {
  const deviceType = useDeviceType();

  const filteredSuggestions = useMemo(() => {
    if (!searchQuery) return mockSuggestions;
    return mockSuggestions.filter((suggestion) =>
      suggestion.text.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  }, [searchQuery]);

  const filteredProducts = useMemo(() => {
    if (!searchQuery) return mockProducts;
    return mockProducts.filter(
      (product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  }, [searchQuery]);

  const hasResults =
    filteredSuggestions.length > 0 || filteredProducts.length > 0;

  return (
    <>
      {isOpen && (
        <div
          className="fixed top-[88px] left-0 right-0 bottom-0 bg-black/20 backdrop-blur-sm z-40"
          onClick={onClose}
        />
      )}
      <Popover open={isOpen} onOpenChange={(open) => !open && onClose()}>
        <PopoverTrigger asChild>
          <div />
        </PopoverTrigger>
        <PopoverContent
          className="px-4 md:px-[25px] h-[calc(100vh)] md:h-[600px] flex flex-col rounded-t-lg md:rounded-lg rounded-b-none md:rounded-b-lg relative border-[rgba(243,46,200,0.6)]"
          style={{
            width: "calc(100vw - 12px)",
            maxWidth: "1450px",
          }}
          align="center"
          side="bottom"
          sideOffset={deviceType === "desktop" ? 28 : 15}
          onOpenAutoFocus={(e) => e.preventDefault()}
        >
          <div className="flex-1 overflow-y-auto scrollbar-hide">
            {!hasResults && searchQuery ? (
              <div className="p-8 text-center w-full">
                <p className="text-sm text-gray-500">
                  Нічого не знайдено за запитом &quot;{searchQuery}&quot;
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x">
                <div className="p-3 md:p-4">
                  <h3 className="text-sm font-medium mb-2 md:mb-3 px-2">
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

                <div className="p-3 md:p-4">
                  <h3 className="text-sm font-medium mb-2 md:mb-3 px-2">
                    Продукти
                  </h3>
                  {filteredProducts.length > 0 ? (
                    <div className="space-y-2 md:space-y-3">
                      {filteredProducts.map((product) => (
                        <a
                          key={product.id}
                          href={product.href}
                          className="flex gap-2 md:gap-3 p-2 hover:bg-gray-100 rounded-md transition-colors"
                        >
                          {product.image && (
                            <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-200 rounded shrink-0 flex items-center justify-center">
                              <span className="text-xs text-gray-500">
                                DEAL
                              </span>
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
                    </div>
                  ) : (
                    <p className="text-sm text-gray-500 px-2">Нема товарів</p>
                  )}
                </div>
              </div>
            )}
          </div>

          {hasResults && filteredProducts.length > 0 && (
            <div className="border-t p-3 md:p-4 bg-white sticky bottom-0 flex justify-center">
              <Button variant="default" className="w-[40%]" onClick={onClose}>
                Показати всі результати
              </Button>
            </div>
          )}
        </PopoverContent>
      </Popover>
    </>
  );
};
