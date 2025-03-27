"use client";
import React from 'react'
import GetAppsDownload from '../../core/GetAppsDownload'
import UserAuth from '../../core/UserAuth'
import BackLink from '../../core/BackLink'
import SearchBar from '../../core/SearchBar'
import SavedAddress from './SavedAddress';

const Page = () => {

    const handleSearch = () => {

    }

    return (
        <div className='main-wrapper'>
            <div className='container px-0 bg-dark-gray'>
                <GetAppsDownload />
                <div className='gradient-1 pb-5'>
                    <div className='px-40'>
                        <UserAuth />
                        <BackLink ShowOption={false}/>
                        <SearchBar 
                        onSearch={handleSearch} 
                        placeHolder='search addresses'
                        debounceDelay={1000}
                        />
                        <SavedAddress />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Page