import React from 'react'
import BackLink from './BackLink'
import GetAppsDownload from '../GetAppsDownload'
import BookingForm from './BookingForm'
import FilterSort from './FilterSort'
import BusCard from './BusCard'

const Home = () => {
    return (
        <div className='main-wrapper'>
            <div className='container bg-dark-gray'>
                <GetAppsDownload />
                <BackLink />
                <div className='px-40 bg-white'>
                    <BookingForm />
                </div>
                <FilterSort />
                <BusCard />
            </div>
        </div>
    )
}

export default Home
