import React from 'react'
import GetAppsDownload from '@/components/accommodation/GetAppsDownload'
import BackLink from '@/components/accommodation/needHelp/BackLink'
import HostChat from '@/components/accommodation/needHelp/HostChat'
const page = () => {
    return (
        <div className="main-wrapper sec-raisea-ticket">
        <div className="container px-0 bg-dark-gray">
            <GetAppsDownload />
            <div className='gradient-1'>
                <div className='px-40'>
                    <BackLink />
                </div>
                <HostChat />
            </div>

        </div>
    </div>
    )
}

export default page