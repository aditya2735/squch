"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import Link from "next/link";
import React from 'react'

import ImagesTopPicks from "../../../../public/images/top-picks.jpg"


const TopPicks = () => {
    return (
        <div className="sec-top-picks sec-gap">
            <div className="block-header">
                <div className="d-flex align-item-center">
                    <h2 className="heading02 m-0">Top Picks</h2>
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
                <SwiperSlide>
                    <Link href="" className="card card-picks">
                        <Image src={ImagesTopPicks}  alt="" />
                        <div className="position-absolute">
                            <div className="product-name-title">
                                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.756414" y="1.11579" width="16.7684" height="16.7684" rx="3.17368" stroke="#20A66A" strokeWidth="1.23158" />
                                    <circle cx="9.14011" cy="9.49949" r="4.26316" fill="#20A66A" />
                                </svg>
                                <h3 className="prod-ttl">Hybrid tomatoe </h3>
                            </div>
                            <div className="d-flex">
                                <div className="price-product">
                                    <span className="d-flex">
                                        <span className="current-price">¢2.00</span>
                                        <span className="old-price">¢1.00</span>
                                    </span>
                                    <p className="product-weight m-0">1 kg</p>
                                </div>
                                <div className="ms-auto text-end">
                                    <button className="btn add-btn">ADD</button>
                                    <p className="text-customizable m-0">Customizable</p>
                                </div>

                            </div>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href="" className="card card-picks">
                        <Image src={ImagesTopPicks}  alt="" />
                        <div className="position-absolute">
                            <div className="product-name-title">
                                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.756414" y="1.11579" width="16.7684" height="16.7684" rx="3.17368" stroke="#20A66A" strokeWidth="1.23158" />
                                    <circle cx="9.14011" cy="9.49949" r="4.26316" fill="#20A66A" />
                                </svg>
                                <h3 className="prod-ttl">Hybrid tomatoe </h3>
                            </div>
                            <div className="d-flex">
                                <div className="price-product">
                                    <span className="d-flex">
                                        <span className="current-price">¢2.00</span>
                                        <span className="old-price">¢1.00</span>
                                    </span>
                                    <p className="product-weight m-0">1 kg</p>
                                </div>
                                <div className="ms-auto text-end">
                                    <button className="btn add-btn">ADD</button>
                                    <p className="text-customizable m-0">Customizable</p>
                                </div>

                            </div>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href="" className="card card-picks">
                        <Image src={ImagesTopPicks}  alt="" />
                        <div className="position-absolute">
                            <div className="product-name-title">
                                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.756414" y="1.11579" width="16.7684" height="16.7684" rx="3.17368" stroke="#20A66A" strokeWidth="1.23158" />
                                    <circle cx="9.14011" cy="9.49949" r="4.26316" fill="#20A66A" />
                                </svg>
                                <h3 className="prod-ttl">Hybrid tomatoe </h3>
                            </div>
                            <div className="d-flex">
                                <div className="price-product">
                                    <span className="d-flex">
                                        <span className="current-price">¢2.00</span>
                                        <span className="old-price">¢1.00</span>
                                    </span>
                                    <p className="product-weight m-0">1 kg</p>
                                </div>
                                <div className="ms-auto text-end">
                                    <button className="btn add-btn">ADD</button>
                                    <p className="text-customizable m-0">Customizable</p>
                                </div>

                            </div>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href="" className="card card-picks">
                        <Image src={ImagesTopPicks}  alt="" />
                        <div className="position-absolute">
                            <div className="product-name-title">
                                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.756414" y="1.11579" width="16.7684" height="16.7684" rx="3.17368" stroke="#20A66A" strokeWidth="1.23158" />
                                    <circle cx="9.14011" cy="9.49949" r="4.26316" fill="#20A66A" />
                                </svg>
                                <h3 className="prod-ttl">Hybrid tomatoe </h3>
                            </div>
                            <div className="d-flex">
                                <div className="price-product">
                                    <span className="d-flex">
                                        <span className="current-price">¢2.00</span>
                                        <span className="old-price">¢1.00</span>
                                    </span>
                                    <p className="product-weight m-0">1 kg</p>
                                </div>
                                <div className="ms-auto text-end">
                                    <button className="btn add-btn">ADD</button>
                                    <p className="text-customizable m-0">Customizable</p>
                                </div>

                            </div>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href="" className="card card-picks">
                        <Image src={ImagesTopPicks}  alt="" />
                        <div className="position-absolute">
                            <div className="product-name-title">
                                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.756414" y="1.11579" width="16.7684" height="16.7684" rx="3.17368" stroke="#20A66A" strokeWidth="1.23158" />
                                    <circle cx="9.14011" cy="9.49949" r="4.26316" fill="#20A66A" />
                                </svg>
                                <h3 className="prod-ttl">Hybrid tomatoe </h3>
                            </div>
                            <div className="d-flex">
                                <div className="price-product">
                                    <span className="d-flex">
                                        <span className="current-price">¢2.00</span>
                                        <span className="old-price">¢1.00</span>
                                    </span>
                                    <p className="product-weight m-0">1 kg</p>
                                </div>
                                <div className="ms-auto text-end">
                                    <button className="btn add-btn">ADD</button>
                                    <p className="text-customizable m-0">Customizable</p>
                                </div>

                            </div>
                        </div>
                    </Link>
                </SwiperSlide>

            </Swiper>
        </div>
    )
}

export default TopPicks
