"use client";
import React, { useEffect } from 'react'

import GetAppsDownload from '@/components/common/GetAppsDownload'
import BackLink from '../MartDetail/BackLink'
import SliderBanner from './SliderBanner'
import ItemDetail from './ItemDetail';
import DataLoader from '@/components/common/DataLoader';

import { useRouter } from 'next/navigation';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { getProductDetails } from '@/store/features/Mart/MartProduct/productThunk';


interface ItemDetailsProps {
    productId: any;
};

const Page: React.FC<ItemDetailsProps> = ({ productId }) => {

    const router = useRouter();
    const dispatch = useAppDispatch();

    const { loading, error, productDetails } = useAppSelector((state) => state.martProduct)

    const handleBack = () => {
        router.back();
    };

    useEffect(() => {
        dispatch(getProductDetails(productId));
    }, [dispatch, productId]);

    return (
        <DataLoader loading={loading} error={error} retryFunction={() => dispatch(getProductDetails(productId))}>
            <div className='main-wrapper'>
                <div className='container px-0 bg-dark-gray'>
                    <GetAppsDownload />
                    <div className='wrapper-box'>
                        <div className='gradient-1'>
                            <div className='px-40'>
                                <BackLink onGoBack={handleBack} />
                                
                                <DataLoader loading={loading} error={error} retryFunction={() =>  dispatch(getProductDetails(productId))}>
                                    <SliderBanner {...productDetails} />
                                </DataLoader>
                                
                                <ItemDetail
                                    name={productDetails.productName}
                                    description={productDetails.productDescription}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DataLoader>
    );
}

export default Page;