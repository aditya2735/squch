"use client";
import React from 'react'
import SpecialOffers from './SpecialOffers'
import GetAppsDownload from '../../common/core/GetAppsDownload'
import Cuisines from './Cuisines'
import PopularHotels from './PopularHotels'
import UserAuth from '../../common/core/UserAuth'
import FilterDesign from './FilterDesign'
import TopExplore from './TopExplore'
import SearchBar from '../../common/core/SearchBar';
import ImgOffer1 from "../../../../public/images/special-offers-img-1.jpg";
import ImgOffer2 from "../../../../public/images/special-offers-img-2.jpg";

const hotelData = [
    {
        image: "/images/card-explore-img-1.png",
        name: "Buka Restaurant",
        price: "₵24.00 for two",
        time: "25-30 mins",
        cuisine: "Mexican , Italian , African",
        location: "640 m drive to Accra Airport (ACC-Kotoka Intl.)"
    },
    {
        image: "/images/card-explore-img-1.png",
        name: "Buka Restaurant",
        price: "₵24.00 for two",
        time: "25-30 mins",
        cuisine: "Mexican , Italian , African",
        location: "640 m drive to Accra Airport (ACC-Kotoka Intl.)"
    },
    {
        image: "/images/card-explore-img-1.png",
        name: "Buka Restaurant",
        price: "₵24.00 for two",
        time: "25-30 mins",
        cuisine: "Mexican , Italian , African",
        location: "640 m drive to Accra Airport (ACC-Kotoka Intl.)"
    },
    {
        image: "/images/card-explore-img-1.png",
        name: "Buka Restaurant",
        price: "₵24.00 for two",
        time: "25-30 mins",
        cuisine: "Mexican , Italian , African",
        location: "640 m drive to Accra Airport (ACC-Kotoka Intl.)"
    },
    {
        image: "/images/card-explore-img-1.png",
        name: "Buka Restaurant",
        price: "₵24.00 for two",
        time: "25-30 mins",
        cuisine: "Mexican , Italian , African",
        location: "640 m drive to Accra Airport (ACC-Kotoka Intl.)"
    },
    {
        image: "/images/card-explore-img-1.png",
        name: "Buka Restaurant",
        price: "₵24.00 for two",
        time: "25-30 mins",
        cuisine: "Mexican , Italian , African",
        location: "640 m drive to Accra Airport (ACC-Kotoka Intl.)"
    },
    {
        image: "/images/card-explore-img-1.png",
        name: "Buka Restaurant",
        price: "₵24.00 for two",
        time: "25-30 mins",
        cuisine: "Mexican , Italian , African",
        location: "640 m drive to Accra Airport (ACC-Kotoka Intl.)"
    },
    {
        image: "/images/card-explore-img-1.png",
        name: "Buka Restaurant",
        price: "₵24.00 for two",
        time: "25-30 mins",
        cuisine: "Mexican , Italian , African",
        location: "640 m drive to Accra Airport (ACC-Kotoka Intl.)"
    },
]


const Home: React.FC = () => {

    const offerData = [
        { url: ImgOffer1 },
        { url: ImgOffer2 },
        { url: ImgOffer1 },
        { url: ImgOffer2 },
    ];

    const handleSearch = async (query: string) => {
        if (!query.trim()) return;
    };

    return (
        <div className='main-wrapper'>
            <div className='container px-0 bg-dark-gray'>
                <GetAppsDownload />
                <div className='wrapper-box'>
                    <div className='gradient-1 px-40'>
                        <UserAuth />
                        <SearchBar
                            onSearch={handleSearch}
                            placeHolder='Search "item Category"'
                        />
                        <SpecialOffers offers={offerData} />
                    </div>
                    <Cuisines />
                    <PopularHotels />
                </div>
                <FilterDesign />
                <TopExplore hotelData={hotelData}/>
            </div>
        </div>
    )
};

export default Home;
