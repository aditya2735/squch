"use client";
import React from 'react';
import Home from '@/components/mart/MartDetail/page';
import { useParams } from 'next/navigation';
import PageLayout from '@/components/common/core/PageLayout';

const Page = () => {
    const params: any = useParams();

    return (
        <PageLayout showFooter={true}>
            <Home storeId={params.storeId} />
        </PageLayout>
    );
};

export default Page;
