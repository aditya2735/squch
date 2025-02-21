import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import { ADD_DELIVERY_ADDRESS, AddressProps, GET_ADDRESS_LIST, NewAddressProps } from "./addressTypes";
import { addDeliveryAddress, fetchAddressList } from "@/services/common/service";

export const getAddressList = createAsyncThunk<AddressProps[], void, { rejectValue: string }>(
    GET_ADDRESS_LIST,
    async (_, { rejectWithValue }) => {
        try {
            const address = await fetchAddressList();
            return address.data.data;
        } catch (error: any) {
            return rejectWithValue(error.message || "Failed to get address list");
        }
    }
);

export const createDeliveryAddress = createAsyncThunk<AddressProps, NewAddressProps, { rejectValue: string }>(
    ADD_DELIVERY_ADDRESS,
    async (data, { rejectWithValue }) => {
        try {
            const address = await addDeliveryAddress(data);
            return address.data.data;
        } catch (error: any) {
            return rejectWithValue(error.message || "Failed to get add address");
        }
    }
);