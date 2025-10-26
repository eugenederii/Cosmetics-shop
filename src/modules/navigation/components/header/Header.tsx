"use client";
import { useState } from "react";
import { MainNav } from "@/modules/navigation/components/main-navigation";
import { MobileMenu } from "../mobile-menu/mobile-menu";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full bg-white">
      <MainNav
        onMobileMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      />
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </header>
  );
};
