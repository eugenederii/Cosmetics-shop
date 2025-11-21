"use client";
import { FC, useState } from "react";

import { Menu } from "lucide-react";
import { Button } from "@/modules/core/components/button/button";
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/modules/navigation/components/navigation-menu/navigation-menu";
import { NavItem } from "@/modules/navigation/components/main-nav-item";
import { headerConfig } from "@/modules/navigation/config/navigation.config";
import { MainNavProps } from "./main-navigation.interface";
import { CartButton } from "@/modules/cart/components/cart-button";
import { UserIconButton } from "@/modules/navigation/components/icon-user-button";
import { SearchIconButton } from "../icon-search-button";

export const MainNav: FC<MainNavProps> = ({ onMobileMenuToggle }) => {
  const [isSearchActive, setIsSearchActive] = useState(false);

  return (
    <div className="border-b border-gray-100 relative">
      {/* Search input - centered when active, positioned absolutely relative to header */}
      {isSearchActive && (
        <div className="absolute left-1/2 top-0 bottom-0 transform -translate-x-1/2 flex items-center w-full max-w-xl z-50 pointer-events-none px-6">
          <div className="pointer-events-auto w-full">
            <SearchIconButton
              text="Пошук"
              onActiveChange={setIsSearchActive}
              isActive={isSearchActive}
            />
          </div>
        </div>
      )}

      <div className="mx-auto px-6 relative">
        <div className="flex items-center justify-between h-22 gap-4 relative">
          {/* Logo - always visible, mobile menu button - hide when search is active */}
          <div className="flex items-center shrink-0">
            {!isSearchActive && (
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden mr-2"
                onClick={onMobileMenuToggle}
              >
                <Menu className="h-5 w-5" />
              </Button>
            )}

            <div className="text-2xl font-bold text-gray-900 whitespace-nowrap">
              NiceCosmetics
            </div>
          </div>

          {/* Navigation menu - hide when search is active */}
          {!isSearchActive && (
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
          )}

          {/* Right side buttons - always visible */}
          <div className="flex items-center space-x-4 shrink-0">
            {!isSearchActive && (
              <SearchIconButton
                text="Пошук"
                onActiveChange={setIsSearchActive}
                isActive={isSearchActive}
              />
            )}
            <UserIconButton text="Подарунки" href="#" />
            <CartButton />
          </div>
        </div>
      </div>
    </div>
  );
};
