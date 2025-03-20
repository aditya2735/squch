import React from 'react';
import Home from "@/components/mart/SearchResult/Home"
import PageLayout from '@/components/common/core/PageLayout';

const Page = () => {
  return (
        <PageLayout showFooter={false}>
            <Home />
        </PageLayout>
  )
}

export default Page