"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import Link from "next/link";
import Arrow from "../../../../public/images/arrow.svg";


interface Offer {
    id: number;
    image: string;
    link: string;
}

interface BannerProps {
    heading: string;
    category: string,
    banners: Offer[],
    seeAllLink: string;
}

const Banner: React.FC<BannerProps> = ({
    heading,
    category,
    banners,
    seeAllLink
}) => {

    const temp = category;
    console.log('temp: ', temp);
    return (
        <>
            <div className="sec-gap sec-special-offer">
                <div className="block-header">
                    <div className="d-flex align-item-center">
                        <h2 className="heading02 m-0">
                            {heading}
                        </h2>
                        <div className="ms-auto">
                            <Link href={seeAllLink} className='link'>
                                See All <Image src={Arrow} alt="Arrow Icon" />
                            </Link>
                        </div>
                    </div>
                </div>
                <Swiper
                    slidesPerView={3.3}
                    spaceBetween={24}
                    navigation={{
                        prevEl: ".outer-prev-button",
                        nextEl: ".outer-next-button",
                    }}
                    pagination={{
                        clickable: true,
                        dynamicBullets: true,
                    }}
                    breakpoints={{
                        300: { slidesPerView: 1, spaceBetween: 0 },
                        767: { slidesPerView: 1.5 },
                        1024: { slidesPerView: 2 },
                    }}
                    modules={[Pagination, Navigation]}
                    className="outer-popular-slider"
                >
                    {banners.map((offer) => (
                        <SwiperSlide key={offer.id}>
                            <div className='card-offer card-offer1'>
                                <div className='d-flex'>
                                    {/* <div className='card-box-content'>
                                        <span className='sticker'>
                                            <Image src={offer.image} alt="" /> 50% off upto </span>
                                        <h3>Dopamine Diners and Club</h3>
                                        <p>Luxury dine-in place</p>
                                        <Link href="" className='btn btn-primary'>Prebook now</Link>
                                    </div> */}

                                    {/* TODO: Need to Fix the Banner Design  */}
                                    <img
                                        src={offer.image}
                                        alt=""
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    )
}

export default Banner;