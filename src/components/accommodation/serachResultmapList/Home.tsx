'use client'
import React from 'react'
import GetAppsDownload from '../GetAppsDownload'
import BackLink from '../serachResultList/BackLink'
import DealsDiscount from '../serachResultList/DealsDiscount'
import FilterSlider from '../serachResultList/FilterSlider'
import MapList from './MapList'

const Home = () => {
  return (
    <div className="sec-accommodation-main bg-dark-gray">
        <div className="container px-0">
            <div className="d-md-block d-none">
                <GetAppsDownload/>
            </div>
            
            <div className='wrapper-box'>
                <div className='gradient-1 mb-4'>
                    <div className="px-40">
                        <BackLink  pageName={"search"}/>
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
  )
}

export default Home