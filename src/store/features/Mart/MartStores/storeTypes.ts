export const GET_ALL_MART_STORE = "martStore/store-list";
export const GET_STORE_DETAILS = "martStore/store-details";
export const FAVOURITE_STORE = "martStore/mark-store-favourite";
export const GET_TOP_RATED_STORE = "martStore/top-rated";
export const MARK_STORE_FAVOURITE = "martStore/make-store-favourite";



export interface MartStoreImageProps {
    image: string;
};

export interface MartStoreLocationProps {
    type: string;
    cordinates: [number, number];
};

export interface MartOpeningHoursProps {
    [key: string]: string;
};

export interface MartStoreProps {
    storeId: number;
    name: string;
    type: string;
    images: string[];
    rating?: number;
    time: string;
    location: MartStoreLocationProps;
    address: string;
    status: string;
    is_favourite: boolean;
    openingHours: MartOpeningHoursProps;
    supportsDineIn: boolean;
    supportsDelivery: boolean;
    supportPickup: boolean;
    vendorId: number;
    createdAt: string;
    updatedAt: string;
    isFavourite: boolean;
    offer?: string;
    distance?: number;
};

export interface FavouriteStoreProps {
    userId: number;
    status: boolean;
    storeId: number | string;
};

export interface MartStoreStateProps {
    loading: {
        storeLoading: boolean;
        topRatedLoading: boolean;
    };
    storeDetail: MartStoreProps;
    stores: MartStoreProps[];
    topRated: MartStoreProps[];
    error?: string | null;
};

export interface TopRatedProps {
    latitude: number;
    longitude: number;
    type: string;
};