import React from 'react'
import GetAppsDownload from '@/components/accommodation/GetAppsDownload'
import BackLink from '@/components/accommodation/bookinDetails/InitiateCancellation/BackLink'
import CardBookingDetail from '@/components/accommodation/bookinDetails/InitiateCancellation/CardBookingDetail'
import Cancellationpolicy from '@/components/accommodation/bookinDetails/InitiateCancellation/Cancellationpolicy'
import ConfirmCancellation from '@/components/accommodation/bookinDetails/InitiateCancellation/ConfirmCancellation'
 const Page = () => {
  return (
    <>
      <div className='main-wrapper'>
            <div className='container bg-dark-gray'>
                <GetAppsDownload />
                 <div className='gradient-1 pb-5'>
                    <div className='px-40'>
                        <BackLink />
                        <div className='row'>
                            <div className='col-lg-8'>
                                <div className='cardwhite cardshadow mb-32'>
                                    <CardBookingDetail />
                                    <Cancellationpolicy/> 
                                </div>
                            </div>
                            <div className='col-lg-4'>
                                <ConfirmCancellation />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Page