"use client";
import GetAppsDownload from '@/components/common/core/GetAppsDownload';
import PageTitle from '@/components/common/core/PageTitle';
import SearchBar from '@/components/common/core/SearchBar';
import UserAuth from '@/components/common/core/UserAuth';
import React from 'react'
import Cuisines from './Cuisines';

const foodItems = [
    { name: "Pizza", image: "/images/food-img-1.png" },
    { name: "Shake", image: "/images/food-img-2.png" },
    { name: "Biryani", image: "/images/food-img-3.png" },
    { name: "Rolls", image: "/images/food-img-4.png" },
    { name: "Pasta", image: "/images/food-img-5.png" },
    { name: "Burger", image: "/images/food-img-6.png" },
    { name: "Salad", image: "/images/food-img-7.png" },
    { name: "BBQ", image: "/images/food-img-8.png" },
    { name: "Seafood", image: "/images/food-img-9.png" },
    { name: "Lamb", image: "/images/food-img-10.png" },
    { name: "Dessert", image: "/images/food-img-11.png" },
    { name: "Ice-cream", image: "/images/food-img-12.png" },
    { name: "Cake", image: "/images/food-img-13.png" },
    { name: "Pie", image: "/images/food-img-14.png" },
    { name: "Pastry", image: "/images/food-img-15.png" },
];

const page = () => {

    const handleSearch = async (query: string) => {
        if (!query.trim()) return;
    };

    return (
        <div className='main-wrapper'>
            <div className='container px-0 bg-dark-gray'>
                <GetAppsDownload />
                <div className='wrapper-box'>
                    <div className='gradient-1'>
                        <div className='px-40'>
                            <UserAuth />
                        </div>
                        <PageTitle title={"Cuisines"} />
                        <div className='px-40'>
                            <SearchBar
                                onSearch={handleSearch}
                                placeHolder='Searcg "item Category" '
                                debounceDelay={1000}
                            />
                            <Cuisines />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page