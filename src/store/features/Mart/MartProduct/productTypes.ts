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
};


export interface ProductStock {
    id: number;
    quantity: number;
    location: string;
    unit: string;
    productId: number;
};

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
    ProductStocks: ProductStock;
    inCart: boolean;
    quantity: number;
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
    loading: boolean;
    productDetails: ProductProps;
    products: CategoryProps[];
    error: string | null;
};
