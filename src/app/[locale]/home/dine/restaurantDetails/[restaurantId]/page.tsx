"use client";
import React from 'react';
import Home from "@/components/dine/RestaurantDetail/Home"
import { useParams } from 'next/navigation';
import PageLayout from '@/components/common/core/PageLayout';

const Page = () => {
    const params: any = useParams();

    return (
        <PageLayout>
            <Home restaurantId={params.restaurantId} />
        </PageLayout>
    )
}

export default Page