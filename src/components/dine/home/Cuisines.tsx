"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.min.css';

import ImagesCuisines1 from "../../../../public/images/image-cuisines-1.png";
import ImagesCuisines2 from "../../../../public/images/image-cuisines-2.png";
import ImagesCuisines3 from "../../../../public/images/image-cuisines-3.png";
import ImagesCuisines4 from "../../../../public/images/image-cuisines-4.png";
import ImagesCuisines5 from "../../../../public/images/image-cuisines-5.png";
import Arrow from "../../../../public/images/arrow.svg";

const Cuisines = () => {
    return (
        <div className="px-40 bg-dark-gray">
            <div className='block-header'>
                <div className='d-flex align-item-center'>
                    <h2 className='heading02 m-0'>Cuisines</h2>
                    <div className='ms-auto'>
                        <Link href="" className='link'>
                            See All <Image src={Arrow} alt="Arrow icon" />
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
                    clickable: false,
                }}
                breakpoints={{
                    300: { slidesPerView: 3.5, spaceBetween: 10 },
                    767: { slidesPerView: 4.5 },
                    1024: { slidesPerView: 5 },
                }}
                modules={[Navigation]}
                className="outer-popular-slider-Cuisines"
            >
                <SwiperSlide>
                    <div className='card-cuisines'>
                        <div className='cardImg'>
                            <Image src={ImagesCuisines1} alt="" />
                        </div>
                        <p>Italian</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='card-cuisines'>
                        <div className='cardImg'>
                            <Image src={ImagesCuisines2} alt="" />
                        </div>
                        <p>Mexican</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='card-cuisines'>
                        <div className='cardImg'>
                            <Image src={ImagesCuisines3} alt="" />
                        </div>
                        <p>African</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='card-cuisines'>
                        <div className='cardImg'>
                            <Image src={ImagesCuisines4} alt="" />
                        </div>
                        <p>American</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='card-cuisines'>
                        <div className='cardImg'>
                            <Image src={ImagesCuisines5} alt="" />
                        </div>
                        <p>Briyani</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='card-cuisines'>
                        <div className='cardImg'>
                            <Image src={ImagesCuisines1} alt="" />
                        </div>
                        <p>Italian</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='card-cuisines'>
                        <div className='cardImg'>
                            <Image src={ImagesCuisines2} alt="" />
                        </div>
                        <p>Mexican</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='card-cuisines'>
                        <div className='cardImg'>
                            <Image src={ImagesCuisines3} alt="" />
                        </div>
                        <p>African</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='card-cuisines'>
                        <div className='cardImg'>
                            <Image src={ImagesCuisines4} alt="" />
                        </div>
                        <p>American</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='card-cuisines'>
                        <div className='cardImg'>
                            <Image src={ImagesCuisines5} alt="" />
                        </div>
                        <p>Briyani</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Cuisines;