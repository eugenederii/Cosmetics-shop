import { type FC } from "react";
import { ProductCard } from "@/modules/products/components/product-card";
import { ProductGridProps } from "./product-grid.interface";

export const ProductGrid: FC<ProductGridProps> = ({ products }) => {
  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">Товари не знайдені</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-stretch">
      {products.map(({ node }) => (
        <ProductCard key={node.id} product={node} />
      ))}
    </div>
  );
};
