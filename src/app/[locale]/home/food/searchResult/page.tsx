import React from 'react'
import Home from "@/components/food/SearchResult/page";
import PageLayout from '@/components/common/core/PageLayout';

const Page = () => {
    return (
        <PageLayout showFooter={true}>
            <Home />
        </PageLayout>
    )
}

export default Page