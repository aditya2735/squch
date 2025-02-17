import { createSlice } from "@reduxjs/toolkit";
import { MartStoreProps, MartStoreStateProps } from "./storeTypes";
import { getMartStores, getStoreDetail } from "./storeThunk";

const initialSate: MartStoreStateProps = {
    loading: false,
    storeDetail: {} as MartStoreProps,
    stores: [],
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

const MartStoreSlice = createSlice({
    name: 'martStore',
    initialState: initialSate,
    reducers: {},
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(getMartStores.pending, (state) => {
    //             state.loading = true;
    //         })
    //         .addCase(getMartStores.fulfilled, (state, action) => {
    //             state.stores = action.payload
    //             state.loading = false;
    //         })
    //         .addCase(getMartStores.rejected, (state, action) => {
    //             state.loading = false;
    //             state.error = action.payload || 'Failed to fetch Stores';
    //         })
    //         .addCase(getStoreDetail.pending, (state) => {
    //             state.loading = true;
    //         })
    //         .addCase(getStoreDetail.fulfilled, (state, action) => {
    //             state.storeDetail = action.payload
    //             state.loading = false;
    //         })
    //         .addCase(getStoreDetail.rejected, (state, action) => {
    //             state.loading = false;
    //             state.error = action.payload || 'Failed to fetch Stores';
    //         })
    // }
    extraReducers: (builder) => {
        handleAsyncActions(builder, getMartStores, 'stores');
        handleAsyncActions(builder, getStoreDetail, 'storeDetail');
    }
});

export default MartStoreSlice.reducer;