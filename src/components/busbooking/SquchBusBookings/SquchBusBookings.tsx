import React from 'react'
import PastBooking from './PastBooking'
import UpNextTrip from './UpNextTrip'
import UpcomingTrip from './UpcomingTrip'

const SquchBusBookings = () => {
  return (
    <div className='squchBusBooking-sec'>
        <div className='row pb-5'>
            <div className='col-lg-8 col-md-8'>
                <UpNextTrip />
                <UpcomingTrip />
            </div>
            <div className='col-lg-4 col-md-4'>
                <PastBooking />
            </div>
        </div>
    </div>
  )
}

export default SquchBusBookings