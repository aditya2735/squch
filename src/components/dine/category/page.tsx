"use client";
import React from 'react'
import GetAppsDownload from '@/components/common/core/GetAppsDownload';
import SearchBar from '@/components/common/core/SearchBar';
import UserAuth from '@/components/common/core/UserAuth';
import PageTitle from '@/components/common/core/PageTitle';
import Categories from './Categories';


const Page: React.FC = () => {

    const handleSearch = async (query: string) => {
        if (!query.trim()) return;
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
                        <PageTitle title="Cuisines" />
                        <div className='px-40'>
                            <SearchBar
                                onSearch={handleSearch}
                                placeHolder={`search "item category"`}
                            />
                        </div>
                    </div>
                    <Categories />
                </div>
            </div>
        </div>
    )
}

export default Page