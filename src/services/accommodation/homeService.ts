import { fetchData } from "@/utils/fetchData";
import { apiConnector } from "../connector"
import { ENDPOINTS } from "./endpoint"
const { ACCOMMODATION } = ENDPOINTS

export const fetchFilterData = (): Promise<any> => fetchData("get", ACCOMMODATION.HOME.FILTER_OPTIONS);
export const fetchFilterHotels = (data: any): Promise<any> => fetchData("post", ACCOMMODATION.HOME.FILTER_HOTELS, data);
export const fetchBannerData = (): Promise<any> => fetchData("get", ACCOMMODATION.HOME.GET_BANNER);
export const fetchTrendingData = (): Promise<any> => fetchData("get", ACCOMMODATION.HOME.GET_TRENDING);
export const fetchDealsData = (): Promise<any> => fetchData("get", ACCOMMODATION.HOME.GET_DEALS);
export const fetchLocationData = (): Promise<any> => fetchData("get", ACCOMMODATION.HOME.GET_LOCATION);



export const fetchHomeHotels = async (data: any) => {
    try {
        const { reload, ...filteredData } = data;

        // Adding the 'guest' key as the sum of adults, children, and specialCare
        
        const response: any = await apiConnector('post', ACCOMMODATION.HOME.GET_ALL_HOTELS, filteredData);
        return response.data;
    } catch (error: any) {
        console.log('error: ', error);
        throw new Error(error.response?.data?.message || "Failed to fetch hotels data");
    }
};

// export const fetchFilterData =async() => {
//     try {
//         const response: any = await apiConnector('get',ACCOMMODATION.HOME.FILTER_OPTIONS);
//         return response.data;
//     } catch (error:any) {
//         console.log('error: ', error);
//         throw new Error(error.response?.data?.message || "Failed to fetch filter data");
//     }
// };

// export const fetchFilterHotels =async(data:any) => {
//     try {
//         const response: any = await apiConnector('post',ACCOMMODATION.HOME.FILTER_HOTELS,data);
//         return response.data;
//     } catch (error:any) {
//         console.log('error: ', error);
//         throw new Error(error.response?.data?.message || "Failed to fetch filter hotel data");
//     }
// };

// export const fetchBannerData =async() => {
//     try {
//         const response: any = await apiConnector('get',ACCOMMODATION.HOME.GET_BANNER);
//         return response.data;
//     } catch (error:any) {
//         console.log('error: ', error);
//         throw new Error(error.response?.data?.message || "Failed to fetch banner data");
//     }
// };