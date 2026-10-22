"use client";

import { useState, useRef, useEffect } from "react";

export type Country = {
  iso: string;
  name: string;
  dialCode: string;
  flag: string;
  placeholder: string;
  minLength: number;
  maxLength: number;
};

export const COUNTRIES: Country[] = [
  {
    iso: "ph",
    name: "Philippines",
    dialCode: "+63",
    flag: "🇵🇭",
    placeholder: "0905 123 4567",
    minLength: 8,
    maxLength: 11,
  },
  {
    iso: "us",
    name: "United States",
    dialCode: "+1",
    flag: "🇺🇸",
    placeholder: "(555) 123-4567",
    minLength: 10,
    maxLength: 10,
  },
  {
    iso: "sg",
    name: "Singapore",
    dialCode: "+65",
    flag: "🇸🇬",
    placeholder: "8123 4567",
    minLength: 8,
    maxLength: 8,
  },
  {
    iso: "au",
    name: "Australia",
    dialCode: "+61",
    flag: "🇦🇺",
    placeholder: "0412 345 678",
    minLength: 9,
    maxLength: 10,
  },
  {
    iso: "gb",
    name: "United Kingdom",
    dialCode: "+44",
    flag: "🇬🇧",
    placeholder: "07911 123456",
    minLength: 10,
    maxLength: 11,
  },
  {
    iso: "jp",
    name: "Japan",
    dialCode: "+81",
    flag: "🇯🇵",
    placeholder: "090-1234-5678",
    minLength: 10,
    maxLength: 11,
  },
  {
    iso: "cn",
    name: "China",
    dialCode: "+86",
    flag: "🇨🇳",
    placeholder: "138 0000 0000",
    minLength: 11,
    maxLength: 11,
  },
  {
    iso: "hk",
    name: "Hong Kong",
    dialCode: "+852",
    flag: "🇭🇰",
    placeholder: "9123 4567",
    minLength: 8,
    maxLength: 8,
  },
  {
    iso: "ae",
    name: "United Arab Emirates",
    dialCode: "+971",
    flag: "🇦🇪",
    placeholder: "050 123 4567",
    minLength: 9,
    maxLength: 10,
  },
  {
    iso: "ca",
    name: "Canada",
    dialCode: "+1",
    flag: "🇨🇦",
    placeholder: "(555) 123-4567",
    minLength: 10,
    maxLength: 10,
  },
  {
    iso: "nz",
    name: "New Zealand",
    dialCode: "+64",
    flag: "🇳🇿",
    placeholder: "021 123 4567",
    minLength: 8,
    maxLength: 11,
  },
  {
    iso: "my",
    name: "Malaysia",
    dialCode: "+60",
    flag: "🇲🇾",
    placeholder: "012-345 6789",
    minLength: 9,
    maxLength: 11,
  },
  {
    iso: "id",
    name: "Indonesia",
    dialCode: "+62",
    flag: "🇮🇩",
    placeholder: "0812-3456-7890",
    minLength: 9,
    maxLength: 13,
  },
  {
    iso: "th",
    name: "Thailand",
    dialCode: "+66",
    flag: "🇹🇭",
    placeholder: "081 234 5678",
    minLength: 9,
    maxLength: 10,
  },
  {
    iso: "vn",
    name: "Vietnam",
    dialCode: "+84",
    flag: "🇻🇳",
    placeholder: "090 123 4567",
    minLength: 9,
    maxLength: 10,
  },
  {
    iso: "kr",
    name: "South Korea",
    dialCode: "+82",
    flag: "🇰🇷",
    placeholder: "010-1234-5678",
    minLength: 9,
    maxLength: 11,
  },
  {
    iso: "de",
    name: "Germany",
    dialCode: "+49",
    flag: "🇩🇪",
    placeholder: "0151 12345678",
    minLength: 10,
    maxLength: 12,
  },
  {
    iso: "fr",
    name: "France",
    dialCode: "+33",
    flag: "🇫🇷",
    placeholder: "06 12 34 56 78",
    minLength: 9,
    maxLength: 10,
  },
  {
    iso: "it",
    name: "Italy",
    dialCode: "+39",
    flag: "🇮🇹",
    placeholder: "312 345 6789",
    minLength: 9,
    maxLength: 11,
  },
  {
    iso: "es",
    name: "Spain",
    dialCode: "+34",
    flag: "🇪🇸",
    placeholder: "612 34 56 78",
    minLength: 9,
    maxLength: 9,
  },
];

export function validatePhoneNumber(rawNumber: string, country: Country): {
  isValid: boolean;
  error: string | null;
} {
  const digits = rawNumber.replace(/\D/g, "");

  if (!digits) {
    return { isValid: false, error: "Phone number is required." };
  }

  // Specific rules for Philippines
  if (country.iso === "ph") {
    // If starts with 0 (e.g. 0917 123 4567) -> 11 digits
    // If starts with 9 (e.g. 917 123 4567) -> 10 digits
    // If landline -> 8-10 digits
    if (digits.length < country.minLength) {
      return { isValid: false, error: `Too short for ${country.name}` };
    }
    if (digits.length > country.maxLength) {
      return { isValid: false, error: `Too long for ${country.name}` };
    }
    return { isValid: true, error: null };
  }

  if (digits.length < country.minLength) {
    return { isValid: false, error: `Too short for ${country.name}` };
  }

  if (digits.length > country.maxLength) {
    return { isValid: false, error: `Too long for ${country.name}` };
  }

  return { isValid: true, error: null };
}

type PhoneInputProps = {
  value: string;
  onChange: (value: string) => void;
  country: Country;
  onSelectCountry: (country: Country) => void;
  error?: string | null;
  onBlur?: () => void;
  id?: string;
  name?: string;
  required?: boolean;
};

export default function PhoneInput({
  value,
  onChange,
  country,
  onSelectCountry,
  error,
  onBlur,
  id = "Phone-No",
  name = "Phone-No",
  required = true,
}: PhoneInputProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      // Focus search input on open
      setTimeout(() => searchInputRef.current?.focus(), 50);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const filteredCountries = COUNTRIES.filter((c) => {
    const q = search.toLowerCase().trim();
    return (
      c.name.toLowerCase().includes(q) ||
      c.dialCode.includes(q) ||
      c.iso.toLowerCase().includes(q)
    );
  });

  const prefixWidthRem = (3.6 + country.dialCode.length * 0.55).toFixed(2);

  return (
    <div
      className="iti-phone-container"
      ref={containerRef}
      style={{ "--iti-prefix-width": `${prefixWidthRem}rem` } as React.CSSProperties}
    >
      <div className="iti-phone-input-wrapper">
        {/* Country Flag Selector Button */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="iti-selected-flag-button"
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          aria-label={`Select country code. Current: ${country.name} (${country.dialCode})`}
        >
          <span className="iti-flag-emoji" aria-hidden="true">
            {country.flag}
          </span>
          <span className="iti-dial-code">{country.dialCode}</span>
          <span className="iti-arrow" aria-hidden="true">
            ▾
          </span>
        </button>

        {/* Text Input for Phone Number */}
        <input
          id={id}
          name={name}
          type="tel"
          required={required}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onBlur={onBlur}
          placeholder={country.placeholder}
          className={`form_input is-alternate w-input iti-phone-field ${
            error ? "input-error" : ""
          }`}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? "phone-error-msg" : undefined}
          autoComplete="tel"
        />

        {/* Country Dropdown Menu */}
        {isOpen && (
          <div className="iti-country-dropdown" role="listbox">
            <div className="iti-search-box">
              <input
                ref={searchInputRef}
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search country or code..."
                className="iti-search-input"
                aria-label="Search countries"
              />
            </div>

            <div className="iti-country-list">
              {filteredCountries.length === 0 ? (
                <div className="iti-no-results">No countries found</div>
              ) : (
                filteredCountries.map((c) => {
                  const isSelected = c.iso === country.iso;
                  return (
                    <button
                      key={c.iso}
                      type="button"
                      role="option"
                      aria-selected={isSelected}
                      onClick={() => {
                        onSelectCountry(c);
                        setIsOpen(false);
                        setSearch("");
                      }}
                      className={`iti-country-item ${isSelected ? "is-active" : ""}`}
                    >
                      <span className="iti-country-flag" aria-hidden="true">
                        {c.flag}
                      </span>
                      <span className="iti-country-name">{c.name}</span>
                      <span className="iti-country-dial">{c.dialCode}</span>
                    </button>
                  );
                })
              )}
            </div>
          </div>
        )}
      </div>

      {/* Error Message Announcement */}
      {error && (
        <div id="phone-error-msg" className="phone-field-error" role="alert">
          {error}
        </div>
      )}
    </div>
  );
}
