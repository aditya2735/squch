import React from 'react'
import GetAppsDownload from '../GetAppsDownload'
import UserAuth from '../UserAuth'
import SquchBusPickup from './SquchBusPickup'

const Home = () => {
    return (
        <div className='main-wrapper'>
            <div className='container px-0 bg-dark-gray'>
                <GetAppsDownload />
                <div className='wrapper-box'>
                    <div className='gradient-1'>
                        <div className='px-40'>
                            <UserAuth />
                        </div>
                    </div>
                    <div className='tabs-squchbus-pickup'>
                        <SquchBusPickup />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
