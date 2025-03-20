import React from 'react'
import GetAppsDownload from '../GetAppsDownload'
import EmergencyCard from './EmergencyCard'
import UserAuth from '../UserAuth'


const Home = () => {
    return (
        <div className="main-wrapper">
            <div className="container px-0 bg-dark-gray">
                <GetAppsDownload />
                <div className="gradient-1">
                    <div className="px-40">
                        <UserAuth />
                        <EmergencyCard />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
