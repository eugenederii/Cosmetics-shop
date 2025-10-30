"use client";
import { MainNav } from "@/modules/navigation/components/main-navigation";
import { MobileMenu } from "../mobile-menu/mobile-menu";
import { useBoolean } from "usehooks-ts";

export const Header = () => {
  const {
    value: isMobileMenuOpen,
    toggle: toggleMobileMenu,
    setFalse: closeMobileMenu,
  } = useBoolean(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white">
      <MainNav onMobileMenuToggle={toggleMobileMenu} />
      <MobileMenu isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />
    </header>
  );
};
