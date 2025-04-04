import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAllBanners } from "@/services/mart/service";
import { BannerProps, FETCH_ALL_BANNERS } from "./bannerTypes";

export const getAllBanners = createAsyncThunk<BannerProps[], string>(
    FETCH_ALL_BANNERS,
    async (bannerType, { rejectWithValue }) => {
        try {
            const banners = await fetchAllBanners(bannerType);
            console.log('banners: ', banners);
            console.log('banners.data.data: ', banners.data);
            return banners.data;
        } catch (error: any) {
            return rejectWithValue(error.message || "Failed to fetch Banners");
        }
    }
);