import Image from 'next/image';
import React, { useRef, useState } from 'react'
import { Navigation, Pagination, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/pagination";

import ImagesThumbFull1 from "../../../../public/images/restaurant-full-img.jpg";
import ImagesThumbSmall1 from "../../../../public/images/restaurant-thumb-img-1.png";
import ImagesThumbSmall2 from "../../../../public/images/restaurant-thumb-img-2.png";
import ImagesThumbSmall3 from "../../../../public/images/restaurant-thumb-img-3.png";
import ImagesThumbSmall4 from "../../../../public/images/restaurant-thumb-img-4.png";
import ImagesThumbSmall5 from "../../../../public/images/restaurant-thumb-img-5.png";
import SquchStayGallery from './SquchStayGallery';
import { Swiper as SwiperClass } from 'swiper/types';

const DetailThumbSlider = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);

    const mainSwiperRef = useRef(null);
    const [showGallery, setShowGallery] = useState(false);

    return (
        <div className='thumbslider-main'>
            <div className='top-slider'>
            <Swiper
                ref={mainSwiperRef}
                modules={[Navigation, Thumbs, Pagination]}
                spaceBetween={10}
                slidesPerView={1}
                // navigation
                // pagination={{ clickable: true }}
                thumbs={{ swiper: thumbsSwiper }}
                loop={true}
            >
                <SwiperSlide>
                    <div className='thumb-full'>
                        <Image src={ImagesThumbFull1}  className='w-100' alt='' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='thumb-full'>
                        <Image src={ImagesThumbFull1}  className='w-100' alt='' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='thumb-full'>
                        <Image src={ImagesThumbFull1}  className='w-100' alt='' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='thumb-full'>
                        <Image src={ImagesThumbFull1}  className='w-100' alt='' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='thumb-full'>
                        <Image src={ImagesThumbFull1}  className='w-100' alt='' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='thumb-full'>
                        <Image src={ImagesThumbFull1}  className='w-100' alt='' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='thumb-full'>
                        <Image src={ImagesThumbFull1}  className='w-100' alt='' />
                    </div>
                </SwiperSlide>
            </Swiper>
            </div>
        <div className='bottom-slider'>
            <Swiper
                onSwiper={setThumbsSwiper}
                modules={[Thumbs]}
                spaceBetween={10}
                slidesPerView={5}
                watchSlidesProgress
                breakpoints={{
                    300: { slidesPerView: 3,},
                    767: { slidesPerView: 3 },
                    1024: { slidesPerView: 5 },
                }}
            >
                <SwiperSlide>
                    <div className='thumbsmall' onClick={() => setShowGallery(true)}>
                        <Image src={ImagesThumbSmall1} layout='intrinsic' className='w-100' alt='' />
                        <p>Reception</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='thumbsmall' onClick={() => setShowGallery(true)}>
                        <Image src={ImagesThumbSmall2} layout='intrinsic' className='w-100' alt='' />
                        <p>Inside</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='thumbsmall' onClick={() => setShowGallery(true)}>
                        <Image src={ImagesThumbSmall3} layout='intrinsic' className='w-100' alt='' />
                        <p>Rooftop</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='thumbsmall' onClick={() => setShowGallery(true)}>
                        <Image src={ImagesThumbSmall4} layout='intrinsic' className='w-100' alt='' />
                        <p>Kitchen</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='thumbsmall' onClick={() => setShowGallery(true)}>
                        <Image src={ImagesThumbSmall5} layout='intrinsic' className='w-100' alt='' />
                        <p>Iterance</p>
                    </div>
                </SwiperSlide>
            </Swiper>
            </div>

            <SquchStayGallery show={showGallery} handleClose={() => setShowGallery(false)} />
        </div>
    )
}

export default DetailThumbSlider