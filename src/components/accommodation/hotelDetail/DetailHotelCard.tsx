import React from 'react'
import { SwiperSlide,Swiper } from 'swiper/react'
import Image from "next/image";
import Link from "next/link";
import { Navigation, Pagination } from "swiper/modules";
import { ImageHotel } from '@/store/features/accommodation/types/hotelTypes';

export const detailSwiperRows = (hotelImages: ImageHotel[], index: number) => {
  return (
    <SwiperSlide key={index}>
    <div className="position-relative multislider-com-box">
      <div className="top-slider position-relative">
        <Swiper
          key={index}
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
          className="inner-popular-slider-first"
        >
          {hotelImages.map((hotelImage, index) => ( 
              <SwiperSlide key={index}>
                <div className="multislider-box">
                  <div className="">
                    <div className="position-relative"
                      style={{ 
                          borderRadius: "16px", 
                        overflow: "hidden",}}
                        >
                      <div className="img-box">
                        <Image
                          src={ hotelImage.url}
                          alt={ hotelImage.url}
                          height={180}
                          width={293}
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
          ))}
        </Swiper>
      </div>
      <div className="text-box px-3 pt-3">
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
  </SwiperSlide>
  )
}
 