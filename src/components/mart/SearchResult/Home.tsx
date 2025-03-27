"use client";
import React from 'react'
import Image from 'next/image';
import BannerText from "./BannerText";
import Filter from "./Filter";
import GetAppsDownload from '@/components/common/core/GetAppsDownload';
import Offer from '../Offer/Offer';
import BackLink from '@/components/common/core/BackLink';

const Home = () => {
    return (
        <div className='main-wrapper'>
            <div className='container px-0 bg-dark-gray'>

                <GetAppsDownload />

                <div className='wrapper-box'>
                    <div className='sec-page-banner position-relative'>
                        <Image
                            src={"/images/search-result-banner.jpg"}
                            alt="banner image"
                            height={1000}
                            width={1300}
                        />
                        <BackLink ShowOption={false} />
                    </div>
                    <div className='gradient-1'>
                        <div className='px-40'>
                            <BannerText />
                            <Filter />
                            <Offer />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Home;
