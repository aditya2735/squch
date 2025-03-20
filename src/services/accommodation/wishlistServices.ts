import { apiConnector } from "../connector"
import { ENDPOINTS } from "./endpoint"
const { ACCOMMODATION } = ENDPOINTS

export const addWishlist =async(id:number) => {
    const data={
        hotel_id:id
    }
    // console.log("api wishlist calledd", data)
    try {
        const response: any = await apiConnector('post',ACCOMMODATION.WISHLIST.ADD_WISHLIST,data);
        console.log("real response", response.data)
        return response.data;
    } catch (error:any) {
        throw new Error(error.response?.data?.message || "Failed to add it to wishlist");
    }
};

export const fetchAllWishlist =async(id:number) => {
    const data={
        userId:id
    }
    try {
        const response: any = await apiConnector('post',ACCOMMODATION.WISHLIST.GET_ALL_WISHLIST,data);
        console.log("real response", response.data)
        return response.data;
    } catch (error:any) {
        console.log('error: ', error);
        throw new Error(error.response?.data?.message || "Failed to fetch wishlist data");
    }
};