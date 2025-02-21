import { createSlice } from "@reduxjs/toolkit";
import { CartStateProps, StoreAddressProps } from "./cartTypes";
import { addProductToCart, getCartItems, removeProductFromCart } from "./cartThunk";

const initialState: CartStateProps = {
    loading: false,
    productLoading: false,
    storeDetails: {} as StoreAddressProps,
    items: [],
    totalPrice: 0,
    error: null
};

const handleAsyncActions = (
    builder: any,
    action: any,
    extraKey?: boolean
) => {
    builder
        .addCase(action.pending, (state: any) => {
            if(extraKey) {
                state.loading = true;
            } else {
                state.productLoading = true;
            }
        })
        .addCase(action.fulfilled, (state: any, action: any) => {
            if (extraKey) {
                state.storeDetails = action.payload.Store;
                state.loading = false;
            }
            state.items = action.payload.CartItems;
            state.totalPrice = action.payload.totalPrice;
            state.productLoading = false;
            state.error = null;
        })
        .addCase(action.rejected, (state: any, action: any) => {
            state.loading = false;
            state.productLoading = false;
            state.error = action.payload || `Operation failed`;
        });
};


const cartSlice = createSlice({
    name: "martCart",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        handleAsyncActions(builder, getCartItems, true);
        handleAsyncActions(builder, addProductToCart, false);
        handleAsyncActions(builder, removeProductFromCart, false);
    }
});

export default cartSlice.reducer;
