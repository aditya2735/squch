"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Coupan from '../../../../public/images/coupan-img.png';
import BottomImgArrow from '../../../../public/images/bottom-img-arrow.png';
import ImageBanner from '../../../../public/images/mart-banner.png';
import { BannerProps } from "@/store/features/common/Banner/bannerTypes";

interface HomeBannerProps {
  banners: BannerProps[]
}

const Banner: React.FC<HomeBannerProps> = ({ banners }) => {

  useEffect(() => {

  },[banners])

  return (
    <div className='bannerCoupanSec'>
      <div className='container'>
        <div className='inner-banner-box px-40'>
          <div className='top-banner-box d-flex justify-content-between align-items-center'>
            <Image src={ImageBanner} layout="intrinsic" className="w-100" alt="" />
          </div>
          <div className="bottom-banner-box d-flex justify-content-between flex-wrap align-items-center gap-4">
            <div className="left-banner-bottom d-flex align-items-center gap-md-4 gap-2">
              <div className="img-box">
                <Image src={Coupan} alt="" />
              </div>
              <div className="text-box">
                <h2>Grab a FREE Hamper Box*</h2>
                <Image src={BottomImgArrow} alt="" />
                <p>on your firs Squchmart order!</p>
              </div>
            </div>
            <div className="right-banner-bottom">
              <div className="coupan-box d-flex align-items-center gap-3">
                <span className="left-text">Coupan:</span>
                <span className="right-text">00SUPERAPP</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Banner