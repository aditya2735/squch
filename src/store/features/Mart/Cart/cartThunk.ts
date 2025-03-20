import { createAsyncThunk } from "@reduxjs/toolkit";
import { addProduct, applyOffer, fetchCartItem, fetchCartOffers, removeOffer, removerProduct } from "@/services/mart/service";
import {
    ADD_PRODUCT_TO_CART,
    AddProductProps,
    AddProductResponsProps,
    APPLY_CART_OFFER,
    ApplyOfferResponse,
    CartOfferProps,
    GET_CART_ITEMS,
    GET_CART_OFFERS,
    GetCartItemResponse,
    REMOVE_CART_OFFER,
    REMOVE_PRODUCT_FROM_CART,
    RemoveOfferResponse,
    RemoveProductProps
} from "./cartTypes";


export const getCartItems = createAsyncThunk<GetCartItemResponse, void, { rejectValue: string }>(
    GET_CART_ITEMS,
    async (_, { rejectWithValue }) => {
        try {
            const items = await fetchCartItem();
            const temp = items?.data.data?.length > 0 ? items.data?.data[0] : [];
            return temp;
        } catch (error: any) {
            return rejectWithValue(error.message || "Failed to fetch cart items");
        }
    }
);

export const addProductToCart = createAsyncThunk<AddProductResponsProps, AddProductProps, { rejectValue: string }>(
    ADD_PRODUCT_TO_CART,
    async (data, { rejectWithValue }) => {
        try {
            const items = await addProduct(data);
            return items.data.data;
        } catch (error: any) {
            return rejectWithValue(error.message || "Failed to add product in cart");
        }
    }
);

export const removeProductFromCart = createAsyncThunk<AddProductResponsProps, RemoveProductProps, { rejectValue: string }>(
    REMOVE_PRODUCT_FROM_CART,
    async (data, { rejectWithValue }) => {
        try {
            const items = await removerProduct(data);
            return items.data.data;
        } catch (error: any) {
            return rejectWithValue(error.message || "Failed to add product in cart");
        }
    }
);

export const getCartOffers = createAsyncThunk<CartOfferProps[], number, { rejectValue: string }>(
    GET_CART_OFFERS,
    async (cartId, { rejectWithValue }) => {
        try {
            const items = await fetchCartOffers(cartId);
            return items.data;
        } catch (error: any) {
            console.log('error: ', error);
            return rejectWithValue(error.message || "Failed to get cart offers");
        }
    }
);

export const applyCartOffer = createAsyncThunk<ApplyOfferResponse, { offerId: number, cartId: number }, { rejectValue: string }>(
    APPLY_CART_OFFER,
    async ({ offerId, cartId }, { rejectWithValue }) => {
        try {
            const response = await applyOffer(offerId, cartId);
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.message || "An error occurred while applying the offer.");
        }
    }
);

export const removeCartOffer = createAsyncThunk<RemoveOfferResponse, { offerId: number, cartId: number }, { rejectValue: string }>(
    REMOVE_CART_OFFER,
    async ({ offerId, cartId }, { rejectWithValue }) => {
        try {
            const response = await removeOffer(offerId, cartId);
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.message || "An error occurred while removing the offer.");
        }
    }
);