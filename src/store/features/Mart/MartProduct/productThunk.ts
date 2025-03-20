import { createAsyncThunk } from "@reduxjs/toolkit";
import {
    ADD_PRODUCT_FROM_PRODUCT_LIST,
    GET_PRODUCT_DETAILS,
    GET_PRODUCT_LIST,
    ProductFilters,
    ProductListProps,
    ProductProps,
    REMOVE_PRODUCT_FROM_PRODUCT_LIST
} from "./productTypes";
import {
    addProduct,
    fetchProductDetail,
    fetchProductList,
    removerProduct
} from "@/services/mart/service";
import {
    AddProductProps,
    AddProductResponsProps,
    RemoveProductProps
} from "../Cart/cartTypes";

export const getProductList = createAsyncThunk<ProductListProps, ProductFilters, { rejectValue: false }>(
    GET_PRODUCT_LIST,
    async (filters, { rejectWithValue }) => {
        try {
            const productList = await fetchProductList(filters);
            return productList.data.data;
        } catch (error: any) {
            return rejectWithValue(error.message || "Failed to fetch Products");
        }
    }
);

export const getProductDetails = createAsyncThunk<ProductProps, number, { rejectValue: false }>(
    GET_PRODUCT_DETAILS,
    async (productId, { rejectWithValue }) => {
        try {
            const details = await fetchProductDetail(productId);
            return details.data.data;
        } catch (error: any) {
            return rejectWithValue(error.message || "Failed to fetch product detail");
        }
    }
);

export const addProductFromProductList = createAsyncThunk<AddProductResponsProps, AddProductProps, { rejectValue: string }>(
    ADD_PRODUCT_FROM_PRODUCT_LIST,
    async (data, { rejectWithValue }) => {
        try {
            const result = await addProduct(data);
            return result.data.data;
        } catch (error: any) {
            return rejectWithValue(error.message || "Failed to add product");
        }
    }
);

export const removeProductFromProductList = createAsyncThunk<AddProductResponsProps, RemoveProductProps, { rejectValue: string }>(
    REMOVE_PRODUCT_FROM_PRODUCT_LIST,
    async (data, { rejectWithValue }) => {
        try {
            const items = await removerProduct(data);
            return items.data.data;
        } catch (error: any) {
            return rejectWithValue(error.message || "Failed to add product in cart");
        }
    }
);