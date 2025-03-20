"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

import { useState, useRef } from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/pagination";

import SquchStayGallery from "./SquchStayGallery";
import { useAppSelector } from "@/store/hooks";
import { HotelView } from "@/store/features/accommodation/types/hotelTypes";

const DetailsThumbSlider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);
  const mainSwiperRef = useRef(null);
  const { hotelViewImages } = useAppSelector((state) => state.hotelDetail);
  const [showGallery, setShowGallery] = useState(false);
 const [selectedTab, setSelectedTab] = useState("All");

 const handeImageClick=(item:string)=>{
  setSelectedTab(item)
  setShowGallery(true)
 }

  return (
    <div className="thumbslider-main">
      <div className="top-slider">
        <Swiper
          ref={mainSwiperRef}
          modules={[Navigation, Thumbs, Pagination]}
          spaceBetween={10}
          slidesPerView={1}
          // navigation
          // pagination={{ clickable: true }}
          thumbs={{ swiper: thumbsSwiper }}
          loop={true}
        >
          {hotelViewImages?.length > 0 &&
            hotelViewImages.map((item: HotelView) => (
              <SwiperSlide key={item.id}>
                <div className="thumb-full">
                  <Image
                    src={item.images[0].url}
                    alt={item.viewName}
                    width={648}
                    height={422}
                    className="w-100"
                  />
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
      <div className="bottom-slider">
        <Swiper
          onSwiper={setThumbsSwiper}
          modules={[Thumbs]}
          spaceBetween={10}
          slidesPerView={5}
          watchSlidesProgress
          breakpoints={{
            300: { slidesPerView: 3 },
            767: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
        >
          {hotelViewImages?.length > 0 &&
            hotelViewImages.map((item: HotelView) => (
              <SwiperSlide key={item.id}>
                <div
                  className="thumbsmall"
                  onClick={()=>handeImageClick(item.viewName)}
                >
                  <Image
                    src={item.images[0].url}
                    width={88}
                    height={56}
                    className="w-100"
                    alt={item.viewName}
                  />
                  <p>{item.viewName}</p>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>

      <SquchStayGallery
        show={showGallery}
        handleClose={() => setShowGallery(false)}
        selectedTab={selectedTab}
      />
    </div>
  );
};

export default DetailsThumbSlider;
