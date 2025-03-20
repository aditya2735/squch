import React from 'react';
import Home from "@/components/food/Cuisines/page"
import PageLayout from '@/components/common/core/PageLayout';

const page = () => {
    return (
        <PageLayout showFooter={true}>
            <Home />
        </PageLayout>
    )
}

export default page