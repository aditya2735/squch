import React from 'react';
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import {
    Navigation,
    Pagination,
    Mousewheel,
    Keyboard,
} from "swiper/modules";
import Link from "next/link";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";

import martSell01 from '../../../../public/images/martSell01.png';
import martSell02 from '../../../../public/images/martSell02.png';
import martSell03 from '../../../../public/images/martSell03.png';
import leftArrow from "../../../../public/images/left-arrow.svg";
import rightArrow from "../../../../public/images/right-arrow.svg";
// import { BrandsProps } from '@/store/features/Mart/MartBrands/brandsTypes';

const disocountedBrandData = [
    { id: 1, image: martSell01 },
    { id: 2, image: martSell02 },
    { id: 3, image: martSell03 },
    { id: 4, image: martSell01 },
    { id: 5, image: martSell02 },
    { id: 6, image: martSell03 },
]

// interface DiscountedBrandsProps {
//     brands: BrandsProps[]
// }

const DiscountedBrands: React.FC = () => {
    return (
        <div className='mart-sell-sec sec-gap pt-0'>
            <div className='container'>
                <div className="px-40">
                    <div className='inner-mart-sell'>
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
                                prevEl: ".prev-button",
                                nextEl: ".next-button",
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
                            className="mart-sell-sec"
                        >
                            {disocountedBrandData.map((brand) => (
                                <SwiperSlide key={brand.id}>
                                    <div className="mart-sell-box">
                                        <Link href="#" className="mart-sell-item">
                                            <Image src={brand.image} alt='Brand Icon' />
                                        </Link>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        <button className="prev-button d-flex align-items-center justify-content-center" aria-label="Previous">
                            <Image src={leftArrow} alt='Arrow Icon' />
                        </button>
                        <button className="next-button d-flex align-items-center justify-content-center" aria-label="Next">
                            <Image src={rightArrow} alt='Arrow Icon' />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DiscountedBrands