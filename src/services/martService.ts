import { AddProductProps } from "@/store/features/Mart/Cart/cartTypes";
import { ProductFilters } from "../store/features/Mart/MartProduct/productTypes";
import { apiConnector } from "./connector"
import { ENDPOINTS } from "./endpoint"
import { FavouriteStoreProps } from "@/store/features/Mart/MartStores/storeTypes";
const { MART } = ENDPOINTS;

export const getUserLocation = async (latitude: number, longitude: number): Promise<any> => {
    try {
        // TODO: Need to change the api end point
        const response: any = await apiConnector('get', `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`);
        return response.data.display_name;
    } catch (error: any) {
        console.log('error: ', error);
        throw new Error(error.response?.data?.message || "Failed to fetch location");
    }
};

export const fetchAllBanners = async (bannerType: string): Promise<any> => {
    try {
        const response: any = await apiConnector(
            'get',
            MART.BANNER.GET_ALL,
            null,
            undefined,
            { type: bannerType }
        );

        return {
            data: response.data,
            status: response.status,
        };
    } catch (error: any) {
        throw new Error(error.response?.data?.message || "Failed to fetch banners");
    }
};

export const fetchAllMartOffer = async (): Promise<any> => {
    try {
        const response: any = await apiConnector('get', MART.OFFER.GET_ALL_OFFER);
        return {
            data: response.data,
            status: response.status,
        };
    } catch (error: any) {
        throw new Error(error.response?.data?.message || "Failed to fetch Offers");
    }
};

export const fetchAllMartStores = async (listType: string): Promise<any> => {
    try {
        const response: any = await apiConnector(
            'get',
            MART.STORE.GET_ALL_STORES,
            null,
            undefined,
            { type: listType }
        );

        return {
            data: response.data,
            status: response.status,
        };
    } catch (error: any) {
        throw new Error(error.response?.data?.message || "Failed to fetch Stores");
    }
};

export const fetchAllMartCategories = async (category: string): Promise<any> => {
    try {
        const response: any = await apiConnector(
            'get',
            MART.CATEGORY.GET_ALL_CATEGORY,
            null,
            undefined,
            { type: category }
        );
        return {
            data: response.data,
            status: response.status,
        };
    } catch (error: any) {
        throw new Error(error.response?.data?.message || "Failed to fetch Categories");
    }
};

export const fetchAllPopularBrands = async (): Promise<any> => {
    try {
        const response: any = await apiConnector('get', MART.BRANDS.GET_ALL_POPULAR_BRANDS);
        return {
            data: response.data,
            status: response.status,
        };
    } catch (error: any) {
        throw new Error(error.response?.data?.message || "Failed to fetch Popular Brands");
    }
};

export const fetchAllDiscountedBrands = async (): Promise<any> => {
    try {
        const response: any = await apiConnector('get', MART.BRANDS.GET_ALL_DISOUNTED_BRANDS);
        return {
            data: response.data,
            status: response.status,
        };
    } catch (error: any) {
        throw new Error(error.response?.data?.message || "Failed to fetch Discounted Brands");
    }
};

export const fetchAllPromotionalBrands = async (): Promise<any> => {
    try {
        const response: any = await apiConnector('get', MART.BRANDS.GET_ALL_PROMOTIONAL_BRANDS);
        return {
            data: response.data,
            status: response.status,
        };
    } catch (error: any) {
        throw new Error(error.response?.data?.message || "Failed to fetch Promotional Brands");
    }
};

export const globalSearch = async (data: string): Promise<any> => {
    try {
        const response: any = await apiConnector('post', MART.SEARCH.GLOBAL_SEARCH, data);
        return {
            data: response.data
        }
    } catch (error: any) {
        throw new Error(error.response?.data?.message || "Failed to Search");
    }
};

export const fetchStoreDetails = async (id: string): Promise<any> => {
    try {
        const response: any = await apiConnector('get', `${MART.STORE.GET_STORE_DETAIL}/${id}`);
        return { data: response.data }
    } catch (error: any) {
        throw new Error(error.response?.data?.message || "Failed to get Store details");
    }
};

export const fetchProductList = async (filters: ProductFilters): Promise<any> => {
    try {
        const params: Record<string, string> = {};
        Object.entries(filters).forEach(([key, value]) => {
            if (value !== undefined && value !== "") {
                params[key] = String(value);
            }
        });

        const response: any = await apiConnector(
            'get',
            MART.STORE.GET_PRODUCT_LIST,
            null,
            undefined,
            params
        );
        return { data: response.data };

    } catch (error: any) {
        throw new Error(error.response?.data?.message || "Failed to get Product List");
    }
};

export const fetchProductDetail = async (productId: number): Promise<any> => {
    try {
        const response: any = await apiConnector('get', `${MART.STORE.GET_PRODUCT_DETAIL}/${productId}`);
        return { data: response.data }
    } catch (error: any) {
        throw new Error(error.response?.data?.message || "Failed to get Product details");
    }
};

export const fetchCartItem = async (): Promise<any> => {
    try {
        const response: any = await apiConnector('get', MART.CART.GET_CART_ITEMS);
        return { data: response.data };
    } catch (error: any) {
        console.log('error: ', error);
        throw new Error(error.response?.data?.message || "Failed to get cart items");
    }
};

export const addProduct = async (data: AddProductProps): Promise<any> => {
    try {
        const response: any = await apiConnector('post', MART.CART.ADD_PRODUCT_TO_CART, data);
        return { data: response.data };
    } catch (error: any) {
        throw new Error(error.response?.data?.message || "Failed to add item");
    }
};

export const removerProduct = async (data: AddProductProps): Promise<any> => {
    try {
        const response: any = await apiConnector('post', MART.CART.REMOVER_PRODUCT_FROM_CART, data);
        return { data: response.data };
    } catch (error: any) {
        throw new Error(error.response?.data?.message || "Failed to remove product");
    }
};

export const storeFavourite = async (data: FavouriteStoreProps) : Promise<any> => {
    try {
        const response: any = await apiConnector('post', MART.STORE.FAVOURITE_STORE, data);
        return { data: response.data };
    } catch (error: any) {
        throw new Error(error.response?.data?.message || "Failed to remove product");
    }
};
