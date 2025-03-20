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

import ImagesDeals1 from "../../../public/images/deals-img-1.png";
import ImagesDeals2 from "../../../public/images/deals-img-2.png";



const TravelOffersDeals = () => {
    return (
        <div className='sec-travel-offers-deals'>
            <div className="px-40">
                <div className='block-header'>
                    <div className='d-flex align-item-center'>
                        <h2 className='heading02 m-0'>Travel Offers & Deals</h2>
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
                           <Link href="" className="card-offer-deals card-pink-bg card">
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
                           <Link href="" className="card-offer-deals card-purple-bg card">
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
                        <SwiperSlide>
                           <Link href="" className="card-offer-deals card-pink-bg card">
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
                           <Link href="" className="card-offer-deals card-purple-bg card">
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
        </div>
    )
}

export default TravelOffersDeals
