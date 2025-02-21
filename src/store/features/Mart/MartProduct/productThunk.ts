import { createAsyncThunk } from "@reduxjs/toolkit";
import { GET_PRODUCT_DETAILS, GET_PRODUCT_LIST, ProductFilters, ProductListProps, ProductProps } from "./productTypes";
import { fetchProductDetail, fetchProductList } from "@/services/mart/service";

export const getProductList = createAsyncThunk<ProductListProps, ProductFilters, { rejectValue: false }> (
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

export const getProductDetails = createAsyncThunk<ProductProps, number, { rejectValue: false }> (
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