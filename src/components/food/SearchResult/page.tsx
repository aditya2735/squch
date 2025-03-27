import BackLink from '@/components/common/core/BackLink'
import GetAppsDownload from '@/components/common/core/GetAppsDownload'
import BannerText from '@/components/mart/SearchResult/BannerText'
import Image from 'next/image'
import React from 'react'

import Offer from '@/components/mart/Offer/Offer'
import Filter from '@/components/mart/SearchResult/Filter'

const Page = () => {
    return (
        <div className='main-wrapper'>
            <div className='container px-0 bg-dark-gray'>

                <GetAppsDownload />

                <div className='wrapper-box'>
                    <div className='sec-page-banner position-relative'>
                        <Image
                            src={"/images/search-result-banner.jpg"}
                            alt="banner image"
                            height={1000}
                            width={1300}
                        />
                        <BackLink ShowOption={false}/>
                    </div>
                    <div className='gradient-1'>
                        <div className='px-40'>
                            <BannerText />
                            <Filter />
                            <Offer />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page