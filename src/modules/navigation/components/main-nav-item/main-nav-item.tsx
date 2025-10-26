"use client";
import { FC } from "react";

import {
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/modules/navigation/components/navigation-menu";

import { NavItemProps } from "./main-nav-item.interface";

export const NavItem: FC<NavItemProps> = ({ title, items }) => {
  return (
    <NavigationMenuItem className="shrink-0">
      <NavigationMenuTrigger className="px-3 py-2 text-sm whitespace-nowrap">
        {title}
      </NavigationMenuTrigger>
      <NavigationMenuContent className="mt-0! z-50">
        <div className="p-4 w-[400px] max-w-[90vw] bg-white border border-gray-200 rounded-lg shadow-lg mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block p-2 hover:bg-gray-50 rounded-md transition-colors text-sm"
              >
                <span className="font-medium text-gray-900">{item.title}</span>
              </a>
            ))}
          </div>
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};
