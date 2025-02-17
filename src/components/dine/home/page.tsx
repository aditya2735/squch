"use client";
import React from 'react'
import SpecialOffers from './SpecialOffers'
import GetAppsDownload from '../../common/GetAppsDownload'
import Cuisines from './Cuisines'
import PopularHotels from './PopularHotels'
import UserAuth from '../../common/UserAuth'
import FilterDesign from './FilterDesign'
import TopExplore from './TopExplore'
import SearchBar from '../../common/SearchBar';
import { apiConnector } from '@/services/connector';
import ImgOffer1 from "../../../../public/images/special-offers-img-1.jpg";
import ImgOffer2 from "../../../../public/images/special-offers-img-2.jpg";



const Home: React.FC = () => {

    const offerData = [
        { url: ImgOffer1 },
        { url: ImgOffer2 },
        { url: ImgOffer1 },
        { url: ImgOffer2 },
    ];

    const handleSearch = async (query: string) => {
        if (!query.trim()) return;
        const response = await apiConnector('post', "http://localhost:8080/search", { data: query });

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
                <TopExplore />
            </div>
        </div>
    )
};

export default Home;
