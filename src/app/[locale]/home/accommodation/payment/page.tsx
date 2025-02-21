import React from 'react'
 import GetAppsDownload from '@/components/accommodation/GetAppsDownload'
import BackLink from '@/components/accommodation/payment/BackLink'
import CardBookingDetail from '@/components/accommodation/payment/CardBookingDetail'
import CustomiseYourStay from '@/components/accommodation/payment/CustomiseYourStay'
import Cancellationpolicy from '@/components/accommodation/payment/Cancellationpolicy'
import CouponsOffers from '@/components/accommodation/payment/CouponsOffers'
import BillingSummery from '@/components/accommodation/payment/BillingSummery'
const page = () => {
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
                                <CouponsOffers/>
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

export default page