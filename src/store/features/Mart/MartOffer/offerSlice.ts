import { createSlice } from "@reduxjs/toolkit";
import { OfferStateProps } from "./offerTypes";
import { getAllMartOffer } from "./offerThunk";


const initialSate: OfferStateProps = {
    loading: false,
    offer: [],
    error: null
};

const OfferSlice = createSlice({
    name: 'martOffer',
    initialState: initialSate,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllMartOffer.pending, (state) => {
                state.loading = true;
            })
            .addCase(getAllMartOffer.fulfilled, (state, action) => {
                state.loading = false;
                state.offer = action.payload
                state.error = null;
            })
            .addCase(getAllMartOffer.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || 'Failed to fetch Offers';
            })
    }
});

export default OfferSlice.reducer;