"use client";
import { useEffect, useRef, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";

import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  setDate,
  setLocation,
} from "@/store/features/accommodation/slices/housePoliciesSlice";
import { LocationType } from "@/store/features/accommodation/types/homePageTypes";
import { useTranslations } from "next-intl";

import 'rsuite/dist/rsuite.min.css';

const LocationList = ({
  isOpen,
  onToggle,
  locationData
}: {
  isOpen: boolean;
  onToggle: () => void;
  locationData: LocationType;
})=> {
  const dispatch = useAppDispatch();
  const t = useTranslations("Accommodation.BookingDetail");
  const selectedFilters = useAppSelector((state) => state.housePolicy);
  const [locationValue,setLocationValue]=useState<string | null>(null); 

  useEffect(() => {
    if (selectedFilters?.locationName) {
      setLocationValue(selectedFilters.locationName);
    }
  }, [selectedFilters?.locationName]);
   
  // State and ref for general dropdown
  const dropdownRef = useRef<HTMLDivElement>(null);

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
 
  // Toggle function for the general dropdown
 
  const handleLanguage=(item:any)=>{
    dispatch(setLocation(item))
  } 

  return (
    <div className="w-100 position-relative" ref={dropdownRef}>
              <h5>{t("location")}</h5>
              <div className="w-100">
                <input
                  type="text"
                  onClick={onToggle}
                  placeholder="Search destinations, stays, or experiences"
                  className="location-input"
                  value={locationValue || ""}
                   onChange={(e) => setLocationValue(e.target.value)} 
                />
              </div>

              {isOpen && (
                <div className="location-dropdown dropdown-position-fixed">
                  <div className="scroll-box-location" role="none">
                    {locationData && 
                    Object.keys(locationData).map((category) => (
                      <div key={category} className="location-item-box" >
                        <h3>
                          {category.charAt(0).toUpperCase() + category.slice(1)}{" "}
                          {t("searches")}
                        </h3>
                        {locationData[category]?.map((item: any) => (
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
                              {/* <span className="d-block w-100 location-filter-text-bottom">
                15-18 Jan • 2 guests
              </span> */}
                            </li>
                          </ul>
                        ))}
                      </div>
                    ))
                    }
                  </div>
                </div>
              )}
            </div>
  );
};
export default LocationList;