import { createAsyncThunk } from "@reduxjs/toolkit";
import { GET_ALL_MART_OFFER, OfferProps } from "./offerTypes";
import { fetchAllMartOffer } from "@/services/mart/service";

export const getAllMartOffer = createAsyncThunk<OfferProps[], { storeId?: number | string }, { rejectValue: string }>(
    GET_ALL_MART_OFFER,
    async ({ storeId }, { rejectWithValue }) => {
        try {
            const offer = await fetchAllMartOffer(storeId);
            return offer.data.data
        } catch (error: any) {
            return rejectWithValue(error.message || "Failed to fetch Banners");
        }
    }
);