"use client";
import Image from "next/image";
import styles from "../../home/busTicketBooking/style.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
  Grid,
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Thumbs,
  FreeMode,
} from "swiper/modules";

import Link from "next/link";

import SliderIcon from "../../../public/images/icon-1.svg";
import IconFilterPurple from "../../../public/images/icon-filter-purple.svg";
import CloseModal from "../../../public/images/close-modal.png";
import kitchenIcon from "../../../public/images/kitchen.png";
import wifiIcon from "../../../public/images/iconswifi.png";
import swimmingIcon from "../../../public/images/iconsswimming.png";
import CarParkingIcon from "../../../public/images/iconsCarParking.png";
import SharedIcon from "../../../public/images/iconsSharedIcon.png";
import AlarmIcon from "../../../public/images/iconsAlarmIcon.png";
import HouseIcons from "../../../public/images/house-icons.png";
import FlateTcons from "../../../public/images/flate-icons.png";
import GuestHouseIcons from "../../../public/images/guestHouseIcons.png";

import { Range } from "react-range";

import { useEffect, useRef, useState } from "react";

import { getFilterData } from "@/store/features/accommodation/slices/allFiltersSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import FilterModal from "./FilterModal";
import { resetFilters, setRangeFilter, setReload, setSingleFilter, toggleArrayFilter} from "@/store/features/accommodation/slices/selectedFilterSlice";
import { BookingOption } from "@/store/features/accommodation/types/hotelTypes";

const FilterSlider = () => {
  const [show, setShow] = useState(false);
  const dispatch = useAppDispatch();
  const selectedFilters = useAppSelector((state) => state.selectedFilters);
  const { bookingOptions } = useAppSelector((state) => state.allFilters);
 
  // testing start

  useEffect(() => {
    dispatch(getFilterData());
  }, [dispatch]);
 
  // 🧹 Clear all filters
  const handleClearFilters = () => {
    dispatch(resetFilters());
  };

  // testing end
  const handleShow = () => {
    dispatch(setReload({ key: "reload", value:0 })); 
    setShow(true);
  };
 

  
  /********checkbox*******/

  return (
    <div className="filter-sec sec-gap">
      <div className="d-flex align-items-center justify-content-between px-40">
        <div className="inner-filter-sec position-relative">
          <Swiper
            slidesPerView={4.5}
            mousewheel={true}
            keyboard={true}
            modules={[Mousewheel, Keyboard, Navigation]}
            navigation={{
              prevEl: ".prev-button-1",
              nextEl: ".next-button-1",
            }}
            spaceBetween={10}
            breakpoints={{
              320: {
                slidesPerView: 1.5,
                spaceBetween: 5,
              },
              768: {
                slidesPerView: 2.5,
                spaceBetween: 10,
              },
              890: {
                slidesPerView: 3.5,
                spaceBetween: 10,
              },
              1200: {
                slidesPerView: 4.5,
                spaceBetween: 10,
              },
            }}
            className="slider-filter-sec"
          >
            {bookingOptions?.length>0 && bookingOptions.map((item:BookingOption) => (
              <SwiperSlide key={item.id}>
                <button
                  className={`w-100 btn-filter ${selectedFilters?.bookOpsId?.includes(item.id) ? "active-btn" : ""}`}
                  onClick={() => { 
                    dispatch(toggleArrayFilter({ key: "bookOpsId", value: item.id })); 
                    dispatch(setReload({ key: "reload", value:1 })); 
                    }}
                >
                  <div className="d-flex align-items-center gap-2 justify-content-center">
                    <span className="icons-btn">
                      <Image src={SliderIcon} alt={item.optionName} />
                    </span>
                    {item.optionName}
                  </div>
                </button>
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            className="prev-button-1 d-flex align-items-center justify-content-center"
            aria-label="Previous"
          >
            <svg
              width="10"
              height="18"
              viewBox="0 0 10 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.74023 16.6582L2.22793 10.1459C1.45884 9.37682 1.45884 8.11831 2.22793 7.34922L8.74023 0.836914"
                stroke="#292D32"
                strokeWidth="1.45163"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            className="next-button-1 d-flex align-items-center justify-content-center"
            aria-label="Next"
          >
            <svg
              width="10"
              height="18"
              viewBox="0 0 10 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.51709 16.6582L8.02939 10.1459C8.79848 9.37682 8.79848 8.11831 8.02939 7.34922L1.51709 0.836914"
                stroke="#292D32"
                strokeWidth="1.45163"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        {/* Filter button section */}
        <div className="filter-btn-box d-md-block d-none">
          <button className="filter-btn-box" onClick={handleShow}>
            <Image src={IconFilterPurple} alt="" />
          </button>

          <FilterModal show={show} setShow={setShow} />
        </div>
      </div>
    </div>
  );
};

export default FilterSlider;
