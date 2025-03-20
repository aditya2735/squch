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

import ImagesDeals1 from "../../../../public/images/deals-img-1.png";
import ImagesDeals2 from "../../../../public/images/deals-img-2.png";

import BusWhiteLogo1 from "../../../../public/images/logo-white-1.png";
import BusWhiteLogo2 from "../../../../public/images/logo-white-2.png";



const TravelOffersDeals = () => {
    return (
        <div className='sec-deal-offer'>
                <div className="position-relative">
                    <Swiper
                        slidesPerView={3.5}
                        spaceBetween={20}
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
                                slidesPerView: 1.2,
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
                        className="travel-offers-deals-slider"
                    >
                        <SwiperSlide>
                           <Link href="" className="card-offer-deals card-blue-bg card">
                                <h3 className="card-deals-title">TRAVELING MADE EASY</h3>
                                <div className="ribbon-down">
                                    <span className="d-block text-upto">up to</span>
                                    <span className="d-block text-percentage">40<small>%</small> </span>
                                    <span className="d-block text-off">off</span>
                                </div>
                                <div className="d-flex align-items-center">
                                    <div className="image-deals">
                                    <Image src={BusWhiteLogo1}  alt=""/>
                                    </div>
                                    <div className="content-right">
                                        <p className="m-0">Lorem Ipsum is simply dummy text and type setting </p>
                                    </div>
                                </div>
                           </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                           <Link href="" className="card-offer-deals card-gren-bg card">
                                <h3 className="card-deals-title">TRAVELING MADE EASY</h3>
                                <div className="ribbon-down">
                                    <span className="d-block text-upto">up to</span>
                                    <span className="d-block text-percentage">40<small>%</small> </span>
                                    <span className="d-block text-off">off</span>
                                </div>
                                <div className="d-flex align-items-center">
                                    <div className="image-deals">
                                    <Image src={BusWhiteLogo2}  alt=""/>
                                    </div>
                                    <div className="content-right">
                                        <p className="m-0">Lorem Ipsum is simply dummy text and type setting </p>
                                    </div>
                                </div>
                           </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                           <Link href="" className="card-offer-deals card-blue-bg card">
                                <h3 className="card-deals-title">TRAVELING MADE EASY</h3>
                                <div className="ribbon-down">
                                    <span className="d-block text-upto">up to</span>
                                    <span className="d-block text-percentage">40<small>%</small> </span>
                                    <span className="d-block text-off">off</span>
                                </div>
                                <div className="d-flex align-items-center">
                                    <div className="image-deals">
                                    <Image src={ImagesDeals1}  alt=""/>
                                    </div>
                                    <div className="content-right">
                                        <p className="m-0">Lorem Ipsum is simply dummy text and type setting </p>
                                    </div>
                                </div>
                           </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                           <Link href="" className="card-offer-deals card-gren-bg card">
                                <h3 className="card-deals-title">TRAVELING MADE EASY</h3>
                                <div className="ribbon-down">
                                    <span className="d-block text-upto">up to</span>
                                    <span className="d-block text-percentage">40<small>%</small> </span>
                                    <span className="d-block text-off">off</span>
                                </div>
                                <div className="d-flex align-items-center">
                                    <div className="image-deals">
                                    <Image src={ImagesDeals2}  alt=""/>
                                    </div>
                                    <div className="content-right">
                                        <p className="m-0">Lorem Ipsum is simply dummy text and type setting </p>
                                    </div>
                                </div>
                           </Link>
                        </SwiperSlide>
                    </Swiper>
                </div>
        </div>
    )
}

export default TravelOffersDeals
