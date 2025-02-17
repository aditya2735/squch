"use client";
import React from 'react'
import GetAppsDownload from '@/components/common/GetAppsDownload';
import SearchBar from '@/components/common/SearchBar';
import UserAuth from '@/components/common/UserAuth';


const Page: React.FC = () => {

    const handleSearch = async (query: string) => {
        if (!query.trim()) return;
        const response = null;

    };

    return (
        <div className='main-wrapper'>
            <div className='container px-0 bg-dark-gray'>
                <GetAppsDownload />
                <div className='wrapper-box'>
                    <div className='gradient-1 mb-4'>
                        <div className='px-40'>
                            <UserAuth />
                        </div>
                        {/* <DinoutCategoriesTitle /> */}
                        <div className='px-40'>
                            <SearchBar onSearch={handleSearch} placeHolder={`search "item category"`} />
                        </div>
                    </div>
                    {/* <CuisinesCategories /> */}
                </div>
            </div>
        </div>
    )
}

export default Page