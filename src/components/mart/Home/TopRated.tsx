"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
    Navigation,
    Mousewheel,
    Keyboard,
} from "swiper/modules";
import Link from "next/link";

import Arrow from "../../../../public/images/arrow.svg";
import Rating from "../../../../public/images/rating.svg";
import LeftArrow from "../../../../public/images/left-arrow.svg";
import RightArrow from "../../../../public/images/right-arrow.svg";
import { MartStoreProps } from "@/store/features/Mart/MartStores/storeTypes";
import { useTranslations } from "next-intl";

interface TopRatedProps {
    stores: MartStoreProps[];
    handleClick: (storeId: number) => void;
    handleFavourite: (event: React.MouseEvent, storeId: number, status: boolean) => void;
};


const TopRated: React.FC<TopRatedProps> = ({ stores, handleClick, handleFavourite }) => {

    const t = useTranslations("MART");

    return (
        <div className='topRatedYou mt-0 pt-0'>
            <div className='container'>
                <div className='px-40 innerTopRatedYou'>
                    <div className='block-header'>
                        <div className='d-flex align-item-center'>
                            <h2 className='heading02 m-0'>
                                {t("Top Rated Near You")}
                            </h2>
                            <div className='ms-auto'>
                                <Link href="" className='link'>
                                    See All <Image src={Arrow} alt="Arrow Icon" />
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className='topratedyou-slider'>
                        <Swiper
                            slidesPerView={3}
                            mousewheel={true}
                            keyboard={true}
                            modules={[Mousewheel, Keyboard, Navigation]}
                            navigation={{
                                prevEl: ".prev-button-1",
                                nextEl: ".next-button-1",
                            }}
                            spaceBetween={10}
                            breakpoints={{
                                320: { slidesPerView: 2.2, spaceBetween: 5 },
                                768: { slidesPerView: 2.2, spaceBetween: 10 },
                                890: { slidesPerView: 3.3, spaceBetween: 10 },
                                1200: { slidesPerView: 5.2, spaceBetween: 20 },
                            }}
                            className="topratedyou-sec"
                        >
                            {stores?.map((store) => (
                                <SwiperSlide key={store.storeId}>
                                    <div className="topratedyou-box">
                                        <div className="topratedyou-item" >
                                            <div className="img-box position-relative">
                                                
                                                <Image
                                                    src={store.images[0]}
                                                    alt="store icon"
                                                    height={500}
                                                    width={400}
                                                />

                                                <div className="icons-img" onClick={(event) => handleFavourite(event, store.storeId, store.isFavourite)}>
                                                    {
                                                        store.isFavourite ?
                                                            (
                                                                <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.4066 15.5845C10.1233 15.6845 9.65664 15.6845 9.37331 15.5845C6.95664 14.7595 1.55664 11.3178 1.55664 5.48451C1.55664 2.90951 3.63164 0.826172 6.18997 0.826172C7.70664 0.826172 9.04831 1.55951 9.88997 2.69284C10.7316 1.55951 12.0816 0.826172 13.59 0.826172C16.1483 0.826172 18.2233 2.90951 18.2233 5.48451C18.2233 11.3178 12.8233 14.7595 10.4066 15.5845Z" fill="#F73179" stroke="#F73179" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                                            )
                                                            :
                                                            (
                                                                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.3168 18.0826C11.0335 18.1826 10.5668 18.1826 10.2835 18.0826C7.8668 17.2576 2.4668 13.8159 2.4668 7.98255C2.4668 5.40755 4.5418 3.32422 7.10013 3.32422C8.6168 3.32422 9.95846 4.05755 10.8001 5.19089C11.6418 4.05755 12.9918 3.32422 14.5001 3.32422C17.0585 3.32422 19.1335 5.40755 19.1335 7.98255C19.1335 13.8159 13.7335 17.2576 11.3168 18.0826Z" stroke="#454545" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                                            )
                                                    }
                                                </div>
                                                <div className="text-img-box">
                                                    {/* // TODO: need to check OffeR Design */}
                                                    <h2>FLAT DEAL <br />50% oFF</h2>
                                                    <p>above  ₵249</p>
                                                </div>
                                            </div>

                                            <div className="text-box" onClick={() => handleClick(store.storeId)}>
                                                <h6>{store.name}</h6>
                                                <ul>
                                                    <li>
                                                        <Image src={Rating} alt='rating icon' />
                                                        {store.rating}
                                                    </li>
                                                    <li>{store.distance?.toFixed(0)} km</li>
                                                </ul>
                                                <p>{store.address}</p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))
                            }
                        </Swiper>
                        <button className="prev-button-1 d-flex align-items-center justify-content-center" aria-label="Previous">
                            <Image src={LeftArrow} alt="Arrow Icon" />
                        </button>
                        <button className="next-button-1 d-flex align-items-center justify-content-center" aria-label="Next">
                            <Image src={RightArrow} alt="Arrow Icon" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopRated