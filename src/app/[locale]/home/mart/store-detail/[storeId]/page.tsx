"use client";
import Home from '@/components/mart/MartDetail/page';
import { useParams } from 'next/navigation';
import React from 'react';



const Page = () => {
    const params: any = useParams();

    return <Home storeId={params.storeId} />;
};

export default Page;
