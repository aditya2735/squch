import React from 'react';
import UserAuth from '@/components/common/UserAuth';
import GetAppsDownload from '@/components/common/GetAppsDownload';
import SearchBar from '@/components/common/SearchBar';
import PageTitle from '../../common/PageTitle';
import Category from './Category';

const Home: React.FC = () => {

    const handleSearch = async (query: string) => {
        if (!query.trim()) return;
        const response = null
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
                        <PageTitle title={"Categories"} />
                        <div className='px-40'>
                            <SearchBar
                                onSearch={handleSearch}
                                placeHolder='Searcg "item Category" ' />
                            <Category />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home