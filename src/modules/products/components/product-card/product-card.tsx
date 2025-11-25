import { type FC } from "react";
import Image from "next/image";
import { Button } from "@/modules/core/components/button";
import { ProductCardProps } from "./product-card.interface";

export const ProductCard: FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-transparent hover:border-[rgba(243,46,200,0.6)] flex flex-col h-full">
      <div className="aspect-square overflow-hidden">
        {product.featuredImage?.url ? (
          <Image
            src={product.featuredImage.url}
            alt={product.title}
            width={400}
            height={400}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full bg-gray-100 flex items-center justify-center">
            <span className="text-gray-400">Немає зображення</span>
          </div>
        )}
      </div>

      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-semibold text-lg text-gray-900 mb-2 line-clamp-2">
          {product.title}
        </h3>

        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between mt-auto">
          <span className="text-lg font-bold text-gray-900">$99.99</span>

          <Button
            variant="pink"
            size="sm"
            onClick={() => console.log("Add to cart:", product.id)}
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-800 ease-in-out"
          >
            В кошик
          </Button>
        </div>
      </div>
    </div>
  );
};
