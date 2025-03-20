"use client";
import React, { useEffect, useState } from "react";
import GetAppsDownload from "@/components/accommodation/GetAppsDownload";
import BackLink from "@/components/accommodation/bookinDetails/booknow/BackLink";
import CardBookingDetail from "@/components/accommodation/bookinDetails/booknow/CardBookingDetail";
import CustomiseYourStay from "@/components/accommodation/bookinDetails/booknow/CustomiseYourStay";
import Cancellationpolicy from "@/components/accommodation/bookinDetails/booknow/Cancellationpolicy";
import CouponsOffers from "@/components/accommodation/bookinDetails/booknow/CouponsOffers";
import BillingSummery from "@/components/accommodation/bookinDetails/booknow/BillingSummery";
import { useAppSelector } from "@/store/hooks";


const Page = () => {

//  call api if id is not present
 const { id} = useAppSelector((state) => state.hotelDetail.data); 
  return (
    <>
      <div className="main-wrapper">
        <div className="container bg-dark-gray">
          <GetAppsDownload />
          <div className="gradient-1 pb-5">
            <div className="px-40">
              <BackLink />
              <div className="row">
                <div className="col-lg-8">
                  <div className="cardwhite cardshadow mb-32">
                    <CardBookingDetail />
                    <CustomiseYourStay />
                    <Cancellationpolicy />
                  </div>
                </div>
                <div className="col-lg-4">
                  <CouponsOffers />
                  <BillingSummery />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
