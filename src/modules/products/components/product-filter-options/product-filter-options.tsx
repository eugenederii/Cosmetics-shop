"use client";

import { type FC } from "react";
import { Checkbox } from "@/modules/core/components/checkbox";
import { ProductFilterOptionsProps } from "./product-filter-options.interface";

export const ProductFilterOptions: FC<ProductFilterOptionsProps> = ({
  options,
  onChange,
}) => {
  return (
    <div className="space-y-2">
      {options.map((option) => (
        <div key={option.id} className="flex items-center gap-2">
          <Checkbox
            size="small"
            value={option.value}
            onChange={(e) => onChange(option.id, e.target.checked)}
          />
          <span
            className="text-sm cursor-pointer"
            onClick={() => onChange(option.id, !option.value)}
          >
            {option.label}
            {option.count !== undefined && (
              <span className="text-gray-500 ml-1">({option.count})</span>
            )}
          </span>
        </div>
      ))}
    </div>
  );
};
