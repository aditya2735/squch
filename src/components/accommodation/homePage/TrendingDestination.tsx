"use client";
import Image from "next/image";
import Link from "next/link";

import { useState } from "react";
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

// Trending Destination
import trending1 from "../../../../public/images/trending1.jpg";
import trending2 from "../../../../public/images/trending2.jpg";
import { truncate } from "fs/promises";
import { TbRuler2Off } from "react-icons/tb";
import { useTranslations } from "next-intl";
import { useAppSelector } from "@/store/hooks";

const TrendingDestination = () => {
  const t = useTranslations("Accommodation");
  const { trending: trendingData } = useAppSelector(
    (state) => state.homeHotels.data
  );
  const TrendingStaysData = [
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUPIfiGgUML8G3ZqsNLHfaCnZK3I5g4tJabQ&s",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1669295395788-2c22b1431f24?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXx1bGpPc291MlBsSXx8ZW58MHx8fHx8",
    },
    { img: trending2 },
    { img: trending1 },
    { img: trending1 },
    { img: trending2 },
  ];

  const SwiperRows = (data: any) => {
    return (
      <SwiperSlide key={data.id}>
        <div className="slider-trending-box position-relative">
          {/* <Image
            src={data?.primaryImages[0]?.url}
            alt="Image"
            className="w-100 img-fixed-size object-fit-cover"  
            width={243}
            height={358}
             /> */}
          <Image src={trending1} alt="Image" className="w-100" />

          <div className="text-slider-trending-box">
            <h3>{data?.city}</h3>
            <p>Location details</p>
            <p className="d-flex align-items-center gap-1">
              {data?.avgPricePerNight}{" "}
              <span className="text-big-text"> ₵ </span>{" "}
              <span className="text-big-text">2000</span>{" "}
              <span className="text-big-text">Night</span>
            </p>
          </div>
        </div>
      </SwiperSlide>
    );
  };

  return (
    <div className="trending-slider-sec">
      <div className="px-40">
        <div className="block-header">
          <div className="d-flex align-item-center">
            <h2 className="heading02 m-0">{t("trendingDestinations")}</h2>
            <div className="ms-auto">
              <Link href="/home/accommodation/seeAll/trending" className="link">
                {t("seeAll")}
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.59857 1.34873C1.60045 1.80895 1.97505 2.18053 2.43527 2.17869L8.67295 2.15341L0.699952 10.1913C0.375827 10.518 0.377965 11.0457 0.704726 11.3698C1.03149 11.6939 1.5591 11.6918 1.88323 11.365L9.85623 3.32714L9.88151 9.56482C9.88337 10.025 10.258 10.3966 10.7182 10.3948C11.1784 10.3929 11.55 10.0183 11.5481 9.55807L11.5147 1.30855C11.5138 1.08756 11.4252 0.875932 11.2683 0.720295C11.1114 0.564659 10.899 0.477696 10.678 0.478609L2.42851 0.512037C1.96829 0.51389 1.59669 0.888515 1.59857 1.34873Z"
                    fill="#652669"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        <div className=" position-relative">
          <Swiper
            slidesPerView={6.5}
            spaceBetween={24}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={{
              prevEl: ".prev-button-trending",
              nextEl: ".next-button-trending",
            }}
            breakpoints={{
              320: {
                slidesPerView: 1.5,
                spaceBetween: 5,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              1200: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
            }}
            modules={[Grid, Navigation]}
            className="trending-destination"
          >
            {trendingData.map((data) => SwiperRows(data))}

            {/* <SwiperSlide>
                            <div className="slider-trending-box position-relative" >
                                <Image src={trending1} alt="Image" className="w-100" />
                                <div className="text-slider-trending-box">
                                    <h3>City name</h3>
                                    <p>Location details</p>
                                    <p className="d-flex align-items-center gap-1">Price <span className="text-big-text"> ₵ </span> <span className="text-big-text">2000</span> <span className="text-big-text">Night</span></p>
                                </div>
                            </div>
                        </SwiperSlide>
                         */}
          </Swiper>
          <button
            className="prev-button-trending d-flex align-items-center justify-content-center"
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
            className="next-button-trending d-flex align-items-center justify-content-center"
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
      </div>
    </div>
  );
};

export default TrendingDestination;
