"use client";
import React, { useEffect, useState } from 'react'
import RestaurantInformationCard from './RestaurantInformationCard';
import DataLoader from '@/components/common/core/DataLoader';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import SpecialOffer from '@/components/mart/MartDetail/SpecialOffer';
import { getAllMartOffer } from '@/store/features/Mart/MartOffer/offerThunk';
import { useSearchParams } from 'next/navigation';
import Filter from '@/components/mart/MartDetail/Filter';
import TopPicks from '@/components/mart/MartDetail/TopPicks';
import { getProductList } from '@/store/features/Mart/MartProduct/productThunk';
import ProductList from '@/components/mart/MartDetail/ProductList';
import { getStoreDetail } from '@/store/features/Mart/MartStores/storeThunk';
import { getCartItems } from '@/store/features/Mart/Cart/cartThunk';
import GetAppsDownload from '@/components/common/core/GetAppsDownload';
import BackLink from '@/components/common/core/BackLink';

interface RestaurantDetailProps {
    restaurantId: string;
}

const Page: React.FC<RestaurantDetailProps> = ({ restaurantId }) => {

    const searchParams = useSearchParams();
    const dispatch = useAppDispatch();

    const { loading, error, storeDetail } = useAppSelector((state) => state.martStore);
    const { loading: offerLoading, error: offerError, offer } = useAppSelector((state) => state.martOffer);
    const { loading: productLoading, error: productError, products } = useAppSelector((state) => state.martProduct);

    const [filter, setFilter] = useState({
        storeId: restaurantId,
        type: searchParams.get("type") || "",
        minPrice: searchParams.get("minPrice") || "",
        maxPrice: searchParams.get("maxPrice") || "",
        categoryId: searchParams.get("categoryId") || "",
        sortBy: searchParams.get("sortBy") || "",
        sortingOrder: searchParams.get("sortingOrder") || ""
    });

    useEffect(() => {
        dispatch(getStoreDetail(restaurantId));
    }, [dispatch, restaurantId]);

    useEffect(() => {
        dispatch(getProductList(filter));
    }, [dispatch, restaurantId, filter]);

    useEffect(() => {
        dispatch(getAllMartOffer({ storeId: restaurantId }))
        dispatch(getCartItems());
    }, []);
    

    return (
        <div className='main-wrapper'>
            <GetAppsDownload />
            <div className='container px-0 bg-dark-gray'>
                <div className='px-40 purple-flate'>
                    <BackLink />
                    <RestaurantInformationCard
                        name={storeDetail.name}
                        address={storeDetail.address}
                        time={storeDetail.time}
                        type={storeDetail.type}
                        rating={storeDetail.rating}
                        openingHours={storeDetail.openingHours}
                        supportDineIn={storeDetail.supportsDineIn}
                        restaurantId={storeDetail.storeId}
                    />
                </div>
                <div className='sec-detail purple-flate'>
                    <div className='detail-white-wrapper py-4 px-40'>

                        <DataLoader loading={offerLoading} error={offerError} retryFunction={() => dispatch(getAllMartOffer({ storeId: restaurantId }))} data={offer}>
                            <SpecialOffer offers={offer!} />
                        </DataLoader>

                        <Filter filter={filter} setFilter={setFilter} />

                        <DataLoader loading={productLoading.pageLoading} error={productError} retryFunction={() => dispatch(getProductList(filter))} data={products[0]?.products}>
                            <TopPicks categoryName={products[0]?.categoryName} products={products[0]?.products} />
                        </DataLoader>

                        <DataLoader loading={productLoading.pageLoading} error={productError} retryFunction={() => dispatch(getProductList(filter))} data={products.slice(1)}>
                            <ProductList products={products.slice(1)} storeId={restaurantId} />
                        </DataLoader>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page;