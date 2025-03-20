"use client";
import React, { useEffect, useState } from "react";
import SquchStayTitle from "@/components/accommodation/bookinDetails/myBooking/SquchStayTitle";
import MyBookingsTabs from "@/components/accommodation/bookinDetails/myBooking/MyBookingsTabs";
import GetAppsDownload from "@/components/accommodation/GetAppsDownload";
import UserAuth from "@/components/accommodation/UserAuth";
import { fetchMyBookings } from "@/services/accommodation/bookingServices";
import { MyBookingState } from "@/store/features/accommodation/types/myBookingTypes";
import {mybookingData} from "@/store/features/accommodation/staticData/myBooking";
import { useAppDispatch } from "@/store/hooks";
import { getMyBookings } from "@/store/features/accommodation/slices/myBookingSlice";
const Page = () => {
  const dispatch=useAppDispatch()

  useEffect(() => {
     dispatch(getMyBookings())
  }, []);

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
                <UserAuth />
                <SquchStayTitle />
              </div>
            </div>
          </div>
          <div className="my-booking-bottom-sec bg-dark-gray position-relative">
            <MyBookingsTabs  />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
