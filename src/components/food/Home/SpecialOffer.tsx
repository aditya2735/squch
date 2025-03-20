"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import Link from "next/link";

import ImgOffer1 from "../../../../public/images/food-banner.jpg";

const offers = [
  { id: 1, image: ImgOffer1, className: "card-offer1" },
  { id: 2, image: ImgOffer1, className: "card-offer2" },
  { id: 3, image: ImgOffer1, className: "card-offer1" },
  { id: 4, image: ImgOffer1, className: "card-offer1" },
  { id: 5, image: ImgOffer1, className: "card-offer2" },
  { id: 6, image: ImgOffer1, className: "card-offer1" },
  { id: 7, image: ImgOffer1, className: "card-offer2" },
];

const SpecialOffers = () => {
  return (
    <div className="sec-gap sec-special-offer">
      <div className="block-header d-flex align-items-center">
        <h2 className="heading02 m-0">Special Offers</h2>
        <div className="ms-auto">
          <Link href="#" className="link">
            See All
            <Image src="/images/arrow.svg" height={14} width={14} alt="arrow icon" />
          </Link>
        </div>
      </div>
      <Swiper
        slidesPerView={3.3}
        spaceBetween={24}
        navigation={{
          prevEl: ".outer-prev-button",
          nextEl: ".outer-next-button"
        }}
        pagination={{
          dynamicBullets: true,
          clickable: true
        }}
        breakpoints={{
          300: { slidesPerView: 1, spaceBetween: 0 },
          767: { slidesPerView: 1.5, spaceBetween: 24 },
          1024: { slidesPerView: 2, spaceBetween: 24 },
        }}
        modules={[Pagination, Navigation]}
        className="outer-popular-slider"
      >
        {offers.map((offer) => (
          <SwiperSlide key={offer.id}>
            <Link href={"/home/food/offer"} className={`card-offer ${offer.className}`}>
              <div className="d-flex">
                <div className="Imgbox">
                  <Image src={offer.image} alt="Special Offer" className="object-cover" />
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SpecialOffers;
