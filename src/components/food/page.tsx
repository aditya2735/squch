"use client";
import React from 'react'
import GetAppsDownload from '../common/GetAppsDownload'
import UserAuth from '../common/UserAuth'
import SearchBar from '../common/SearchBar';
import Banner from '../common/Banner';
import { apiConnector } from '@/services/connector';

const Food: React.FC = () => {

    const foodOffers = [
        {
            id: 1,
            image: "https://res.cloudinary.com/ddlloxt3o/image/upload/v1738156170/Squch/rhyiqkw3yflwkfsj7dcr.jpg",
            link: "/food/offer1",
        },
        {
            id: 2,
            image: "https://res.cloudinary.com/ddlloxt3o/image/upload/v1738156170/Squch/rhyiqkw3yflwkfsj7dcr.jpg",
            link: "/food/offer2",
        },
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
                            placeHolder='Searcg "item Categiry" '
                        />
                        <Banner
                            heading='Special Offers'
                            category='Food'
                            banners={foodOffers}
                            seeAllLink='/'
                        />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Food;