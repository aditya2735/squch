import Home from '@/components/busbooking/squchbusdetails/Home'
import PageLayout from '@/components/common/core/PageLayout'
import React from 'react'

const page = () => {
    return (
        <PageLayout showFooter={true}>
            <Home />
        </PageLayout>
    )
}

export default page