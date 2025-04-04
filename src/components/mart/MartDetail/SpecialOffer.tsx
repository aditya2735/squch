"use client";
import React from 'react'
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination } from "swiper/modules";
import Link from "next/link";

import ImageCardLogo from "../../../../public/images/logo-offer-card.svg"
import { OfferProps } from '@/store/features/Mart/MartOffer/offerTypes';

const SpecialOffer: React.FC<{ offers: OfferProps[] }> = ({ offers }) => {

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
                }}
                breakpoints={{
                    300: { slidesPerView: 1, },
                    767: { slidesPerView: 3 },
                    1024: { slidesPerView: 3 },
                }}
                className="slider-browse-special-offer"
            >
                {offers.map((offer, index) => (
                    <SwiperSlide key={index}>
                        <div className="card card-special-offers bg-purple-primary text-white">
                            <div className="d-flex align-items-center">
                                <div className="ic-icon">
                                    <Image src={offer.offerImage} className="d-md-none" alt="" height={100} width={100} />
                                    <Image src={ImageCardLogo} className="d-none d-md-block" alt="" />
                                </div>
                                <div className="flex-grow-1">
                                    <p className="get-discount">{offer.title}</p>
                                    <p className="use-code">Use {offer.offerCode}</p>
                                </div>
                                <div className="ms-auto">
                                    <Link href="" className="btn btn-applied">Applied</Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="sec-view-all-offers">
                <Link href="" className="link-view-all-offers">View all offers</Link>
            </div>
        </div>
    )
}

export default SpecialOffer