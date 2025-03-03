"use client";
import GetAppsDownload from "@/components/accommodation/GetAppsDownload";
import BackLink from "@/components/accommodation/hotelDetail/BackLink";
import DetailsThumbSlider from "@/components/accommodation/hotelDetail/DetailsThumbSlider";
import WhybookfromSquch from "@/components/accommodation/hotelDetail/WhybookfromSquch";
import BrowseSpecialOffers from "@/components/accommodation/hotelDetail/BrowseSpecialOffers";
import RoomCategories from "@/components/accommodation/hotelDetail/RoomCategories";
import Amenities from "@/components/accommodation/hotelDetail/Amenities";
import WhatIsNearBy from "@/components/accommodation/hotelDetail/WhatIsNearBy";
import RatingAndReviews from "@/components/accommodation/hotelDetail/RatingAndReviews";
import Housepolicies from "@/components/accommodation/hotelDetail/Housepolicies";
import AboutSquch from "@/components/accommodation/hotelDetail/AboutSquch";
import Cancellationpolicy from "@/components/accommodation/hotelDetail/Cancellationpolicy";
import YouMightAlsoLike from "@/components/accommodation/hotelDetail/YouMightAlsoLike";
import SimilarPropertiesNearby from "@/components/accommodation/hotelDetail/SimilarPropertiesNearby";
import RightBookingDetails from "@/components/accommodation/hotelDetail/RightBookingDetails";
import { useEffect } from "react";
import { useParams } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@//store/hooks";
import { getHotelDetails } from "@//store/features/accommodation/slices/hotelDetailSlice";
const Page = () => {
  const { hotel_id } = useParams();
  const dispatch = useAppDispatch();
  const { data:hotelData } = useAppSelector((state) => state.hotelDetail);
  useEffect(() => {
    const hotelId = Number(hotel_id);
    if (hotelId > 0) {
      dispatch(getHotelDetails(hotelId));
    }
  }, [hotel_id, dispatch]);


  return (
    <div className="main-wrapper">
      <div className="container bg-dark-gray">
        <GetAppsDownload />
        <div className="gradient-1 pb-5">
          <div className="px-40">
            <BackLink />
            <div className="row">
              <div className="col-lg-8">
                <DetailsThumbSlider />
                <div className="card white-card">
                  <WhybookfromSquch />
                  <RoomCategories />
                  <BrowseSpecialOffers />
                  <Amenities />
                  <WhatIsNearBy />
                  <RatingAndReviews avgRating={hotelData?.avg_ratings} totalRating={hotelData?.total_ratings} reviews={hotelData.reviews} categoryRatings={hotelData.categoryRatings}  />
                  <Housepolicies checkIn={hotelData?.checkInTime} checkOut={hotelData?.checkOutTime} />
                  <AboutSquch />
                  <Cancellationpolicy />
                  <YouMightAlsoLike />
                  <SimilarPropertiesNearby />
                </div>
              </div>
              <div className="col-lg-4">
                <RightBookingDetails />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
