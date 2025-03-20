import React from 'react';
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";

import ImageBrandLogo1 from "../../../../public/images/brand-img-1.png";
import ImageBrandLogo2 from "../../../../public/images/brand-img-2.png";
import ImageBrandLogo3 from "../../../../public/images/brand-img-3.png";
import ImageBrandLogo4 from "../../../../public/images/brand-img-4.png";
import ImageBrandLogo5 from "../../../../public/images/brand-img-5.png";
import ImageBrandLogo6 from "../../../../public/images/brand-img-6.png";
import ImageBrandLogo7 from "../../../../public/images/brand-img-7.png";


const brandData = [
  { id: 5, image: ImageBrandLogo5 },
  { id: 1, image: ImageBrandLogo1 },
  { id: 2, image: ImageBrandLogo2 },
  { id: 3, image: ImageBrandLogo3 },
  { id: 4, image: ImageBrandLogo4 },
  { id: 6, image: ImageBrandLogo6 },
  { id: 7, image: ImageBrandLogo7 },
  { id: 8, image: ImageBrandLogo4 }
]

const PopularBrands: React.FC = () => {
  return (
    <div className='sec-most-loved-brands sec-gap'>
      <div className='container'>
        <div className="px-40">
          <div className="section-heading">
            <h2 className="heading-title m-0">Most loved brands</h2>
          </div>
          <Swiper
            slidesPerView={8}
            spaceBetween={12}
            navigation={{
              prevEl: ".outer-prev-button",
              nextEl: ".outer-next-button",
            }}
            pagination={{
              clickable: true,
              // dynamicBullets: true,
            }}
            breakpoints={{
              300: { slidesPerView: 3.5, },
              767: { slidesPerView: 4 },
              1024: { slidesPerView: 8 },
            }}
            // modules={[Pagination, Navigation]}
            className="brand-slider"
          >
            {
              brandData.map((brand) => (
                <SwiperSlide key={brand.id}>
                  <div className="card-brand-logo">
                    <Image src={brand.image} alt="" />
                  </div>
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default PopularBrands;