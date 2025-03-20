"use client";
import React from 'react'
import Home from "@/components/common/address/AddAddress/page";
import PageLayout from '@/components/common/core/PageLayout';

const Page = () => {
    return (
        <PageLayout showFooter={true}>
            <Home />
        </PageLayout>
    )
}

export default Page