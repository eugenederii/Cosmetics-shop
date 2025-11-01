"use client";

import { Header } from "@/modules/navigation/components/header/Header";
import { Footer } from "@/modules/navigation/components/footer/footer";
import { ProductContainer } from "@/modules/products/containers/product-container";

export default function Home() {
  // const { data, loading, error } = useGetProductsQuery();

  // if (loading) return <p>Завантаження...</p>;
  // if (error) return <p>Помилка: {error.message}</p>;

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />

      <main className="flex-1">
        <div className="flex flex-col items-center justify-center pt-4">
          {/* <h1 className="text-3xl font-bold text-gray-800">
            Shopify + Next.js
          </h1> */}

          <ProductContainer />
        </div>
      </main>
      <Footer />
    </div>
  );
}
