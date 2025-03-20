"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import { Grid, Navigation } from "swiper/modules";
import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.min.css';
import { CategoryProps } from "@/store/features/Mart/MartCategory/categoryTypes";

interface CategorySectionProps {
    categories: CategoryProps[]
}


const Categories: React.FC<CategorySectionProps> = ({categories}) => {
    return (
        <div className="sec-whats-on-your-mind sec-gap">
            <div className="block-header d-flex align-items-center">
                <h2 className="heading02 m-0 me-auto">Hi There, what’s on your mind?</h2>
            </div>

            <div className="swiper-food-container">
                <Swiper
                    slidesPerView={8}
                    spaceBetween={30}
                    grid={{ rows: 2, fill: "row" }}
                    navigation={{
                        prevEl: ".prev-button",
                        nextEl: ".next-button",
                    }}
                    breakpoints={{
                        300: { slidesPerView: 3, grid: { rows: 2, fill: "row" } },
                        768: { slidesPerView: 4, grid: { rows: 2, fill: "row" } },
                        1024: { slidesPerView: 6, grid: { rows: 2, fill: "row" } },
                        1280: { slidesPerView: 7, grid: { rows: 2, fill: "row" } },
                    }}
                    modules={[Grid, Navigation]}
                    className="slider-best-food"
                >
                    {categories.map((category, index) => (
                        <SwiperSlide key={index}>
                            <Link href="#" className="card-best-food">
                                <div className="img-thumb">
                                    <Image
                                        src={category.imageUrl}
                                        alt={category.categoryName}
                                        width={100}
                                        height={100}
                                    />
                                </div>
                                <p>{category.categoryName}</p>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Categories;
