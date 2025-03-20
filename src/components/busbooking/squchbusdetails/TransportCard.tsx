"use client";
import React, { useRef } from 'react'
import Link from 'next/link';
import Image from "next/image";
import { useState } from 'react';

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import "swiper/css/navigation";
import { Grid, Navigation, Pagination, Mousewheel, Keyboard, Thumbs, FreeMode } from 'swiper/modules';


import BusCompanyLogo from "../../../../public/images/logo-bus-company.png";

import SliderImg1 from "../../../../public/images/card-transport-img-1.png";
import SliderImg2 from "../../../../public/images/card-transport-img-2.png";
import SliderImg3 from "../../../../public/images/card-transport-img-3.png";

const TransportCard = () => {
    return (
        <div className='sec-transport-card mb-24'>
            <div className="transport-header">
                <div className='d-flex align-items-center'>
                    <div className='me-auto'>
                        <div className='company-info'>
                            <Image src={BusCompanyLogo} alt='' />
                        </div>
                        <div className="ratings">
                            <ul className='d-flex list-unstyled align-items-center m-0'>
                                <li className='d-flex align-items-center'>
                                    <div className='icon'>
                                        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2.5148 5.10772L5.17547 4.68908C5.54057 4.63192 5.98268 4.31587 6.14778 3.98373L7.15731 2.0164C7.80082 0.755739 8.86153 0.756298 9.51581 2.01178L10.6211 4.14734C10.8067 4.50423 11.2898 4.83029 11.692 4.86039L13.8442 5.03645C15.5429 5.17704 15.8914 6.21228 14.6194 7.34566L12.8423 8.92886C12.5179 9.21693 12.3387 9.79686 12.4338 10.213L12.9648 12.5292C13.3437 14.1868 12.4619 14.8329 10.9959 13.9658L9.1422 12.8641C8.79566 12.6583 8.21489 12.638 7.858 12.8236L5.71668 13.9371C4.45996 14.5844 3.59444 13.9722 3.79509 12.5732L4.10986 10.3892C4.16012 10.0196 3.99061 9.5084 3.72187 9.25275L1.78841 7.37145C0.749665 6.3497 1.07539 5.33267 2.5148 5.10772Z" fill="#FFD500" />
                                        </svg>
                                    </div>
                                    4.5 (25K ratings)
                                </li>
                                <li className='d-flex align-items-center'>33k trips</li>
                            </ul>
                        </div>
                    </div>
                    <div className='ms-auto'>
                        <div className="time">
                            <span className='d-block'>16:00 To</span>
                            <span className='d-block'>19:30</span>
                        </div>
                    </div>
                </div>


            </div>
            <div className="position-relative">
                <Swiper
                    slidesPerView={3.5}
                    spaceBetween={8}
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
                            slidesPerView: 2.2,
                            spaceBetween: 8,
                        },
                        768: {
                            slidesPerView: 2.5,
                            spaceBetween: 8,
                        },
                        1200: {
                            slidesPerView: 3.5,
                            spaceBetween: 8,
                        },
                    }}
                    modules={[Grid, Navigation]}
                    className="travel-offers-deals-slider"
                >
                    <SwiperSlide>
                        <Link href="" className='cardInfobus'>
                            <Image src={SliderImg1} alt='' />
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link href="" className='cardInfobus'>
                            <Image src={SliderImg2} alt='' />
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link href="" className='cardInfobus'>
                            <Image src={SliderImg3} alt='' />
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link href="" className='cardInfobus'>
                            <Image src={SliderImg1} alt='' />
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link href="" className='cardInfobus'>
                            <Image src={SliderImg2} alt='' />
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link href="" className='cardInfobus'>
                            <Image src={SliderImg3} alt='' />
                        </Link>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default TransportCard
