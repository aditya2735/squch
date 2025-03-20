import { fetchData } from "@/utils/fetchData";
import { ENDPOINTS } from "./endpoint"
import { apiConnector } from "../connector";
const { ACCOMMODATION } = ENDPOINTS

export const fetchMyBookings = (): Promise<any> => fetchData("get", ACCOMMODATION.BOOKING.GET_MY_BOOKING);

export const checkInPost = async (data: any) => {
    try {
        // const { reload, ...filteredData } = data; 
         const response: any = await apiConnector('post', ACCOMMODATION.BOOKING.CHECK_IN,data);
        return response.data;
    } catch (error: any) {
        console.log('error: ', error);
        throw new Error(error.response?.data?.message || "Failed to book data");
    }
};