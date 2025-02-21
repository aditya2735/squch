import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {  Pagination } from "swiper/modules";
import Link from "next/link";

interface SliderBannerProps {
    productId: number;
    productName: string;
    price: number;
    images: string[];
}

const SliderBanner: React.FC<SliderBannerProps> = ({
    productId,
    images,
    price,
    productName
}) => {

    useEffect(() => {

    }, [productId])

    return (
        <div className="card card-simple">
            <div className="banner-slider-item">
                <div className="ribbon-down">
                    <span className="d-block text-percentage">25%</span>
                    <span className="d-block text-percentage">OFF</span>
                </div>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={0}
                    modules={[Pagination]}
                    pagination={{
                        clickable: true,
                        // dynamicBullets: true,
                    }}
                    className="Slider-item-detail"
                >
                    {images?.map((image, index) => (
                        <SwiperSlide key={index}>
                            <div className="item-banner">
                            <img src={image} alt="" />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className="card-product">
                <div className="d-flex align-items-center">
                    <div className="flex-grow-1">
                        <div className="product-price d-flex align-items-center">
                            <span className="discounted-price">{price}</span>
                            <span className="original-price">₵1.00</span>
                        </div>
                        <h2 className="product-title">{productName}</h2>
                        <p className="product-weight m-0">1 kg</p>
                    </div>
                    <div className="ms-auto">
                        <Link href="" className="btn btn-add">ADD</Link>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default SliderBanner