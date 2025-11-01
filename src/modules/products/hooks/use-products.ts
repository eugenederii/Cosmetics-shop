import { useGetProductsQuery } from "@/graphql/generated";

export const useProductsInfinite = () => {
  const { data, fetchMore, loading } = useGetProductsQuery({
    variables: { first: 12 },
  });

  const loadMore = () => {
    if (data?.products.pageInfo.hasNextPage) {
      fetchMore({
        variables: {
          after: data.products.pageInfo.endCursor,
        },
      });
    }
  };

  return {
    products: data?.products.edges || [],
    loadMore,
    hasNextPage: data?.products.pageInfo.hasNextPage,
    loading,
  };
};
