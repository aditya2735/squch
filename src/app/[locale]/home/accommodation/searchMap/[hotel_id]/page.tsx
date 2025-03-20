 import GetAppsDownload from '@/components/accommodation/GetAppsDownload'
import BackLink from '@/components/accommodation/serachResultList/BackLink'
import DealsDiscount from '@/components/accommodation/serachResultList/DealsDiscount'
import FilterSlider from '@/components/accommodation/serachResultList/FilterSlider'
import MapList from '@/components/accommodation/serachResultmapList/MapList'
 import React from 'react'

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
                        <BackLink pageName={"search"} />
                        <DealsDiscount />
                        <FilterSlider />
                    </div>
                </div>
            </div>
            <div className='map-sec'>
                <MapList />
            </div>
        </div>
    </div>
   </>
  )
}

export default page