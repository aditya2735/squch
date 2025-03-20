"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";


import WelcomeofferImg1 from '../../../../public/images/welcome-offer-img-1.jpg'
import WelcomeofferImg2 from '../../../../public/images/welcome-offer-img-2.jpg'
import WelcomeofferImg3 from '../../../../public/images/welcome-offer-img-3.jpg'

const WelcomeOffer = () => {
    return (
        <div className='topRatedYou sec-enjoyyourwelcomeoffer mt-0 pt-0'>
            <div className='container'>
                <div className='px-40 innerTopRatedYou'>
                    <div className='block-header'>
                        <div className='d-flex align-items-center'>
                            <div className="me-auto">
                                <h2 className='heading02 m-0'>Enjoy your welcome offer!</h2>
                                <p className="m-0 block-para">Get flat 10% off on your next order</p>
                            </div>
                            
                        </div>
                    </div>

                    <div className='topratedyou-slider'>
                        <Swiper
                            slidesPerView={3.5}
                            mousewheel={true}
                            keyboard={true}
                            // modules={[Keyboard, Navigation]}
                            navigation={{
                                prevEl: ".prev-button-1",
                                nextEl: ".next-button-1",
                            }}
                            spaceBetween={10}
                            breakpoints={{
                                320: { slidesPerView: 1.2, spaceBetween: 10 },
                                768: { slidesPerView: 1.2, spaceBetween: 10 },
                                890: { slidesPerView: 3.2, spaceBetween: 10 },
                                1200: { slidesPerView: 3.2, spaceBetween: 20 },
                            }}
                            className="topratedyou-sec"
                        >

                            <SwiperSlide>
                                <div className="topratedyou-box">
                                    <div className="topratedyou-item" >
                                        <div className="img-box position-relative">
                                            <Image src={WelcomeofferImg1} alt="" />
                                            <div className="icons-img">
                                                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.3168 18.0826C11.0335 18.1826 10.5668 18.1826 10.2835 18.0826C7.8668 17.2576 2.4668 13.8159 2.4668 7.98255C2.4668 5.40755 4.5418 3.32422 7.10013 3.32422C8.6168 3.32422 9.95846 4.05755 10.8001 5.19089C11.6418 4.05755 12.9918 3.32422 14.5001 3.32422C17.0585 3.32422 19.1335 5.40755 19.1335 7.98255C19.1335 13.8159 13.7335 17.2576 11.3168 18.0826Z" stroke="#454545" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                            </div>
                                        </div>

                                        <div className="text-box">
                                            <h6>Buka Restaurant</h6>
                                            <ul>
                                                <li>
                                                    <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="7" cy="7.74219" r="7" fill="#DB8AE8" /><path d="M7.67356 4.4399L8.358 5.80878C8.45133 5.99934 8.70022 6.18212 8.91022 6.21712L10.1508 6.42323C10.9441 6.55545 11.1308 7.13101 10.5591 7.69878L9.59467 8.66323C9.43133 8.82656 9.34189 9.14156 9.39244 9.36712L9.66856 10.561C9.88633 11.506 9.38467 11.8716 8.54856 11.3777L7.38578 10.6893C7.17578 10.5649 6.82967 10.5649 6.61578 10.6893L5.453 11.3777C4.62078 11.8716 4.11522 11.5021 4.333 10.561L4.60911 9.36712C4.65967 9.14156 4.57022 8.82656 4.40689 8.66323L3.44245 7.69878C2.87467 7.13101 3.05745 6.55545 3.85078 6.42323L5.09133 6.21712C5.29745 6.18212 5.54633 5.99934 5.63967 5.80878L6.32411 4.4399C6.69745 3.69712 7.30411 3.69712 7.67356 4.4399Z" fill="white" /></svg> 4.2</li>
                                                <li>25-30 mins </li>
                                            </ul>
                                            <p>West African</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="topratedyou-box">
                                    <div className="topratedyou-item" >
                                        <div className="img-box position-relative">
                                            <Image src={WelcomeofferImg1} alt="" />
                                            <div className="icons-img">
                                                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.3168 18.0826C11.0335 18.1826 10.5668 18.1826 10.2835 18.0826C7.8668 17.2576 2.4668 13.8159 2.4668 7.98255C2.4668 5.40755 4.5418 3.32422 7.10013 3.32422C8.6168 3.32422 9.95846 4.05755 10.8001 5.19089C11.6418 4.05755 12.9918 3.32422 14.5001 3.32422C17.0585 3.32422 19.1335 5.40755 19.1335 7.98255C19.1335 13.8159 13.7335 17.2576 11.3168 18.0826Z" stroke="#454545" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                            </div>
                                        </div>

                                        <div className="text-box">
                                            <h6>Buka Restaurant</h6>
                                            <ul>
                                                <li>
                                                    <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="7" cy="7.74219" r="7" fill="#DB8AE8" /><path d="M7.67356 4.4399L8.358 5.80878C8.45133 5.99934 8.70022 6.18212 8.91022 6.21712L10.1508 6.42323C10.9441 6.55545 11.1308 7.13101 10.5591 7.69878L9.59467 8.66323C9.43133 8.82656 9.34189 9.14156 9.39244 9.36712L9.66856 10.561C9.88633 11.506 9.38467 11.8716 8.54856 11.3777L7.38578 10.6893C7.17578 10.5649 6.82967 10.5649 6.61578 10.6893L5.453 11.3777C4.62078 11.8716 4.11522 11.5021 4.333 10.561L4.60911 9.36712C4.65967 9.14156 4.57022 8.82656 4.40689 8.66323L3.44245 7.69878C2.87467 7.13101 3.05745 6.55545 3.85078 6.42323L5.09133 6.21712C5.29745 6.18212 5.54633 5.99934 5.63967 5.80878L6.32411 4.4399C6.69745 3.69712 7.30411 3.69712 7.67356 4.4399Z" fill="white" /></svg> 4.2</li>
                                                <li>25-30 mins </li>
                                            </ul>
                                            <p>West African</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="topratedyou-box">
                                    <div className="topratedyou-item" >
                                        <div className="img-box position-relative">
                                            <Image src={WelcomeofferImg2} alt="" />
                                            <div className="icons-img">
                                                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.3168 18.0826C11.0335 18.1826 10.5668 18.1826 10.2835 18.0826C7.8668 17.2576 2.4668 13.8159 2.4668 7.98255C2.4668 5.40755 4.5418 3.32422 7.10013 3.32422C8.6168 3.32422 9.95846 4.05755 10.8001 5.19089C11.6418 4.05755 12.9918 3.32422 14.5001 3.32422C17.0585 3.32422 19.1335 5.40755 19.1335 7.98255C19.1335 13.8159 13.7335 17.2576 11.3168 18.0826Z" stroke="#454545" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                            </div>
                                        </div>

                                        <div className="text-box">
                                            <h6>La Chaumiere</h6>
                                            <ul>
                                                <li>
                                                    <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="7" cy="7.74219" r="7" fill="#DB8AE8" /><path d="M7.67356 4.4399L8.358 5.80878C8.45133 5.99934 8.70022 6.18212 8.91022 6.21712L10.1508 6.42323C10.9441 6.55545 11.1308 7.13101 10.5591 7.69878L9.59467 8.66323C9.43133 8.82656 9.34189 9.14156 9.39244 9.36712L9.66856 10.561C9.88633 11.506 9.38467 11.8716 8.54856 11.3777L7.38578 10.6893C7.17578 10.5649 6.82967 10.5649 6.61578 10.6893L5.453 11.3777C4.62078 11.8716 4.11522 11.5021 4.333 10.561L4.60911 9.36712C4.65967 9.14156 4.57022 8.82656 4.40689 8.66323L3.44245 7.69878C2.87467 7.13101 3.05745 6.55545 3.85078 6.42323L5.09133 6.21712C5.29745 6.18212 5.54633 5.99934 5.63967 5.80878L6.32411 4.4399C6.69745 3.69712 7.30411 3.69712 7.67356 4.4399Z" fill="white" /></svg> 4.2</li>
                                                <li>25-30 mins </li>
                                            </ul>
                                            <p>French cuisine</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="topratedyou-box">
                                    <div className="topratedyou-item" >
                                        <div className="img-box position-relative">
                                            <Image src={WelcomeofferImg3} alt="" />
                                            <div className="icons-img">
                                                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.3168 18.0826C11.0335 18.1826 10.5668 18.1826 10.2835 18.0826C7.8668 17.2576 2.4668 13.8159 2.4668 7.98255C2.4668 5.40755 4.5418 3.32422 7.10013 3.32422C8.6168 3.32422 9.95846 4.05755 10.8001 5.19089C11.6418 4.05755 12.9918 3.32422 14.5001 3.32422C17.0585 3.32422 19.1335 5.40755 19.1335 7.98255C19.1335 13.8159 13.7335 17.2576 11.3168 18.0826Z" stroke="#454545" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                            </div>
                                        </div>

                                        <div className="text-box">
                                            <h6>La Chaumiere</h6>
                                            <ul>
                                                <li>
                                                    <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="7" cy="7.74219" r="7" fill="#DB8AE8" /><path d="M7.67356 4.4399L8.358 5.80878C8.45133 5.99934 8.70022 6.18212 8.91022 6.21712L10.1508 6.42323C10.9441 6.55545 11.1308 7.13101 10.5591 7.69878L9.59467 8.66323C9.43133 8.82656 9.34189 9.14156 9.39244 9.36712L9.66856 10.561C9.88633 11.506 9.38467 11.8716 8.54856 11.3777L7.38578 10.6893C7.17578 10.5649 6.82967 10.5649 6.61578 10.6893L5.453 11.3777C4.62078 11.8716 4.11522 11.5021 4.333 10.561L4.60911 9.36712C4.65967 9.14156 4.57022 8.82656 4.40689 8.66323L3.44245 7.69878C2.87467 7.13101 3.05745 6.55545 3.85078 6.42323L5.09133 6.21712C5.29745 6.18212 5.54633 5.99934 5.63967 5.80878L6.32411 4.4399C6.69745 3.69712 7.30411 3.69712 7.67356 4.4399Z" fill="white" /></svg> 4.2</li>
                                                <li>25-30 mins </li>
                                            </ul>
                                            <p>Japanese </p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                        </Swiper>



                    </div>
                </div>
            </div>
        </div>
    )
}

export default WelcomeOffer
