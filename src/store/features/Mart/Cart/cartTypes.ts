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
}

export interface CartItemProps {
    id: number;
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
    storeDetails: StoreAddressProps;
    items: CartItemProps[];
    totalPrice: number;
    error: string | null;
};

export interface AddProductProps {
    productId: number;
    storeId: number;
};

export interface AddProductResponsProps {
    storeDetails: StoreAddressProps;
    CartItems: CartItemProps[];
    totalPrice: number; 
};