import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartStateProps, StoreAddressProps } from "./cartTypes";
import { addProductToCart, applyCartOffer, getCartItems, getCartOffers, removeCartOffer, removeProductFromCart } from "./cartThunk";

const initialState: CartStateProps = {
    loading: {
        storeLoading: false,
        productLoading: false,
        offerLoading: false
    },
    storeDetails: {} as StoreAddressProps,
    items: [],
    offers: [],
    totalPrice: 0,
    cartAmount: 0,
    discountAmount: 0,
    finalAmount: 0,
    storeId: null,
    currency: "",
    distance: 0,
    deliveryCharge: 0,
    tipAmount: 0,
    error: null
};

const cartSlice = createSlice({
    name: "martCart",
    initialState,
    reducers: {
        setTipAmount: (state, action: PayloadAction<number | null>) => {
            state.tipAmount = action.payload ?? 0;
            state.finalAmount = state.totalPrice - state.discountAmount + state.tipAmount;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getCartItems.pending, (state) => {
                state.loading.productLoading = true;
            })
            .addCase(getCartItems.fulfilled, (state, action) => {
                state.storeDetails = action.payload.Store;
                state.items = action.payload.CartItems;
                state.totalPrice = action.payload.totalPrice;
                state.cartAmount = action.payload.cartAmount;
                state.discountAmount = action.payload.discountAmount;
                state.finalAmount = action.payload.finalAmount;
                state.loading.storeLoading = false;
                state.currency = action.payload.currency;
                state.deliveryCharge = action.payload.deliveryCharge;
                state.distance = action.payload.distance;
                state.storeId = action.payload.storeId;
                state.error = null;
            })
            .addCase(getCartItems.rejected, (state, action) => {
                state.loading.storeLoading = false;
                state.error = action.payload || "Failed to fetch cart items";
            })
            .addCase(addProductToCart.pending, (state) => {
                state.loading.productLoading = true;
            })
            .addCase(addProductToCart.fulfilled, (state, action) => {
                const newProduct = action.payload;
                const existingProduct = state.items.find(item => item.productId === newProduct.productId);

                if (existingProduct) {
                    existingProduct.quantity = newProduct.quantity;
                } else {
                    state.items.push(newProduct);
                }
                state.totalPrice = action.payload.totalPrice;
                state.loading.productLoading = false;
                state.error = null;
            })
            .addCase(addProductToCart.rejected, (state, action) => {
                state.loading.productLoading = false;
                state.error = action.payload || "Failed to add product";
            })
            .addCase(removeProductFromCart.pending, (state) => {
                state.loading.productLoading = true;
            })
            .addCase(removeProductFromCart.fulfilled, (state, action) => {
                const removedProduct = action.payload;

                if (removedProduct) {
                    state.items = state.items.map(item =>
                        item.productId === removedProduct.productId ? removedProduct : item
                    );
                    state.totalPrice = removedProduct.totalPrice ?? state.totalPrice;
                } else {
                    state.items = state.items.filter(item => item.Product.productId !== action.meta.arg.productId);
                }

                state.loading.productLoading = false;
                state.error = null;
            })
            .addCase(removeProductFromCart.rejected, (state, action) => {
                state.loading.productLoading = false;
                state.error = action.payload || "Failed to remove product";
            })
            .addCase(getCartOffers.pending, (state, action) => {
                state.loading.offerLoading = true;
            })
            .addCase(getCartOffers.fulfilled, (state, action) => {
                console.log('action.payload: ', action.payload);
                state.offers = action.payload;
                state.loading.offerLoading = false;
                state.error = null;
            })
            .addCase(getCartOffers.rejected, (state, action) => {
                state.loading.offerLoading = false;
                state.error = action.payload || "Failed to get Cart Offer";
            })
            .addCase(applyCartOffer.pending, (state, action) => {
                state.loading.offerLoading = true;
            })
            .addCase(applyCartOffer.fulfilled, (state, action) => {
                const data = action.payload
                state.offers = state.offers.map((offer) => ({
                    ...offer,
                    applied: offer.offerId === data.offerId
                }))
                state.discountAmount = data.discountAmount;
                state.cartAmount = data.cartAmount;
                state.finalAmount = data.finalAmount
                state.loading.offerLoading = false;
                state.error = null;
            })
            .addCase(applyCartOffer.rejected, (state, action) => {
                state.loading.offerLoading = false;
                state.error = action.payload || "Failed to apply Cart Offer";
            })
            .addCase(removeCartOffer.pending, (state, action) => {
                state.loading.offerLoading = true;
            })
            .addCase(removeCartOffer.fulfilled, (state, action) => {
                const data = action.payload;
                state.offers = state.offers.map((offer) => ({
                    ...offer,
                    applied: offer.offerId === data.offerId ? false : offer.applied
                }));
                state.cartAmount = data.cartAmount;
                state.discountAmount = data.discountAmount;
                state.finalAmount = data.finalAmount;
                state.loading.offerLoading = false;
                state.error = null;
            })
            .addCase(removeCartOffer.rejected, (state, action) => {
                state.loading.offerLoading = false;
                state.error = action.payload || "Failed to remove Cart Offer";
            })
    }
});

export const { setTipAmount } = cartSlice.actions;
export default cartSlice.reducer;
