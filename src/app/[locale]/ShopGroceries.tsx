"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
    Grid,
    Navigation,
    Pagination,
    Mousewheel,
    Keyboard,
    Thumbs,
    FreeMode,
} from "swiper/modules";
import Link from "next/link";


import RatedNearYou01 from '../../../public/images/rated-near-you-01.png'
import RatedNearYou02 from '../../../public/images/rated-near-you-02.png'


import ImageGrocery1 from "../../../public/images/grocery-img-1.png"
import ImageGrocery2 from "../../../public/images/grocery-img-2.png"
import ImageGrocery3 from "../../../public/images/grocery-img-3.png"
import ImageGrocery4 from "../../../public/images/grocery-img-4.png"



const ShopGroceries = () => {
    return (
        <div className='shop-groceries'>
            <div className='container'>
                <div className='block-header'>
                    <div className='d-flex align-item-center'>
                        <h2 className='heading02 font-32 m-0'>Shop groceries on Squchmart</h2>
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
                        320: {
                            slidesPerView: 4,
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 10,
                        },
                        890: {
                            slidesPerView: 4,
                            spaceBetween: 10,
                        },
                        1200: {
                            slidesPerView: 4,
                            spaceBetween: 10,
                        },
                    }}
                    className="topratedyou-sec"
                >
                    <SwiperSlide>
                        <Link href="" className="card-shop-groceries">
                            <div className="fig-img">
                                <Image src={ImageGrocery1} alt="" />
                            </div>
                            <p className="m-0">Dairy, Bread & Eggs</p>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link href="" className="card-shop-groceries">
                            <div className="fig-img">
                                <Image src={ImageGrocery2} alt="" />
                            </div>
                            <p className="m-0">Fresh Fruits</p>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link href="" className="card-shop-groceries">
                            <div className="fig-img">
                                <Image src={ImageGrocery3} alt="" />
                            </div>
                            <p className="m-0">Cereals and Breakfast</p>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link href="" className="card-shop-groceries">
                            <div className="fig-img">
                                <Image src={ImageGrocery4} alt="" />
                            </div>
                            <p className="m-0">Atta Rice & Dals</p>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link href="" className="card-shop-groceries">
                            <div className="fig-img">
                                <Image src={ImageGrocery1} alt="" />
                            </div>
                            <p className="m-0">Dairy, Bread & Eggs</p>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link href="" className="card-shop-groceries">
                            <div className="fig-img">
                                <Image src={ImageGrocery2} alt="" />
                            </div>
                            <p className="m-0">Fresh Fruits</p>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link href="" className="card-shop-groceries">
                            <div className="fig-img">
                                <Image src={ImageGrocery3} alt="" />
                            </div>
                            <p className="m-0">Cereals and Breakfast</p>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link href="" className="card-shop-groceries">
                            <div className="fig-img">
                                <Image src={ImageGrocery4} alt="" />
                            </div>
                            <p className="m-0">Atta Rice & Dals</p>
                        </Link>
                    </SwiperSlide>
                </Swiper>

                <button className="prev-button-1 d-flex align-items-center justify-content-center" aria-label="Previous">
                    <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M8.74023 16.6582L2.22793 10.1459C1.45884 9.37682 1.45884 8.11831 2.22793 7.34922L8.74023 0.836914" stroke="#292D32" strokeWidth="1.45163" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </button>
                <button className="next-button-1 d-flex align-items-center justify-content-center" aria-label="Next">
                    <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M1.51709 16.6582L8.02939 10.1459C8.79848 9.37682 8.79848 8.11831 8.02939 7.34922L1.51709 0.836914" stroke="#292D32" strokeWidth="1.45163" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </button>
            </div>
        </div>
    )
}

export default ShopGroceries
