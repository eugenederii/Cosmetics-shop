import { GetProductsQuery } from "@/graphql/generated";

export type ProductGridProps = {
  products: GetProductsQuery["products"]["edges"];
};
