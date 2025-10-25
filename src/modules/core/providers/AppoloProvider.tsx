"use client";

import type { ReactNode, FC } from "react";
import { ApolloProvider } from "@apollo/client/react";
import client from "@/lib/appolo-client";

type AppoloWraperProps = {
  children: ReactNode;
};

export const AppoloWrapper: FC<AppoloWraperProps> = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
