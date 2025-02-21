"use client";
import React from 'react'
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ImagesTopPicks from "../../../../public/images/top-picks.jpg"
import { CategoryProps } from "@/store/features/Mart/MartProduct/productTypes";
import QuantityControls from '@/components/common/core/QuantityControl';
import { useAppDispatch } from '@/store/hooks';
import { addProductToCart, removeProductFromCart } from '@/store/features/Mart/Cart/cartThunk';
import TopProductCard from './TopProductCard';


const TopPicks: React.FC<CategoryProps> = ({ categoryName, products }) => {

    const dispatch = useAppDispatch()

    const handleAddProduct = (productId: number, storeId: number) => {
        dispatch(addProductToCart({ productId: productId, storeId: storeId }));
    }


    const handleRemoveProduct = (cartId: number, productId: number, storeId: number) => {
        dispatch(removeProductFromCart({ cartId: cartId, productId: productId, storeId: storeId }));
    }


    return (
        <div className="sec-top-picks sec-gap">
            <div className="block-header">
                <div className="d-flex align-item-center">
                    <h2 className="heading02 m-0">{categoryName}</h2>
                </div>
            </div>

            <Swiper
                slidesPerView={3}
                spaceBetween={14}
                // modules={[Pagination]}
                pagination={{
                    clickable: true,
                    // dynamicBullets: true,
                }}
                breakpoints={{
                    300: { slidesPerView: 1.2, },
                    767: { slidesPerView: 3.1 },
                    1024: { slidesPerView: 3.2 },
                }}
                className="slider-top-picks"
            >
                {products?.map((item, index) => (
                    <SwiperSlide key={index}>
                        <TopProductCard product={item} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default TopPicks
