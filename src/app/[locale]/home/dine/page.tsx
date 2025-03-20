import PageLayout from '@/components/common/core/PageLayout'
import Home from '@/components/dine/home/page'
import React from 'react'

const Page = () => {
    return (
        <PageLayout showFooter={false}>
            <Home />
        </PageLayout>
    )
}

export default Page