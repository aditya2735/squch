"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Grid, Navigation, Pagination } from "swiper/modules";

import Link from "next/link";

/****slider img******** */

import { SwiperRows } from "../HotelCards";
import { useTranslations } from "next-intl";
import { useAppSelector } from "@/store/hooks";

const Nearyou = () => {
  const t = useTranslations("Accommodation");
  const { near: nearYouData } = useAppSelector(
    (state) => state.homeHotels?.data
  );

  return (
    <>
      {nearYouData?.length>0 && 
    <div className="multislider-sec sec-gap">
      <div className="px-40">
        <div className="inner-multislider md:px-3">
          <div className="block-header">
            <div className="d-flex align-item-center">
              <h2 className="heading02 m-0">{t("nearYou")}</h2>
              <div className="ms-auto">
                <Link href="/home/accommodation/seeAll/near" className="link">
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
          <div className="ghana-squch-slider">
            <Swiper
              slidesPerView={3.3}
              spaceBetween={24}
              modules={[Grid]}
              grid={{
                rows: nearYouData?.length > 6 ? 2 : 1,
                fill: "row",
              }}
              navigation={{
                prevEl: ".outer-prev-button",
                nextEl: ".outer-next-button",
              }}
              pagination={{
                clickable: false,
              }}
              breakpoints={{
                300: { slidesPerView: 1.2 },
                550: { slidesPerView: 1.7 },
                767: { slidesPerView: 2.2 },
                1024: { slidesPerView: 3.3 },
              }}
              slidesPerGroup={1}
              className="outer-popular-slider"
            >
              {nearYouData?.length > 0 &&
                nearYouData?.map((hotel, index: number) => {
                  return (
                    <SwiperSlide key={index}>
                      <SwiperRows
                        key={hotel.id}
                        hotelData={hotel}
                        CardName={"NearYou"}
                      />
                    </SwiperSlide>
                  );
                })}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
      }
    </>
  );
};

export default Nearyou;
