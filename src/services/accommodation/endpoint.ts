const API_BASE_URL ="https://welcomed-owl-forcibly.ngrok-free.app"
//  process.env.NEXT_PUBLIC_API_BASE_URL;
 const STAY_BASE=`${API_BASE_URL}/Accommodation-booking/api/v1/Accommodation`
const ENDPOINTS = {
    ACCOMMODATION:{
        HOME:{
            GET_ALL_HOTELS: `${STAY_BASE}/get-all-hotels`,
            FILTER_OPTIONS: `${STAY_BASE}/filter-options`,
            FILTER_HOTELS: `${STAY_BASE}/filter-hotels`
         },
         DETAIL:{
            GET_HOTEL_DETAIL:`${STAY_BASE}/gethotel-details`
         },
         WISHLIST:{
             ADD_WISHLIST: `${STAY_BASE}/add-wishlist`,
             GET_ALL_WISHLIST:`${STAY_BASE}/my-wishlist`
         }
    }
};

export { ENDPOINTS };
