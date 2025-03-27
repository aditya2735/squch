"use client";

import React, { useEffect } from 'react'
import GetAppsDownload from '@/components/common/core/GetAppsDownload'
import BackLink from '../../common/core/BackLink'
import SliderBanner from './SliderBanner'
import ItemDetail from './ItemDetail';
import DataLoader from '@/components/common/core/DataLoader';

import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { getProductDetails } from '@/store/features/Mart/MartProduct/productThunk';

interface ItemDetailsProps {
    productId: any;
};

const Page: React.FC<ItemDetailsProps> = ({ productId }) => {

    const dispatch = useAppDispatch();
    const { loading, error, productDetails } = useAppSelector((state) => state.martProduct)

    useEffect(() => {
        dispatch(getProductDetails(productId));
    }, [dispatch, productId]);


    return (
        <DataLoader
            loading={loading.pageLoading}
            error={error}
            retryFunction={() => dispatch(getProductDetails(productId))}
            data={productDetails}
        >
            <div className='main-wrapper'>
                <div className='container px-0 bg-dark-gray'>
                    <GetAppsDownload />
                    <div className='wrapper-box'>
                        <div className='gradient-1'>
                            <div className='px-40'>
                                <BackLink ShowOption={true} />

                                <DataLoader
                                    loading={loading.pageLoading}
                                    error={error}
                                    retryFunction={() => dispatch(getProductDetails(productId))}
                                    data={productDetails}
                                >
                                    <SliderBanner product={productDetails} />
                                </DataLoader>

                                <DataLoader
                                    loading={loading.pageLoading}
                                    error={error}
                                    retryFunction={() => dispatch(getProductDetails(productId))}
                                    data={productDetails.sellerDetails}
                                >
                                    <ItemDetail
                                        name={productDetails.productName}
                                        description={productDetails.productDescription}
                                        sellerDetails={productDetails.sellerDetails}
                                    />
                                </DataLoader>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DataLoader>
    );
}

export default Page;