"use client";
import { useState } from "react";

interface Country {
    code: string;
    className: string;
    dialCode: string;
}

const countries: Country[] = [
    { code: "us", className: "gb", dialCode: "+1" }, // 🇺🇸
    { code: "in", className: "in", dialCode: "+91" }, // 🇮🇳
    { code: "am", className: "am", dialCode: "+374" }, // 🇦🇲 Armenia
    { code: "za", className: "za", dialCode: "+27" }, // 🇿🇦 South Africa
];

export default function PhoneDropdown() {
    const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
    const [selectedCountry, setSelectedCountry] = useState<Country>(countries[0]);

    const changeCountry = (country: Country) => {
        setSelectedCountry(country);
        setDropdownOpen(false);
    };

    return (
        <div className="dropdown">
            <button
                className="btn btn-light dropdown-toggle d-flex align-items-center"
                type="button"
                onClick={() => setDropdownOpen(!dropdownOpen)}
            >
                <span className={`flag-icon ${selectedCountry.className} me-2`}></span>
                <span>{selectedCountry.dialCode}</span>
            </button>

            {dropdownOpen && (
                <ul className="dropdown-menu show">
                    {countries.map((country) => (
                        <li key={country.code}>
                            <button
                                className="dropdown-item d-flex align-items-center"
                                onClick={() => changeCountry(country)}
                            >
                                <span className={`flag-icon ${country.className} me-2`}></span>
                                <span>{country.dialCode}</span>
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}