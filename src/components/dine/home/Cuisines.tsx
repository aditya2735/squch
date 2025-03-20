"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";


const cuisines = [
    { name: "Italian", img: "/images/image-cuisines-1.png" },
    { name: "Mexican", img: "/images/image-cuisines-2.png" },
    { name: "African", img: "/images/image-cuisines-3.png" },
    { name: "American", img: "/images/image-cuisines-4.png" },
    { name: "Biryani", img: "/images/image-cuisines-5.png" }
];

const Cuisines = () => {
    return (
        <div className="px-40 bg-dark-gray">
            <div className="block-header">
                <div className="d-flex align-items-center">
                    <h2 className="heading02 m-0">Cuisines</h2>
                    <div className="ms-auto">
                        <Link href="#" className="link">
                            See All <Image src={"/images/arrow.svg"} alt="See all cuisines" height={11} width={11} />
                        </Link>
                    </div>
                </div>
            </div>

            <Swiper
                slidesPerView={3.3}
                spaceBetween={24}
                navigation={{ prevEl: ".outer-prev-button", nextEl: ".outer-next-button" }}
                breakpoints={{
                    300: { slidesPerView: 3.5, spaceBetween: 10 },
                    767: { slidesPerView: 4.5 },
                    1024: { slidesPerView: 5 },
                }}
                modules={[Navigation]}
                className="outer-popular-slider-Cuisines"
            >
                {cuisines.map((cuisine, index) => (
                    <SwiperSlide key={index}>
                        <div className="card-cuisines">
                            <div className="cardImg">
                                <Image src={cuisine.img} alt={cuisine.name} width={100} height={100} />
                            </div>
                            <p>{cuisine.name}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Cuisines;
