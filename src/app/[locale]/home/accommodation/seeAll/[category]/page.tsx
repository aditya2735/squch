"use client";
import BackLink from "@/components/accommodation/serachResultList/BackLink";
// import DealsDiscount from '@/components/accommodation/serachResultList/DealsDiscount'
import FilterSlider from "@/components/accommodation/serachResultList/FilterSlider";
import DealsList from "@/components/accommodation/serachResultList/DealsList";
import React, { useState } from "react";
import GetAppsDownload from "@/components/accommodation/GetAppsDownload";
import DealsDiscount from "@/components/accommodation/DealsDiscount";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useEffect } from "react";
import { getHotelData } from "@/store/features/accommodation/slices/homeHotelSlice";
import { getFilterData } from "@/store/features/accommodation/slices/allFiltersSlice";
import { useParams } from "next/navigation";
import { fetchSeeAllData } from "@/services/accommodation/homeService";
import { Hotel } from "@/store/features/accommodation/types/hotelTypes";
import { SellAllData } from "@/store/features/accommodation/staticData/seeAll";

const Page = () => {
  const dispatch = useAppDispatch();
  const {category}=useParams()
   const [hotelData, setHotelData] = useState<Hotel[]|[]>(SellAllData.data)
  //  const { popular: hotelData } = useAppSelector(
  //   (state) => state.homeHotels.data
  // );
  const { status: hotelStatus } = useAppSelector((state) => state.hotelDetail);
  const { bookingOptions, status: bookingStatus } = useAppSelector(
    (state) => state.allFilters
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string|null>(null);

  useEffect(() => {
    if (!hotelData.length && hotelStatus === "idle") {
      // dispatch(getHotelData());
    }

    if (!bookingOptions.length && bookingStatus === "idle") {
      dispatch(getFilterData());
    }

    // do the same for the deals data amd filter options
  }, [hotelData, hotelStatus, bookingOptions, bookingStatus, dispatch]);

  useEffect(() => {
    const fetchHotels = async () => {
      if (!category) return; // Ensure category exists before fetching

      setLoading(true);
      setError(null);

      try {
        const categoryData=category as string
        const response = await fetchSeeAllData({ "category" :categoryData });
        setHotelData(response.data);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };

    fetchHotels();
  }, [category]);
  
  return (
    <>
      <div className="sec-accommodation-main bg-dark-gray">
        <div className="container px-0">
          <div className="d-md-block d-none">
            <GetAppsDownload />
          </div>

          <div className="wrapper-box">
            <div 
            // className="gradient-1 mb-4"
            >
              <div className="px-40">
                <BackLink pageName={category as string | undefined}/>

                {/* <div className="offer-deals-sec mt-0 mb-3 d-md-block d-none">
                  <div className="">
                    <div className="inner-offer-deals-sec">
                      <DealsDiscount />
                    </div>
                  </div>
                </div>
                <FilterSlider /> */}
              </div>
            </div>
          </div>
          <div className="list-view bg-dark-gray position-relative">
            <DealsList hotelData={hotelData}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
