import React from 'react'
import SquchStayTitle from '@/components/accommodation/myBooking/SquchStayTitle'
import MyBookingsTabs from '@/components/accommodation/myBooking/MyBookingsTabs'
import GetAppsDownload from '@/components/accommodation/GetAppsDownload'
import UserAuth from '@/components/accommodation/UserAuth'
const page = () => {
  return (
   <>
    <div className="sec-accommodation-main bg-dark-gray">
        <div className="container px-0">
            <div className="d-md-block d-none">
                <GetAppsDownload/>
            </div>
            
            <div className='wrapper-box'>
                <div className='gradient-1 mb-4'>
                    <div className="px-40">
                        <UserAuth />
                        <SquchStayTitle />
                    </div>
                </div>
            </div>
            <div className='my-booking-bottom-sec bg-dark-gray position-relative'>
                <MyBookingsTabs />
            </div>
        </div>
    </div>
   </>
  )
}

export default page