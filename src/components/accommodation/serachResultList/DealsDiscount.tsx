"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import Link from "next/link";
//form last details page

import Discount01 from "../../../../public/images/discounts-01.png";
import OfferBlue from "../../../../public/images/offer-blue.png";
import Discount02 from "../../../../public/images/discounts-02.png";
import OfferOrange from "../../../../public/images/offer-orange.png";
import DiscountBg from "../../../../public/images/bg-discount-01.png";

const DealsDiscount = () => {
  return (
    <div className="offer-deals-sec mt-0 mb-3 d-md-block d-none">
      <div className="">
        <div className="inner-offer-deals-sec">
          
          {/* <Swiper
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
              300: {
                slidesPerView: 1.1,
                spaceBetween: 10,
              },
              550: { slidesPerView: 1.5 },
              767: {
                slidesPerView: 1.7,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 2.2,
                spaceBetween: 20,
              },
            }}
            modules={[Navigation]}
            className="outer-popular-slider"
          >
            <SwiperSlide>
              <div className="card-box card-blue w-100 position-relative">
                <div className="bottom-box-fixed  d-flex align-items-center">
                  <div className="text-box">
                    <div className="bg-shape-sec">
                      <Image alt="" src={DiscountBg} />
                    </div>
                    <h6>
                      Deals & Discounts
                    </h6>
                    <p>
                      Get up to 20% discount for booking with our franchise
                    </p>
                    <Link className="btn btn-border" href="" >
                      View Details
                    </Link>
                  </div>
                  <div className="img-box">
                    <Image src={Discount01} alt="" className="w-100"
                    />
                    <div className="off-img-bottom">
                      <p>
                        20% OFF
                      </p>
                      <Image alt="" src={OfferBlue} className="img-off-box" />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card-box card-purple w-100 position-relative">
                <div className="bottom-box-fixed  d-flex align-items-center">
                  <div className="text-box">
                    <div className="bg-shape-sec">
                      <Image alt="" src={DiscountBg} />
                    </div>
                    <h6>
                      Deals & Discounts
                    </h6>
                    <p>
                      Get up to 20% discount for booking with our franchise
                    </p>
                    <Link className="btn btn-border" href="">
                      View Details
                    </Link>
                  </div>
                  <div className="img-box">
                    <Image
                      src={Discount02}
                      alt=""
                      className="w-100"
                    />
                    <div className="off-img-bottom">
                      <p>
                        10% OFF
                      </p>
                      <Image alt="" src={OfferOrange} className="img-off-box" />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card-box card-blue w-100 position-relative">
                <div className="bottom-box-fixed  d-flex align-items-center">
                  <div className="text-box">
                    <div className="bg-shape-sec">
                      <Image alt="" src={DiscountBg} />
                    </div>
                    <h6>
                      Deals & Discounts
                    </h6>
                    <p>
                      Get up to 20% discount for booking with our franchise
                    </p>
                    <Link className="btn btn-border" href="" >
                      View Details
                    </Link>
                  </div>
                  <div className="img-box">
                    <Image src={Discount01} alt="" className="w-100"
                    />
                    <div className="off-img-bottom">
                      <p>
                        20% OFF
                      </p>
                      <Image alt="" src={OfferBlue} className="img-off-box" />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card-box card-purple w-100 position-relative">
                <div className="bottom-box-fixed  d-flex align-items-center">
                  <div className="text-box">
                    <div className="bg-shape-sec">
                      <Image alt="" src={DiscountBg} />
                    </div>
                    <h6>
                      Deals & Discounts
                    </h6>
                    <p>
                      Get up to 20% discount for booking with our franchise
                    </p>
                    <Link className="btn btn-border" href="">
                      View Details
                    </Link>
                  </div>
                  <div className="img-box">
                    <Image
                      src={Discount02}
                      alt=""
                      className="w-100"
                    />
                    <div className="off-img-bottom">
                      <p>
                        10% OFF
                      </p>
                      <Image alt="" src={OfferOrange} className="img-off-box" />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper> */}
        </div>
      </div>
    </div>
  );
};

export default DealsDiscount;
