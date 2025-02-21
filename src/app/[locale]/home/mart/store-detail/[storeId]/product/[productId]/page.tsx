"use client";
import React from 'react'
import Home from "@/components/mart/ProductDetail/page";
import { useParams } from 'next/navigation';




const Page: React.FC = () => {
    // @ts-ignore
    const { productId } = useParams();

    return <Home productId={productId} />;
};

export default Page;
