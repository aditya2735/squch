"use client";
import React from 'react';
import Home from "@/components/food/RestaurantDetails/page";
import PageLayout from '@/components/common/core/PageLayout';
import { useParams } from 'next/navigation';

const Page = () => {
    const params: any = useParams();

    return (
        <PageLayout>
            <Home restaurantId={params.restaurantId} />
        </PageLayout>
    )
}

export default Page;