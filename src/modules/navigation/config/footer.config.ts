import { FooterConfig } from "@/modules/navigation/components/footer/footer.interface";

export const footerConfig: FooterConfig = {
  sections: [
    {
      title: "Магазин",
      links: [
        { title: "Обличчя", href: "/categories/face" },
        { title: "Волосся", href: "/categories/hair" },
        { title: "Тіло", href: "/categories/body" },
        { title: "Парфуми", href: "/categories/perfumes" },
      ],
    },
    {
      title: "Клієнтам",
      links: [
        { title: "Про нас", href: "/about" },
        { title: "Доставка та оплата", href: "/delivery" },
        { title: "Повернення", href: "/returns" },
        { title: "Контакти", href: "/contacts" },
      ],
    },
    {
      title: "Інформація",
      links: [
        { title: "Політика конфіденційності", href: "/privacy" },
        { title: "Умови використання", href: "/terms" },
        { title: "FAQ", href: "/faq" },
        { title: "Блог", href: "/blog" },
      ],
    },
  ],
  social: [
    {
      name: "Instagram",
      href: "https://instagram.com/nicecosmetics",
      icon: "Instagram",
    },
    {
      name: "Facebook",
      href: "https://facebook.com/nicecosmetics",
      icon: "Facebook",
    },
    {
      name: "TikTok",
      href: "https://tiktok.com/@nicecosmetics",
      icon: "TikTok",
    },
  ],
  contact: {
    phone: "+380 68 216 2713",
    email: "info@nicecosmetics.com",
    address: "Україна, м. Київ",
  },
} as const;
