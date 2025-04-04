import { createSlice } from "@reduxjs/toolkit";
import { CartStateProps, StoreAddressProps } from "../../Mart/Cart/cartTypes";


const initialState: CartStateProps = {
    loading: {
        storeLoading: false,
        productLoading: false,
        offerLoading: false,
    },
    storeDetails: {} as StoreAddressProps,
    items: [],
    totalPrice: 0,
    offers: [],
    cartAmount: 0,
    discountAmount: 0,
    finalAmount: 0,
    storeId: null,
    currency: "",
    distance: 0,
    deliveryCharge: 0,
    tipAmount: 0,
    error: null,
    paymentSuccess: false,
    cancelReason: []
};


const cartSlice = createSlice({
    name: "foodCart",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // .addCase(getCartItems.pending, (state) => {
            //     state.loading.productLoading = true;
            // })
            // .addCase(getCartItems.fulfilled, (state, action) => {
            //     state.storeDetails = action.payload.Store;
            //     state.items = action.payload.CartItems;
            //     state.totalPrice = action.payload.totalPrice;
            //     state.loading.storeLoading = false;
            //     state.error = null;
            // })
            // .addCase(getCartItems.rejected, (state, action) => {
            //     state.loading.storeLoading = false;
            //     state.error = action.payload || "Failed to fetch cart items";
            // })
            // .addCase(addProductToCart.pending, (state) => {
            //     state.loading.productLoading = true;
            // })
            // .addCase(addProductToCart.fulfilled, (state, action) => {
            //     const newProduct = action.payload;
            //     const existingProduct = state.items.find(item => item.productId === newProduct.productId);

            //     if (existingProduct) {
            //         existingProduct.quantity = newProduct.quantity;
            //     } else {
            //         state.items.push(newProduct);
            //     }
            //     state.totalPrice = action.payload.totalPrice;
            //     state.loading.productLoading = false;
            //     state.error = null;
            // })
            // .addCase(addProductToCart.rejected, (state, action) => {
            //     state.loading.productLoading = false;
            //     state.error = action.payload || "Failed to add product";
            // })
            // .addCase(removeProductFromCart.pending, (state) => {
            //     state.loading.productLoading = true;
            // })
            // .addCase(removeProductFromCart.fulfilled, (state, action) => {
            //     const removedProduct = action.payload;

            //     if (removedProduct) {
            //         state.items = state.items.map(item =>
            //             item.productId === removedProduct.productId ? removedProduct : item
            //         );
            //         state.totalPrice = removedProduct.totalPrice ?? state.totalPrice;
            //     } else {
            //         state.items = state.items.filter(item => item.Product.productId !== action.meta.arg.productId);
            //     }

            //     state.loading.productLoading = false;
            //     state.error = null;
            // })
            // .addCase(removeProductFromCart.rejected, (state, action) => {
            //     state.loading.productLoading = false;
            //     state.error = action.payload || "Failed to remove product";
            // });
    }
});

