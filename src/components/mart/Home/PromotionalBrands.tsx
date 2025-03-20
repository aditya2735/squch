import React from 'react';
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
    Navigation,
    Pagination,
    Mousewheel,
    Keyboard,
} from "swiper/modules";
import Link from "next/link";

import martOffer01 from '../../../../public/images/mart-offer-01.png';
import martOffer02 from '../../../../public/images/mart-offer-02.png';
import martOffer03 from '../../../../public/images/mart-offer-03.png';
import leftArrow from "../../../../public/images/left-arrow.svg";
import rightArrow from "../../../../public/images/right-arrow.svg";

const promotionalBrandData = [
    { id: 1, image: martOffer01 },
    { id: 2, image: martOffer02 },
    { id: 3, image: martOffer03 },
    { id: 4, image: martOffer01 },
    { id: 5, image: martOffer02 },
    { id: 6, image: martOffer03 },
];


const PromotionalBrands: React.FC = () => {
    return (
        <div className='mart-offer-sec sec-gap pt-0'>
            <div className='container'>
                <div className="px-40">
                    <div className='inner-mart-offer'>
                        <Swiper
                            slidesPerView={3}
                            mousewheel={true}
                            keyboard={true}
                            pagination={{
                                type: 'fraction',
                                dynamicBullets: true,
                                clickable: true,
                            }}
                            modules={[Mousewheel, Keyboard, Pagination, Navigation]}
                            navigation={{
                                prevEl: ".prev-button-offer",
                                nextEl: ".next-button-offer",
                            }}
                            // pagination={{
                            //   dynamicBullets: true,
                            //   clickable: true,      
                            // }}
                            spaceBetween={10}
                            breakpoints={{
                                320: { slidesPerView: 1.1, spaceBetween: 10 },
                                768: { slidesPerView: 2.1, spaceBetween: 10 },
                                890: { slidesPerView: 2.3, spaceBetween: 10 },
                                1200: { slidesPerView: 3.1, spaceBetween: 20 },
                            }}
                            className="mart-offer-sec"
                        >
                            {promotionalBrandData.map((brand) => (
                                <SwiperSlide key={brand.id}>
                                    <div className="mart-offer-box">
                                        <Link href="#" className="mart-offer-item">
                                            <Image alt="Brand Image" src={brand.image} />
                                        </Link>
                                    </div>
                                </SwiperSlide>
                            ))}

                        </Swiper>

                        <button className="prev-button-offer d-flex align-items-center justify-content-center" aria-label="Previous">
                            <Image src={leftArrow} alt='Arrow Icon' />
                        </button>
                        <button className="next-button-offer d-flex align-items-center justify-content-center" aria-label="Next">
                            <Image src={rightArrow} alt='Arrow Icon' />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PromotionalBrands