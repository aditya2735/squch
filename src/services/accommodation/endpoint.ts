const API_BASE_URL ="abc"
// "https://halibut-neutral-oddly.ngrok-free.app"
// "https://1ce5306c9ce02596c9a5fb6b676dcaf2.serveo.net"
// "https://welcomed-owl-forcibly.ngrok-free.app"
//  process.env.NEXT_PUBLIC_API_BASE_URL;
 const STAY_BASE=`${API_BASE_URL}`
//  /Accommodation-booking/api/v1/Accommodation`
const ENDPOINTS = {
    ACCOMMODATION:{
        HOME:{
            GET_ALL_HOTELS: `${STAY_BASE}/get-all-hotels-filter`,
            FILTER_OPTIONS: `${STAY_BASE}/filter-options`,
            FILTER_HOTELS: `${STAY_BASE}/filter-hotels`,
            GET_BANNER :`${STAY_BASE}/banner/image`,
            GET_TRENDING :`${STAY_BASE}/abc`, 
            GET_DEALS :`${STAY_BASE}/abc`,
            GET_LOCATION:`${STAY_BASE}/get-locations`
         },
         DETAIL:{
            GET_HOTEL_DETAIL:`${STAY_BASE}/gethotel-details`,
            GET_ALL_REVIEWS:`${STAY_BASE}/abc`,
         },
         WISHLIST:{
             ADD_WISHLIST: `${STAY_BASE}/add-wishlist`,
             GET_ALL_WISHLIST:`${STAY_BASE}/my-wishlist`
         },
         BOOKING:{
            GET_MY_BOOKING:`${STAY_BASE}/my-booking`,
            CHECK_IN:`${STAY_BASE}/checkin-hotel`
         }
    }
};

export { ENDPOINTS };
