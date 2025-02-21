'use client'
import UpcomingStays from "./UpcomingStays";

import PopularHotels from "./PopularHotels";
import Nearyou from "./Nearyou";
import Other from "./Other";
import TrendingDestination from "./TrendingDestination";
import GetAppsDownload from "./GetAppsDownload";
import BannerTop from "./BannerTop";
import LocationSearch from "./LocationSearch";
import FilterSlider from "./FilterSlider";
import FooterTopDetails from "./FooterTopDetails";
import DealsDiscount from "./DealsDiscount";
import SearchBar from "./SearchBar";
import UserAuth from "../common/core/UserAuth";

const Home = () => {
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
          <div className="d-md-none d-block">
            <UpcomingStays />
          </div>
        </div>
        
        <div className="d-md-block d-none">
            <LocationSearch/>
        </div>
        
          <FilterSlider />
          <PopularHotels/>
          <div className="d-md-block d-none">
            <UpcomingStays />
          </div>
          <Nearyou/>
          <Other />
          <DealsDiscount />
          <TrendingDestination/>
          <FooterTopDetails />
        </div>
    </div>
  )
}

export default Home
