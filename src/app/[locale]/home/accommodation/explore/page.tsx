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
// import {data} from '@/components/accommodation/data'

const Page = () => {
  const dispatch = useAppDispatch();
  const { loading: hotelLoading } = useAppSelector((state) => state.homeHotels);
  const { data: bannerData, status } = useAppSelector(
    (state) => state.bannerData
  );
  const { selectedFilters } = useAppSelector((state) => state);
  const [locationData, setLocationData] = useState({});
  useEffect(() => {
    if (!bannerData && status === "idle") {
      dispatch(getBannerData());
    }
  }, [bannerData]);

  //  reload 1 for home slider filters and when
  const fetchHotels = useCallback(() => {
    if (
      Object.keys(selectedFilters).length === 0 ||
      selectedFilters?.reload === 1
    ) {
      dispatch(getHotelData(selectedFilters));
    }
  }, [dispatch, selectedFilters]);

  useEffect(() => {
    const handler = setTimeout(() => {
      fetchHotels();
    }, 700);

    return () => clearTimeout(handler);
  }, [fetchHotels]);

  const handleLocation = async () => {
    try {
      const data = await fetchLocationData();
      if (data) {
        setLocationData(data);
      }
    } catch (error) {
      console.error("Error fetching location data:", error);
    }
  };

  useEffect(() => {
    dispatch(getHotelData(selectedFilters));
    handleLocation();
  }, []);
  //  see if banner present and if not then only refetch it
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
          <LocationSearch
            locationData={locationData}
            setLocationData={setLocationData}
          />
        </div>

        <FilterSlider />
        <PopularHotels />
            <div className="d-md-block d-none">
              <UpcomingStays />
            </div>
            <Nearyou />
            <Other />
        <div className="offer-deals-sec sec-gap">
          <div className="px-40">
            <div className="inner-offer-deals-sec">
              <div className="offer-deals-sec mt-0 mb-3 d-md-block d-none">
                <div className="">
                  <div className="inner-offer-deals-sec">
                    <DealsDiscount />
                  </div>
                </div>
              </div>
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
