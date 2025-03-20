"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";

import LogoIcons from "../../../public/images/afrikonekta.png";
import LogoIcons2 from "../../../public/images/eurLines.png";
import Link from "next/link";

const UpcomingTrips = () => {
  return (
    <div className="px-40">
      <div className="block-header"><div className="d-flex align-item-center"><h2 className="heading02 m-0">Top rated near you</h2>
      </div>
      </div>
      <Swiper
        slidesPerView={2.5}
        spaceBetween={16}
        navigation={{
          prevEl: ".upcoming-prev-button",
          nextEl: ".upcoming-next-button",
        }}
        pagination={{
          clickable: true,
          // dynamicBullets: true,
        }}
        breakpoints={{
          300: { slidesPerView: 1.2, },
          767: { slidesPerView: 2.5 },
          1024: { slidesPerView: 2.5 },
        }}
        // modules={[Pagination, Navigation]}
        className="upcoming-tips-slider"
      >
        <SwiperSlide>
          <Link href="" className="card-trips">
            <h3 className="trip-link-purple d-flex align-items-center">
              <span>Kumasi</span>
              <span><svg width="40" height="26" viewBox="0 0 40 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M28.4194 6.47314L34.9463 13L28.4194 19.5269" stroke="#410E44" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M5.16113 13L34.8386 13" stroke="#410E44" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              </svg></span>
              <span>Tamale</span>
            </h3>
            <p>23 December, 2024</p>
            <div className="cardlogiImg">
              <Image src={LogoIcons} alt="" />
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="" className="card-trips">
            <h3 className="trip-link-purple d-flex align-items-center">
              <span>Albany, NY</span>
              <span><svg width="40" height="26" viewBox="0 0 40 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M28.4194 6.47314L34.9463 13L28.4194 19.5269" stroke="#410E44" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M5.16113 13L34.8386 13" stroke="#410E44" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              </svg></span>
              <span>Boston, NY</span>
            </h3>
            <p>23 December, 2024</p>
            <div className="cardlogiImg">
              <Image src={LogoIcons2} alt="" />
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="" className="card-trips">
            <h3 className="trip-link-purple d-flex align-items-center">
              <span>Albany, NY</span>
              <span><svg width="40" height="26" viewBox="0 0 40 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M28.4194 6.47314L34.9463 13L28.4194 19.5269" stroke="#410E44" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M5.16113 13L34.8386 13" stroke="#410E44" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              </svg></span>
              <span>Boston, NY</span>
            </h3>
            <p>23 December, 2024</p>
            <div className="cardlogiImg">
              <Image src={LogoIcons2} alt="" />
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="" className="card-trips">
            <h3 className="trip-link-purple d-flex align-items-center">
              <span>Kumasi</span>
              <span><svg width="40" height="26" viewBox="0 0 40 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M28.4194 6.47314L34.9463 13L28.4194 19.5269" stroke="#410E44" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M5.16113 13L34.8386 13" stroke="#410E44" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              </svg></span>
              <span>Tamale</span>
            </h3>
            <p>23 December, 2024</p>
            <div className="cardlogiImg">
              <Image src={LogoIcons} alt="" />
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="" className="card-trips">
            <h3 className="trip-link-purple d-flex align-items-center">
              <span>Albany, NY</span>
              <span><svg width="40" height="26" viewBox="0 0 40 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M28.4194 6.47314L34.9463 13L28.4194 19.5269" stroke="#410E44" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M5.16113 13L34.8386 13" stroke="#410E44" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              </svg></span>
              <span>Boston, NY</span>
            </h3>
            <p>23 December, 2024</p>
            <div className="cardlogiImg">
              <Image src={LogoIcons2} alt="" />
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="" className="card-trips">
            <h3 className="trip-link-purple d-flex align-items-center">
              <span>Albany, NY</span>
              <span><svg width="40" height="26" viewBox="0 0 40 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M28.4194 6.47314L34.9463 13L28.4194 19.5269" stroke="#410E44" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M5.16113 13L34.8386 13" stroke="#410E44" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              </svg></span>
              <span>Boston, NY</span>
            </h3>
            <p>23 December, 2024</p>
            <div className="cardlogiImg">
              <Image src={LogoIcons2} alt="" />
            </div>
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default UpcomingTrips
