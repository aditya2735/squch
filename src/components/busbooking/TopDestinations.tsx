'use client'
import Image from "next/image";
import Link from 'next/link';

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import "swiper/css/navigation";
import { Grid, Navigation, Pagination, Mousewheel, Keyboard, Thumbs, FreeMode } from 'swiper/modules';

// Top Destination
import ImagesDestination1 from "../../../public/images/top-destinations-img-1.jpg";
import ImagesDestination2 from "../../../public/images/top-destinations-img-2.jpg";
import ImagesDestination3 from "../../../public/images/top-destinations-img-3.jpg";

const TopDestinations = () => {
    return (
        <div className="trending-slider-sec sec-gap">
            <div className="px-40">
                <div className='block-header'>
                    <div className='d-flex align-item-center'>
                        <h2 className='heading02 m-0'>Top Destinations for your Next Holiday</h2>
                    </div>
                </div>
                <div className="position-relative">
                    <Swiper
                        slidesPerView={3.5}
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
                                slidesPerView: 2.5,
                                spaceBetween: 5,
                            },
                            768: {
                                slidesPerView: 3.5,
                            },
                            1200: {
                                slidesPerView: 4.5,
                            },
                        }}
                        modules={[Grid, Navigation]}
                        className="trending-destination"
                    >
                        <SwiperSlide>
                            <Link href="" className="slider-trending-box position-relative" >
                                <Image src={ImagesDestination1} alt="Image"  
 className="w-100" />
                                <div className="text-slider-trending-box">
                                    <h3>Tokyo</h3>
                                </div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link href="" className="slider-trending-box position-relative" >
                                <Image src={ImagesDestination2} alt="Image"  
 className="w-100" />
                                <div className="text-slider-trending-box">
                                    <h3>New York</h3>
                                </div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link href="" className="slider-trending-box position-relative" >
                                <Image src={ImagesDestination3} alt="Image"  className="w-100" />
                                <div className="text-slider-trending-box">
                                    <h3>Taxus</h3>
                                </div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link href="" className="slider-trending-box position-relative" >
                                <Image src={ImagesDestination1} alt="Image"  className="w-100" />
                                <div className="text-slider-trending-box">
                                    <h3>Tokyo</h3>
                                </div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link href="" className="slider-trending-box position-relative" >
                                <Image src={ImagesDestination2} alt="Image"  className="w-100" />
                                <div className="text-slider-trending-box">
                                    <h3>New York</h3>
                                </div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link href="" className="slider-trending-box position-relative" >
                                <Image src={ImagesDestination3} alt="Image"  className="w-100" />
                                <div className="text-slider-trending-box">
                                    <h3>Taxus</h3>
                                </div>
                            </Link>
                        </SwiperSlide>
                    </Swiper>

                </div>
            </div>
        </div>
    )
}

export default TopDestinations
