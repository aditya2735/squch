"use client";
import Image from "next/image";
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

import SliderIcon from "../../../../public/images/icon-1.svg";
import FilterBtn from "../../../../public/images/filter-btn.png";
import ShortBtn from "../../../../public/images/shortBtn.png";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useEffect, useState } from "react";
import { getFilterData } from "@/store/features/accommodation/slices/allFiltersSlice";
import FilterModal from "../FilterModal";
import { toggleArrayFilter } from "@/store/features/accommodation/slices/selectedFilterSlice";

const FilterSlider = () => {
  const dispatch = useAppDispatch();
  const { bookingOptions, status } = useAppSelector(
    (state) => state.allFilters
  );
  const { selectedFilters } = useAppSelector((state) => state);

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

  // useEffect(() => {
  //   if (!bookingOptions && status === "idle") {
  //     dispatch(getFilterData());
  //   }
  // }, [bookingOptions, status, dispatch]);

  return (
    <div className="filter-sec mt-md-3 mt-0 mb-4">
      <div className="d-flex align-items-center justify-content-between px-0 w-100">
        <div className="inner-filter-sec position-relative w-100">
          <Swiper
            slidesPerView={4.5}
            mousewheel={true}
            keyboard={true}
            modules={[Mousewheel, Keyboard, Navigation]}
            navigation={{
              prevEl: ".prev-button-5",
              nextEl: ".next-button-5",
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
            className="slider-filter-short-sec"
          >
            <SwiperSlide>
              <button
                className={`w-100 btn-filter ${
                  Object.keys(selectedFilters).length > 0 && "active-btn"
                }`}
                onClick={handleShow}
              >
                <div
                  className=" 
                d-flex align-items-center gap-2 justify-content-center"
                >
                  <span className="icons-btn">
                    <Image src={FilterBtn} alt="" />
                  </span>
                  Filters
                </div>
              </button>
            </SwiperSlide>
            <SwiperSlide>
              <button className="w-100 btn-filter">
                <div className=" d-flex align-items-center gap-2 justify-content-center">
                  <span className="icons-btn">
                    <Image src={ShortBtn} alt="" />
                  </span>
                  Sort
                </div>
              </button>
            </SwiperSlide>
            {bookingOptions?.length > 0 &&
              bookingOptions.map((item) => (
                <SwiperSlide
                  key={item.id}
                  onClick={() => {
                    dispatch(
                      toggleArrayFilter({ key: "bookOpsId", value: item.id })
                    );
                  }}
                >
                  {/* className={`w-100 btn-filter ${Object.keys(selectedFilters).length > 0 && 'active-btn'}`} */}
                  <button
                    className={`w-100 btn-filter ${
                      selectedFilters?.bookOpsId?.includes(item.id)
                        ? "active-btn"
                        : ""
                    } `}
                  >
                    <div className=" d-flex align-items-center gap-2 justify-content-center">
                      <span className="icons-btn">
                        <Image src={SliderIcon} alt="" />
                      </span>
                      {item.optionName}
                    </div>
                  </button>
                </SwiperSlide>
              ))}
          </Swiper>

          <button
            className="btn-prev prev-button-5 d-flex align-items-center justify-content-center"
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
            className="btn-next next-button-5 d-flex align-items-center justify-content-center"
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
        <FilterModal show={show} setShow={setShow} />
      </div>
    </div>
  );
};

export default FilterSlider;
