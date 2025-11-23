import { type FC } from "react";
import { ProductGrid } from "@/modules/products/components/product-grid";
import { useProductsInfinite } from "@/modules/products/hooks/use-products";
import { useInfiniteScroll } from "@/modules/core/hooks/use-infinity-scroll";
import { ProductFilters } from "../components/product-filter/product-filter";

export const ProductContainer: FC = () => {
  const { products, loadMore, hasNextPage, loading } = useProductsInfinite();
  const observerRef = useInfiniteScroll(loadMore);

  return (
    <div className="mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Наші товари</h2>
      <div className="flex justify-between items-start gap-6">
        <div className="hidden md:block">
          <ProductFilters />
        </div>
        <ProductGrid products={products} />
      </div>

      {hasNextPage && (
        <div
          ref={observerRef}
          className="h-20 flex justify-center items-center"
        >
          {loading && <div className="text-gray-500">Завантаження...</div>}
        </div>
      )}
    </div>
  );
};
