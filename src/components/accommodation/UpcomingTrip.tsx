"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Grid, Navigation } from "swiper/modules";

//my img upload

import LogoIcons from "../../../public/images/afrikonekta.png";
import LogoIcons2 from "../../../public/images/eurLines.png";
import Link from "next/link";

const UpcomingTrip = () => {
  return (
    
    <div className="p-[10px 20px]">
    <div className="max-w-[1100px] px-4 mx-auto">
      <div className="py-[60px]">
        <div className="flex items-center lg:mb-8 mb-4">
          <h2 className="text-[21px] md:text-[24px] lg:text-[32px] font-semibold text-[#262626]">
            Upcoming Trips
          </h2>
        </div>
        <div className="relative">
          <Swiper
            slidesPerView={2.8}
            spaceBetween={24}
            pagination={{
              clickable: true,
            }}
            navigation={{
              prevEl: ".prev-button",
              nextEl: ".next-button",
            }}
            breakpoints={{
              300: {
                slidesPerView: 1.2,
              },
              550: {
                slidesPerView: 1.7,
              },
              767: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 2.8,
              },
            }}
            modules={[Grid, Navigation]}
            className="slider-popular-events"
          >
            <SwiperSlide>
              <div className=" relative ">
                <Link
                  href=""
                  className="shadow-[1px_6px_12px_0px_rgba(82,48,127,0.06)] block border border-[#F8EBFC] lg:p-6 md:p-5 p-3 rounded-lg"
                >
                  <div className="flex items-center">
                    <span className=" md:text-[20px] text-[17px] font-bold leading-[28px] tracking-[0.04em] text-[#410E44] pr-1.5 block">
                      Kumasi
                    </span>
                    <span>
                      <svg
                        width="25"
                        height="18"
                        viewBox="0 0 34 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M25.4194 2.47314L31.9463 9.00003L25.4194 15.5269"
                          stroke="#410E44"
                          strokeWidth="3"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M2.16113 9L31.8386 9"
                          stroke="#410E44"
                          strokeWidth="3"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className=" md:text-[20px] text-[17px]  font-bold leading-[28px] tracking-[0.04em] text-[#410E44] ps-1.5 block">
                      Tamale
                    </span>
                  </div>
                  <p className="md:text-[16px] text-[14px]  font-medium leading-[22.4px] tracking-[0.04em] text-[#6D6D6D] my-[5px] mb-[13px]">
                    23 December, 2024
                  </p>
                  <div className="">
                    <Image src={LogoIcons} alt="" />
                  </div>
                </Link>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className=" relative ">
                <Link
                  href=""
                  className="shadow-[1px_6px_12px_0px_rgba(82,48,127,0.06)] block border border-[#F8EBFC] lg:p-6 md:p-5 p-3 rounded-lg"
                >
                  <div className="flex items-center">
                    <span className=" md:text-[20px] text-[17px] font-bold leading-[28px] tracking-[0.04em] text-[#410E44] pr-1.5 block">
                      Albany, NY
                    </span>
                    <span>
                      <svg
                        width="25"
                        height="18"
                        viewBox="0 0 34 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M25.4194 2.47314L31.9463 9.00003L25.4194 15.5269"
                          stroke="#410E44"
                          strokeWidth="3"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M2.16113 9L31.8386 9"
                          stroke="#410E44"
                          strokeWidth="3"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className=" md:text-[20px] text-[17px]  font-bold leading-[28px] tracking-[0.04em] text-[#410E44] ps-1.5 block">
                      Boston, NY
                    </span>
                  </div>
                  <p className="md:text-[16px] text-[14px]  font-medium leading-[22.4px] tracking-[0.04em] text-[#6D6D6D] my-[5px] mb-[13px]">
                    23 December, 2024
                  </p>
                  <div className="">
                    <Image src={LogoIcons2} alt="" />
                  </div>
                </Link>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className=" relative ">
                <Link
                  href=""
                  className="shadow-[1px_6px_12px_0px_rgba(82,48,127,0.06)] block border border-[#F8EBFC] lg:p-6 md:p-5 p-3 rounded-lg"
                >
                  <div className="flex items-center">
                    <span className=" md:text-[20px] text-[17px] font-bold leading-[28px] tracking-[0.04em] text-[#410E44] pr-1.5 block">
                      Albany, NY
                    </span>
                    <span>
                      <svg
                        width="25"
                        height="18"
                        viewBox="0 0 34 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M25.4194 2.47314L31.9463 9.00003L25.4194 15.5269"
                          stroke="#410E44"
                          strokeWidth="3"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M2.16113 9L31.8386 9"
                          stroke="#410E44"
                          strokeWidth="3"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className=" md:text-[20px] text-[17px]  font-bold leading-[28px] tracking-[0.04em] text-[#410E44] ps-1.5 block">
                      Boston, NY
                    </span>
                  </div>
                  <p className="md:text-[16px] text-[14px]  font-medium leading-[22.4px] tracking-[0.04em] text-[#6D6D6D] my-[5px] mb-[13px]">
                    23 December, 2024
                  </p>
                  <div className="">
                    <Image src={LogoIcons2} alt="" />
                  </div>
                </Link>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className=" relative ">
                <Link
                  href=""
                  className="shadow-[1px_6px_12px_0px_rgba(82,48,127,0.06)] block border border-[#F8EBFC] lg:p-6 md:p-5 p-3 rounded-lg"
                >
                  <div className="flex items-center">
                    <span className=" md:text-[20px] text-[17px] font-bold leading-[28px] tracking-[0.04em] text-[#410E44] pr-1.5 block">
                      Kumasi
                    </span>
                    <span>
                      <svg
                        width="25"
                        height="18"
                        viewBox="0 0 34 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M25.4194 2.47314L31.9463 9.00003L25.4194 15.5269"
                          stroke="#410E44"
                          strokeWidth="3"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M2.16113 9L31.8386 9"
                          stroke="#410E44"
                          strokeWidth="3"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className=" md:text-[20px] text-[17px]  font-bold leading-[28px] tracking-[0.04em] text-[#410E44] ps-1.5 block">
                      Tamale
                    </span>
                  </div>
                  <p className="md:text-[16px] text-[14px]  font-medium leading-[22.4px] tracking-[0.04em] text-[#6D6D6D] my-[5px] mb-[13px]">
                    23 December, 2024
                  </p>
                  <div className="">
                    <Image src={LogoIcons} alt="" />
                  </div>
                </Link>
              </div>
            </SwiperSlide>
          </Swiper>
          {/* <button
          className="prev-button rounded-full w-[38px] h-[38px] shadow
      absolute top-1/2 left-0 -translate-y-1/2 bg-white flex justify-center items-center z-10"
          aria-label="Previous"
        >
          <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.74023 16.6582L2.22793 10.1459C1.45884 9.37682 1.45884 8.11831 2.22793 7.34922L8.74023 0.836914" stroke="#292D32" strokeWidth="1.45163" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
          </svg>

        </button>
        <button
          className="next-button rounded-full w-[38px] h-[38px] shadow absolute top-1/2 right-0 -translate-y-1/2 flex justify-center items-center z-10"
          aria-label="Next"
        >
          <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.51709 16.6582L8.02939 10.1459C8.79848 9.37682 8.79848 8.11831 8.02939 7.34922L1.51709 0.836914" stroke="#292D32" strokeWidth="1.45163" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
          </svg>

        </button> */}
        </div>
      </div>
    </div>
  </div>

  )
}

export default UpcomingTrip