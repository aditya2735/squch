"use client";

import { useRouter, usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import { routing } from "@/i18n/routing"; // Ensure this contains `locales`

export default function LanguageDropdown() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  const languageMap: Record<string, string> = {
    en: "English",
    hn: "Hindi", 
  };

  const handleLangChange = (nextLocale: string) => {
    const cleanPath = pathname.replace(`/${currentLocale}`, "");
    router.replace(`/${nextLocale}${cleanPath}`);
  };

  return (
         <select
        id="language-select"
        onChange={(e) => handleLangChange(e.target.value)}
        defaultValue={currentLocale}
        
      >
         {routing.locales.map((locale) => (
          <option key={locale} value={locale}>
            {languageMap[locale] || locale.toUpperCase()} 
          </option>
        ))}
      </select>
   );
}
