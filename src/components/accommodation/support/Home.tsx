import React from 'react'
import GetAppsDownload from '../GetAppsDownload'
import BackLink from './BackLink'
import SupportTickets from './SupportTickets'

const Home = () => {
    return (
        <div className="main-wrapper sec-raisea-ticket">
            <div className="container px-0 bg-dark-gray">
                <GetAppsDownload />
                <div className='gradient-1'>
                    <div className='px-40'>
                        <BackLink />
                    </div>
                    <SupportTickets />
                </div>

            </div>
        </div>
    )
}

export default Home
