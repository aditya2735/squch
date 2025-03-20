import React from 'react'
import GetAppsDownload from '../GetAppsDownload'
import BackLink from './BackLink'
import SeatBookingComponent from './SeatBookingComponent'

const Home = () => {
    return (
        <div className='main-wrapper'>
            <div className='container bg-dark-gray'>
                <GetAppsDownload />
                <BackLink />
                <div className='gradient-1'>
                    <div className='px-40'>
                        <SeatBookingComponent/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
