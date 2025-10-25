"use client";

import { useGetProductsQuery } from "@/graphql/generated";

import { Button } from "@/modules/core/components/button/button";
export default function Home() {
  const { data, loading, error } = useGetProductsQuery();

  if (loading) return <p>Завантаження...</p>;
  if (error) return <p>Помилка: {error.message}</p>;

  const products = data?.products?.edges ?? [];

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-gray-800">Shopify + Next.js</h1>
      <p className="text-gray-500 mt-2">
        Твій майбутній магазин — починай творити!
      </p>

      <Button />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        {products.map(({ node }) => (
          <div key={node.id} className="p-4 bg-white rounded-2xl shadow">
            {node.featuredImage && (
              <img
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
    </main>
  );
}
