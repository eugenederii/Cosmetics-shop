"use client";
import { FC } from "react";

import { Search, User, ShoppingCart, Menu } from "lucide-react";
import { Button } from "@/modules/core/components/button/button";
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/modules/navigation/components/navigation-menu/navigation-menu";
import { NavItem } from "@/modules/navigation/components/main-nav-item";
import { headerConfig } from "@/modules/navigation/config/navigation.config";
import { MainNavProps } from "./main-navigation.interface";

export const MainNav: FC<MainNavProps> = ({ onMobileMenuToggle }) => {
  return (
    <div className="border-b border-gray-100 relative">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-22 gap-4">
          {/* Лого + мобільне меню */}
          <div className="flex items-center shrink-0">
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden mr-2"
              onClick={onMobileMenuToggle}
            >
              <Menu className="h-5 w-5" />
            </Button>

            <div className="text-2xl font-bold text-gray-900 whitespace-nowrap">
              NiceCosmetics
            </div>
          </div>

          {/* Навігація з NavigationMenu */}
          <NavigationMenu
            className="hidden md:flex relative min-w-0 flex-1 justify-center"
            viewport={false}
          >
            <NavigationMenuList className="gap-0 flex-wrap justify-center">
              {headerConfig.mainNav.map((category) => (
                <NavItem
                  key={category.title}
                  title={category.title}
                  items={category.items}
                />
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Іконки */}
          <div className="flex items-center space-x-4 shrink-0">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-rose-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                0
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
