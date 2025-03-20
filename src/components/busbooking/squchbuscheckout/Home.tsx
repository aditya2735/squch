import React from 'react'
import GetAppsDownload from '../GetAppsDownload'
import BackLink from './BackLink'
import TravelInfo from './TravelInfo'
import SelectWhoIsTraveling from './SelectWhoIsTraveling'
import BannerTop from './BannerTop'
import ChangeTicketDetails from './ChangeTicketDetails'
import FreeCancellation from './FreeCancellation'
import SquchAssurance from './SquchAssurance'
import SquchCaresDonation from './SquchCaresDonation'

const Home = () => {
  return (
    <div className='main-wrapper'>
      <div className='container bg-dark-gray'>
        <GetAppsDownload />
        <BackLink />
        <TravelInfo />
        <div className='px-40 pb-4'>
          <BannerTop/>
          <SelectWhoIsTraveling/>
          <ChangeTicketDetails/>
          <FreeCancellation/>
          <SquchAssurance/>
          <SquchCaresDonation/>
        </div>
      </div>
    </div>
  )
}

export default Home
