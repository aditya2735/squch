export const GET_PRODUCT_LIST = "product/product-list";
export const GET_PRODUCT_DETAILS = "produtc/product-details";

export interface ProductFilters {
    // storeId: string;
    type?: string;
    minPrice?: string;
    maxPrice?: string;
    categoryId?: string;
    sortBy?: string;
    sortingOrder?: string;
}

export interface ProductProps {
    images: string[];
    productId: number;
    productName: string;
    productDescription: string;
    price: number;
    currency: string;
    type: string;
    productType: string;
    subCategoryId: number;
    storeId: number;
    ProductStocks: [];
    inCart: boolean;
    quantity: number;
}

export interface ProductListProps {
  products: ProductProps[];
  storeId: string;
}


export interface ProductStateProps {
    loading: boolean;
    productDetails: ProductProps;
    products: ProductProps[];
    error: string | null;
};
