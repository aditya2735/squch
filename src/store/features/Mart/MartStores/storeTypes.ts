export const GET_ALL_MART_STORE = "martStore/store-list";
export const GET_STORE_DETAILS = "martStore/store-details";
export const FAVOURITE_STORE = "martStore/mark-store-favourite";
export const GET_TOP_RATED_STORE = "martStore/top-rated";
export const MARK_STORE_FAVOURITE = "martStore/make-store-favourite";
export const MARK_STORE_FAVOURITE_FROM_DETAIL = "martStore/mark-store-favorite-details";
export const GET_STORE_REVIEWS = "martStore/get-store-reviews"


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

export interface UserProps {
    id: number;
    firstName: string;
    lastName: string;
}

export interface ReviewProps {
    id: number,
    userId: number,
    storeId: number,
    productId: number | null,
    rating: number,
    review: string,
    createdAt: string,
    updatedAt: string,
    user: UserProps
}

export interface RatingReviewProps {
    storeId: number;
    rating: number;
    reviews: ReviewProps[]
};

export interface MartStoreStateProps {
    loading: {
        storeLoading: boolean;
        topRatedLoading: boolean;
    };
    storeDetail: MartStoreProps;
    stores: MartStoreProps[];
    topRated: MartStoreProps[];
    review: RatingReviewProps
    error?: string | null;
};

export interface TopRatedProps {
    latitude: number;
    longitude: number;
    type: string;
};