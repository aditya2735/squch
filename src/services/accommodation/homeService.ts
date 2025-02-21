import { apiConnector } from "../connector"
import { ENDPOINTS } from "./endpoint"
const { ACCOMMODATION } = ENDPOINTS

export const fetchHomeHotels =async() => {
    try {
        const response: any = await apiConnector('get',ACCOMMODATION.HOME.GET_ALL_HOTELS);
        return response.data;
    } catch (error:any) {
        console.log('error: ', error);
        throw new Error(error.response?.data?.message || "Failed to fetch hotels data");
    }
};

export const fetchFilterData =async() => {
    try {
        const response: any = await apiConnector('get',ACCOMMODATION.HOME.FILTER_OPTIONS);
        return response.data;
    } catch (error:any) {
        console.log('error: ', error);
        throw new Error(error.response?.data?.message || "Failed to fetch filter data");
    }
};

export const fetchFilterHotels =async(data:any) => {
    try {
        const response: any = await apiConnector('post',ACCOMMODATION.HOME.FILTER_HOTELS,data);
        return response.data;
    } catch (error:any) {
        console.log('error: ', error);
        throw new Error(error.response?.data?.message || "Failed to fetch filter hotel data");
    }
};