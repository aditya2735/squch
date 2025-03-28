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
  
import CheckInOut from "../Details/CheckInOut";
import LocationList from "../Details/LocationList";
import GuestList from "../Details/Guests";


import "react-datepicker/dist/react-datepicker.css";
import { DateRangePicker } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
 

const LocationSearch = ({
  locationData,
  setLocationData,
}: {
  locationData: any;
  setLocationData: any;
}) => {
  const dispatch = useAppDispatch();
  const router= useRouter()
  const t = useTranslations("Accommodation.BookingDetail");
  const selectedFilters = useAppSelector((state) => state.housePolicy);
  const [locationValue,setLocationValue]=useState<string | null>(null);
  const [checkInDate, setCheckInDate] = useState<Date    | null  >(null); 
  const [checkOutDate, setCheckOutDate] = useState<Date  | null >(null);
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
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

// Search Button Disable
  const isDisabled = !selectedFilters?.checkIn || !selectedFilters?.checkOut || !selectedFilters?.locationId;

  // State and ref for location dropdown
  const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false);
  const locationDropdownRef = useRef<HTMLDivElement | null>(null);

  // Toggle function for the general dropdown
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Toggle function for the location dropdown
  const toggleLocationDropdown = () => {
    setIsLocationDropdownOpen((prev) => !prev);
  };

  // Common function to handle click outside logic for both dropdowns

  const handleClickOutside = (event: globalThis.MouseEvent) => {
    const target = event.target as Node;

    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(target) &&
      locationDropdownRef.current &&
      !locationDropdownRef.current.contains(target)
    ) {
      setIsOpen(false);
      setIsLocationDropdownOpen(false);
    }
  };

  // Event listener to detect clicks outside the dropdowns
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleDateChange = (
    Itemkey: "checkIn" | "checkOut",
    date: Date | null
  ) => {
    if (!date) return;

    const formattedDate = date.toLocaleDateString("en-CA");
    dispatch(setDate({ key: Itemkey, value: formattedDate }));
    if (Itemkey === "checkIn") {
      setCheckInDate(date);
    } else {
      setCheckOutDate(date);
    }  };

  const handleLanguage=(item:any)=>{
    dispatch(setLocation(item))
  }

//  ------------------
const formatDate = (date: Date | null): string => {
  if (!date) return '--';
  return date.toLocaleDateString();
};

// Open the date picker
const openPicker = () => {
  const input = pickerRef.current?.querySelector('input');
  input?.click();
};

// Handle date range changes
const handleDateRangeChange = (value: [Date, Date] | null) => {
  if (value) {
    const [start, end] = value;
    setCheckInDate(start);
    setCheckOutDate(end);
    
    // Dispatch to Redux
    dispatch(setDate({ key: "checkIn", value: start.toLocaleDateString("en-CA") }));
    dispatch(setDate({ key: "checkOut", value: end.toLocaleDateString("en-CA") }));
  }
};
useEffect(() => {
  console.log("CheckInDate updated:", checkInDate);
}, [checkInDate]);

useEffect(() => {
  console.log("CheckOutDate updated:", checkOutDate);
}, [checkOutDate]);

// Disable dates before today
const disabledDate = (current: Date): boolean => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return current < today;
};

const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

const handleDropdownToggle = (dropdownName: string) => {
  setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
};

  return (
    <div className="location-sec px-40">
      <div className="location-box">
        <ul className="location-listing-box w-100 d-flex flex-wrap align-items-center">
          {/* Location Section */}
          <li className="location-fiest-box">
          <LocationList      isOpen={activeDropdown === 'location'}
              onToggle={() => handleDropdownToggle('location')}
              locationData={LocationData} />
          </li>
          <li className="location-second-box">
          <CheckInOut 
              isOpen={activeDropdown === 'dates'}
              onToggle={() => handleDropdownToggle('dates')}
            />
          </li>
          <li className="location-fourth-box">
          <GuestList 
              isOpen={activeDropdown === 'guests'}
              onToggle={() => handleDropdownToggle('guests')}
            />
          </li>

          {/* <li className="location-fiest-box">
            <div className="w-100 position-relative" ref={locationDropdownRef}>
              <h5>{t("location")}</h5>
              <div className="w-100">
                <input
                  type="text"
                  onClick={toggleLocationDropdown}
                  placeholder="Search destinations, stays, or experiences"
                  className="location-input"
                  value={locationValue || ""}
                   onChange={(e) => setLocationValue(e.target.value)} 
                />
              </div>

              {isLocationDropdownOpen && (
                <div className="location-dropdown dropdown-position-fixed">
                  <div className="scroll-box-location" role="none">
                    {Object.keys(locationData1).map((category) => (
                      <div key={category} className="location-item-box" >
                        <h3>
                          {category.charAt(0).toUpperCase() + category.slice(1)}{" "}
                          {t("searches")}
                        </h3>
                        {locationData1[category]?.map((item: any) => (
                          <ul
                            key={item.id}
                            className="d-flex align-items-center gap-2"
                            style={{ cursor: "pointer" }}
                            onClick={()=> handleLanguage(item)}
                          >
                            <li>
                              <img
                                src={item.url}
                                alt={item.locationName}
                                width={48}
                                height={48}
                              />
                            </li>
                            <li>
                              <span className="d-block w-100 location-filter-text-top">
                                {item.locationName}
                              </span>
                           
                            </li>
                          </ul>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </li>

<li className="location-second-box">
          <CheckInOut/>
          </li> */}


          {/* Guests Section */}
          {/* <li className="location-fourth-box">
            <div className="w-100 position-relative" ref={dropdownRef}> 
              <h5> {t("guests")}</h5>
              <div className="w-100">
                <button
                  type="button"
                  className="menu-location-btn"
                  id="menu-button"
                  aria-expanded={isOpen}
                  aria-haspopup="true"
                  onClick={toggleDropdown}
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
                         
                            <button
                              type="button"
                              onClick={() =>
                              
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

                          
                            <input
                              type="text"
                              value={selectedFilters[key] ?? 0}
                              readOnly
                              className=""
                            />

                         
                            <button
                              type="button"
                              onClick={() =>
                              
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
          </li> */}

          <li className="location-fifth-box">
            {/* Search Button */}
            <button className="flex"
            disabled={isDisabled}
            onClick={()=>router.push("/home/accommodation/searchList")}
            >
              {/* <Link href="/home/accommodation/seeAll/search"> */}
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="48" height="48" rx="8" fill="#652669" />
                  <path
                    d="M23 32C27.9706 32 32 27.9706 32 23C32 18.0294 27.9706 14 23 14C18.0294 14 14 18.0294 14 23C14 27.9706 18.0294 32 23 32Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M30.9304 32.6898C31.4604 34.2898 32.6704 34.4498 33.6004 33.0498C34.4504 31.7698 33.8904 30.7198 32.3504 30.7198C31.2104 30.7098 30.5704 31.5998 30.9304 32.6898Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              {/* </Link> */}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LocationSearch;
