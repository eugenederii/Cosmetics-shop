"use client";
import { FC } from "react";

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
import { cn } from "@/lib/utils";
import { useBoolean } from "usehooks-ts";

export const MainNav: FC<MainNavProps> = ({ onMobileMenuToggle }) => {
  const { value: isSearchActive, setValue: setIsSearchActive } =
    useBoolean(false);

  return (
    <div className="border-b border-gray-100 relative">
      {isSearchActive && (
        <>
          <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40" />
          <div className="absolute inset-0 flex items-center z-50 pointer-events-none px-4 md:px-6">
            <div className="pointer-events-auto w-full md:max-w-xl md:mx-auto relative">
              <div className="absolute -inset-[10px] bg-white/50 backdrop-blur-sm rounded-lg -z-10" />
              <SearchIconButton
                text="Пошук"
                onActiveChange={setIsSearchActive}
                isActive={isSearchActive}
              />
            </div>
          </div>
        </>
      )}

      <div className="mx-auto px-4 md:px-6 relative">
        <div
          className={cn(
            "flex items-center justify-between h-22 gap-4 relative",
            isSearchActive &&
              "opacity-0 md:opacity-100 pointer-events-none md:pointer-events-auto",
          )}
        >
          <div className="flex items-center shrink-0 gap-3 md:gap-0">
            {!isSearchActive && (
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden -ml-2"
                onClick={onMobileMenuToggle}
              >
                <Menu className="h-5 w-5" />
              </Button>
            )}

            <div
              className={cn(
                "text-2xl font-bold text-gray-900 whitespace-nowrap relative z-50",
                isSearchActive && "hidden md:block",
              )}
            >
              NiceCosmetics
            </div>
          </div>

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

          <div className="flex items-center gap-2 md:gap-4 shrink-0">
            {!isSearchActive && (
              <SearchIconButton
                text="Пошук"
                onActiveChange={setIsSearchActive}
                isActive={isSearchActive}
              />
            )}
            <div
              className={cn(
                "flex items-center gap-2 md:gap-4 relative z-50",
                isSearchActive && "hidden md:flex",
              )}
            >
              <UserIconButton text="Подарунки" href="#" />
              <CartButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
