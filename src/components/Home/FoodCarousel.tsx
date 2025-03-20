import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

const foodItems = [
    { src: "/images/food-img-1.png", label: 'Pizza' },
    { src: "/images/food-img-2.png", label: 'Shake' },
    { src: "/images/food-img-3.png", label: 'Biryani' },
    { src: "/images/food-img-4.png", label: 'Rolls' },
    { src: "/images/food-img-5.png", label: 'Pasta' },
    { src: "/images/food-img-6.png", label: 'Burger' },
    { src: "/images/food-img-7.png", label: 'Salad' },
    { src: "/images/food-img-8.png", label: 'BBQ' },
    { src: "/images/food-img-9.png", label: 'Seafood' },
    { src: "/images/food-img-10.png", label: 'Lamb' },
    { src: "/images/food-img-11.png", label: 'Dessert' },
    { src: "/images/food-img-12.png", label: 'Ice-cream' },
    { src: "/images/food-img-13.png", label: 'Cake' },
    { src: "/images/food-img-14.png", label: 'Pie' },
    { src: "/images/food-img-15.png", label: 'Pastry' },
];


const FoodCarousel = () => {
    return (
        <Swiper
            slidesPerView={8}
            grid={{ rows: 2, fill: 'row' }}
            spaceBetween={30}
            pagination={{ clickable: true }}
            navigation={{ prevEl: '.prev-button', nextEl: '.next-button' }}
            breakpoints={{
                300: { slidesPerView: 3, grid: { rows: 2, fill: 'row' } },
                768: { slidesPerView: 4, grid: { rows: 2, fill: 'row' } },
                1024: { slidesPerView: 6, grid: { rows: 2, fill: 'row' } },
                1280: { slidesPerView: 8, grid: { rows: 2, fill: 'row' } },
            }}
            modules={[Grid, Navigation, Pagination]}
            className="slider-best-food"
        >
            {foodItems.map((item, index) => (
                <SwiperSlide key={index}>
                    <Link href="#" className="card-best-food">
                        <div className="img-thumb">
                            <Image src={item.src} alt={item.label} width={150} height={150} />
                        </div>
                        <p>{item.label}</p>
                    </Link>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default FoodCarousel;