"use client";
import React, { useEffect, useState } from 'react';

import GetAppsDownload from '@/components/common/core/GetAppsDownload';
import BackLink from '../../common/core/BackLink';
import Filter from './Filter';
import ProductList from './ProductList';
import StoreCardInformation from './StoreCardInformation';
import TopPicks from './TopPicks';
import SpecialOffer from "./SpecialOffer";
import DataLoader from '@/components/common/core/DataLoader';

import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { useSearchParams } from 'next/navigation';
import { getStoreDetail } from '@/store/features/Mart/MartStores/storeThunk';
import { getProductList } from '@/store/features/Mart/MartProduct/productThunk';

import "./martDetail.css"
import { getCartItems } from '@/store/features/Mart/Cart/cartThunk';
import { getAllMartOffer } from '@/store/features/Mart/MartOffer/offerThunk';

interface MartDetailProps {
    storeId: string;
};


const Home: React.FC<MartDetailProps> = ({ storeId }) => {

    const searchParams = useSearchParams();
    const dispatch = useAppDispatch();

    const [filter, setFilter] = useState({
        storeId: storeId,
        type: searchParams.get("type") || "",
        minPrice: searchParams.get("minPrice") || "",
        maxPrice: searchParams.get("maxPrice") || "",
        categoryId: searchParams.get("categoryId") || "",
        sortBy: searchParams.get("sortBy") || "",
        sortingOrder: searchParams.get("sortingOrder") || ""
    });

    const { loading, error, storeDetail } = useAppSelector((state) => state.martStore);
    const { loading: offerLoading, error: offerError, offer } = useAppSelector((state) => state.martOffer);
    const { loading: productLoading, error: productError, products } = useAppSelector((state) => state.martProduct);


    useEffect(() => {
        dispatch(getStoreDetail(storeId));
    }, [dispatch, storeId]);

    useEffect(() => {
        dispatch(getProductList(filter));
    }, [dispatch, storeId, filter]);

    useEffect(() => {
        dispatch(getAllMartOffer({ storeId: storeId }))
        dispatch(getCartItems());
    }, []);

    return (
        <>
            <div className='main-wrapper'>
                <div className='container px-0 bg-dark-gray'>
                    <GetAppsDownload />
                    <div className='px-40 purple-flate'>
                        <BackLink />
                        <DataLoader loading={loading.storeLoading} error={error} retryFunction={() => dispatch(getStoreDetail(storeId))} data={storeDetail}>
                            <StoreCardInformation
                                name={storeDetail.name}
                                address={storeDetail.address}
                                time={storeDetail.time}
                                type={storeDetail.type}
                                rating={storeDetail.rating}
                                openingHours={storeDetail.openingHours}
                            />
                        </DataLoader>
                    </div>

                    <div className='sec-detail purple-flate'>
                        <div className='detail-white-wrapper py-4 px-40'>

                            <DataLoader loading={offerLoading} error={offerError} retryFunction={() => dispatch(getAllMartOffer({ storeId: storeId }))} data={offer}>
                                <SpecialOffer offers={offer!} />
                            </DataLoader>

                            <Filter filter={filter} setFilter={setFilter} />

                            <DataLoader loading={productLoading.pageLoading} error={productError} retryFunction={() => dispatch(getProductList(filter))} data={products[0]?.products}>
                                <TopPicks categoryName={products[0]?.categoryName} products={products[0]?.products} />
                            </DataLoader>

                            <DataLoader loading={productLoading.pageLoading} error={productError} retryFunction={() => dispatch(getProductList(filter))} data={products.slice(1)}>
                                <ProductList products={products.slice(1)} storeId={storeId} />
                            </DataLoader>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
