"use client";
 import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules"; 

/****slider img******** */

import { useAppSelector } from "@/store/hooks";
import { SwiperRows } from "../HotelCards";
import { Hotel } from "@/store/features/accommodation/types/hotelTypes";
import { CountryHotels } from "@/store/features/accommodation/types/wishlistTypes";
 
const GhanaSquchStay = () => {

   const {data:wishlistData}=useAppSelector((state)=>state.wishListData)

   return (
    <div className='ghana-squch-sec px-40 pt-4'>
  <div>
  {wishlistData &&
    Object.keys(wishlistData).map((place: string, index: number) => (
      <div  className='ghana-squch-sec px-40 pt-4' key={index}>
        {/* Place Name */}
        <div className="block-header">
          <div className="d-flex align-item-center">
            <h2 className="heading02 m-0">  {place.charAt(0).toUpperCase() + place.slice(1)}</h2>
          </div>
        </div>

        {/* Swiper for Hotels under this Place */}
        <div className="ghana-squch-slider">
          <Swiper
            slidesPerView={4}
            spaceBetween={16}
            navigation={{
              prevEl: ".outer-prev-button",
              nextEl: ".outer-next-button",
            }}
            pagination={{ clickable: false }}
            breakpoints={{
              300: { slidesPerView: 1.2, spaceBetween: 10 },
              550: { slidesPerView: 1.4, spaceBetween: 10 },
              767: { slidesPerView: 2.2 },
              1024: { slidesPerView: 4 },
            }}
            modules={[Navigation]}
            className="outer-popular-slider"
          >
            {wishlistData[place]?.map((hotel: Hotel, hotelIndex: number) => (
              <SwiperSlide key={hotelIndex}>
                <SwiperRows  key={hotel.id} hotelData={hotel} CardName={"WishList"} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    ))}
</div>
    </div>
  )
}

export default GhanaSquchStay