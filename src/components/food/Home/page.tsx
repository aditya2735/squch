"use client";
import GetAppsDownload from '@/components/common/core/GetAppsDownload';
import SearchBar from '@/components/common/core/SearchBar';
import UserAuth from '@/components/common/core/UserAuth';
import React, { Suspense, useEffect } from 'react'
import SpecialOffers from './SpecialOffer';
import WelcomeOffer from './WelcomeOffer';
import Categories from './Categories';
import Filter from './Filter';
import TopExplore from '@/components/dine/home/TopExplore';
import TopRated from '@/components/mart/Home/TopRated';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { useRouter } from 'next/navigation';
import {
    getMartStores,
    getTopRatedStores,
    makeStoreFavourite
} from '@/store/features/Mart/MartStores/storeThunk';
import DataLoader from '@/components/common/core/DataLoader';
import Loader from '@/components/common/core/Loader';
import { getAllMartCategory } from '@/store/features/Mart/MartCategory/categoryThunk';

const hotelData = [
    {
        image: "/images/card-explore-img-1.png",
        name: "Buka Restaurant",
        price: "₵24.00 for two",
        time: "25-30 mins",
        cuisine: "Mexican , Italian , African",
        location: "640 m drive to Accra Airport (ACC-Kotoka Intl.)"
    },
    {
        image: "/images/card-explore-img-1.png",
        name: "Buka Restaurant",
        price: "₵24.00 for two",
        time: "25-30 mins",
        cuisine: "Mexican , Italian , African",
        location: "640 m drive to Accra Airport (ACC-Kotoka Intl.)"
    },
    {
        image: "/images/card-explore-img-1.png",
        name: "Buka Restaurant",
        price: "₵24.00 for two",
        time: "25-30 mins",
        cuisine: "Mexican , Italian , African",
        location: "640 m drive to Accra Airport (ACC-Kotoka Intl.)"
    },
    {
        image: "/images/card-explore-img-1.png",
        name: "Buka Restaurant",
        price: "₵24.00 for two",
        time: "25-30 mins",
        cuisine: "Mexican , Italian , African",
        location: "640 m drive to Accra Airport (ACC-Kotoka Intl.)"
    },
    {
        image: "/images/card-explore-img-1.png",
        name: "Buka Restaurant",
        price: "₵24.00 for two",
        time: "25-30 mins",
        cuisine: "Mexican , Italian , African",
        location: "640 m drive to Accra Airport (ACC-Kotoka Intl.)"
    },
    {
        image: "/images/card-explore-img-1.png",
        name: "Buka Restaurant",
        price: "₵24.00 for two",
        time: "25-30 mins",
        cuisine: "Mexican , Italian , African",
        location: "640 m drive to Accra Airport (ACC-Kotoka Intl.)"
    },
    {
        image: "/images/card-explore-img-1.png",
        name: "Buka Restaurant",
        price: "₵24.00 for two",
        time: "25-30 mins",
        cuisine: "Mexican , Italian , African",
        location: "640 m drive to Accra Airport (ACC-Kotoka Intl.)"
    },
    {
        image: "/images/card-explore-img-1.png",
        name: "Buka Restaurant",
        price: "₵24.00 for two",
        time: "25-30 mins",
        cuisine: "Mexican , Italian , African",
        location: "640 m drive to Accra Airport (ACC-Kotoka Intl.)"
    },
]

const Food: React.FC = () => {

    const dispatch = useAppDispatch();
    const router = useRouter();

    const { latLong } = useAppSelector((state) => state.address);
    const { topRated, loading: loadingStores, error: errorStores } = useAppSelector((state) => state.martStore);
    const { categories, loading: loadingCategories, error: errorCategories } = useAppSelector((state) => state.martCategory);

    const handleSearch = async (query: string) => {
        if (!query.trim()) return;
    };

    const handleClick = (storeId: any) => {
        router.push(`/home/food/restaurantDetail/${storeId}`)
    };

    const handleFavourite = (event: React.MouseEvent, storeId: number, status: boolean) => {
        event.stopPropagation();
        // TODO: Need to change the static user id
        const data = { userId: 2, storeId: storeId, status: !status }
        dispatch(makeStoreFavourite(data));
    };

    useEffect(() => {
        dispatch(getAllMartCategory("food"));
    }, [])

    useEffect(() => {
        if (latLong) {
            const data = {
                latitude: latLong.lat,
                longitude: latLong.long,
                type: "restaurant"
            }
            dispatch(getTopRatedStores(data));
        }
    }, [dispatch, latLong]);


    return (
        <div className='wrapper-main'>
            <div className='container px-0 bg-dark-gray'>
                <GetAppsDownload />
                <div className='wrapper-box'>
                    <div className='gradient-1 px-40'>
                        <UserAuth />
                        <SearchBar
                            onSearch={handleSearch}
                            placeHolder='Searcg "item Category" '
                            debounceDelay={1000}
                        />
                        <SpecialOffers />
                    </div>
                    <WelcomeOffer />
                    <div className='px-40'>

                        <DataLoader loading={loadingCategories} error={errorCategories} retryFunction={() => dispatch(getAllMartCategory("food"))} data={categories}>
                            <Suspense fallback={<Loader />}>
                                <Categories categories={categories} />
                            </Suspense>
                        </DataLoader>

                    </div>
                    <DataLoader loading={loadingStores.storeLoading} error={errorStores} retryFunction={() => dispatch(getMartStores("grocery"))} data={topRated}>
                        <Suspense fallback={<Loader />}>
                            <TopRated
                                stores={topRated}
                                handleClick={handleClick}
                                handleFavourite={handleFavourite}
                            />
                        </Suspense>
                    </DataLoader>
                    <Filter />
                    <TopExplore hotelData={hotelData} />
                </div>
            </div>
        </div>
    );
};

export default Food;