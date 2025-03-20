 "use client"
 import GetAppsDownload from '@/components/accommodation/GetAppsDownload'
import UserAuth from '@/components/accommodation/UserAuth'
import SquchStayTitle from '@/components/accommodation/wishlist/SquchStayTitle'
import GhanaSquchStay from '@/components/accommodation/wishlist/GhanaSquchStay'
import KunasiSquchStay from '@/components/accommodation/wishlist/KunasiSquchStay'
import { useAppDispatch } from '@/store/hooks'
import React, { useEffect, useState } from 'react' 
import { getWishlistData } from '@/store/features/accommodation/slices/wishlistSlice'
 
const Page = () => {
  const dispatch= useAppDispatch()

  useEffect(() => {
    // getWishlistData(1)
     dispatch(getWishlistData(1))
  }, [ ])
  
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
            <div className='bg-dark-gray position-relative'>
                <GhanaSquchStay />
                {/* <KunasiSquchStay /> */}
            </div>
        </div>
    </div>
   </>
  )
}

export default Page