import GetAppsDownload from '@/components/common/core/GetAppsDownload'
import UserAuth from '@/components/common/core/UserAuth'
import React from 'react'
import PageTitle from '../../common/core/PageTitle'
import SearchBar from '@/components/common/core/SearchBar'
import Offer from './Offer'

const Home: React.FC = () => {

    const handleSearch = async (query: string) => {
        if (!query.trim()) return;
    };

    return (
        <div className='main-wrapper'>
            <div className='container px-0 bg-dark-gray'>
                <GetAppsDownload />
                <div className='wrapper-box'>
                    <div className='gradient-1'>
                        <div className='px-40'>
                            <UserAuth />
                        </div>
                        <PageTitle title={"Offers"} />
                        <div className='px-40'>
                            <SearchBar
                                onSearch={handleSearch}
                                placeHolder={`Search "item category"`}
                                debounceDelay={1000}
                            />
                            <Offer />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;