"use client";
import React from 'react'
import Image from "next/image";
import Link from 'next/link';

import { useState, useRef } from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/pagination"; 

import ImagesThumbFull1 from "../../../../public/images/detail-thumb-1.jpg";

import ImagesThumbSmall1 from "../../../../public/images/thumb-small-img-1.png";
import ImagesThumbSmall2 from "../../../../public/images/thumb-small-img-2.png";
import ImagesThumbSmall3 from "../../../../public/images/thumb-small-img-3.png";
import ImagesThumbSmall4 from "../../../../public/images/thumb-small-img-4.png";
import ImagesThumbSmall5 from "../../../../public/images/thumb-small-img-5.png";
import { useAppSelector } from '@//store/hooks';



const DetailsThumbSlider = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);
    const mainSwiperRef = useRef(null);
    const { bannerImages } = useAppSelector((state) => state.hotelDetail); 
    const images = [
        { src: ImagesThumbSmall1, label: "Outdoor" },
        { src: ImagesThumbSmall2, label: "Lobby" },
        { src: ImagesThumbSmall3, label: "Room" },
        { src: ImagesThumbSmall4, label: "Bathroom" },
        { src: ImagesThumbSmall5, label: "Pool" },
      ];

    return (
        <div className='thumbslider-main'>
            <div className='top-slider'>
            <Swiper
                ref={mainSwiperRef}
                modules={[Navigation, Thumbs, Pagination]}
                spaceBetween={10}
                slidesPerView={1}
                thumbs={{ swiper: thumbsSwiper }}
                loop={true}
            >
                 {bannerImages?.length>0 && 
                 bannerImages.map((item:any) => (
            <SwiperSlide key={item.id}>
              <div className="thumb-full">
                <Image src={item.images[0].url} alt={item.viewName} width={648} height={422} className="w-100" />
              </div>
            </SwiperSlide>
          ))}
               
            </Swiper>
            </div>
        <div className='bottom-slider'>
            <Swiper
                onSwiper={setThumbsSwiper}
                modules={[Thumbs]}
                spaceBetween={10}
                slidesPerView={5}
                watchSlidesProgress
                breakpoints={{
                    300: { slidesPerView: 3,},
                    767: { slidesPerView: 3 },
                    1024: { slidesPerView: 5 },
                }}
            >
              {bannerImages?.length>0 && 
              bannerImages.map((item:any) => (
            <SwiperSlide key={item.id}>
              <div className="thumbsmall">
                <Image src={item.images[0].url} width={88} height={56} className="w-100" alt={item.viewName} />
                <p>{item.viewName}</p>
              </div>
            </SwiperSlide>
          ))}
            </Swiper>
            </div>
        </div>
    )
}

export default DetailsThumbSlider
