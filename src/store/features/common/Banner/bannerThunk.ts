import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAllBanners } from "@/services/mart/service";
import { BannerProps, FETCH_ALL_BANNERS } from "./bannerTypes";

export const getAllBanners = createAsyncThunk<BannerProps[], string>(
    FETCH_ALL_BANNERS,
    async (bannerType, { rejectWithValue }) => {
        try {
            const banners = await fetchAllBanners(bannerType);
            return banners.data.data;
        } catch (error: any) {
            return rejectWithValue(error.message || "Failed to fetch Banners");
        }
    }
);