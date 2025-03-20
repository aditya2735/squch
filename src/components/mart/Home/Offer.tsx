"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
    Pagination,
    Mousewheel,
    Keyboard
} from "swiper/modules";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { OfferProps } from "@/store/features/Mart/MartOffer/offerTypes";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface MartOfferProps {
    offers: OfferProps[] | null
}

const Offer: React.FC<MartOfferProps> = ({ offers }) => {

    const router = useRouter();

    const handleClick = () => {
        router.push('/home/mart/offer');
    };

    return (
        <div className='big-offer-sec sec-gap'>
            <div className='container'>
                <div className='inner-big-offer-sec  px-40'>
                    <Swiper
                        slidesPerView={3}
                        mousewheel={true}
                        keyboard={true}
                        modules={[Mousewheel, Keyboard, Pagination]}
                        pagination={{
                            dynamicBullets: true,
                            clickable: true,
                        }}
                        spaceBetween={10}
                        breakpoints={{
                            320: { slidesPerView: 1, spaceBetween: 5 },
                            768: { slidesPerView: 2, spaceBetween: 10 },
                            890: { slidesPerView: 2, spaceBetween: 10 },
                            1200: { slidesPerView: 3, spaceBetween: 20 },
                        }}
                        className="big-offer-sec"
                    >
                        {offers?.map((offer, index) => (
                            <SwiperSlide key={index}>
                                <div className="big-offer-box" onClick={() => handleClick()}>
                                    <Image
                                        src={offer.offerImage}
                                        className="w-100"
                                        alt="offer image"
                                        width={300}
                                        height={300}
                                        quality={100}
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default Offer