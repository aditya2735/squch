"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import Link from "next/link";

/****slider img******** */

import popularH1 from "../../../../public/images/PopularH01.png";
import popularH2 from "../../../../public/images/PopularH02.png";
import popularH3 from "../../../../public/images/PopularH03.png";
import popularH4 from "../../../../public/images/PopularH04.png";
import { SwiperRows } from "../HotelCards";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useEffect } from "react";
import { getHotelData } from "@/store/features/accommodation/slices/homeHotelSlice";
import { Hotel } from "@/store/features/accommodation/types/hotelTypes";
  
const DealsList = ({hotelData,page}:{ hotelData: Hotel[], page?:string}) => {
  const dispatch= useAppDispatch()
   const { status } = useAppSelector((state) => state.hotelDetail);
  // useEffect(() => {
  //    if (hotelData.length===0 && status === "idle") { 
  //      dispatch(getHotelData());
  //    }
  //  }, [hotelData, status, dispatch]);

  return (
    <div className={`multislider-sec ${page==="search"? "pt-md-5":"pt-md-2"} pb-md-5 pt-3 pb-3`}>
      <div className="px-40">
        {/* <div className="found-title d-block d-md-none mb-3 text-center">
          <h2>6 Results Found</h2>
        </div> */}
        <div className="inner-multislider row ">
          {hotelData?.length > 0 &&
            hotelData?.map((hotel: any, index:number) => {
              return ( 
                  <div className="col-lg-4 col-md-6 mb-4 " key={index}>
                    
                      <SwiperRows
                        key={hotel.id}
                        hotelData={hotel}
                        CardName={"Search"}
                      />
                                         
                  </div> 
              );
            })}
            
          {/* <div className="col-lg-4 col-md-6 mb-4">
            <div className="position-relative multislider-com-box">
              <div className="top-slider position-relative">
                <Swiper
                  slidesPerView={1}
                  spaceBetween={16}
                  navigation={{
                    prevEl: ".inner-prev-button",
                    nextEl: ".inner-next-button",
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  breakpoints={{
                    300: { slidesPerView: 1 },
                  }}
                  modules={[Pagination, Navigation]}
                  className="inner-popular-slider-sixth"
                >
                  <SwiperSlide>
                    <div className="multislider-box">
                      <div className="">
                        <div className="position-relative">
                          <div className="img-box">
                            <Image
                              src={popularH1}
                              alt=""
                              className="w-100 object-cover d-d-block"
                            />
                          </div>
                          <div className="position-absolute z-2  card-heart-box">
                            <ul className="d-flex align-items-center gap-1 ">
                              <li>
                                <svg
                                  width="19"
                                  height="18"
                                  viewBox="0 0 19 18"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <circle
                                    cx="9.39453"
                                    cy="9"
                                    r="9"
                                    fill="#DB8AE8"
                                  />
                                  <path
                                    d="M10.259 4.75482L11.139 6.51482C11.259 6.75982 11.579 6.99482 11.849 7.03982L13.444 7.30482C14.464 7.47482 14.704 8.21482 13.969 8.94482L12.729 10.1848C12.519 10.3948 12.404 10.7998 12.469 11.0898L12.824 12.6248C13.104 13.8398 12.459 14.3098 11.384 13.6748L9.889 12.7898C9.619 12.6298 9.174 12.6298 8.899 12.7898L7.404 13.6748C6.334 14.3098 5.684 13.8348 5.964 12.6248L6.319 11.0898C6.384 10.7998 6.269 10.3948 6.059 10.1848L4.819 8.94482C4.089 8.21482 4.324 7.47482 5.344 7.30482L6.939 7.03982C7.204 6.99482 7.524 6.75982 7.644 6.51482L8.524 4.75482C9.004 3.79982 9.784 3.79982 10.259 4.75482Z"
                                    fill="white"
                                  />
                                </svg>
                              </li>
                              <li className="text-slider">4.2 (24)</li>
                            </ul>
                          </div>
                          <div className="position-absolute z-2 right-card-box">
                            <Link href="" className="">
                              <svg
                                width="21"
                                height="20"
                                viewBox="0 0 21 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M10.9105 17.3418C10.6272 17.4418 10.1605 17.4418 9.87721 17.3418C7.46055 16.5168 2.06055 13.0752 2.06055 7.24183C2.06055 4.66683 4.13555 2.5835 6.69388 2.5835C8.21055 2.5835 9.55221 3.31683 10.3939 4.45016C11.2355 3.31683 12.5855 2.5835 14.0939 2.5835C16.6522 2.5835 18.7272 4.66683 18.7272 7.24183C18.7272 13.0752 13.3272 16.5168 10.9105 17.3418Z"
                                  stroke="#454545"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="multislider-box">
                      <div className="">
                        <div className="position-relative">
                          <div className="img-box">
                            <Image
                              src={popularH2}
                              alt=""
                              className="w-100 object-cover d-d-block"
                            />
                          </div>
                          <div className="position-absolute z-2 card-heart-box">
                            <ul className="d-flex align-items-center gap-1 ">
                              <li>
                                <svg
                                  width="19"
                                  height="18"
                                  viewBox="0 0 19 18"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <circle
                                    cx="9.39453"
                                    cy="9"
                                    r="9"
                                    fill="#DB8AE8"
                                  />
                                  <path
                                    d="M10.259 4.75482L11.139 6.51482C11.259 6.75982 11.579 6.99482 11.849 7.03982L13.444 7.30482C14.464 7.47482 14.704 8.21482 13.969 8.94482L12.729 10.1848C12.519 10.3948 12.404 10.7998 12.469 11.0898L12.824 12.6248C13.104 13.8398 12.459 14.3098 11.384 13.6748L9.889 12.7898C9.619 12.6298 9.174 12.6298 8.899 12.7898L7.404 13.6748C6.334 14.3098 5.684 13.8348 5.964 12.6248L6.319 11.0898C6.384 10.7998 6.269 10.3948 6.059 10.1848L4.819 8.94482C4.089 8.21482 4.324 7.47482 5.344 7.30482L6.939 7.03982C7.204 6.99482 7.524 6.75982 7.644 6.51482L8.524 4.75482C9.004 3.79982 9.784 3.79982 10.259 4.75482Z"
                                    fill="white"
                                  />
                                </svg>
                              </li>
                              <li className="text-slider">4.2 (24)</li>
                            </ul>
                          </div>
                          <div className="position-absolute z-2 right-card-box">
                            <Link href="" className="">
                              <svg
                                width="21"
                                height="20"
                                viewBox="0 0 21 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M10.9105 17.3418C10.6272 17.4418 10.1605 17.4418 9.87721 17.3418C7.46055 16.5168 2.06055 13.0752 2.06055 7.24183C2.06055 4.66683 4.13555 2.5835 6.69388 2.5835C8.21055 2.5835 9.55221 3.31683 10.3939 4.45016C11.2355 3.31683 12.5855 2.5835 14.0939 2.5835C16.6522 2.5835 18.7272 4.66683 18.7272 7.24183C18.7272 13.0752 13.3272 16.5168 10.9105 17.3418Z"
                                  stroke="#454545"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="multislider-box">
                      <div className="">
                        <div className="position-relative">
                          <div className="img-box">
                            <Image
                              src={popularH3}
                              alt=""
                              className="w-100 object-cover d-d-block"
                            />
                          </div>
                          <div className="position-absolute z-2 card-heart-box">
                            <ul className="d-flex align-items-center gap-1 ">
                              <li>
                                <svg
                                  width="19"
                                  height="18"
                                  viewBox="0 0 19 18"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <circle
                                    cx="9.39453"
                                    cy="9"
                                    r="9"
                                    fill="#DB8AE8"
                                  />
                                  <path
                                    d="M10.259 4.75482L11.139 6.51482C11.259 6.75982 11.579 6.99482 11.849 7.03982L13.444 7.30482C14.464 7.47482 14.704 8.21482 13.969 8.94482L12.729 10.1848C12.519 10.3948 12.404 10.7998 12.469 11.0898L12.824 12.6248C13.104 13.8398 12.459 14.3098 11.384 13.6748L9.889 12.7898C9.619 12.6298 9.174 12.6298 8.899 12.7898L7.404 13.6748C6.334 14.3098 5.684 13.8348 5.964 12.6248L6.319 11.0898C6.384 10.7998 6.269 10.3948 6.059 10.1848L4.819 8.94482C4.089 8.21482 4.324 7.47482 5.344 7.30482L6.939 7.03982C7.204 6.99482 7.524 6.75982 7.644 6.51482L8.524 4.75482C9.004 3.79982 9.784 3.79982 10.259 4.75482Z"
                                    fill="white"
                                  />
                                </svg>
                              </li>
                              <li className="text-slider">4.2 (24)</li>
                            </ul>
                          </div>
                          <div className="position-absolute z-2 right-card-box">
                            <Link href="" className="">
                              <svg
                                width="21"
                                height="20"
                                viewBox="0 0 21 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M10.9105 17.3418C10.6272 17.4418 10.1605 17.4418 9.87721 17.3418C7.46055 16.5168 2.06055 13.0752 2.06055 7.24183C2.06055 4.66683 4.13555 2.5835 6.69388 2.5835C8.21055 2.5835 9.55221 3.31683 10.3939 4.45016C11.2355 3.31683 12.5855 2.5835 14.0939 2.5835C16.6522 2.5835 18.7272 4.66683 18.7272 7.24183C18.7272 13.0752 13.3272 16.5168 10.9105 17.3418Z"
                                  stroke="#454545"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="multislider-box">
                      <div className="">
                        <div className="position-relative">
                          <div className="img-box">
                            <Image
                              src={popularH4}
                              alt=""
                              className="w-100 object-cover d-d-block"
                            />
                          </div>
                          <div className="position-absolute z-2  card-heart-box">
                            <ul className="d-flex align-items-center gap-1 ">
                              <li>
                                <svg
                                  width="19"
                                  height="18"
                                  viewBox="0 0 19 18"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <circle
                                    cx="9.39453"
                                    cy="9"
                                    r="9"
                                    fill="#DB8AE8"
                                  />
                                  <path
                                    d="M10.259 4.75482L11.139 6.51482C11.259 6.75982 11.579 6.99482 11.849 7.03982L13.444 7.30482C14.464 7.47482 14.704 8.21482 13.969 8.94482L12.729 10.1848C12.519 10.3948 12.404 10.7998 12.469 11.0898L12.824 12.6248C13.104 13.8398 12.459 14.3098 11.384 13.6748L9.889 12.7898C9.619 12.6298 9.174 12.6298 8.899 12.7898L7.404 13.6748C6.334 14.3098 5.684 13.8348 5.964 12.6248L6.319 11.0898C6.384 10.7998 6.269 10.3948 6.059 10.1848L4.819 8.94482C4.089 8.21482 4.324 7.47482 5.344 7.30482L6.939 7.03982C7.204 6.99482 7.524 6.75982 7.644 6.51482L8.524 4.75482C9.004 3.79982 9.784 3.79982 10.259 4.75482Z"
                                    fill="white"
                                  />
                                </svg>
                              </li>
                              <li className="text-slider">4.2 (24)</li>
                            </ul>
                          </div>
                          <div className="position-absolute z-2 right-card-box">
                            <Link href="" className="">
                              <svg
                                width="21"
                                height="20"
                                viewBox="0 0 21 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M10.9105 17.3418C10.6272 17.4418 10.1605 17.4418 9.87721 17.3418C7.46055 16.5168 2.06055 13.0752 2.06055 7.24183C2.06055 4.66683 4.13555 2.5835 6.69388 2.5835C8.21055 2.5835 9.55221 3.31683 10.3939 4.45016C11.2355 3.31683 12.5855 2.5835 14.0939 2.5835C16.6522 2.5835 18.7272 4.66683 18.7272 7.24183C18.7272 13.0752 13.3272 16.5168 10.9105 17.3418Z"
                                  stroke="#454545"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className="text-box px-3 py-4">
                <h3 className="">Accra Marriott Hotel, Ghana</h3>
                <p className="mb-3">
                  640 m drive to Accra Airport (ACC-Kotoka Intl.)
                </p>
                <div className="d-flex align-items-center mb-1">
                  <h6 className="d-flex align-items-center align-items-center">
                    ₵12.00
                    <span className="d-block  ">₵30.00</span>
                  </h6>
                  <span className="text-sm d-block">71% off</span>
                </div>
                <p className="">+ ₵12 taxes & fees</p>
              </div>
            </div>
          </div> */}

{ page ==="search" &&
          <div className="col-md-12 text-center mt-4">
            <Link
            href="/home/accommodation/searchMap" 
              className="btn btn-black d-flex justify-content-center align-items-center gap-2"
             >
              Map View
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.79102 7.77998V17.51C2.79102 19.41 4.14102 20.19 5.78102 19.25L8.13102 17.91C8.64102 17.62 9.49102 17.59 10.021 17.86L15.271 20.49C15.801 20.75 16.651 20.73 17.161 20.44L21.491 17.96C22.041 17.64 22.501 16.86 22.501 16.22V6.48998C22.501 4.58998 21.151 3.80998 19.511 4.74998L17.161 6.08998C16.651 6.37998 15.801 6.40998 15.271 6.13998L10.021 3.51998C9.49102 3.25998 8.64102 3.27998 8.13102 3.56998L3.80102 6.04998C3.24102 6.36998 2.79102 7.14998 2.79102 7.77998Z"
                  fill="white"
                  stroke="#262626"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.06055 3.99805V16.998"
                  stroke="#262626"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.2305 6.61914V19.9991"
                  stroke="#262626"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
}
        </div>
      </div>
    </div>
  );
};

export default DealsList;
