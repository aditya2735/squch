import GetAppsDownload from '@/components/busbooking/GetAppsDownload'
import BackLink from '@/components/mart/MartDetail/BackLink'

import React from 'react'
import SaveLocation from './SaveLocation'
import { useRouter } from 'next/navigation'
import UserAuth from '../../core/UserAuth'

const Home = () => {

    const router = useRouter();

    const handleBack = () => {
        router.back();
    }

    return (
        <div className='main-wrapper'>
            <div className='container px-0 bg-dark-gray'>
                <GetAppsDownload />
                <div className='gradient-1 pb-5'>
                    <div className='px-40'>
                        <UserAuth/>
                        <BackLink onGoBack={() => handleBack()} />
                        <SaveLocation />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home