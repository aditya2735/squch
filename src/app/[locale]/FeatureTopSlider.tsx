"use client";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import FeatureTop1 from '../../../public/images/feature-top-01.png'
import FeatureTop2 from '../../../public/images/feature-top-02.png'
import FeatureTop3 from '../../../public/images/feature-top-03.png'
import FeatureTop4 from '../../../public/images/feature-top-04.png'

const FeatureTopSlider = () => {
    const swiperRef = useRef<SwiperClass | null>(null);
    const [swiperInstance, setSwiperInstance] = useState<any>(null);

    useEffect(() => {
        if (swiperRef.current) {
            setSwiperInstance(swiperRef.current);
        }
    }, []);

    return (

        <div className="feature-top-slider-box">
            <div className="container">
                <div className="feature-slider-box">
                    <Swiper
                        onSwiper={(swiper) => {
                            swiperRef.current = swiper;
                            setSwiperInstance(swiper);
                        }}
                        slidesPerView={4}
                        spaceBetween={24}
                        navigation={false}
                        pagination={{
                            clickable: true,
                            el: ".custom-pagination", // Custom pagination container
                        }}
                        breakpoints={{
                            300: { slidesPerView: 4, spaceBetween: 10 },
                            550: { slidesPerView: 5 },
                            767: { slidesPerView: 5, spaceBetween: 10 },
                            1024: { slidesPerView: 6, spaceBetween: 20 },
                        }}
                        modules={[Pagination, Navigation]}
                        className="feature-top-slider"
                    >
                        <SwiperSlide>
                            <div className="feature-box">
                                <div className="img-feature">
                                    <Image src={FeatureTop1} alt="" />
                                </div>
                                <h6>Top Up</h6>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="feature-box">
                                <div className="img-feature">
                                    <Image src={FeatureTop2} alt="" />
                                </div>
                                <h6>Request</h6>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="feature-box">
                                <div className="img-feature">
                                    <Image src={FeatureTop3} alt="" />
                                </div>
                                <h6>Pay</h6>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="feature-box">
                                <div className="img-feature">
                                    <Image src={FeatureTop4} alt="" />
                                </div>
                                <h6>Rewards</h6>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="feature-box">
                                <div className="img-feature">
                                    <Image src={FeatureTop1} alt="" />
                                </div>
                                <h6>Top Up</h6>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="feature-box">
                                <div className="img-feature">
                                    <Image src={FeatureTop2} alt="" />
                                </div>
                                <h6>Request</h6>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                    <div className="custom-pagination"></div>
                </div>
            </div>
        </div>
    )
}

export default FeatureTopSlider