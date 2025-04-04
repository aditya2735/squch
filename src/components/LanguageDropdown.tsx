"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const languages = [
  { code: "us", className: "gb", name: "United States" },
  { code: "in", className: "in", name: "India" },
  { code: "am", className: "am", name: "Armenia" },
  { code: "za", className: "za", name: "South Africa" },
];

export default function LanguageDropdown() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLang = searchParams.get("lang") || "us";
  const currentLanguage = languages.find((l) => l.code === currentLang);

  const changeLanguage = (lang: string) => {
    const currentPath = window.location.pathname;
    const params = new URLSearchParams(window.location.search);
    params.set("lang", lang);
    router.replace(`${currentPath}?${params.toString()}`, { scroll: false });
    setDropdownOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownOpen]);

  return (
    <div className="dropdown" ref={dropdownRef}>
      <button
        className="btn btn-light dropdown-toggle d-flex align-items-center"
        type="button"
        onClick={() => setDropdownOpen((prev) => !prev)}
      >
        <span className={`flag-icon ${currentLanguage?.className} me-2`}></span>
        <span>{currentLanguage?.name}</span>
      </button>

      {dropdownOpen && (
        <ul className="dropdown-menu show">
          {languages.map(({ code, className, name }) => (
            <li key={code}>
              <button
                className="dropdown-item d-flex align-items-center"
                onClick={() => changeLanguage(code)}
              >
                <span className={`flag-icon ${className} me-2`}></span>
                <span>{name}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
