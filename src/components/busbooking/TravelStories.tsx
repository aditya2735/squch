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

import ImagesTravelStories1 from "../../../public/images/travel-stories-img-1.jpg";
import ImagesTravelStories2 from "../../../public/images/travel-stories-img-2.jpg";
import ImagesTravelStories3 from "../../../public/images/travel-stories-img-3.jpg";
import ImagesTravelStories4 from "../../../public/images/travel-stories-img-4.jpg";

const TravelStories = () => {
    return (
        <div className='sec-traval-stories sec-gap'>
            <div className="px-40">
                <div className='block-header'>
                    <div className='d-flex align-item-center'>
                        <h2 className='heading02 m-0'>Travel Stories</h2>
                        <div className='ms-auto'>
                            <Link href="" className='link'>
                                See All
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.59857 1.34873C1.60045 1.80895 1.97505 2.18053 2.43527 2.17869L8.67295 2.15341L0.699952 10.1913C0.375827 10.518 0.377965 11.0457 0.704726 11.3698C1.03149 11.6939 1.5591 11.6918 1.88323 11.365L9.85623 3.32714L9.88151 9.56482C9.88337 10.025 10.258 10.3966 10.7182 10.3948C11.1784 10.3929 11.55 10.0183 11.5481 9.55807L11.5147 1.30855C11.5138 1.08756 11.4252 0.875932 11.2683 0.720295C11.1114 0.564659 10.899 0.477696 10.678 0.478609L2.42851 0.512037C1.96829 0.51389 1.59669 0.888515 1.59857 1.34873Z" fill="#652669" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="position-relative">
                    <Swiper
                        slidesPerView={3.5}
                        spaceBetween={16}
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
                                slidesPerView: 2.5,
                                spaceBetween: 10,
                            },
                            1200: {
                                slidesPerView: 3.5,
                                spaceBetween: 10,
                            },
                        }}
                        modules={[Grid, Navigation]}
                        className="travel-story-slider"
                    >
                        <SwiperSlide>
                            <Link href="" className="card-travel-stories">
                                <div className="cardtravel-Img">
                                    <Image src={ImagesTravelStories1} 
                                        alt="" />
                                </div>
                                <p className="m-0">Places to visit in new York</p>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link href="" className="card-travel-stories">
                                <div className="cardtravel-Img">
                                    <Image src={ImagesTravelStories2} 
                                        alt="" />
                                </div>
                                <p className="m-0">Places to visit in new York</p>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link href="" className="card-travel-stories">
                                <div className="cardtravel-Img">
                                    <Image src={ImagesTravelStories3} 
                                        alt="" />
                                </div>
                                <p className="m-0">Places to visit in new York</p>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link href="" className="card-travel-stories">
                                <div className="cardtravel-Img">
                                    <Image src={ImagesTravelStories1} 
                                        alt="" />
                                </div>
                                <p className="m-0">Places to visit in new York</p>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link href="" className="card-travel-stories">
                                <div className="cardtravel-Img">
                                    <Image src={ImagesTravelStories2} 
                                        alt="" />
                                </div>
                                <p className="m-0">Places to visit in new York</p>
                            </Link>
                        </SwiperSlide>
                    </Swiper>

                </div>
            </div>
        </div>
    )
}

export default TravelStories
