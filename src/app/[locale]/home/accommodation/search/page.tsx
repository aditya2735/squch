import BackLink from "@/components/accommodation/serachResultList/BackLink";
// import DealsDiscount from '@/components/accommodation/serachResultList/DealsDiscount'
import FilterSlider from "@/components/accommodation/serachResultList/FilterSlider";
import DealsList from "@/components/accommodation/serachResultList/DealsList";
import React from "react";
import GetAppsDownload from "@/components/accommodation/GetAppsDownload";
import DealsDiscount from "@/components/accommodation/DealsDiscount";

const page = () => {
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
                <BackLink />
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

export default page;
