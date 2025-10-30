"use client";

import { useGetProductsQuery } from "@/graphql/generated";
import Image from "next/image";
import { Header } from "@/modules/navigation/components/header/Header";

export default function Home() {
  const { data, loading, error } = useGetProductsQuery();

  if (loading) return <p>Завантаження...</p>;
  if (error) return <p>Помилка: {error.message}</p>;

  const products = data?.products?.edges ?? [];

  console.log(products);

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <div className="flex flex-col items-center justify-center pt-20">
        <h1 className="text-3xl font-bold text-gray-800">Shopify + Next.js</h1>
        <p className="text-gray-500 mt-2">
          Твій майбутній магазин — починай творити!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {products.map(({ node }) => (
            <div key={node.id} className="p-4 bg-white rounded-2xl shadow">
              {node.featuredImage && (
                <Image
                  width={350}
                  height={350}
                  src={node.featuredImage.url}
                  alt={node.title}
                  className="rounded-lg mb-3"
                />
              )}
              <h2 className="text-lg font-semibold text-black">
                {node.description}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
