import React from 'react'
import { StaticImageData } from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";
import HotelImageCard from './HotelImageCard';

interface HotelImageProps {
    url: StaticImageData;
}

interface PopularHotelProps {
    name: string;
    location: string;
    actualPrice: string;
    currentPrice: string;
    discountPercentage: string;
    images: HotelImageProps[];
    rating: string;
}

interface PopularHotelCardProps {
    hotel: PopularHotelProps
}

// TODO: Need to change the static data
const PopularHotelCard: React.FC<PopularHotelCardProps> = ({ hotel }) => {
    return (
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
                    className="inner-popular-slider-second"
                >
                    {hotel.images.map((image, index) => (
                        <SwiperSlide key={index}>
                            <HotelImageCard image={image.url} rating={hotel.rating} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="text-box px-3 py-4">
                <h3 >
                    {hotel.name}
                </h3>
                <p className="mb-3">
                    {hotel.location}
                </p>
                <div className="d-flex align-items-center align-items-center mb-1">
                    <h6 className="d-flex align-items-center align-items-center">
                        {hotel.currentPrice}
                        <span className="d-block">
                            {hotel.actualPrice}
                        </span>
                    </h6>
                    <span className="text-sm d-block">
                        {hotel.discountPercentage}
                    </span>
                </div>
                <p >+ ₵12 taxes & fees</p>
            </div>
        </div>
    )
};

export default PopularHotelCard