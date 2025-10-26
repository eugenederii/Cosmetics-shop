"use client";

import { FC } from "react";
import { Button } from "@/modules/core/components/button/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/modules/navigation/components/sheet/sheet";
import { headerConfig } from "@/modules/navigation/config/navigation.config";
import { MobileMenuProps } from "./mobile-menu.interface";

export const MobileMenu: FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="left" className="w-[300px] sm:w-[400px]">
        <SheetHeader className=" hidden">
          <SheetTitle className="sr-only">Мобільне меню</SheetTitle>
        </SheetHeader>
        <div className="flex items-center justify-between mb-6">
          <div className="text-xl font-bold">Меню</div>

          <Button
            icon="close"
            onClick={onClose}
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-black"
          />
        </div>

        {/* Навігація для мобільного */}
        <div className="h-full overflow-y-auto p-6">
          <nav className="flex flex-col space-y-6">
            {headerConfig.mainNav.map((category) => (
              <div key={category.title}>
                <h3 className="font-semibold text-lg mb-3 text-gray-900">
                  {category.title}
                </h3>

                <div className="flex flex-col space-y-2 pl-4">
                  {category.items.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="py-2 text-gray-600 hover:text-gray-900 transition-colors"
                      onClick={onClose}
                    >
                      {item.title}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </nav>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="flex flex-col space-y-3">
              <a
                href="/about"
                className="text-gray-600 hover:text-gray-900"
                onClick={onClose}
              >
                Про нас
              </a>
              <a
                href="/delivery"
                className="text-gray-600 hover:text-gray-900"
                onClick={onClose}
              >
                Доставка
              </a>
              <a
                href="/contacts"
                className="text-gray-600 hover:text-gray-900"
                onClick={onClose}
              >
                Контакти
              </a>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
