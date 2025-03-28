import { fetchData } from "@/utils/fetchData";
import { ENDPOINTS } from "./endpoint"
const { DETAIL } = ENDPOINTS.ACCOMMODATION

export const fetchHotelDetails = (data: { hotel_id:number }): Promise<any> => fetchData("post", DETAIL.GET_HOTEL_DETAIL,data);
export const fetchReviewsData = (data: { hotel_id: number }): Promise<any> => fetchData("post", DETAIL.GET_ALL_REVIEWS,data);
export const fetchSimilarProperties = (): Promise<any> => fetchData("get", DETAIL.SIMILAR_PROPERTIES);
export const fetchAlsoLike = (): Promise<any> => fetchData("get", DETAIL.YOU_ALSO_LIKE);
