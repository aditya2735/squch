const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const MART_BASE = `${API_BASE_URL}/mart`;

const ENDPOINTS = {
    MART: {
        BANNER: {
            GET_ALL: `${API_BASE_URL}/getAll`
        },
        OFFER: {
            GET_ALL_OFFER: `${MART_BASE}/get-all-offers`
        },
        STORE: {
            GET_TOP_RATED_STOTES: `${MART_BASE}/top-rated`,
            GET_ALL_STORES: `${MART_BASE}/store-list`,
            GET_STORE_DETAIL: `${MART_BASE}/store-details`,
            GET_PRODUCT_LIST: `${MART_BASE}/product-list`,
            GET_PRODUCT_DETAIL: `${MART_BASE}/product-details`,
            FAVOURITE_STORE: `${MART_BASE}/mark-store-favourite`
        },
        CATEGORY: {
            GET_ALL_CATEGORY: `${MART_BASE}/category-list`
        },
        BRANDS: {
            GET_ALL_POPULAR_BRANDS: `${MART_BASE}/getPopularBrands`,
            GET_ALL_DISOUNTED_BRANDS: `${MART_BASE}/getDiscountedBrands`,
            GET_ALL_PROMOTIONAL_BRANDS: `${MART_BASE}/getPromotionalBrands`,
        },
        SEARCH: {
            GLOBAL_SEARCH: `${MART_BASE}/global-search`
        },
        CART: {
            GET_CART_ITEMS: `${MART_BASE}/get-cart`,
            ADD_PRODUCT_TO_CART: `${MART_BASE}/add-product-to-cart`,
            REMOVER_PRODUCT_FROM_CART: `${MART_BASE}/remove-product-from-cart`,
            GET_CART_OFFERS: `${MART_BASE}/get-cart-offers`,
            APPLY_OFFER: `${MART_BASE}/apply-offer`,
            REMOVE_OFFER: `${MART_BASE}/remove-offer`,
            PLACR_ORDER_FROM_CART: `${MART_BASE}/place-order-from-cart`
        }
    }
};

export { ENDPOINTS };
