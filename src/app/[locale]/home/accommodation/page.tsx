"use client";
import BannerTop from "@/components/accommodation/BannerTop";
import { LoadingComp } from "@/components/accommodation/LoaderComp";
import DealsDiscount from "@/components/accommodation/DealsDiscount";
import FilterSlider from "@/components/accommodation/FilterSlider";
import FooterTopDetails from "@/components/accommodation/FooterTopDetails";
import GetAppsDownload from "@/components/accommodation/GetAppsDownload";
import Home from "@/components/accommodation/Home";
import LocationSearch from "@/components/accommodation/LocationSearch";
import Nearyou from "@/components/accommodation/Nearyou";
import Other from "@/components/accommodation/Other";
import PopularHotels from "@/components/accommodation/PopularHotels";
import SearchBar from "@/components/accommodation/SearchBar";
import TrendingDestination from "@/components/accommodation/TrendingDestination";
import UpcomingStays from "@/components/accommodation/UpcomingStays";

import { fetchHomeHotels } from "@//services/accommodation/homeService";
import { getHotelData } from "@//store/features/accommodation/slices/homeHotelSlice";
import { useAppDispatch, useAppSelector } from "@//store/hooks";
import { useEffect } from "react";
import { getFilterData } from "@//store/features/accommodation/slices/allFiltersSlice";
import UserAuth from "@/components/common/core/UserAuth";
// import {data} from '@/components/accommodation/data'

const Page = () => {
  const dispatch = useAppDispatch();
  const { data:hotelsData,loading:hotelLoading } = useAppSelector((state) => state.homeHotels);

  useEffect(() => {
    dispatch(getHotelData());
    dispatch(getFilterData())
  }, [dispatch]);

   return (
    <div className="sec-accommodation-main bg-dark-gray">
      <div className="container px-0">
        <div className="d-md-block d-none">
          <GetAppsDownload />
           </div>
        <div className="gradient-1">
          <div className="px-40">
            <UserAuth />
            <SearchBar />
          </div>
          <div className="banner-slider-sec d-md-block d-none">
            <BannerTop />
          </div>
          <div className="d-md-none d-block">
            <UpcomingStays />
          </div>
        </div>

        <div className="d-md-block d-none">
          <LocationSearch />
        </div>

        <FilterSlider />
        {hotelLoading===true? <LoadingComp/>:
        <>
        <PopularHotels />
        <div className="d-md-block d-none">
          <UpcomingStays />
        </div>
        <Nearyou  />
        <Other  />
        </>     
        }   
         <div className="offer-deals-sec sec-gap">
      <div className="px-40">
        <div className="inner-offer-deals-sec">
        <DealsDiscount />
        </div>
      </div>
    </div>
        <TrendingDestination />
        <FooterTopDetails />
      </div>
    </div>
  );
};

export default Page;
