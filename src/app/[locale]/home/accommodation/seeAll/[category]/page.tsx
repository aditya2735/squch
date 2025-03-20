"use client";
import BackLink from "@/components/accommodation/serachResultList/BackLink";
// import DealsDiscount from '@/components/accommodation/serachResultList/DealsDiscount'
import FilterSlider from "@/components/accommodation/serachResultList/FilterSlider";
import DealsList from "@/components/accommodation/serachResultList/DealsList";
import React from "react";
import GetAppsDownload from "@/components/accommodation/GetAppsDownload";
import DealsDiscount from "@/components/accommodation/DealsDiscount";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useEffect } from "react";
import { getHotelData } from "@/store/features/accommodation/slices/homeHotelSlice";
import { getFilterData } from "@/store/features/accommodation/slices/allFiltersSlice";
import { useParams } from "next/navigation";

const Page = () => {
  const dispatch = useAppDispatch();
  const {category}=useParams()
   const { popular: hotelData } = useAppSelector(
    (state) => state.homeHotels.data
  );
  const { status: hotelStatus } = useAppSelector((state) => state.hotelDetail);
  const { bookingOptions, status: bookingStatus } = useAppSelector(
    (state) => state.allFilters
  );

  const categoryName = {
    near: {
      id: 1,
      label: "Nearby Properties",
      functionName: "fetchNearProperties"
    },
    other: {
      id: 2,
      label: "Other Properties",
      functionName: "fetchOtherProperties"
    },
    popular: {
      id: 3,
      label: "Popular Properties",
      functionName: "fetchPopularProperties"
    },
    recommend: {
      id: 4,
      label: "You might also like",
      functionName: "fetchRecommendedProperties"
    },
    similarProperty: {
      id: 5,
      label: "Similar properties Nearby",
      functionName: "fetchSimilarProperties"
    }
  };

  useEffect(() => {
    if (!hotelData.length && hotelStatus === "idle") {
      // dispatch(getHotelData());
    }

    if (!bookingOptions.length && bookingStatus === "idle") {
      // dispatch(getFilterData());
    }

    // do the same for the deals data
  }, [hotelData, hotelStatus, bookingOptions, bookingStatus, dispatch]);

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
                <BackLink pageName={category as string | undefined}/>

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
            <DealsList />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
