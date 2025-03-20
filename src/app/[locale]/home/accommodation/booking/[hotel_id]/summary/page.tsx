import React from 'react'
import GetAppsDownload from '@/components/accommodation/GetAppsDownload'
import BackLink from '@/components/accommodation/bookinDetails/Fullpaid/BackLink'
import CardBookingDetail from '@/components/accommodation/bookinDetails/Fullpaid/CardBookingDetail'
import CustomiseYourStay from '@/components/accommodation/bookinDetails/Fullpaid/CustomiseYourStay'
import Cancellationpolicy from '@/components/accommodation/bookinDetails/Fullpaid/Cancellationpolicy'
import BillingSummery from '@/components/accommodation/bookinDetails/Fullpaid/BillingSummery'
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
                                    <CustomiseYourStay/>
                                    <Cancellationpolicy/>
                                </div>
                            </div>
                            <div className='col-lg-4'>
                                <BillingSummery/>
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