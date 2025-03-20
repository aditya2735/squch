import React from 'react'
import Buslayout from './Buslayout'
import TransportCard from './TransportCard'
import AboutBus from './AboutBus'

const SeatBookingComponent = () => {
  return (
    <div className='sec-booking-wrapper sec-gap'>
      <div className='row'>
        <div className='col-lg-6'>
            <Buslayout/>
        </div>
        <div className='col-lg-6'>
          <div className='bus-review-detail-info'>
            <TransportCard/>
            <AboutBus/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SeatBookingComponent
