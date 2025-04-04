import { createSlice } from "@reduxjs/toolkit";
import { MartStoreProps, MartStoreStateProps, RatingReviewProps } from "./storeTypes";
import { getMartStores, getStoreDetail, getStoreReviews, getTopRatedStores, makeStoreFavourite, makeStoreFavouriteFromDetail } from "./storeThunk";

const initialState: MartStoreStateProps = {
    loading: {
        storeLoading: false,
        topRatedLoading: false,
    },
    storeDetail: {} as MartStoreProps,
    stores: [],
    review: {} as RatingReviewProps,
    topRated: [],
    error: null
};

const handleAsyncActions = (
    builder: any,
    action: any,
    stateKey: keyof MartStoreStateProps,
    loadingKey: keyof typeof initialState.loading
) => {
    builder
        .addCase(action.pending, (state: any) => {
            state.loading[loadingKey] = true;
        })
        .addCase(action.fulfilled, (state: any, action: any) => {
            state[stateKey] = action.payload;
            state.loading[loadingKey] = false;
            state.error = null;
        })
        .addCase(action.rejected, (state: any, action: any) => {
            state.loading[loadingKey] = false;
            state.error = action.payload || `Failed to fetch ${stateKey}`;
        });
};

const MartStoreSlice = createSlice({
    name: "martStore",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        handleAsyncActions(builder, getMartStores, "stores", "storeLoading");
        handleAsyncActions(builder, getStoreDetail, "storeDetail", "storeLoading");
        handleAsyncActions(builder, getTopRatedStores, "topRated", "topRatedLoading");
        handleAsyncActions(builder, getStoreReviews, "review", "storeLoading");
        
        builder
            .addCase(makeStoreFavourite.pending, (state) => {
                state.loading.topRatedLoading = true;
            })
            .addCase(makeStoreFavourite.fulfilled, (state, action) => {
                const { storeId, status } = action.payload;
                state.loading.topRatedLoading = false;
                state.error = null;
                state.topRated = state.topRated.map((store) =>
                    store.storeId === storeId ? { ...store, isFavourite: status } : store
                );
            })
            .addCase(makeStoreFavourite.rejected, (state, action) => {
                state.loading.topRatedLoading = false;
                state.error = action.payload || "Failed to mark favorite";
            })
            .addCase(makeStoreFavouriteFromDetail.pending, (state,action) => {
                state.loading.topRatedLoading = true;
            })
            .addCase(makeStoreFavouriteFromDetail.fulfilled, (state, action) => {
                const { storeId, status } = action.payload;
                state.loading.topRatedLoading = false;
                state.error = null;
                state.storeDetail.isFavourite = status;
            })
            .addCase(makeStoreFavouriteFromDetail.rejected, (state, action) => {
                state.loading.topRatedLoading = false;
                state.error = action.payload || "erorr in making a store favourite"
            })
    },
});

export default MartStoreSlice.reducer;
