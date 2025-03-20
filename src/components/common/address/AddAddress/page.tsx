import React from 'react';
import GetAppsDownload from '@/components/busbooking/GetAppsDownload'
import BackLink from '@/components/common/core/BackLink'
import SaveLocation from './SaveLocation';
import UserAuth from '../../core/UserAuth';

const Home = () => {
    return (
        <div className='main-wrapper'>
            <div className='container px-0 bg-dark-gray'>
                <GetAppsDownload />
                <div className='gradient-1 pb-5'>
                    <div className='px-40'>
                        <UserAuth/>
                        <BackLink />
                        <SaveLocation />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home