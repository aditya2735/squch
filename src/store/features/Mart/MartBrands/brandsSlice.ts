import { createSlice } from "@reduxjs/toolkit";
import { BrandState } from "./brandsTypes";
import { getDiscountedBrands, getPopularBrands, getPromotionalBrands } from "./brandsThunks";

const initialState: BrandState = {
    loading: false,
    popularBrands: [],
    discountedBrands: [],
    promotionalBrands: [],
    error: null
};

const handleAsyncActions = (
    builder: any, 
    action: any, 
    stateKey: string, 
    extraKey?: string
) => {
    builder
        .addCase(action.pending, (state:any) => {
            state.loading = true;
        })
        .addCase(action.fulfilled, (state: any , action: any) => {
            state[stateKey] = action.payload;
            state.loading = false;
            state.error = null;
        })
        .addCase(action.rejected, (state: any, action: any) => {
            state.loading = false;
            state.error = action.payload || `Failed to fetch ${extraKey || stateKey}`;
        });
};

const BrandSlice = createSlice({
    name: "martBrands",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        handleAsyncActions(builder, getPopularBrands, "popularBrands");
        handleAsyncActions(builder, getDiscountedBrands, "discountedBrands");
        handleAsyncActions(builder, getPromotionalBrands, "promotionalBrands");
    }
});

export default BrandSlice.reducer;
