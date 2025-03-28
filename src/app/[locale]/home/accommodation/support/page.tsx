import Home from '@/components/accommodation/support/Home'
import React from 'react'
import GetAppsDownload from '@/components/accommodation/GetAppsDownload'
import BackLink from '@/components/accommodation/support/BackLink'
import SupportTickets from '@/components/accommodation/support/SupportTickets'
const page = () => {
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

export default page