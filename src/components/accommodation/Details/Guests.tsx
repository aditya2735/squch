"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  setDate,
  setGuestCount,
  setLocation,
} from "@/store/features/accommodation/slices/housePoliciesSlice";
import { LocationData } from "@/store/features/accommodation/staticData/locationData";
import { LocationType } from "@/store/features/accommodation/types/homePageTypes";
import { useTranslations } from "next-intl";

import 'rsuite/dist/rsuite.min.css';


const GuestList = ({
  isOpen,
  onToggle
}: {
  isOpen: boolean;
  onToggle: () => void;
}) => {
  const dispatch = useAppDispatch();
  const router= useRouter()
  const t = useTranslations("Accommodation.BookingDetail");
  const selectedFilters = useAppSelector((state) => state.housePolicy);
  const [locationValue,setLocationValue]=useState<string | null>(null);
  const [checkInDate, setCheckInDate] = useState<Date    | null  >(null); 
  const [checkOutDate, setCheckOutDate] = useState<Date  | null >(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        onToggle();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onToggle]);
    const guestTypes = [
    { key: "adults", label: t("adults"), description: t("adultsAge") },
    { key: "children", label: t("children"), description: t("childrenAge") },
    { key: "infants", label: t("infants"), description: t("infantsAge") },
    { key: "pets", label: t("pets"), description: t("serviceAnimal") },
    { key: "specialCare", label: t("specialCare"), description: t("seniorCitizens") }
  ];

  const [range, setRange] = useState([null, null]);
  console.log('range: ', range);
  const pickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (selectedFilters?.locationName) {
      setLocationValue(selectedFilters.locationName);
    }
  }, [selectedFilters?.locationName]);
  
  const locationData1: LocationType = LocationData;
  // State and ref for general dropdown
   const dropdownRef = useRef<HTMLDivElement | null>(null);

// Search Button Disable
  const isDisabled = !selectedFilters?.checkIn || !selectedFilters?.checkOut || !selectedFilters?.locationId;

  // State and ref for location dropdown
   const locationDropdownRef = useRef<HTMLDivElement | null>(null);

 
  // Common function to handle click outside logic for both dropdowns

 
useEffect(() => {
  console.log("CheckInDate updated:", checkInDate);
}, [checkInDate]);

useEffect(() => {
  console.log("CheckOutDate updated:", checkOutDate);
}, [checkOutDate]);

 
  return (
    <div className="w-100 position-relative" ref={dropdownRef}>
    {/* Button */}
    <h5> {t("guests")}</h5>
    <div className="w-100">
      <button
        type="button"
        className="menu-location-btn"
        id="menu-button"
        aria-expanded={isOpen}
        aria-haspopup="true"
        onClick={onToggle}
      >
         {t("addGuests")}
        <svg
          className="-mr-1 size-6 txet-[#838383]"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
          data-slot="icon"
        >
          <path
            fillRule="evenodd"
            d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>

    {/* Dropdown Menu */}
    {isOpen && (
      <div
        className="menu-dropdown dropdown-position-fixed"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        tabIndex={-1}
      >
        <div className="coming-inner-sec" role="none">
        <h5> {t("whosComing")}</h5>
          {guestTypes.map(({ key, label, description }) => (
            <div
              key={key}
              className="add-remove-box d-flex justify-content-between align-items-center"
            >
              <div className="text-add-remove">
                <h6>{label}</h6>
                <span>{description}</span>
              </div>
              <form className="add-remove-btn">
                <div className="d-flex align-items-center justify-content-between gap-2 position-relative text-center">
                  {/* Decrement Button */}
                  <button
                    type="button"
                    onClick={() =>
                      // handleGuestChange(key, "decrement")
                      dispatch(
                        setGuestCount({
                          key: key,
                          type: "decrement",
                        })
                      )
                    }
                    className="btn-remove"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.93294 18.3337C14.5163 18.3337 18.2663 14.5837 18.2663 10.0003C18.2663 5.41699 14.5163 1.66699 9.93294 1.66699C5.34961 1.66699 1.59961 5.41699 1.59961 10.0003C1.59961 14.5837 5.34961 18.3337 9.93294 18.3337Z"
                        stroke="#652669"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6.59961 10H13.2663"
                        stroke="#652669"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>

                  {/* Input Field */}
                  <input
                    type="text"
                    value={selectedFilters[key] ?? 0}
                    readOnly
                    className=""
                  />

                  {/* Increment Button */}
                  <button
                    type="button"
                    onClick={() =>
                      // handleGuestChange(key, "increment")
                      dispatch(
                        setGuestCount({
                          key: key,
                          type: "increment",
                        })
                      )
                    }
                    className="btn-add"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.99935 18.3337C14.5827 18.3337 18.3327 14.5837 18.3327 10.0003C18.3327 5.41699 14.5827 1.66699 9.99935 1.66699C5.41602 1.66699 1.66602 5.41699 1.66602 10.0003C1.66602 14.5837 5.41602 18.3337 9.99935 18.3337Z"
                        stroke="#652669"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6.66602 10H13.3327"
                        stroke="#652669"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10 13.3337V6.66699"
                        stroke="#652669"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          ))}
        </div>
      </div>
    )}
  </div>
  );
};

export default GuestList;
