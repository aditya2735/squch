import { createSlice } from "@reduxjs/toolkit";
import { ProductProps, ProductStateProps } from "./productTypes";
import {
    addProductFromProductDetail,
    addProductFromProductList,
    favouriteProduct,
    getProductDetails,
    getProductList,
    removeProductFromProductDetail,
    removeProductFromProductList
} from "./productThunk";

const initialState: ProductStateProps = {
    loading: {
        pageLoading: false,
        quantityLoading: false
    },
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
        .addCase(action.pending, (state: any) => {
            state.loading.pageLoading = true;
        })
        .addCase(action.fulfilled, (state: any, action: any) => {
            state[stateKey] = action.payload;
            state.loading.pageLoading = false;
            state.error = null;
        })
        .addCase(action.rejected, (state: any, action: any) => {
            state.loading.pageLoading = false;
            state.error = action.payload || `Failed to fetch ${extraKey || stateKey}`;
        });
};


const ProductSlice = createSlice({
    name: 'product',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        handleAsyncActions(builder, getProductList, "products");
        handleAsyncActions(builder, getProductDetails, "productDetails");
        builder
            .addCase(addProductFromProductList.pending, (state, action) => {
                state.loading.quantityLoading = true;
            })
            .addCase(addProductFromProductList.fulfilled, (state, action) => {
                const newProduct = action.payload;
                state.products = state.products.map((category) => {
                    if (category.categoryName === newProduct.Product.displayCategory) {
                        return {
                            ...category,
                            products: category.products.map((prod) =>
                                prod.productId === newProduct.productId
                                    ? { ...prod, quantity: newProduct.quantity }
                                    : prod
                            ),
                        };
                    }
                    return category;
                });
            })
            .addCase(addProductFromProductList.rejected, (state, action) => {
                state.loading.quantityLoading = false;
                state.error = action.payload || "Failed to add product"
            })
            .addCase(removeProductFromProductList.pending, (state, action) => {
                state.loading.quantityLoading = true;
            })
            .addCase(removeProductFromProductList.fulfilled, (state, action) => {
                const newProduct = action.payload;
                if (newProduct) {
                    state.products = state.products.map((category) => {
                        if (category.categoryName === newProduct.Product.displayCategory) {
                            return {
                                ...category,
                                products: category.products.map((prod) =>
                                    prod.productId === newProduct.productId
                                        ? { ...prod, quantity: newProduct.quantity }
                                        : prod
                                ),
                            };
                        }
                        return category;
                    });
                } else {
                    state.products = state.products.map((category) => {
                        if (category.categoryName === action.meta.arg.displayCategory) {
                            return {
                                ...category,
                                products: category.products.map((prod) =>
                                    prod.productId === action.meta.arg.productId
                                        ? { ...prod, quantity: 0 }
                                        : prod
                                ),
                            };
                        }
                        return category;
                    });
                }
            })
            .addCase(removeProductFromProductList.rejected, (state, action) => {
                state.loading.quantityLoading = false;
                state.error = action.payload || "Failed to remove product"
            })
            .addCase(addProductFromProductDetail.pending, (state, action) => {
                state.loading.quantityLoading = true
            })
            .addCase(addProductFromProductDetail.fulfilled, (state, action) => {
                state.productDetails.quantity = action.payload.quantity
                state.error = null;
            })
            .addCase(addProductFromProductDetail.rejected, (state, action) => {
                state.loading.quantityLoading = false;
                state.error = action.payload || "Failed to add product"
            })
            .addCase(removeProductFromProductDetail.pending, (state, action) => {
                state.loading.quantityLoading = true;
            })
            .addCase(removeProductFromProductDetail.fulfilled, (state, action) => {
                const newProduct = action.payload;
                if (newProduct) {
                    state.productDetails.quantity = newProduct.quantity;
                } else {
                    state.productDetails.quantity = 0;
                }
            })
            .addCase(removeProductFromProductDetail.rejected, (state, action) => {
                state.loading.quantityLoading = false;
                state.error = action.payload || "Failed to remove product"
            })
            .addCase(favouriteProduct.pending, (state, action) => {
                state.loading.quantityLoading = true;
            })
            .addCase(favouriteProduct.fulfilled, (state, action) => {
                state.productDetails.isFavourite = action.payload.status;
                state.error = null;
                state.loading.quantityLoading = false;
            })
            .addCase(favouriteProduct.rejected, (state, action) => {
                state.error = action.payload || "Failed to Mark Favourite Product";
                state.loading.quantityLoading = false
            })
    }
});

export default ProductSlice.reducer;