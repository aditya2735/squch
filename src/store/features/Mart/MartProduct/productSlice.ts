import { createSlice } from "@reduxjs/toolkit";
import { ProductProps, ProductStateProps } from "./productTypes";
import { getProductDetails, getProductList } from "./productThunk";

const initialState: ProductStateProps  = {
    loading: false,
    productDetails: {} as ProductProps,
    products: [],
    error: null
};

const handleAsyncActions = (
    builder: any, 
    action: any, 
    stateKey: string, 
    extraKey?: string
) => {
    builder
        .addCase(action.pending, (state:any) => {
            state.loading = true;
        })
        .addCase(action.fulfilled, (state: any , action: any) => {
            state[stateKey] = action.payload;
            state.loading = false;
            state.error = null;
        })
        .addCase(action.rejected, (state: any, action: any) => {
            state.loading = false;
            state.error = action.payload || `Failed to fetch ${extraKey || stateKey}`;
        });
};


const ProductSlice = createSlice({
    name: 'product',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        handleAsyncActions(builder, getProductList, "products");
        handleAsyncActions(builder, getProductDetails, "productDetails")
    }
});

export default ProductSlice.reducer;