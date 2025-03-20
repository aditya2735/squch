"use client";
import React from 'react'
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Mousewheel,
  Keyboard,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";


import Category01 from '../../../../public/images/category-01.png'
import Category02 from '../../../../public/images/category-02.png'
import Category03 from '../../../../public/images/category-03.png'
import Category04 from '../../../../public/images/category-04.png'
import Category05 from '../../../../public/images/category-05.png'
import Category06 from '../../../../public/images/category-06.png'
import Category07 from '../../../../public/images/category-07.png'
import Category08 from '../../../../public/images/category-08.png'
import Link from "next/link";

const categories = [
  { id: 1, name: "All", img: Category01 },
  { id: 2, name: "Gifting", img: Category02 },
  { id: 3, name: "Fresh", img: Category03 },
  { id: 4, name: "Grocery", img: Category04 },
  { id: 5, name: "Electronics", img: Category05 },
  { id: 6, name: "Beauty", img: Category06 },
  { id: 7, name: "Home", img: Category07 },
  { id: 8, name: "Kids", img: Category08 },
];


const CategoryMenu: React.FC = () => {
  return (
    <div className="categoryMenuSec">
      <div className="container">
        <div className="inner-categoryMenu px-40">
          <Swiper
            slidesPerView={4.5}
            spaceBetween={10}
            mousewheel
            keyboard
            modules={[Mousewheel, Keyboard, Navigation]}
            navigation={{
              prevEl: ".prev-button-1",
              nextEl: ".next-button-1",
            }}
            breakpoints={{
              320: { slidesPerView: 3.5, spaceBetween: 5 },
              768: { slidesPerView: 5, spaceBetween: 10 },
              890: { slidesPerView: 6, spaceBetween: 10 },
              1200: { slidesPerView: 8, spaceBetween: 10 },
            }}
            className="slider-filter-sec"
          >
            {categories?.map((category, index) => (
              <SwiperSlide key={category.id}>
                <button className={`category-box ${index === 0 ? "active-btn" : ""}`}>
                  <Link className="category-item" href="#">
                    <div className="img-box">
                      <Image src={category.img} alt={category.name} />
                    </div>
                    <div className="text-box">
                      {category.name}
                    </div>
                  </Link>
                </button>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default CategoryMenu