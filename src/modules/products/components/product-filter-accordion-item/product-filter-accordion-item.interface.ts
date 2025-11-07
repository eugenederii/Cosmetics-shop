import { ReactNode } from "react";

export type ProductFilterAccordionItemProps = {
  value: string;
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
};
