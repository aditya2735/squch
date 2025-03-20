import { NewAddressProps } from "@/store/features/common/Address/addressTypes";
import { apiConnector } from "../connector";
import { ENDPOINTS } from "./endpoint";
const { COMMON } = ENDPOINTS;


export const getUserLocation = async (latitude: number, longitude: number): Promise<any> => {
    try {
        // TODO: Need to change the api end point
        const response: any = await apiConnector('get', `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`);
        return response.data;
    } catch (error: any) {
        console.log('error: ', error);
        throw new Error(error.response?.data?.message || "Failed to fetch location");
    }
};

export const fetchAddressList = async (): Promise<any> => {
    try {
        const response: any = await apiConnector('get', COMMON.ADDRESS.GET_ADDRESS_LIST);
        return { data: response.data };
    } catch (error: any) {
        throw new Error(error.response?.data?.message || "Failed to fetch addresses");
    }
};

export const addDeliveryAddress = async (data: NewAddressProps): Promise<any> => {
    try {
        const response: any = await apiConnector('post', COMMON.ADDRESS.ADD_DELIVERY_ADDRESS, data);
        return { data: response.data }
    } catch (error: any) {
        throw new Error(error.response?.data?.message || "Failed to add address");
    }
};