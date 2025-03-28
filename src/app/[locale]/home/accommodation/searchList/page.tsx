"use client";
import BackLink from "@/components/accommodation/serachResultList/BackLink";
import FilterSlider from "@/components/accommodation/serachResultList/FilterSlider";
import DealsList from "@/components/accommodation/serachResultList/DealsList";
import React, { useState } from "react";
import GetAppsDownload from "@/components/accommodation/GetAppsDownload";
import DealsDiscount from "@/components/accommodation/DealsDiscount";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useEffect } from "react";
import { getSearchData } from "@/store/features/accommodation/slices/searchSlice";

const Page = () => {
    const dispatch= useAppDispatch()
   const{data:hotelData}=useAppSelector((state)=>state.serachHotel)
    useEffect(() => {
       dispatch(getSearchData({}))
    }, [ ])
  return (
    <>
      <div className="sec-accommodation-main bg-dark-gray">
        <div className="container px-0">
          <div className="d-md-block d-none">
            <GetAppsDownload />
          </div>

          <div className="wrapper-box">
            <div className="gradient-1 mb-4">
              <div className="px-40">
                <BackLink pageName={"search"}/>

                <div className="offer-deals-sec mt-0 mb-3 d-md-block d-none">
                  <div className="">
                    <div className="inner-offer-deals-sec">
                      <DealsDiscount />
                    </div>
                  </div>
                </div>
                <FilterSlider />
              </div>
            </div>
          </div>
          <div className="list-view bg-dark-gray position-relative">
            <DealsList hotelData={hotelData} page={"search"}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
