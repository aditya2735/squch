import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AddressProps, AddressStateProps, LatLong } from "./addressTypes";
import { getAddressList } from "./addressThunk";
import { act } from "react";


const intialState: AddressStateProps = {
    loading: false,
    addresses: [],
    latLong: null,
    selectedAddress: null,
    error: null
};


const addressSlice = createSlice({
    name: "address",
    initialState: intialState,
    reducers: {
        setSelectedAddress: (state, action: PayloadAction<AddressProps | string | null>) => {
            state.selectedAddress = action.payload;
        },
        setLatLong: (state, action: PayloadAction<LatLong | null>) => {
            state.latLong = action.payload;
        }
    },
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

export const { setSelectedAddress, setLatLong } = addressSlice.actions;
export default addressSlice.reducer;