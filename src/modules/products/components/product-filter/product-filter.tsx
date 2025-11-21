"use client";

import { type FC, useState, useMemo } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/modules/core/components/accordion";
import { ProductFiltersProps } from "./product-filter.interface";
import { ProductFilterOptions } from "@/modules/products/components/product-filter-options";
import type { ProductFilterOption } from "@/modules/products/components/product-filter-options";

export const ProductFilters: FC<ProductFiltersProps> = () => {
  const [forChildren, setForChildren] = useState(false);

  const categoryOptions = useMemo<ProductFilterOption[]>(
    () => [
      {
        id: "for-children",
        label: "Для дітей",
        value: forChildren,
      },
    ],
    [forChildren],
  );

  const handleCategoryChange = (id: string, checked: boolean) => {
    if (id === "for-children") {
      setForChildren(checked);
    }
  };

  return (
    <div className="bg-white rounded-lg w-[270px] shrink-0  border-gray-200">
      <div className="flex justify-between items-center p-3">
        <h3 className="font-semibold text-lg">Фільтри</h3>
      </div>

      {/*TODO */}

      <Accordion type="multiple" className="w-full">
        <AccordionItem value="categories" className="border-b border-gray-100">
          <AccordionTrigger className="px-4 py-3 hover:no-underline ">
            <span className="font-medium text-sm">Категорія</span>
          </AccordionTrigger>
          <AccordionContent className="px-4 pb-3 max-h-60 overflow-y-auto">
            <ProductFilterOptions
              options={categoryOptions}
              onChange={handleCategoryChange}
            />
          </AccordionContent>
        </AccordionItem>

        {/*TODO */}

        <AccordionItem value="brands" className="border-b border-gray-100">
          <AccordionTrigger className="px-4 py-3 hover:no-underline ">
            <span className="font-medium text-sm">Бренд</span>
          </AccordionTrigger>
          <AccordionContent className="px-4 pb-3 max-h-60 overflow-y-auto">
            <div className="space-y-2">kkkk</div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
