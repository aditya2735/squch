import { createSlice } from "@reduxjs/toolkit";
import { AddressStateProps } from "./addressTypes";
import { getAddressList } from "./addressThunk";
import { act } from "react";


const intialState: AddressStateProps = {
    loading: false,
    addresses: [],
    error: null
};


const addressSlice = createSlice({
    name: "address",
    initialState: intialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getAddressList.pending, (state, action) => {
            state.loading = true;
        })
        .addCase(getAddressList.fulfilled, (state, action) => {
            state.loading = false;
            state.addresses = action.payload;
            state.error = null;
        })
        .addCase(getAddressList.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload || "failed to get address";
        })
    }
});

export default addressSlice.reducer;