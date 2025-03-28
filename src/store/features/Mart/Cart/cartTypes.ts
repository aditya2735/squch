export const GET_CART_ITEMS = "martCart/getItems";
export const ADD_PRODUCT_TO_CART = "martCart/addProduct";
export const REMOVE_PRODUCT_FROM_CART = "martCart/removeProduct";
export const GET_CART_OFFERS = "martCart/getOffers";
export const APPLY_CART_OFFER = "martCart/applyOffer";
export const REMOVE_CART_OFFER = "martCart/removeOffer";
export const PLACE_ORDER_FROM_CART = "martCart/place-order";

export interface StoreAddressProps {
    storeId: number | string;
    name: string;
    address: string;
    location: { lat: number, long: number };
    rating: string;
    mobile: string;
};

export interface ProductProps {
    productName: string
    price: string;
    type: string;
    displayCategory: string;
    storeId: number;
    productId: number;
};

export interface CartItemProps {
    id: number;
    cartId: number;
    productId: number;
    productName: string;
    quantity: number;
    createdAt: string;
    updatedAt: string;
    price: string;
    Product: ProductProps;
};

export interface CartOfferProps {
    offerId: number;
    offerCode: string;
    title: string;
    description: string | null;
    discountType: string | null;
    startDate: string;
    endDate: string;
    isActive: boolean;
    maxDiscount: string;
    minOrderValue: string;
    perUserLimit: number;
    offerImage: string;
    eligible: boolean;
    applied: boolean;
    requiredAmount: number;

}
export interface CartStateProps {
    loading: {
        storeLoading: boolean;
        productLoading: boolean;
        offerLoading: boolean;
    },
    storeDetails: StoreAddressProps;
    items: CartItemProps[];
    offers: CartOfferProps[];
    totalPrice: number;
    cartAmount: number;
    discountAmount: number;
    finalAmount: number;
    error: string | null;
    storeId: number | null;
    currency: string;
    distance: number;
    tipAmount: number | null;
    deliveryCharge: number;
    paymentSuccess: boolean;
};

export interface AddProductProps {
    productId: number;
    storeId: number;
};

export interface RemoveProductProps {
    cartId?: number;
    productId: number;
    storeId: number;
    displayCategory?: string
};

export interface AddProductResponsProps {
    id: number;
    cartId: number;
    category_name: string;
    productId: number;
    productName: string;
    quantity: number;
    createdAt: string;
    updatedAt: string;
    price: string;
    Product: ProductProps;
    totalPrice: number;
};

export interface GetCartItemResponse {
    Store: StoreAddressProps;
    CartItems: CartItemProps[];
    totalPrice: number;
    cartAmount: number;
    discountAmount: number;
    finalAmount: number;
    storeId: number | null;
    currency: string;
    distance: number;
    deliveryCharge: number;
};

export interface ApplyOfferResponse {
    offerId: number;
    cartAmount: number;
    discountAmount: number;
    finalAmount: number;
};

export interface RemoveOfferResponse {
    finalAmount: number,
    cartId: number,
    userId: number,
    storeId: number,
    cartType: string,
    cartAmount: number,
    offerId: number,
    discountAmount: number,
};

export interface PlaceOrderRequest {
    cartId: number;
    addressId: number;
    deliveryInstruction: string;
    tipAmount: number | null;
    deliveryFee: number;
}