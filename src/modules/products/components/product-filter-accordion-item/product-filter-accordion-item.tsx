import { type FC } from "react";
import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/modules/core/components/accordion";
import { ProductFilterAccordionItemProps } from "./product-filter-accordion-item.interface";

export const ProductFilterAccordionItem: FC<
  ProductFilterAccordionItemProps
> = ({ value, title, children }) => {
  return (
    <AccordionItem value={value} className="border-b border-gray-100">
      <AccordionTrigger className="px-4 py-3 hover:no-underline">
        <span className="font-medium text-sm">{title}</span>
      </AccordionTrigger>
      <AccordionContent className="px-4 pb-3 max-h-60 overflow-y-auto">
        {children}
      </AccordionContent>
    </AccordionItem>
  );
};
