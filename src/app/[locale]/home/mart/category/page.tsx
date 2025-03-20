"use client";
import React from 'react'
import Home from "../../../../../components/mart/Category/page";
import PageLayout from '@/components/common/core/PageLayout';

const Page: React.FC = () => {
    return (
        <PageLayout showFooter={true}>
            <Home />
        </PageLayout>
    )
}

export default Page
