import React from 'react'
import Food from '@/components/food/Home/page'
import PageLayout from '@/components/common/core/PageLayout';

const Page: React.FC = () => {
  return (
    <PageLayout showFooter={false}>
      <Food />
    </PageLayout>
  )
}

export default Page;