import React from 'react'
import GetAppsDownload from '../GetAppsDownload'
import UserAuth from '../UserAuth'
import PickupLocation from './PickupLocation'

const Home = () => {
  return (
    <div className="main-wrapper">
            <div className="container px-0 bg-dark-gray">
                <GetAppsDownload />
                <div className="gradient-1">
                    <div className="px-40">
                        <UserAuth />
                        <PickupLocation/>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Home
