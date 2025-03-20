"use client";
import React from 'react'
import Home from "@/components/mart/ProductDetail/page";
import { useParams } from 'next/navigation';
import PageLayout from '@/components/common/core/PageLayout';




const Page: React.FC = () => {
    // @ts-ignore
    const { productId } = useParams();

    return (
        <PageLayout showFooter={true}>
            <Home productId={productId} />
        </PageLayout>
    );
};

export default Page;
