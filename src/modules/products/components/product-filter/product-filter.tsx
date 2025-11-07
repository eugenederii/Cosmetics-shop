import { type FC, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/modules/core/components//accordion";
import { ProductFiltersProps } from "./product-filter.interface";
import { Checkbox } from "@/modules/core/components/checkbox";

export const ProductFilters: FC<ProductFiltersProps> = () => {
  const [forChildren, setForChildren] = useState(false);

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
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Checkbox
                  size="small"
                  value={forChildren}
                  onChange={(e) => setForChildren(e.target.checked)}
                />
                <span
                  className="text-sm cursor-pointer"
                  onClick={() => setForChildren(!forChildren)}
                >
                  Для дітей
                </span>
              </div>
            </div>
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
