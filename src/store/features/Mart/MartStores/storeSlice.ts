import { createSlice } from "@reduxjs/toolkit";
import { MartStoreProps, MartStoreStateProps } from "./storeTypes";
import { getMartStores, getStoreDetail, getTopRatedStores, makeStoreFavourite } from "./storeThunk";

const initialState: MartStoreStateProps = {
    loading: {
        storeLoading: false,
        topRatedLoading: false,
    },
    storeDetail: {} as MartStoreProps,
    stores: [],
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
       
    },
});

export default MartStoreSlice.reducer;
