import { createAsyncThunk } from "@reduxjs/toolkit";
import { addProduct, fetchCartItem, removerProduct } from "@/services/mart/service";
import {
    ADD_PRODUCT_TO_CART,
    AddProductProps,
    AddProductResponsProps,
    GET_CART_ITEMS,
    REMOVE_PRODUCT_FROM_CART,
    RemoveProductProps
} from "./cartTypes";


export const getCartItems = createAsyncThunk<AddProductResponsProps, void, { rejectValue: string }>(
    GET_CART_ITEMS,
    async (_, { rejectWithValue }) => {
        try {
            const items = await fetchCartItem();

            return items.data.data[0];
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