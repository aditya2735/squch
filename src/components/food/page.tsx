"use client";
import React from 'react'
import GetAppsDownload from '../common/core/GetAppsDownload'
import UserAuth from '../common/core/UserAuth'
import SearchBar from '../common/core/SearchBar';
import Banner from '../common/core/Banner';

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