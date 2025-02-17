"use client";
import React from 'react'
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import Link from "next/link";

import ImageCardLogo from "../../../../public/images/logo-offer-card.svg"
import ImagesOffterShape from "../../../../public/images/discount-shape.svg"

const SpecialOffer = () => {
    return (
        <div className="sec-slider-browse-offers">
            <div className="block-header">
                <div className="d-flex align-item-center">
                    <h2 className="heading02 m-0">Browse Through special offers</h2>
                </div>
            </div>
            <Swiper
                slidesPerView={3}
                spaceBetween={14}
                modules={[Pagination]}
                pagination={{
                    clickable: true,
                    // dynamicBullets: true,
                }}
                breakpoints={{
                    300: { slidesPerView: 1, },
                    767: { slidesPerView: 3 },
                    1024: { slidesPerView: 3 },
                }}
                className="slider-browse-special-offer"
            >
                <SwiperSlide>
                    <div className="card card-special-offers bg-purple-primary text-white">
                        <div className="d-flex align-items-center">
                            <div className="ic-icon">
                                <Image src={ImagesOffterShape} className="d-md-none" alt="" />
                                <Image src={ImageCardLogo} className="d-none d-md-block" alt="" />
                            </div>
                            <div className="flex-grow-1">
                                <p className="get-discount">Get upto 60% off</p>
                                <p className="use-code">Use FIRSTSQ060</p>
                            </div>
                            <div className="ms-auto">
                                <Link href="" className="btn btn-applied">Applied</Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card card-special-offers bg-info-primary text-white">
                        <div className="d-flex align-items-center">
                            <div className="ic-icon">
                                <Image src={ImagesOffterShape} className="d-md-none" alt="" />
                                <Image src={ImageCardLogo} className="d-none d-md-block" alt="" />
                            </div>
                            <div className="flex-grow-1">
                                <p className="get-discount">Get upto 60% off</p>
                                <p className="use-code">Use FIRSTSQ060</p>
                            </div>
                            <div className="ms-auto">
                                <Link href="" className="btn btn-applied">Applied</Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card card-special-offers bg-success-primary text-white">
                        <div className="d-flex align-items-center">
                            <div className="ic-icon">
                                <Image src={ImagesOffterShape} className="d-md-none" alt="" />
                                <Image src={ImageCardLogo} className="d-none d-md-block" alt="" />
                            </div>
                            <div className="flex-grow-1">
                                <p className="get-discount">Get upto 60% off</p>
                                <p className="use-code">Use FIRSTSQ060</p>
                            </div>
                            <div className="ms-auto">
                                <Link href="" className="btn btn-applied">Applied</Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card card-special-offers bg-purple-primary text-white">
                        <div className="d-flex align-items-center">
                            <div className="ic-icon">
                                <Image src={ImagesOffterShape} className="d-md-none" alt="" />
                                <Image src={ImageCardLogo} className="d-none d-md-block" alt="" />
                            </div>
                            <div className="flex-grow-1">
                                <p className="get-discount">Get upto 60% off</p>
                                <p className="use-code">Use FIRSTSQ060</p>
                            </div>
                            <div className="ms-auto">
                                <Link href="" className="btn btn-applied">Applied</Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card card-special-offers bg-info-primary text-white">
                        <div className="d-flex align-items-center">
                            <div className="ic-icon">
                                <Image src={ImagesOffterShape} className="d-md-none" alt="" />
                                <Image src={ImageCardLogo} className="d-none d-md-block" alt="" />
                            </div>
                            <div className="flex-grow-1">
                                <p className="get-discount">Get upto 60% off</p>
                                <p className="use-code">Use FIRSTSQ060</p>
                            </div>
                            <div className="ms-auto">
                                <Link href="" className="btn btn-applied">Applied</Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card card-special-offers bg-success-primary text-white">
                        <div className="d-flex align-items-center">
                            <div className="ic-icon">
                                <Image src={ImagesOffterShape} className="d-md-none" alt="" />
                                <Image src={ImageCardLogo} className="d-none d-md-block" alt="" />
                            </div>
                            <div className="flex-grow-1">
                                <p className="get-discount">Get upto 60% off</p>
                                <p className="use-code">Use FIRSTSQ060</p>
                            </div>
                            <div className="ms-auto">
                                <Link href="" className="btn btn-applied">Applied</Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className="sec-view-all-offers">
                <Link href="" className="link-view-all-offers">View all offers</Link>
            </div>
        </div>
    )
}

export default SpecialOffer