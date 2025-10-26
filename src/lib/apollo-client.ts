import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  NormalizedCacheObject,
} from "@apollo/client";
import fetch from "cross-fetch";

export type ApolloClientInstance = ApolloClient<NormalizedCacheObject>;

export const getApolloClient = (
  isServer = typeof window === "undefined",
): ApolloClientInstance => {
  const uri = `https://${
    isServer
      ? process.env.SHOPIFY_STORE_DOMAIN
      : process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN
  }/api/2025-10/graphql.json`;

  const token = isServer
    ? process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN
    : process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN;

  return new ApolloClient({
    ssrMode: isServer,
    link: new HttpLink({
      uri,
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": token!,
      },
      fetch: isServer ? fetch : undefined,
    }),
    cache: new InMemoryCache(),
  });
};
