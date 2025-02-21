import { createSlice } from "@reduxjs/toolkit";
import { BannerState } from "./bannerTypes";
import { getAllBanners } from "./bannerThunk";


const intialState: BannerState = {
    loading: false,
    banner: [],
    error: null
}

const bannerSlice = createSlice({
    name: 'banner',
    initialState: intialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllBanners.pending, (state) => {
                state.loading = true;
            })
            .addCase(getAllBanners.fulfilled, (state, action) => {
                state.banner = action.payload;
                state.loading = false;
            })
            .addCase(getAllBanners.rejected, (state, action) => {
                state.loading = false;
                state.error = typeof action.payload === "string" ? action.payload : (action.error?.message || 'Failed to fetch banners');
            })
    }

});

export default bannerSlice.reducer;