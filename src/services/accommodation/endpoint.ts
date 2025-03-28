const API_BASE_URL ="https://stage-api.squch.com"
 const STAY_BASE=`${API_BASE_URL}/acc-service/api/v1/accommodation`
const ENDPOINTS = {
    ACCOMMODATION:{
        HOME:{
            GET_ALL_HOTELS: `${STAY_BASE}/get-all-hotels-filter`,
            FILTER_OPTIONS: `${STAY_BASE}/filter-options`,
            GET_BANNER :`${STAY_BASE}/banner/image`,
            GET_DEALS :`${STAY_BASE}/abc`,
            GET_LOCATION:`${STAY_BASE}/get-locations`,
            SEE_ALL:`${STAY_BASE}/see-full-list`,
            BOOKING_LATEST:`${STAY_BASE}/my-bookings-latest`,
            SEARCH_RESULT:`${STAY_BASE}/abc`
         },
         DETAIL:{
            GET_HOTEL_DETAIL:`${STAY_BASE}/gethotel-details`,
            GET_ALL_REVIEWS:`${STAY_BASE}/get-hotel-reviews`,
            SIMILAR_PROPERTIES:`${STAY_BASE}/similar-property`,
            YOU_ALSO_LIKE:`${STAY_BASE}/you-also-like`
         },
         WISHLIST:{
             ADD_WISHLIST: `${STAY_BASE}/add-wishlist`,
             GET_ALL_WISHLIST:`${STAY_BASE}/my-wishlist`
         },
         BOOKING:{
            GET_MY_BOOKING:`${STAY_BASE}/my-bookings`,
            CHECK_IN:`${STAY_BASE}/checkin-hotel`
         }
    }
};

export { ENDPOINTS };
