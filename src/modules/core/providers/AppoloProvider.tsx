"use client";

import type { ReactNode, FC } from "react";
import { ApolloProvider } from "@apollo/client/react";
import { getApolloClient } from "@/lib/apollo-client";

type AppoloWraperProps = {
  children: ReactNode;
};

export const AppoloWrapper: FC<AppoloWraperProps> = ({ children }) => {
  const client = getApolloClient(false);
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
