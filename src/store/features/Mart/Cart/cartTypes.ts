export const GET_CART_ITEMS = "martCart/getItems";
export const ADD_PRODUCT_TO_CART = "martCart/addProduct";
export const REMOVE_PRODUCT_FROM_CART = "martCart/removeProduct";

export interface StoreAddressProps {
    name: string;
    address: string;
};

export interface ProductProps {
    productName: string
    price: string;
    type: string;
    storeId: number;
    productId: number;
}

export interface CartItemProps {
    id: number;
    storeId: number;
    productName: string;
    cartId: number;
    productId: number;
    quantity: number;
    createdAt: string;
    updatedAt: string;
    price: string;
    product: ProductProps;
};

export interface CartStateProps {
    loading: boolean;
    productLoading: boolean;
    storeDetails: StoreAddressProps;
    items: CartItemProps[];
    totalPrice: number;
    error: string | null;
};

export interface AddProductProps {
    productId: number;
    storeId: number;
};

export interface RemoveProductProps {
    cartId?: number;
    productId: number;
    storeId: number;
}

export interface AddProductResponsProps {
    storeDetails: StoreAddressProps;
    CartItems: CartItemProps[];
    totalPrice: number; 
};