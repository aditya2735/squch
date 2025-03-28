"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "../../components/busTicketBooking/style.module.css";

import { useState } from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";

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

import SliderAc from "../../../../public/images/accommodation-banner1.jpg";
import popularH1 from "../../../../public/images/PopularH01.png";
import popularH2 from "../../../../public/images/PopularH02.png";
import popularH3 from "../../../../public/images/PopularH03.png";
import ThumbImg1 from "../../../../public/images/thumb-img-1.png";
import ThumbImg2 from "../../../../public/images/thumb-img-2.png";
import ThumbImg3 from "../../../../public/images/thumb-img-3.png";
import IconWallet from "../../../../public/images/icon-wallet.svg";
import { useRef } from "react";
import { useAppSelector } from "@/store/hooks";
import { useTranslations } from "next-intl";
const BannerTop = () => {
 const t = useTranslations("Accommodation");
  const{data:bannerData}=useAppSelector((state)=>state.bannerData)
// const bannerData= [
//   {
//     "id": 46,
//     "url": "https://img.freepik.com/free-photo/hikers-rock_181624-358.jpg?t=st=1740402661~exp=1740406261~hmac=70e6d3bf940b7e37c4d57a4dfd2749f531d75d2e58c1c217c51b7ddb7f245a73&w=740",
//     "hotelId": null,
//     "hotelViewId": null,
//     "type": "banner",
//     "isPrimary": false,
//     "createdAt": "2025-02-07T18:39:00.000Z",
//     "updatedAt": "2025-02-24T19:09:58.000Z"
//   },
//   {
//   "id": 47,
//   "url":"https://img.freepik.com/free-photo/luxury-classic-modern-bedroom-suite-hotel_105762-1787.jpg?t=st=1739532460~exp=1739536060~hmac=d8034dac9ff10b929854f4d537ca745c3fbdfde49541699ff2980480681847e4&w=1060",
//   "hotelId": null,
//   "hotelViewId": null,
//   "type": "banner",
//   "isPrimary": false,
//   "createdAt": "2025-02-07T18:39:00.000Z",
//   "updatedAt": "2025-02-24T19:09:58.000Z"
// },


// {
//   "id": 48,
//   "url": "https://img.freepik.com/free-photo/hikers-rock_181624-358.jpg?t=st=1740402661~exp=1740406261~hmac=70e6d3bf940b7e37c4d57a4dfd2749f531d75d2e58c1c217c51b7ddb7f245a73&w=740",
//   "hotelId": null,
//   "hotelViewId": null,
//   "type": "banner",
//   "isPrimary": false,
//   "createdAt": "2025-02-07T18:39:00.000Z",
//   "updatedAt": "2025-02-24T19:09:58.000Z"
// }
// ]
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);
  const images = [SliderAc, popularH1, popularH2, popularH3];

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };


  return (
    
    <div className="banner-sec ">
    <div className="px-40">
        <div className="row align-items-center ">
          <div className="col-lg-6 col-md-12">
            <div className="text-banner d-flex flex-wrap flex-column justify-between">
              <h1>200% Off This Weekend</h1>
              <h2>Perfect Winter Getaways</h2>
              <div className="btn-banner">
                <button className="btn btn-primary"> {t("reserveSpot")}</button>
              </div>
              <div className="d-flex align-items-center gap-2 shadow-none-btn">
                <button className="prev-button" aria-label="Previous">
                  <svg
                    width="33"
                    height="32"
                    viewBox="0 0 33 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="-0.5"
                      y="0.5"
                      width="31"
                      height="31"
                      rx="15.5"
                      transform="matrix(-1 0 0 1 31.3945 0)"
                      stroke="#652669"
                    />
                    <path
                      d="M14.7754 11.9531L10.7287 15.9998L14.7754 20.0465"
                      stroke="#652669"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M22.0605 16H10.8405"
                      stroke="#652669"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <button className="next-button " aria-label="Next">
                  <svg
                    width="33"
                    height="32"
                    viewBox="0 0 33 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.894531"
                      y="0.5"
                      width="31"
                      height="31"
                      rx="15.5"
                      stroke="#652669"
                    />
                    <path
                      d="M18.0137 11.9531L22.0603 15.9998L18.0137 20.0465"
                      stroke="#652669"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10.7285 16H21.9485"
                      stroke="#652669"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>

              <div className="slider-right">
                <Swiper
                  onSwiper={setThumbsSwiper}
                  loop={true}
                  spaceBetween={20}
                  slidesPerView={4}
                  freeMode={true}
                  watchSlidesProgress={true}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="mySwiper"
                >
                  {bannerData.length>0 && bannerData?.map((thumb, index:number) => (
               
                    // <SwiperSlide
                    //   key={thumb.id}
                    //   onClick={() => thumbsSwiper?.slideTo(thumb.id)}
                    // >
                    //   <Image src={thumb?.url} alt="" className="overflow-hidden"
                    //   height={48}
                    //   width={48}
                    //   />
                    // </SwiperSlide>

                          <SwiperSlide key={index}>
                     <Image src={ThumbImg1} alt="" className=" overflow-hidden" />
                 </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-12">
            <div className="slider-box overflow-hidden">
              <Swiper
                loop={true}
                spaceBetween={0}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                navigation={{
                  prevEl: ".prev-button",
                  nextEl: ".next-button",
                }}
                className="mySwiper2"
              >
                {bannerData.length>0 && bannerData?.map((item, index:number) => (
            
                  // <SwiperSlide key={item.id}>
                  //   <Image
                  //     src={item.url}
                  //     alt=""
                  //     className="w-100"
                  //     height={498}
                  //     width={470}
                  //   />
                  // </SwiperSlide>
                         <SwiperSlide  key={index}>
                   <Image src={SliderAc} alt="" className=" w-100" />
               </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>

    </div>
   
  );
};

export default BannerTop;


// 'use client'
// import Image from "next/image";
// import Link from 'next/link';

// import { useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";

// import 'swiper/css';
// import 'swiper/css/grid';
// import 'swiper/css/pagination';
// import "swiper/css/navigation";
// import { Grid, Navigation, Pagination, Mousewheel, Keyboard, Thumbs, FreeMode } from 'swiper/modules';

// import SliderAc from "../../../../public/images/accommodation-banner1.jpg";
// import ThumbImg1 from "../../../../public/images/thumb-img-1.png";
// import IconWallet from "../../../../public/images/icon-wallet.svg";


// const BannerTop = () => {
//     const [thumbsSwiper, setThumbsSwiper] = useState(null);

//     const [isOpen, setIsOpen] = useState(false);

//     const toggleDropdown = () => {
//         setIsOpen(!isOpen);
//     };

//     return (
//         <div className="banner-sec ">
//             <div className="px-40">
//                 <div className="row align-items-center ">
//                     <div className="col-lg-6 col-md-12">
//                         <div className="text-banner d-flex flex-wrap flex-column justify-between">
//                             <h1>20% Off This Weekend</h1>
//                             <h2>Perfect Winter Getaways</h2>
//                             <div className="btn-banner">
//                                 <button className="btn btn-primary">
//                                     reserve your spot
//                                 </button>
//                             </div>
//                             <div className="d-flex align-items-center gap-2 shadow-none-btn">
//                                 <button className="prev-button" aria-label="Previous">
//                                     <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                         <rect x="-0.5" y="0.5" width="31" height="31" rx="15.5" transform="matrix(-1 0 0 1 31.3945 0)" stroke="#652669" />
//                                         <path d="M14.7754 11.9531L10.7287 15.9998L14.7754 20.0465" stroke="#652669" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
//                                         <path d="M22.0605 16H10.8405" stroke="#652669" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
//                                     </svg>
//                                 </button>
//                                 <button className="next-button " aria-label="Next">
//                                     <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                         <rect x="0.894531" y="0.5" width="31" height="31" rx="15.5" stroke="#652669" />
//                                         <path d="M18.0137 11.9531L22.0603 15.9998L18.0137 20.0465" stroke="#652669" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
//                                         <path d="M10.7285 16H21.9485" stroke="#652669" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
//                                     </svg>
//                                 </button>
//                             </div>
//                             <div className="slider-right">
//                                 <Swiper
//                                     onSwiper={setThumbsSwiper}
//                                     loop={true}
//                                     spaceBetween={20}
//                                     slidesPerView={4}
//                                     freeMode={true}
//                                     watchSlidesProgress={true}
//                                     modules={[FreeMode, Navigation, Thumbs]}
//                                     className="mySwiper">

//                                     <SwiperSlide>
//                                         <Image src={ThumbImg1} alt="" className=" overflow-hidden" />
//                                     </SwiperSlide>
//                                     <SwiperSlide>
//                                         <Image src={ThumbImg1} alt="" className=" overflow-hidden" />
//                                     </SwiperSlide>
//                                     <SwiperSlide>
//                                         <Image src={ThumbImg1} alt="" className=" overflow-hidden" />
//                                     </SwiperSlide>

//                                 </Swiper>

//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-lg-6 col-md-12">
//                         <div className="slider-box overflow-hidden">
//                             <Swiper
//                                 loop={true}
//                                 spaceBetween={0}
//                                 thumbs={{ swiper: thumbsSwiper }}
//                                 modules={[FreeMode, Navigation, Thumbs]}
//                                 navigation={{
//                                     prevEl: ".prev-button",
//                                     nextEl: ".next-button",
//                                 }}
//                                 className="mySwiper2"
//                             >
//                                 <SwiperSlide>
//                                     <Image src={SliderAc} alt="" className=" w-100" />
//                                 </SwiperSlide>
//                                 <SwiperSlide>
//                                     <Image src={SliderAc} alt="" className=" w-100" />
//                                 </SwiperSlide>
//                                 <SwiperSlide>
//                                     <Image src={SliderAc} alt="" className=" w-100" />
//                                 </SwiperSlide>
//                                 <SwiperSlide>
//                                     <Image src={SliderAc} alt="" className=" w-100" />
//                                 </SwiperSlide>
//                                 <SwiperSlide>
//                                     <Image src={SliderAc} alt="" className=" w-100" />
//                                 </SwiperSlide>
//                                 <SwiperSlide>
//                                     <Image src={SliderAc} alt="" className=" w-100" />
//                                 </SwiperSlide>
//                             </Swiper>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default BannerTop
