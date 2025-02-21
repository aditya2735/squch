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

import Discount01 from "../../../public/images/discounts-01.png";
import OfferBlue from "../../../public/images/offer-blue.png";
import Discount02 from "../../../public/images/discounts-02.png";
import OfferOrange from "../../../public/images/offer-orange.png";
import DiscountBg from "../../../public/images/bg-discount-01.png";
import popularH1 from "../../../public/images/PopularH01.png";

const DealsDiscount = () => {
  const DealsData = [
    { id: 1, src: Discount02 },
    { id: 2, src: Discount02 },
    { id: 3, src: Discount02 },
    { id: 4, src: Discount01 },
  ];
  return (
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
        300: { slidesPerView: 1.1, spaceBetween: 10 },
        550: { slidesPerView: 1.5 },
        767: { slidesPerView: 1.7, spaceBetween: 10 },
        1024: { slidesPerView: 2, spaceBetween: 20 },
      }}
      modules={[Navigation]}
      className="outer-popular-slider"
    >
      {DealsData?.length > 0 &&
        DealsData.map((item: any, index: number) => {
          const isBlue = index % 2 === 0;
          return (
            <SwiperSlide key={item.id}>
              <div
                className={`card-box ${
                  isBlue ? "card-blue" : "card-purple"
                } w-100 position-relative`}
              >
                <div className="bottom-box-fixed  d-flex align-items-center">
                  <div className="text-box">
                    <div className="bg-shape-sec">
                      <Image alt="" src={DiscountBg} />
                    </div>
                    <h6>Deals & Discounts</h6>
                    <p>Get up to 20% discount for booking with our franchise</p>
                    <Link className="btn btn-border" href="">
                      View Details
                    </Link>
                  </div>
                  <div className="img-box">
                    <Image
                      src={item.src}
                      //  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe91lmkQ2L86B_0m3dPKjzK3lt13pD_BHxwg&s"
                      alt=""
                      className="w-100"
                      width={522}
                      height={216}
                      style={{
                        clipPath: "ellipse(97% 104% at 104% 84%)",
                        objectFit: "cover",
                      }}
                    />
                    <div className="off-img-bottom">
                      <p>20% OFF</p>
                      <Image
                        alt=""
                        src={isBlue ? OfferBlue : OfferOrange}
                        className="img-off-box"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      {/* <SwiperSlide>
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
                    <Image
                    src={Discount01}
                    //  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe91lmkQ2L86B_0m3dPKjzK3lt13pD_BHxwg&s" 
                     alt="" 
                    className="w-100"
                    width={522}
                    height={216} 
                    style={{
                      clipPath: 'ellipse(97% 104% at 104% 84%)',   
                      objectFit: 'cover' 
                    }}
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
                  <div  className="img-box">
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
            </SwiperSlide> */}
    </Swiper>
  );
};

export default DealsDiscount;
