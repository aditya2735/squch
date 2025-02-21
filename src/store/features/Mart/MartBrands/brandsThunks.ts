import { createAsyncThunk } from "@reduxjs/toolkit";
import { BrandsProps, GET_ALL_DISOUNTED_BRANDS, GET_ALL_POPULAR_BRANDS, GET_ALL_PROMOTIONAL_BRANDS } from "./brandsTypes";
import { fetchAllDiscountedBrands, fetchAllPopularBrands, fetchAllPromotionalBrands } from "@/services/mart/service";

export const getPopularBrands = createAsyncThunk<BrandsProps[], void, { rejectValue: string }>(
    GET_ALL_POPULAR_BRANDS,
    async(_, { rejectWithValue }) => {
        try {
            const brands = await fetchAllPopularBrands();
            return brands.data.data;
        } catch(error: any) {
            return rejectWithValue(error.message || "Failed to fetch Popular Brands");
        }
    }
);

export const getDiscountedBrands = createAsyncThunk<BrandsProps[], void, { rejectValue: string }>(
    GET_ALL_DISOUNTED_BRANDS,
    async (_, { rejectWithValue }) => {
        try {
            const brands = await fetchAllDiscountedBrands();
            return brands.data.data;
        } catch (error: any) {
            return rejectWithValue(error.message || "Failed to fetch Discounted Brands");
        }
    }
);

export const getPromotionalBrands = createAsyncThunk<BrandsProps[], void, { rejectValue: string }>(
    GET_ALL_PROMOTIONAL_BRANDS,
    async (_, { rejectWithValue }) => {
        try {
            const brands = await fetchAllPromotionalBrands();
            return brands.data.data;
        } catch (error: any) {
            return rejectWithValue(error.message || "Failed to fetch Promotional Brands");
        }
    }
);
