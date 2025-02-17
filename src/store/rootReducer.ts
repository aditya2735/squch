import { combineReducers } from '@reduxjs/toolkit';

import BannerReducer from "./features/Banner/bannerSlice";
import MartOfferReducer from "./features/Mart/MartOffer/offerSlice";
import MartStoreReducer from "./features/Mart/MartStores/storeSlice";
import MartCategoryReducer from "./features/Mart/MartCategory/categorySlice";
import MartBrandReducer from "./features/Mart/MartBrands/brandsSlice";
import MartProductReducer from "./features/Mart/MartProduct/productSlice";
import MartCartReducer from "./features/Mart/Cart/cartSlice";

const rootReducer = combineReducers({
    banner: BannerReducer,
    martOffer: MartOfferReducer,
    martStore: MartStoreReducer,
    martCategory: MartCategoryReducer,
    martBrand: MartBrandReducer,
    martProduct: MartProductReducer,
    martCart: MartCartReducer
});

export default rootReducer;
