"use client";
import BannerTop from "@/components/accommodation/homePage/BannerTop";
import { LoadingComp } from "@/components/accommodation/LoaderComp";
import DealsDiscount from "@/components/accommodation/DealsDiscount";
import FilterSlider from "@/components/accommodation/FilterSlider";
import FooterTopDetails from "@/components/accommodation/FooterTopDetails";
import GetAppsDownload from "@/components/accommodation/GetAppsDownload";
import LocationSearch from "@/components/accommodation/homePage/LocationSearch";
import Nearyou from "@/components/accommodation/homePage/Nearyou";
import Other from "@/components/accommodation/homePage/Other";
import PopularHotels from "@/components/accommodation/homePage/PopularHotels";
import SearchBar from "@/components/accommodation/SearchBar";
import TrendingDestination from "@/components/accommodation/homePage/TrendingDestination";
import UpcomingStays from "@/components/accommodation/UpcomingStays";
import UserAuth from "@/components/accommodation/UserAuth";
import { getHotelData } from "@/store/features/accommodation/slices/homeHotelSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useCallback, useEffect, useState } from "react";
import { getBannerData } from "@/store/features/accommodation/slices/bannerSlice";
import { fetchLocationData } from "@/services/accommodation/homeService";
import { fetchLatestBooking } from "@/services/accommodation/homeService";

// import {data} from '@/components/accommodation/data'
import { debounce } from "lodash";
import { MyBooking } from "@/store/features/accommodation/types/myBookingTypes";
import CheckInOut from "@/components/accommodation/Details/CheckInOut";
// import LocationSearchNew from "@/components/accommodation/homePage/LocationSearchNew";
// import LocationSearch from "@/components/LocationSearch";

const Page = () => {
  const dispatch = useAppDispatch();
  const { loading: hotelLoading } = useAppSelector((state) => state.homeHotels);
  const { data: bannerData, status } = useAppSelector(
    (state) => state.bannerData
  );
  const { selectedFilters } = useAppSelector((state) => state);
  const [locationData, setLocationData] = useState({});
  const [latestBookingData, setLatestBookingData] = useState<MyBooking | null>(null);

  // useEffect(() => {
  //   if (!bannerData && status === "idle") {
  //     dispatch(getBannerData());
  //   }
  // }, [bannerData]);

  //  reload 1 for home slider filters and when

  // const fetchHotels = useCallback(() => {
  //   if (
  //     Object.keys(selectedFilters).length === 0 ||
  //     selectedFilters?.reload === 1
  //   ) {
  //     dispatch(getHotelData(selectedFilters));
  //   }
  // }, [dispatch, selectedFilters]);

  // useEffect(() => {
  //   const handler = setTimeout(() => {
  //     fetchHotels();
  //   }, 700);

  //   return () => clearTimeout(handler);
  // }, [fetchHotels]);

    // Debounced fetchHotels function
    const fetchHotels = useCallback(
      debounce(() => {
        if (Object.keys(selectedFilters).length === 0 || selectedFilters?.reload === 1) {
          dispatch(getHotelData(selectedFilters));
        }
      }, 700),
      [dispatch, selectedFilters]
    );
  
    // Call fetchHotels when selectedFilters changes
    useEffect(() => {
      fetchHotels();
      return () => fetchHotels.cancel(); // Cancel the debounce on unmount
    }, [fetchHotels, selectedFilters]);

    const fetchData = async () => {
      try {
        const locationData = await fetchLocationData();
        if (locationData) {
          setLocationData(locationData);
        }
        const latestData = await fetchLatestBooking();
        if (latestData) {
          setLatestBookingData(latestData.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

  useEffect(() => {
    dispatch(getHotelData(selectedFilters));
    fetchData();
  }, []);
  //  see if banner present and if not then only refetch it
  return (
    <div className="sec-accommodation-main bg-dark-gray">
      <div className="container px-0">
        <div className="d-md-block d-none">
          <GetAppsDownload/>
        </div>
        <div className="gradient-1">
          <div className="px-40">
            <UserAuth />
            <SearchBar />
          </div>
          <div className="banner-slider-sec d-md-block d-none">
            <BannerTop />
          </div>
          {latestBookingData && 
            <div className="d-md-none d-block">
              <UpcomingStays latestBookingData={latestBookingData} />
            </div>
        }   
        </div>
        
        <div className="d-md-block d-none">
        <LocationSearch
            locationData={locationData}
            setLocationData={setLocationData}
          />
            {/* <LocationSearchNew/> */}
        </div>
        
          <FilterSlider />
          <PopularHotels/>
         {latestBookingData && 
            <div className="d-md-block d-none">
              <UpcomingStays latestBookingData={latestBookingData} />
            </div>
        }   
          <Nearyou/>
          <Other />
          <div className="offer-deals-sec sec-gap">
      <div className="px-40">
        <div className="inner-offer-deals-sec">
                      <DealsDiscount />
                  </div>
                </div>
                </div>
          <TrendingDestination/>
          <FooterTopDetails />
        </div>
    </div>
  );
};

export default Page;
