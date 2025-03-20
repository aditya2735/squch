import React from 'react'
import HeaderRouteInfo from './HeaderRouteInfo'
import GetAppsDownload from '../GetAppsDownload'
import TravelOffersDeals from './TravelOffersDeals'
import FilterSort from './FilterSort'
import BusCardList from './BusCardList'

const Home = () => {
    return (
        <div className='main-wrapper'>
            <div className='container bg-dark-gray'>
                <GetAppsDownload />
                <div className='gradient-1'>
                    <div className='px-40'>
                        <HeaderRouteInfo />
                    </div>
                    <TravelOffersDeals />
                    <FilterSort />
                    <div className='px-40'>
                        <BusCardList />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
