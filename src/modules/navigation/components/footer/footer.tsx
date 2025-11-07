import { type FC } from "react";
import Link from "next/link";
import { footerConfig } from "@/modules/navigation/config/footer.config";

export const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blur text-white mt-auto">
      <div className="mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div className="text-left">
              <h3 className="text-2xl font-bold mb-4">NiceCosmetics</h3>
              <p className="text-gray-300 mb-4">
                Європейська якісна косметика для кожного
              </p>
              <div className="space-y-2 text-sm text-gray-300">
                <p>📞 {footerConfig.contact.phone}</p>
                <p>✉️ {footerConfig.contact.email}</p>
                <p>📍 {footerConfig.contact.address}</p>
              </div>
            </div>

            {footerConfig.sections.map((section) => (
              <div key={section.title} className="text-left">
                <h4 className="font-semibold text-lg mb-4">{section.title}</h4>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-gray-300 hover:text-white transition-colors"
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-white pt-8 text-center text-gray-300">
            <p>© {currentYear} NiceCosmetics. Всі права захищені.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
