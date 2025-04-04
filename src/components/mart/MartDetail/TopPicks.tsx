"use client";
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { CategoryProps } from "@/store/features/Mart/MartProduct/productTypes";
import TopProductCard from './TopProductCard';



const TopPicks: React.FC<CategoryProps> = ({ categoryName, products }) => {

    return (
        <div className="sec-top-picks sec-gap">
            <div className="block-header">
                <div className="d-flex align-item-center">
                    <h2 className="heading02 m-0">{categoryName}</h2>
                </div>
            </div>

            <Swiper
                slidesPerView={3}
                spaceBetween={14}
                // modules={[Pagination]}
                pagination={{
                    clickable: true,
                    // dynamicBullets: true,
                }}
                breakpoints={{
                    300: { slidesPerView: 1.2, },
                    767: { slidesPerView: 3.1 },
                    1024: { slidesPerView: 3.2 },
                }}
                className="slider-top-picks"
            >
                {products?.map((item, index) => (
                    <SwiperSlide key={index}>
                        <TopProductCard product={item}/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default TopPicks
