import { combineReducers } from '@reduxjs/toolkit';

import BannerReducer from "./features/common/Banner/bannerSlice";
import MartOfferReducer from "./features/Mart/MartOffer/offerSlice";
import MartStoreReducer from "./features/Mart/MartStores/storeSlice";
import MartCategoryReducer from "./features/Mart/MartCategory/categorySlice";
import MartBrandReducer from "./features/Mart/MartBrands/brandsSlice";
import MartProductReducer from "./features/Mart/MartProduct/productSlice";
import MartCartReducer from "./features/Mart/Cart/cartSlice";
import addressReducer from "./features/common/Address/addressSlice";


import filtersSlice from './features/accommodation/slices/allFiltersSlice';
import homeHotelSlice from './features/accommodation/slices/homeHotelSlice'
import selectedFiltersSlice from './features/accommodation/slices/selectedFilterSlice';
import hotelDetailSlice from './features/accommodation/slices/hotelDetailSlice';
import wishlistSlice from './features/accommodation/slices/wishlistSlice';


const rootReducer = combineReducers({
    banner: BannerReducer,
    martOffer: MartOfferReducer,
    martStore: MartStoreReducer,
    martCategory: MartCategoryReducer,
    martBrand: MartBrandReducer,
    martProduct: MartProductReducer,
    martCart: MartCartReducer,
    address: addressReducer,

    allFilters: filtersSlice, // Add other reducers as needed
    homeHotels: homeHotelSlice,
    selectedFilters: selectedFiltersSlice,
    hotelDetail: hotelDetailSlice,
    wishListData: wishlistSlice,
});

export default rootReducer;
