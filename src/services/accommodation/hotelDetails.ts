import { apiConnector } from "../connector"
import { ENDPOINTS } from "./endpoint"
const { ACCOMMODATION } = ENDPOINTS

export const fetchHotelDetails =async(id:number) => {
    const data={
        hotel_id:id
    }
    try {
        const response: any = await apiConnector('post',ACCOMMODATION.DETAIL.GET_HOTEL_DETAIL,data);
        console.log("real response", response.data)
        return response.data;
    } catch (error:any) {
        console.log('error: ', error);
        throw new Error(error.response?.data?.message || "Failed to fetch hotel details");
    }
};