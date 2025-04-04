"use client";
import React from "react";
import Image from "next/image";
import { BannerProps } from "@/store/features/common/Banner/bannerTypes";

interface HomeBannerProps {
  banners: BannerProps[]
}

const Banner: React.FC<HomeBannerProps> = ({ banners }) => {
  return (
    <div className='bannerCoupanSec'>
      <div className='container'>
        <div className='inner-banner-box px-40'>
          <div className='top-banner-box d-flex justify-content-between align-items-center'>
            <Image src={banners[0].images[0]} layout="intrinsic" className="w-100" alt="" width={1500} height={1500} />
          </div>
        </div>
      </div>
    </div>
  )
};

export default Banner