"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Mousewheel, Navigation } from "swiper/modules";
import Link from "next/link";

/****slider img******** */

import popularH1 from "../../../../public/images/PopularH01.png";
import popularH2 from "../../../../public/images/PopularH02.png";
import popularH3 from "../../../../public/images/PopularH03.png";
import popularH4 from "../../../../public/images/PopularH04.png";
import Arrow from "../../../../public/images/arrow.svg";
import PopularHotelCard from "./PopularHotelCard";

const PopularHotels = () => {

    const popularHotelData = [
        {
            name: "Accra Marriott Hotel, Ghana",
            location: "640 m drive to Accra Airport (ACC-Kotoka Intl.)",
            actualPrice: "₵12.00",
            currentPrice: "₵30.00",
            discountPercentage: "71% off",
            images: [
                { url: popularH1 },
                { url: popularH2 },
                { url: popularH3 },
                { url: popularH4 },
            ],
            rating: "4.2 (24)"
        },
        {
            name: "Accra Marriott Hotel, Ghana",
            location: "640 m drive to Accra Airport (ACC-Kotoka Intl.)",
            actualPrice: "₵12.00",
            currentPrice: "₵30.00",
            discountPercentage: "71% off",
            images: [
                { url: popularH1 },
                { url: popularH2 },
                { url: popularH3 },
                { url: popularH4 },
            ],
            rating: "4.2 (24)"
        },
        {
            name: "Accra Marriott Hotel, Ghana",
            location: "640 m drive to Accra Airport (ACC-Kotoka Intl.)",
            actualPrice: "₵12.00",
            currentPrice: "₵30.00",
            discountPercentage: "71% off",
            images: [
                { url: popularH1 },
                { url: popularH2 },
                { url: popularH3 },
                { url: popularH4 },
            ],
            rating: "4.2 (24)"
        },
        {
            name: "Accra Marriott Hotel, Ghana",
            location: "640 m drive to Accra Airport (ACC-Kotoka Intl.)",
            actualPrice: "₵12.00",
            currentPrice: "₵30.00",
            discountPercentage: "71% off",
            images: [
                { url: popularH1 },
                { url: popularH2 },
                { url: popularH3 },
                { url: popularH4 },
            ],
            rating: "4.2 (24)"
        },
        {
            name: "Accra Marriott Hotel, Ghana",
            location: "640 m drive to Accra Airport (ACC-Kotoka Intl.)",
            actualPrice: "₵12.00",
            currentPrice: "₵30.00",
            discountPercentage: "71% off",
            images: [
                { url: popularH1 },
                { url: popularH2 },
                { url: popularH3 },
                { url: popularH4 },
            ],
            rating: "4.2 (24)"
        },
    ]

    return (

        <div className="multislider-sec sec-gap">
            <div className="inner-multislider px-40">
                <div className='block-header'> 
                    <div className='d-flex align-item-center'>
                        <h2 className='heading02 m-0'>Top rated near you</h2>
                        <div className='ms-auto'>
                            <Link href="" className='link'>
                                See All <Image src={Arrow} alt="Arrow icon" />
                            </Link>
                        </div>
                    </div>
                </div>
                <Swiper
                    slidesPerView={3.3}
                    spaceBetween={24}
                    mousewheel={true}
                    navigation={{
                        prevEl: ".outer-prev-button",
                        nextEl: ".outer-next-button",
                    }}
                    pagination={{
                        clickable: false,
                    }}
                    breakpoints={{
                        300: { slidesPerView: 1.2, spaceBetween: 10 },
                        550: { slidesPerView: 1.7, spaceBetween: 10 },
                        767: { slidesPerView: 2.2 },
                        1024: { slidesPerView: 3.3 },
                    }}
                    modules={[Mousewheel, Navigation]}
                    className="outer-popular-slider"
                >
                    {popularHotelData.map((hotel, index) => (
                        <SwiperSlide key={index}>
                            <PopularHotelCard hotel={hotel}/>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default PopularHotels