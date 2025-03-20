export const GET_PRODUCT_LIST = "product/product-list";
export const GET_PRODUCT_DETAILS = "produtc/product-details";
export const ADD_PRODUCT_FROM_PRODUCT_LIST = "product/add-product";
export const REMOVE_PRODUCT_FROM_PRODUCT_LIST = "produtc/remove-product"

export interface ProductFilters {
    // storeId: string;
    type?: string;
    minPrice?: string;
    maxPrice?: string;
    categoryId?: string;
    sortBy?: string;
    sortingOrder?: string;
};


export interface ProductStock {
    id: number;
    quantity: number;
    location: string;
    unit: string;
    productId: number;
};

export interface SellerProps {
    name: string;
    address: string;
    fssaiNumber: string;
    gstNumber: string
    email: string;
    mobile: string
}

export interface ProductProps {
    images: string[];
    categoryId: number;
    productId: number;
    productName: string;
    displayCategory: string;
    productDescription: string;
    price: number;
    currency: string;
    type: string;
    productType: string;
    subCategoryId: number;
    storeId: number;
    ProductStocks: ProductStock;
    inCart: boolean;
    rating: number | null;
    quantity: number;
    rating_reviews: [] | null;
    sellerDetails: SellerProps;
};

export interface CategoryProps {
    categoryName: string;
    products: ProductProps[];
};

export interface ProductListProps {
    products: CategoryProps[];
    storeId: string;
};


export interface ProductStateProps {
    loading: {
        pageLoading: boolean;
        quantityLoading: boolean; 
    };
    productDetails: ProductProps;
    products: CategoryProps[];
    error: string | null;
};
