"use client";
import Image, { StaticImageData } from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Mousewheel, Navigation, Pagination } from "swiper/modules";
import Link from "next/link";

import 'bootstrap/dist/css/bootstrap.min.css';
import Arrow from "../../../../public/images/arrow.svg";

interface OfferImageProps {
    url: StaticImageData
}

interface SpecialOffersProps {
    offers: OfferImageProps[]
}

const SpecialOffers: React.FC<SpecialOffersProps> = ({ offers }) => {
    return (
        <div>
            <div className='sec-gap sec-special-offer'>
                <div className='block-header'>
                    <div className='d-flex align-item-center'>
                        <h2 className='heading02 m-0'>Special Offers</h2>
                        <div className='ms-auto'>
                            <Link href="" className='link'>
                                See All
                                <Image src={Arrow} alt="arrow icon" />

                            </Link>
                        </div>
                    </div>
                </div>

                <Swiper
                    slidesPerView={3.3}
                    mousewheel={true}
                    spaceBetween={24}
                    navigation={{
                        prevEl: ".outer-prev-button",
                        nextEl: ".outer-next-button",
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        300: { slidesPerView: 1, spaceBetween: 0 },
                        767: { slidesPerView: 1.5 },
                        1024: { slidesPerView: 2 },
                    }}
                    modules={[
                        Mousewheel,
                        Pagination,
                        Navigation
                    ]}
                    className="outer-popular-slider"
                >
                    {offers.map((offer, index) => (
                        <SwiperSlide key={index}>
                            <div className='card-offer card-offer1'>
                                <div className='d-flex'>
                                    <div className='Imgbox'>
                                        <Image
                                            src={offer.url}
                                            alt=""
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
};

export default SpecialOffers;
