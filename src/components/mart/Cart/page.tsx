"use client";
import React from 'react'
import GetAppsDownload from '@/components/common/core/GetAppsDownload'
import BackLink from '../../common/core/BackLink'
import BookingSummary from './BookingSummary';

const Page: React.FC = () => {
    return (
        <div className='main-wrapper  bg-dark-gray'>
            <div className='container px-0 pb-5'>
                <GetAppsDownload />
                <div className='wrapper-box'>
                    <div className='gradient-1'>
                        <div className='px-40'>
                            <BackLink ShowOption={false} />
                            <BookingSummary />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Page;