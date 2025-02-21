import { createAsyncThunk } from "@reduxjs/toolkit";
import { GET_ALL_MART_STORE, GET_STORE_DETAILS, MartStoreProps } from "./storeTypes";
import { fetchAllMartStores, fetchStoreDetails } from "@/services/mart/service";


export const getMartStores = createAsyncThunk<MartStoreProps[], string, { rejectValue: string }>(
    GET_ALL_MART_STORE,
    async (listType, { rejectWithValue }) => {
        try {
            const stores = await fetchAllMartStores(listType);
            return stores.data.data
        } catch (error: any) {
            return rejectWithValue(error.message || "Failed to fetch Banners");
        }
    }
);

export const getStoreDetail = createAsyncThunk<MartStoreProps, string, { rejectValue: string }>(
    GET_STORE_DETAILS,
    async (id, { rejectWithValue }) => {
        try {
            const details = await fetchStoreDetails(id);
            return details.data.data;
        } catch (error: any) {
            return rejectWithValue(error.message || "Failed to get store details");
        }
    }
);
