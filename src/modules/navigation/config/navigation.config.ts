import { HeaderConfig } from "../types/navigation.types";

export const headerConfig: HeaderConfig = {
  topBarLinks: [
    { title: "Про нас", href: "/about" },
    { title: "Система знижок", href: "/discounts" },
    { title: "Оплата", href: "/payment" },
    { title: "FAQ", href: "/faq" },
    { title: "Доставка", href: "/delivery" },
    { title: "Публічна оферта", href: "/offer" },
  ],
  mainNav: [
    {
      title: "Обличчя",
      items: [
        { title: "Тональні засоби", href: "/face/foundation" },
        { title: "Пудра", href: "/face/powder" },
        { title: "Рум'яна", href: "/face/blush" },
        { title: "Коректор", href: "/face/concealer" },
      ],
    },
    {
      title: "Очі",
      items: [
        { title: "Тіні для повік", href: "/eyes/eyeshadow" },
        { title: "Туш", href: "/eyes/mascara" },
        { title: "Підводка", href: "/eyes/eyeliner" },
        { title: "Брови", href: "/eyes/brows" },
      ],
    },
    {
      title: "Губи",
      items: [
        { title: "Помада", href: "/lips/lipstick" },
        { title: "Бальзам для губ", href: "/lips/balm" },
        { title: "Тінт для губ", href: "/lips/tint" },
        { title: "Блеск для губ", href: "/lips/gloss" },
        { title: "Помада-олівець", href: "/lips/pencil" },
      ],
    },
    {
      title: "Волосся",
      items: [
        { title: "Шампуні", href: "/hair/shampoo" },
        { title: "Маски", href: "/hair/masks" },
        { title: "Стайлінг", href: "/hair/styling" },
      ],
    },
    {
      title: "Тіло",
      items: [
        { title: "Лосьйон", href: "/body/lotion" },
        { title: "Гель для душу", href: "/body/shower-gel" },
        { title: "Скраб", href: "/body/scrub" },
      ],
    },
    {
      title: "Нігті",
      items: [
        { title: "Лаки", href: "/nails/polish" },
        { title: "Базові/Фінішні", href: "/nails/base-top" },
        { title: "Засоби для нігтів", href: "/nails/care" },
      ],
    },
    {
      title: "Парфуми",
      items: [
        { title: "Жіночі", href: "/fragrance/women" },
        { title: "Чоловічі", href: "/fragrance/men" },
        { title: "Унісекс", href: "/fragrance/unisex" },
      ],
    },
    {
      title: "Догляд",
      items: [
        { title: "Очищення", href: "/skincare/cleansing" },
        { title: "Тонізація", href: "/skincare/toning" },
        { title: "Зволоження", href: "/skincare/moisturizing" },
        { title: "Сонцезахисні", href: "/skincare/sun-protection" },
      ],
    },
  ],
};
