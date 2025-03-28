"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";

const languages = [
  { code: "us", className: "gb", dialCode: "+1" }, // 🇺🇸
  { code: "in", className: "in", dialCode: "+91" }, // 🇮🇳
  { code: "am", className: "am", dialCode: "+374" }, // 🇦🇲 Armenia
  { code: "za", className: "za", dialCode: "+27" }, // 🇿🇦 South Africa
];

export default function LanguageSwitcher() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const currentLang = searchParams.get("lang") || "en"; // Default to English

  const changeLanguage = (lang: any) => {
    const newUrl = new URL(window.location.href);
    newUrl.searchParams.set("lang", lang);
    router.push(newUrl.toString());
    setDropdownOpen(false);
  };

  const currentLanguage = languages.find((l) => l.code === currentLang);

  return (
    <div className="dropdown">
      <button
        className="btn btn-light dropdown-toggle d-flex align-items-center"
        type="button"
        onClick={() => setDropdownOpen(!dropdownOpen)}
      >
        <span className={`flag-icon ${currentLanguage?.className} me-2`}></span>
        <span>{currentLanguage?.dialCode || ""}</span>
      </button>

      {dropdownOpen && (
        <ul className="dropdown-menu show">
          {languages.map(({ code, className, dialCode }) => (
            <li key={code}>
              <button
                className="dropdown-item d-flex align-items-center"
                onClick={() => changeLanguage(code)}
              >
                <span className={`flag-icon ${className} me-2`}></span>
                <span>{dialCode}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
