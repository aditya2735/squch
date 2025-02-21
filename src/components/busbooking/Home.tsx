import React from 'react'
import GetAppsDownload from './GetAppsDownload'

import SearchBooking from './SearchBooking'
import UpcomingTrips from './UpcomingTrips'
import TopDestinations from './TopDestinations'
import TravelOffersDeals from './TravelOffersDeals'
import TravelStories from './TravelStories'
import TabsStartSearchingMobile from './TabsStartSearchingMobile'
import NavigationBottom from './NavigationBottom'
import UserAuth from '../common/core/UserAuth'

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
                        <SearchBooking />
                        <UpcomingTrips />
                        <div className='d-md-none'>
                            <TabsStartSearchingMobile />
                        </div>
                        <TopDestinations />
                        <TravelOffersDeals />
                        <TravelStories />
                       
                    </div>
                </div>
            </div>
            <NavigationBottom/>
        </div>
    )
}

export default Home
