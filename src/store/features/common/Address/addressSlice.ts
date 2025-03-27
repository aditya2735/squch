import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AddressProps, AddressStateProps, LatLong, LocationData } from "./addressTypes";
import { getAddressList, setCurrentAddress } from "./addressThunk";
import { WritableDraft } from "immer";



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
            console.log('action.payload: ', action.payload);
            state.selectedAddress = action.payload;
        },
        setLatLong: (state, action: PayloadAction<LatLong | null>) => {
            console.log('action.payload: ', action.payload);
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
                state.selectedAddress = action.payload.find(address => address.isCurrent) || null;
                state.error = null;
            })
            .addCase(getAddressList.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || "failed to get address";
            })
            .addCase(setCurrentAddress.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(setCurrentAddress.fulfilled, (state, action) => {
                const foundAddress = state.addresses.find((address) => address.id === action.payload.addressId) || null;
                state.selectedAddress = JSON.parse(JSON.stringify(foundAddress));
                state.addresses = state.addresses.map((address) => ({
                    ...address,
                    isCurrent: address.id == action.payload.addressId
                }));
            })
            .addCase(setCurrentAddress.rejected, (state, action) => {
                state.error = action.payload || "Failed to set current address";
            })

    }
});

export const { setSelectedAddress, setLatLong } = addressSlice.actions;
export default addressSlice.reducer;