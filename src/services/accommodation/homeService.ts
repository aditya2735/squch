import { fetchData } from "@/utils/fetchData";
import { apiConnector } from "../connector"
import { ENDPOINTS } from "./endpoint"
const { HOME } = ENDPOINTS.ACCOMMODATION

export const fetchFilterData = (): Promise<any> => fetchData("get",HOME.FILTER_OPTIONS);
export const fetchBannerData = (): Promise<any> => fetchData("get", HOME.GET_BANNER);
export const fetchDealsData = (): Promise<any> => fetchData("get", HOME.GET_DEALS);
export const fetchLocationData = (): Promise<any> => fetchData("get", HOME.GET_LOCATION);
export const fetchLatestBooking = (): Promise<any> => fetchData("post", HOME.BOOKING_LATEST);
export const fetchSearchData = (data:any): Promise<any> => fetchData("post", HOME.SEARCH_RESULT,data);

export const fetchSeeAllData = (data: { category: string }): Promise<any> => fetchData("post", HOME.SEE_ALL,data);


export const fetchHomeHotels = async (data: any) => {
    try {
        const { reload, ...filteredData } = data;

        // Adding the 'guest' key as the sum of adults, children, and specialCare
        
        const response: any = await apiConnector('post', HOME.GET_ALL_HOTELS, filteredData);
        return response.data;
    } catch (error: any) {
        console.log('error: ', error);
        throw error;
    }
};



// export const fetchBannerData =async() => {
//     try {
//         const response: any = await apiConnector('get',ACCOMMODATION.HOME.GET_BANNER);
//         return response.data;
//     } catch (error:any) {
//         console.log('error: ', error);
//         throw new Error(error.response?.data?.message || "Failed to fetch banner data");
//     }
// };