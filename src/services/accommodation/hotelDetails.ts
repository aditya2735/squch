import { fetchData } from "@/utils/fetchData";
import { ENDPOINTS } from "./endpoint"
const { ACCOMMODATION } = ENDPOINTS

export const fetchHotelDetails = (data: { hotel_id:number }): Promise<any> => fetchData("post", ACCOMMODATION.DETAIL.GET_HOTEL_DETAIL,data);
export const fetchReviewsData = (data: { data: number }): Promise<any> => fetchData("post", ACCOMMODATION.DETAIL.GET_ALL_REVIEWS,data);