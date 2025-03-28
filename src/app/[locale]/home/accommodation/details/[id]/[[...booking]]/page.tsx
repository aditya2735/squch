"use client";
import GetAppsDownload from "@/components/accommodation/GetAppsDownload";
import BackLink from "@/components/accommodation/hotelDetail/BackLink";
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
import BookingDetailDefault from "@/components/accommodation/hotelDetail/BookingDetailDefault";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { getHotelDetails } from "@/store/features/accommodation/slices/hotelDetailSlice";
import DetailsThumbSlider from "@/components/accommodation/hotelDetail/DetailsThumbSlider";
import { fetchAlsoLike, fetchSimilarProperties } from "@/services/accommodation/hotelDetails";
import { AlsoLikeData } from "@/store/features/accommodation/staticData/alsoLike";
import { SimilarProperty } from "@/store/features/accommodation/staticData/similarProperty";
import { Hotel } from "@/store/features/accommodation/types/hotelTypes";
import PopularHotels from "@/components/accommodation/homePage/PopularHotels";
import AlsoLike from "@/components/accommodation/hotelDetail/AlsoLike";
import Host from "@/components/accommodation/hotelDetail/Host";
import BookingDetail from "@/components/accommodation/hotelDetail/BookingDetails";

const Page = () => {

  const { id:hotel_id, booking } = useParams();

  const dispatch = useAppDispatch();
  const [alsoLikeData, setAlsoLikeData] = useState<Hotel[]|[]>([]);
  const [similarPropertiesData, setSimilarPropertiesData] = useState<Hotel[]|[]>([]);

  useEffect(() => {
    const hotelId = Number(hotel_id);
    if (hotelId > 0) {
      dispatch(getHotelDetails(hotelId));
    }
  }, [hotel_id, dispatch]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const [alsoLike, similarProperties] = await Promise.all([
        //   fetchAlsoLike(),
        //   fetchSimilarProperties(),
        // ]);
  
        // setAlsoLikeData(alsoLike);
        // setSimilarPropertiesData(similarProperties);

          setAlsoLikeData(AlsoLikeData.data.likeData);
        setSimilarPropertiesData(SimilarProperty.data["similar-data"]);

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchData();
  }, []);

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
                <div
                 className="card white-card"
                 >
                  <WhybookfromSquch />
                  <RoomCategories booking={booking} />
                  <BrowseSpecialOffers />
                  <Amenities />
                  <WhatIsNearBy />
                  <RatingAndReviews />
                  <Housepolicies />
                  <AboutSquch />
                  <Cancellationpolicy />
                  {/* <AlsoLike likeData={alsoLikeData} /> */}
                  <YouMightAlsoLike likeData={alsoLikeData} />
                  <SimilarPropertiesNearby similarData={similarPropertiesData} />
                </div>
              </div>
              <div className="col-lg-4">
               <div className="booking-date-sec">
               {booking? <BookingDetail/> : <BookingDetailDefault/>}
               <Host/>
               </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

};

export default Page;
